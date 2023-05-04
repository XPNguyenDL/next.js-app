using Microsoft.EntityFrameworkCore;
using Store.Core.Entities;
using Store.Core.Identity;
using Store.Data.Contexts;

namespace Store.Services.Shops;

public class UserRepository : IUserRepository
{
	private readonly StoreDbContext _dbContext;
	private readonly IPasswordHasher _hasher;

	public UserRepository(StoreDbContext context, IPasswordHasher hasher)
	{
		_dbContext = context;
		_hasher = hasher;
	}

	public async Task<User> Login(string username, string password, CancellationToken cancellationToken = default)
	{
		var user = await _dbContext.Set<User>()
			.Include(s => s.Roles)
			.FirstOrDefaultAsync(user =>
			user.Username.Equals(username), cancellationToken);

		if (user != null && _hasher.VerifyPassword(user.Password, password))
		{
			return user;
		}
		return null;
	}

	public async Task<User> GetUserByIdAsync(Guid userId, bool getFull = false, CancellationToken cancellationToken = default)
	{
		if (getFull)
		{
			return await _dbContext
				.Set<User>()
				.Include(s => s.Roles)
				.FirstOrDefaultAsync(s => s.Id == userId, cancellationToken);
		}
		return await _dbContext.Set<User>().FirstOrDefaultAsync(s => s.Id == userId, cancellationToken);
	}

	public async Task<User> Register(User user, IEnumerable<Guid> roles, CancellationToken cancellationToken = default)
	{
		var userExist = await _dbContext.Set<User>().AnyAsync(s => s.Username == user.Username, cancellationToken);
		if (userExist)
		{
			return null;
		}
		user.Roles = new List<Role>();
		user.Password = _hasher.Hash(user.Password);


		if (UpdateUserRoles(user, roles))
		{
			_dbContext.Users.Add(user);
			await _dbContext.SaveChangesAsync(cancellationToken);
			return user;
		}
		return null;
	}

	public async Task<Role> GetRoleByName(string role, CancellationToken cancellationToken = default)
	{
		return await _dbContext.Set<Role>()
			.Include(s => s.Users)
			.FirstOrDefaultAsync(s => s.Name.Equals(role), cancellationToken);
	}

	public async Task<bool> IsUserExistedAsync(string userName, CancellationToken cancellationToken = default)
	{
		return await _dbContext.Set<User>()
			.AnyAsync(s => s.Username == userName, cancellationToken);
	}

	public bool UpdateUserRoles(User user, IEnumerable<Guid> selectRoles)
	{
		if (selectRoles == null) return false;

		var roles = _dbContext.Roles.ToList();
		var currentRoleNames = new HashSet<Guid>(user.Roles.Select(x => x.Id));

		foreach (var role in roles)
		{
			if (selectRoles.ToList().Contains(role.Id))
			{
				if (!currentRoleNames.ToList().Contains(role.Id))
				{
					user.Roles.Add(role);
				}
			}
			else if (currentRoleNames.ToList().Contains(role.Id))
			{
				user.Roles.Remove(role);
			}
		}
		return true;
	}
}