import React from "react";
import All from "./All";
import TableList from "../Atom/TableList";
import Welcome from "../Atom/Welcome";
import ListSeason from "../Atom/ListSeason";
import RelationSection from "../Molekul/RelationSection";
import Rekomendasi from "../Atom/Rekomendasi";

export default function HomePage() {
  return (
    <div>
      <div className="flex flex-wrap lg:flex-auto w-full p-2 bg-[#fdfdfd] dark:bg-[#121212]">
        <div className="flex justify-center w-full text-center">
          <Welcome></Welcome>
        </div>
        <div className="flex flex-auto md:border-r lg:border-r lg:pr-2 md:pr-2">
          <div className="w-full">
            <TableList value={"anime"} limit={"5"}></TableList>
            <TableList value={"manga"} limit={"5"}></TableList>
          </div>
        </div>
        <div className="flex lg:w-[450px] ml-2">
          <div className="pt-3 ">
            <h1 className="text-xl font-bangers tracking-wide">
              Season UpComing
            </h1>
            <ListSeason limit={"10"}></ListSeason>
          </div>
        </div>
      </div>
    </div>
  );
}
