"use client";

import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
  return (
    <div className="w-full flex-grow flex flex-col bg-white">
      <div className="flex-grow flex flex-col justify-center items-center  ">
        <Link href="/">
          <Image
            src="/Bareshells-Thin.svg"
            alt="BARESHELLS"
            width={100}
            height={16}
            className="w-auto h-3 object-contain mb-0.5"
          />
        </Link>
      </div>
      <div className="mt-auto">
        <SocialLinks />
      </div>
    </div>
  );
}
