using Store.Core.Contracts;

namespace Store.Core.Collections;

public class OrderQuery : IOrderQuery
{
	public int? Year { get; set; }
	public int? Month { get; set; }
	public int? Day { get; set; }
	public string Keyword { get; set; }
}