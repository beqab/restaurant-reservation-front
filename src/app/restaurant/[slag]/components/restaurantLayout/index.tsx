import React from "react";
import RestaurantHeader from "../restaurantheader";

function RestaurantLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RestaurantHeader />
      {/* HEADER */} {/* DESCRIPTION PORTION */}
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </>
  );
}

export default RestaurantLayout;
