using Store.Core.Contracts;

namespace Store.Core.Entities;

public class Product : IEntity
{
	public Guid Id { get; set; }

	public string Name { get; set; }

	public string ShortIntro { get; set; }

	public DateTime CreateDate { get; set; }

	public string Description { get; set; }

	public string UrlSlug { get; set; }

	public double Price { get; set; }

	public int Quantity { get; set; }

	public float Discount { get; set; }

	public bool Active { get; set; }

	public Guid CategoryId { get; set; }

	// ======================================================
	// Navigation properties
	// ======================================================

	public Category Category { get; set; }

	public IList<OrderDetail> Details { get; set; }

	public IList<Feedback> Feedbacks { get; set; }
	public IList<Picture> Pictures { get; set; }
}

public class Feedback
{
	public Guid Id { get; set; }
	public Guid ProductId { get; set; }
	
	public string UserName { get; set; }

	public DateTime PostDate { get; set; }

	public string Content { get; set; }

	public int Rate { get; set; }

	// ======================================================
	// Navigation properties
	// ======================================================
	
	public virtual Product Product { get; set; }
}