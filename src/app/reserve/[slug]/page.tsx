import Navbar from "@/components/navbar";
import React from "react";
import ReserveForm from "../components/reserveForm";
import ReserveHeader from "../components/reserveHeader";

function ReservePage() {
  return (
    <>
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          {/* HEADER */}
          <ReserveHeader />
          {/* HEADER */}
          {/* FORM */}
          <ReserveForm />
        </div>
      </div>
    </>
  );
}

export default ReservePage;
