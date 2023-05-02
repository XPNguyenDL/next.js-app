"use client";
import React from "react";

export default function Pager({ metadata, onPageChange }) {
  // Component's props
  const { pageCount, hasNextPage, hasPreviousPage } = metadata;

  return (
    <>
      {pageCount > 1 && (
        <div className="my-4 text-center">
          {hasPreviousPage ? (
            <button
              className="text-gray-900 border-gray-200 mr-5 rounded-full border bg-gray-500 py-2.5 px-5 text-sm font-medium text-white duration-500 hover:bg-gray-100 hover:text-purple focus:z-10"
              onClick={() => onPageChange(-1)}>
              &nbsp;Trang trước
            </button>
          ) : (
            <button className="cursor-default mr-5">&nbsp;Trang trước</button>
          )}
          {hasNextPage ? (
            <button
              className="text-gray-900 border-gray-200 rounded-full border bg-gray-500 py-2.5 px-5 text-sm font-medium text-white duration-500 hover:bg-gray-100 hover:text-purple focus:z-10"
              onClick={() => onPageChange(1)}>
              Trang sau&nbsp;
            </button>
          ) : (
            <button>Trang sau&nbsp;</button>
          )}
        </div>
      )}
    </>
  );
}
