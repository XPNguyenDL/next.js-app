using MapsterMapper;
using Microsoft.IdentityModel.Tokens;
using Store.Services.Shops;
using Store.WebAPI.Models.UserModel;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Store.WebAPI.Identities;

public class IdentityManager
{
	public static UserDto GetCurrentUser(
		HttpContext context)
	{
		var identity = context.User.Identity as ClaimsIdentity;

		if (identity != null)
		{
			var userClaims = identity.Claims;

			return new UserDto
			{
				Username = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.NameIdentifier)?.Value,
				Email = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Email)?.Value,
				Name = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Name)?.Value,
				Id = Guid.Parse(userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Sid)?.Value),
				RoleNames = userClaims.Where(c => c.Type == ClaimTypes.Role)
					.Select(c => c.Value)
					.ToList()
			};
		}
		return null;
	}

	public static JwtSecurityToken Generate(
		UserDto user,
		IConfiguration config)
	{
		var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"]));
		var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

		var claims = new List<Claim>()
		{
			new Claim(ClaimTypes.Sid, user.Id.ToString()),
			new Claim(ClaimTypes.NameIdentifier, user.Username),
			new Claim(ClaimTypes.Email, user.Email),
			new Claim(ClaimTypes.Name, user.Name),
		};

		foreach (var role in user.Roles)
		{
			claims.Add(new Claim(ClaimTypes.Role, role.Name));
		}

		var token = new JwtSecurityToken(config["Jwt:Issuer"],
			config["Jwt:Audience"],
			claims,
			expires: DateTime.Now.AddDays(15),
			signingCredentials: credentials);
		return token;
	}

	public static async Task<UserDto> Authenticate(UserLogin userLogin, IUserRepository repository, IMapper mapper)
	{
		var currentUser = await repository.Login(userLogin.Username, userLogin.Password);
		var result = mapper.Map<UserDto>(currentUser);
		if (result != null)
		{
			return result;
		}
		return null;
	}
}