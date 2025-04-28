"use client";

import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";

export default function ShopPage() {
  return (
    <div className="w-full flex-grow flex flex-col bg-white">
      <div className="flex-grow flex flex-col justify-center items-center  ">
        <Image
          src="/lounge-sketch.jpg"
          alt="exhibition"
          width={340}
          height={340}
        />
      </div>
      <div className="mt-auto">
        <SocialLinks />
      </div>
    </div>
  );
}
