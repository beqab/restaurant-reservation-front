"use client";

import Link from "next/link";
import React, { useState } from "react";

function SearchBar() {
  const [location, setLocation] = useState("");

  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        onChange={e => setLocation(e.target.value)}
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
      />
      <button className="rounded bg-red-600 px-9 py-2 text-white">
        <Link href={{ pathname: "/search", query: { location } }}>
          Let's go
        </Link>
      </button>
    </div>
  );
}

export default SearchBar;
