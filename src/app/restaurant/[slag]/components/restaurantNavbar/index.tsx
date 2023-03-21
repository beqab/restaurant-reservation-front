import Link from "next/link";
import React from "react";

function RestaurantNAvbar() {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href="/restaurant/123" className="mr-7">
        Overview
      </Link>
      <Link href="/restaurant/123/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
}

export default RestaurantNAvbar;
