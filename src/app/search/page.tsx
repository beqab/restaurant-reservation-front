import Navbar from "@/components/navbar";
import React from "react";
import SearchCard from "./components/searchCard";
import SearchHeader from "./components/searchHeader";
import SearchSidebar from "./components/sideBar";

function Search() {
  return (
    <>
      <SearchHeader />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        {/* SEARCH SIDE BAR */}
        <SearchSidebar />
        {/* SEARCH SIDE BAR */}
        <div className="w-5/6">
          {/* RESAURANT CAR */}
          <SearchCard />
          {/* RESAURANT CAR */}
        </div>
      </div>
    </>
  );
}

export default Search;
