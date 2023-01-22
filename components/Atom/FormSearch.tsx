import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function FormSearch({
  HandleSearch,
  title,
  styleInput,
  styleButton,
}: any) {
  return (
    <>
      <form
        className="mx-4 items-center flex justify-center"
        onSubmit={HandleSearch}
      >
        <input
          type="text"
          placeholder={title}
          className={`${styleInput} tracking-wide focus:text-slate-800 focus:shadow-md outline-gray-500 font-bangers font-light dark:text-white`}
        />
        <button
          className={`${styleButton} border-spacing-1 border-slate-200  items-center flex gap-x-1 dark:bg-white dark:text-black font-bangers`}
        >
          Search<FaSearch></FaSearch>
        </button>
      </form>
    </>
  );
}
