"use client";

import { Navbar, NavbarItem } from "@/components/dota2cn/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar>
        <NavbarItem>Heroes</NavbarItem>
        <NavbarItem>Store</NavbarItem>
        <NavbarItem>Watch</NavbarItem>
      </Navbar>
    </div>
  );
}
