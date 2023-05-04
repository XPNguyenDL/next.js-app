using Store.Core.Entities;

namespace Store.Services.Shops;

public interface IUserRepository
{
	Task<User> Login(string username, string password, CancellationToken cancellationToken = default);

	Task<User> GetUserByIdAsync(Guid userId, bool getFull = false, CancellationToken cancellationToken = default);

	Task<User> Register(User user, IEnumerable<Guid> roles,
		CancellationToken cancellationToken = default);

	Task<Role> GetRoleByName(string role,
		CancellationToken cancellationToken = default);

	Task<bool> IsUserExistedAsync(string userName, CancellationToken cancellationToken = default);

}