import { GetDashboard } from "@/src/API/DashboardAPI";
import FormatVND from "@/src/FormatCurrent/FormatVND";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTag } from "react-icons/bs";
import { RiPriceTag2Fill, RiProductHuntFill } from "react-icons/ri";

export default async function Dashboard() {
  const dashboard = GetDashboard();
  const data = await dashboard;
  const result = data.result

  return (
    <div className="mt-2 grid grid-cols-4 gap-4">
      <div className="mt-2 flex h-[120px] flex-col justify-between p-5 shadow-lg">
        <div>
          <AiOutlineShoppingCart size={26} />
        </div>
        <div className="flex justify-between">
          <div className="font-medium">Tổng số đơn hàng hôm nay:</div>
          <p>{result.orderToday}</p>
        </div>
      </div>
      <div className="mt-2 flex h-[120px] flex-col justify-between p-5 shadow-lg">
        <div>
          <AiOutlineShoppingCart size={26} />
        </div>
        <div className="flex justify-between">
          <div className="font-medium">Tổng số đơn hàng:</div>
          <p>{result.totalOrder}</p>
        </div>
      </div>
      <div className="mt-2 flex h-[120px] flex-col justify-between p-5 shadow-lg">
        <div>
          <RiProductHuntFill size={26} />
        </div>
        <div className="flex justify-between">
          <div className="font-medium">Tổng số sản phẩm:</div>
          <p>{result.totalProduct}</p>
        </div>
      </div>
      <div className="mt-2 flex h-[120px] flex-col justify-between p-5 shadow-lg">
        <div>
          <BsTag size={26} />
        </div>
        <div className="flex justify-between">
          <div className="font-medium">Tổng số danh mục:</div>
          <p>{result.totalCategories}</p>
        </div>
      </div>
      <div className="mt-2 flex h-[120px] flex-col justify-between p-5 shadow-lg">
        <div>
          <RiPriceTag2Fill size={26} />
        </div>
        <div className="flex justify-between">
          <div className="font-medium">Tổng số danh thu hôm nay:</div>
          <p>{FormatVND(result.revenueToday)}</p>
        </div>
      </div>
      <div className="mt-2 flex h-[120px] flex-col justify-between p-5 shadow-lg">
        <div>
          <RiPriceTag2Fill size={26} />
        </div>
        <div className="flex justify-between">
          <div className="font-medium">Tổng số danh thu:</div>
          <p>{FormatVND(result.totalRevenue)}</p>
        </div>
      </div>
    </div>
  );
}
