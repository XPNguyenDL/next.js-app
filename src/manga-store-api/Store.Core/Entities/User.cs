using Store.Core.Contracts;

namespace Store.Core.Entities;

public class User : IEntity
{
	public Guid Id { get; set; }

	public string Name { get; set; }

	public string Email { get; set; }

	public string Password { get; set; }

	public string Username { get; set; }

	public string Phone { get; set; }

	public string Address { get; set; }

	public IList<Role> Roles { get; set; }


}

public class Role : IEntity
{
	public Guid Id { get; set; }
	public string Name { get; set; }

	public IList<User> Users { get; set; }
}