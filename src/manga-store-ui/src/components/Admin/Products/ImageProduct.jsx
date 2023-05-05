"use client";
import React, { useState } from "react";
import { updateProductPictures } from "@/src/API/ProductAPI";
import Image from "next/image";

export default function ImageProduct({ productId, pictures }) {
  const [images, setImages] = useState([]);
  const handleAddImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let index = 0; index < images.length; index++) {
      formData.append("file", images[index]);
    }
    const res = updateProductPictures(productId, formData);
    const result = await res;
    if (result.isSuccess) {
      if (confirm("Cập nhật thành công")) {
        location.reload();
      }
    } else {
      alert(result.errors[0]);
    }
  };

  return (
    <div>
      <div className="max-h-[480px] min-h-fit overflow-hidden overflow-y-auto ">
        {pictures.length > 0 ? (
          pictures.map((item) => {
            return (
              <Image
                className="mx-auto mb-5 border border-gray-500 shadow-lg"
                key={item.id}
                src={`${process.env.NEXT_PUBLIC_API_URL}/${item.path}`}
                width={250}
                height={250}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>

      <form method="put" onSubmit={handleAddImage}>
        <div>
          <label className="mb-1.5 text-lg font-bold">Hình sản phẩm</label>
          <input
            type="file"
            name="imageFile"
            accept="image/*"
            multiple
            required
            onChange={(e) => setImages(e.target.files)}
            className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight focus:outline-none"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="mr-2 mt-5 w-[280px] items-center rounded-lg bg-success px-5 py-2.5 text-center text-sm font-medium text-white duration-500 hover:bg-primary-300">
            Lưu hình 
          </button>
        </div>
      </form>
    </div>
  );
}
