import Link from "next/link";


export default function FooterAside() {
  return (
    <div className="mx-6 py-10 text-center md:text-left  ">
      <div className="container mx-auto grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="">
          <h6 className="mb-4 flex font-semibold uppercase justify-center md:justify-start ">
            DỊCH VỤ
          </h6>
          <p className="mb-4">
            <Link href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-purple">
              Điều khoản sử dụng
            </Link>
          </p>
          <p className="mb-4">
            <Link href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-purple">
              Chính sách bảo mật
            </Link>
          </p>
          <p className="mb-4">
            <Link href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-purple">
              Liên hệ
            </Link>
          </p>
          <p className="mb-4">
            <Link href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-purple">
              Hệ thống nhà sách
            </Link>
          </p>
          <p className="mb-4">
            <Link href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-purple">
              Tra cứu đơn hàng
            </Link>
          </p>
        </div>
        <div className="">
          <h6 className="mb-4 flex font-semibold uppercase justify-center md:justify-start">
            HỖ TRỢ
          </h6>
          <p className="mb-4">
            <Link href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-purple">
              Hướng dẫn đặt hàng
            </Link>
          </p>
          <p className="mb-4">
            <Link href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-purple">
              Chính sách đổi trả - hoàn tiền
            </Link>
          </p>
          <p className="mb-4">
            <Link href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-purple">
              Phương thức vận chuyển
            </Link>
          </p>
          <p className="mb-4">
            <Link href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-purple">
              Phương thức thanh toán
            </Link>
          </p>
          <p className="mb-4">
            <Link href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-purple">
            Chính sách khách hàng mua sỉ
            </Link>
          </p>
        </div>
        <div className="">
          <h6 className="mb-4 flex font-semibold uppercase justify-center md:justify-start">
          KẾT NỐI MẠNG XÃ HỘI
          </h6>
          <p className="mb-4">
            <Link href="#!" className="text-neutral-600 dark:text-neutral-200 hover:text-purple">
            Nơi cập nhật những xu hướng thời trang và những chương trình sale mới nhất của Junie
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
