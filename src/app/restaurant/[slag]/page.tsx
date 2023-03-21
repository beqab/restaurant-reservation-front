import Navbar from "@/components/navbar";
import Link from "next/link";
import React from "react";
import Description from "./components/description";
import Rating from "./components/rating";
import Reservation from "./components/reservation";
import RestaurantHeader from "./components/restaurantheader";
import RestaurantImages from "./components/restaurantImages";
import RestaurantLayout from "./components/restaurantLayout";
import RestaurantNAvbar from "./components/restaurantNavbar";
import Reviews from "./components/Reviews";
import RestaurantTitle from "./components/title";

function RestaurantDetails() {
  return (
    <RestaurantLayout>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <RestaurantNAvbar />
        {/* RESAURANT NAVBAR */}
        {/* TITLE */}
        <RestaurantTitle />
        {/* TITLE */}
        {/* RATING */}
        <Rating />
        {/* RATING */}
        {/* DESCRIPTION */}
        <Description />
        {/* DESCRIPTION */}
        {/* IMAGES */}
        <RestaurantImages />
        {/* IMAGES */}
        {/* REVIEWS */}
        <Reviews />
        {/* REVIEWS */}
      </div>
      <Reservation />
      {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */}{" "}
      {/* RESERVATION
    CARD PORTION */}
    </RestaurantLayout>
  );
}

export default RestaurantDetails;
