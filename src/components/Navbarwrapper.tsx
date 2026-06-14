


// src\components\mainpagecomponents\Navbarwrapper.tsx

"use client";

import Navbar from "@/components/Navbar";

export default function NavbarWrapper() {

  // Pass null while loading so navbar shows no user (no flicker/ghost state)
  return (
    <Navbar
    />
  );
}