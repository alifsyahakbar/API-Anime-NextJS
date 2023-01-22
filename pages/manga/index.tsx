import { useState } from "react";
import Header from "../../components/Organisme/Header";
import { useRouter } from "next/router";
import ResultSearch from "../../components/Organisme/ResultSearch";
import All from "../../components/Organisme/All";
import ScrollToTop from "../../components/Atom/button/ScrollToTop";

export default function index() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const HandleSearch = (e: any) => {
    e.preventDefault();
    const inputQuery = e.target[0].value;
    setSearch(inputQuery);
  };
  return (
    <div>
      <Header HandleSearch={HandleSearch}></Header>
      <h1 className="font-bangers text-2xl ml-6 lg:ml-12 mt-6 mb-2">
        - Manga -
      </h1>
      <hr />
      {search ? (
        <ResultSearch search={search} value={"manga"}></ResultSearch>
      ) : (
        <All value={"manga"} limit={""}></All>
      )}
    </div>
  );
}
