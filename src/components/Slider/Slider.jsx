import { CgProfile } from "react-icons/cg";

const sliders = [
    {
        url: "https://akko.com.vn/wp-content/uploads/2023/03/5075B-Plus-goku-naruto.jpg",
    },
    {
        url: "https://akko.com.vn/wp-content/uploads/2023/03/AKKO-3068B-banner-01.jpg",
    },
    {
        url: "https://akko.com.vn/wp-content/uploads/2023/03/akko-3098B-banner-ngang-01.jpg",
    },

];

export default function Slider() {
    return (
        <div className="relative max-w-[1400px] h-[780px] w-full m-auto py-16 px-4">
            <div style={{backgroundImage: `url(${sliders[0].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
        </div>
    );
}