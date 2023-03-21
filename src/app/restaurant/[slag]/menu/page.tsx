import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import RestaurantNAvbar from "../components/restaurantNavbar";
import RestaurantHeader from "../components/restaurantheader";
import RestaurantMenu from "../components/restaurantMenu";
import RestaurantLayout from "../components/restaurantLayout";

function Menu() {
  return (
    <RestaurantLayout>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <RestaurantNAvbar />
        {/* RESAURANT NAVBAR */} {/* MENU */}
        <RestaurantMenu />
        {/* MENU */}
      </div>
      {/* DESCRIPTION PORTION */}
    </RestaurantLayout>
  );
}

export default Menu;
