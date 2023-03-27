import React from "react";
import Logo from "@/public/assets/images/amak-store.webp";
import Image from "next/image";
import Link from "next/link";
import "@/src/styles/animation.scss";

export default function Description() {
  return (
    <div className="flex lg:grid w-full xl:grid-cols-2 items-center bg-brown-light">
      <div className="top-0 lg:sticky h-[260px] xl:h-screen overflow-hidden ">
        <div className="mx-auto w-[80%] z-[4] relative top-[20%] xl:top-1/2 text-center xl:text-left xl:left-[20%]">
            <h2 className="text-5xl font-bold text-white">Về chúng tôi</h2>
            <Link
              className="btn-slide relative mt-[65px]"
              href="/pages/about-us"
              title="Xem ngay">
              <span>Xem ngay</span>
            </Link>
        </div>
        <div className="absolute top-0 left-0 bottom-0 w-full">
          <Image src={Logo} className="mx-auto object-cover h-[260px] xl:h-screen w-screen w-full xl:max-w-[770px]" />
        </div>
      </div>
      <div className="mx-auto px-10">
        <div className="m-auto max-w-[80%] text-base">
          <p>&nbsp;</p>
          <h2 className="mb-2.5 text-3xl">AMAK Store – Hiệu sách AMAK</h2>
          <p className="mb-2 leading-5">
            Hiệu sách Amak là không gian sách nho nhỏ nằm trong con ngõ yên tĩnh
            của phường Bách Khoa, quận Hai Bà Trưng, Hà Nội. Tại đây, bạn có thể
            dễ dàng tìm thấy những ấn phẩm thuộc nhiều thể loại dành cho các bạn
            trẻ như:
          </p>
          <p className="mb-2 leading-5">
            <strong>Dòng Light Novel</strong> với các tựa nổi tiếng như Date A
            Live, Arifureta, Majo no Tabitabi (Hành trình của Elaina), Rakudai
            Kishi no Cavalry (Hiệp sĩ lưu ban), World Teacher, Re:Monster,…
          </p>
          <p className="mb-2 leading-5">
            <strong>Nhóm sách Đam mỹ - Boy love</strong> với các tiểu thuyết đam
            mỹ như Sát Phá Lang, Niên Hoa, Để Tớ Khóc,… đến các tựa sách boylove
            Thái như Lovesick, 2gether,… đang được đông đảo bạn đọc quan tâm
            trong thời gian gần đây.
          </p>
          <p className="mb-2 leading-5">
            <strong>Dòng sách Bí Ẩn – Kỳ Dị</strong> cũng hiện diện tại Hiệu
            sách AMAK với các tựa nổi bật: Chú chó tử thần, Dị Nhãn Phòng Đông,
            Tiệm đồ cổ Sea Voice,…
          </p>
          <p className="mb-2 leading-5">
            <strong>Manga – Comic</strong> với một số tựa nổi bật như Young
            Black Jack, Tableau Gate,… Đặc biệt là gần đây có thêm sự xuất hiện
            của các tựa manga boylove như One Room Angel, Umibe No Étranger
            (Người lạ bên bờ biển),…
          </p>
          <p className="mb-2 leading-5">
            <strong>Sách thiếu nhi </strong>dành cho các bé với những tựa sách
            có giá trị như Bono Bono, Poyo Poyo,… giúp các bé học hỏi được nhiều
            hơn từ cuộc sống xung quanh mình.
          </p>
          <p className="mb-2 leading-5">
            <strong>Sách kỹ năng</strong> nhằm cung cấp cho các bạn trẻ những kỹ
            năng sống, học tập, làm việc để phù hợp với thời đại 4.0 như: Trưởng
            thành, Nghĩ tích cực cho đời bớt áp lực, 10 phút tự họp mỗi ngày,
            Nghệ thuật nổi giận,…
          </p>
          <p className="mb-2 leading-5">
            Không chỉ có sách, tại AMAK Store cũng có các{" "}
            <strong>Phụ kiện, văn phòng phẩm</strong> được nhập từ các đơn vị
            phân phối chính thức và có bản quyền như standee, bìa hồ sơ, móc
            khoá, đèn,… để đáp ứng nhu cầu sưu tầm của bạn đọc.
          </p>
        </div>
      </div>
    </div>
  );
}
