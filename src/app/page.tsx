import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import RestaurantCard from "@/components/restaurantCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <Header />
      {/* HEADER */}
      {/* CARDS */}
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {/* CARD */}
        <RestaurantCard />
        {/* CARD */}
      </div>
      {/* CARDS */}
    </main>
  );
}
