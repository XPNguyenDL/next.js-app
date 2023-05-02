"use client";
import { getProductsByQueries } from "@/src/API/ProductAPI";
import React, { useEffect, useState } from "react";
import FilterCollections from "./FilterCollection";
import Pager from "../Pager/Pager";
import ProductItem from "../Product/ProductItem";

export default function CollectionSection() {
  // useState
  const [keyword, setKeyword] = useState("");
  const [metadata, setMetadata] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [products, setProducts] = useState([]);

  const handleChangePage = (value) => {
    setPageNumber((current) => current + value);
    window.scroll(0, 0);
  };

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const queries = new URLSearchParams({
        PageNumber: pageNumber || 1,
        PageSize: 10,
        SortColumn: "Id",
        ...(keyword && { keyword: keyword })
      });
      const data = await getProductsByQueries(queries);
      if (data) {
        setProducts(data.result.items);
        setMetadata(data.result.metadata);
      } else {
        setProducts([]);
        setMetadata({});
      }
    }
  }, [keyword, pageNumber]);

  return (
    <div className="container mx-auto">
      <FilterCollections setKeyword={setKeyword}/>
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4 mt-5">
        {products.length > 0 ? (
          products.map((item) => {
            return <ProductItem key={item.id} product={item} />;
          })
        ) : (
          <></>
        )}
      </div>
      <Pager metadata={metadata} onPageChange={handleChangePage} />
    </div>
  );
}
