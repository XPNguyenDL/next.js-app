using System.ComponentModel.DataAnnotations.Schema;
using Store.Core.Contracts;

namespace Store.Core.Entities;

public enum OrderStatus
{
	New, //Đơn hàng mới
	Cancelled, // Đơn đã hủy
	Approved, // Đã xác nhận 
	Shipping, // Đang giao hàng
	Returned, // Trả hàng
	Success, // Giao thành công
}

public class Order : IEntity
{
	public Guid Id { get; set; }

	public DateTime OrderDate { get; set; }

	public string UrlSlug { get; set; }

	public OrderStatus Status { get; set; }

	public string FirstName { get; set; }

	public string LastName { get; set; }

	public string Email { get; set; }

	public string ShipAddress { get; set; }

	public string ShipTel { get; set; } // Số điện thoại người nhận

	public string Note { get; set; }

	[NotMapped]
	public double Total { get; set; }

	// ======================================================
	// Navigation properties
	// ======================================================

	public virtual Discount Discount { get; set; }
	public IList<OrderDetail> Details { get; set; }
}