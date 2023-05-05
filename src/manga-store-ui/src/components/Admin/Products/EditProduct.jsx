"use client";

import React, { useEffect, useState } from "react";
import SectionHeader from "../../Home/SectionHeader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getCategoriesByQueries } from "@/src/API/CategoriesAPI";
import { Listbox, Transition } from "@headlessui/react";
import { RiArrowUpDownLine } from "react-icons/ri";
import ImageProduct from "./ImageProduct";
import { AddProduct, updateProduct } from "@/src/API/ProductAPI";

export default function EditProduct({ product, id }) {
  const [name, setName] = useState(product.name);
  const [shortIntro, setShortIntro] = useState(product.shortIntro);
  const [description, setDecription] = useState(product.description);
  const [slug, setSlug] = useState(product.urlSlug);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const [discount, setDiscount] = useState(product.discount);
  const [active, setActive] = useState(product.active);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Router
  const router = useRouter();

  useEffect(() => {
    fetchCategories();
    async function fetchCategories() {
      const queries = new URLSearchParams({});
      const data = await getCategoriesByQueries(queries);
      if (data) {
        setCategories(data.result.items);
      } else {
        setCategories([]);
      }
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: name,
      shortIntro: shortIntro,
      description: description,
      urlSlug: slug,
      price: price,
      quantity: quantity,
      discount: discount,
      active: active === "on" ? true : false,
      categoryId: selectedCategory === "" ? product.category.id : selectedCategory
    };


    const res = updateProduct(id, data);
    const result = await res;
    if (result.isSuccess) {
      if (confirm("Câp nhật thành công")) {
        router.back();
      }
    } else {
      alert(result.errors[0]);
    }
  };

  return (
    <div>
      <div className="inline-block"></div>
      <SectionHeader title={"Chỉnh sửa sản phẩm"} />
      <div className="grid grid-cols-2 gap-4">
        <form method="post" className="mt-5 w-[95%]" onSubmit={handleSubmit}>
          <div className="mb-2.5">
            <div className="mb-6">
              <label className="mb-1.5 text-lg font-bold">Tên sản phẩm</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tên sản phẩm"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight focus:outline-none"
                required
              />
            </div>
            <div className="mb-6">
              <label className="mb-1.5 text-lg font-bold">Url Slug</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Url Slug"
                value={slug}
                onChange={(event) => setSlug(event.target.value)}
                className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight focus:outline-none"
                required
              />
            </div>
            <div className="mb-6">
              <label className="mb-1.5 text-lg font-bold">Mô tả ngắn</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Mô tả ngắn"
                value={shortIntro}
                onChange={(event) => setShortIntro(event.target.value)}
                className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label className="mb-1.5 text-lg font-bold">Mô tả chi tiết</label>
              <textarea
                rows={8}
                id="name"
                name="name"
                placeholder="Mô tả chi tiết"
                value={description}
                onChange={(event) => setDecription(event.target.value)}
                className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <Listbox value={product.category.id} onChange={setSelectedCategory}>
                <div className="relative mt-1">
                  <Listbox.Button className="focus-visible:border-indigo-500 focus-visible:ring-offset-orange-300 relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm">
                    <span className="block truncate">{product.category.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <RiArrowUpDownLine
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {categories.length > 0 ? (
                        categories.map((item) => (
                          <Listbox.Option
                            key={item.id}
                            className={`text-gray-900 relative cursor-default select-none py-2 pl-10 pr-4`}
                            value={item.id}>
                            {item.name}
                          </Listbox.Option>
                        ))
                      ) : (
                        <></>
                      )}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="w-full">
                <div className="flex justify-between">
                  <label className="mb-1.5 text-lg font-bold">Giá tiền</label>
                  <input
                    type="number"
                    min="0"
                    defaultValue={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="border-gray-300 ml-2.5 h-8 w-32 border text-center"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <label className="mb-1.5 text-lg font-bold">Số lượng</label>
                  <input
                    type="number"
                    min="0"
                    defaultValue={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="border-gray-300 ml-2.5 h-8 w-32 border text-center"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <label className="mb-1.5 text-lg font-bold">Giảm giá</label>
                  <input
                    type="number"
                    min="0"
                    defaultValue={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    className="border-gray-300 ml-2.5 h-8 w-32 border text-center"
                  />
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="mb-6 mt-2">
                <div className="flex max-w-[180px] justify-between">
                  <label className="mb-1.5 text-lg font-bold">Trạng thái</label>
                  <input
                    type="checkbox"
                    name="published"
                    defaultChecked={active}
                    onChange={(e) => setActive(e.currentTarget.value)}
                    className="border-gray-300 ml-2.5 h-8 w-16 rounded-full border text-center"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <Link href={"/admin/categories"}>Quay lại</Link>
            </div>
            <button
              type="submit"
              className="mr-2 mb-2 items-center rounded-lg bg-[#FF9119] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#FF9119]/80 focus:outline-none focus:ring-4 focus:ring-[#FF9119]/50 dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40">
              Lưu
            </button>
          </div>
        </form>
        <div>
          <ImageProduct productId={id}  pictures={product.pictures}/>
        </div>
      </div>
    </div>
  );
}
