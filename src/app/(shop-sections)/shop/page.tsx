"use client";

import SocialLinks from "@/components/SocialLinks";

export default function ShopPage() {
  return (
    <div className="flex flex-col flex-grow mt-[42px] md:mt-0">
      <div className="flex-grow flex flex-col justify-center items-center ">
        <p className="text-center w-full max-w-[20.5rem] md:max-w-[768px]">
          Shop our current collection at 332 E 4TH ST. or contact us for online
          purchases.
        </p>
      </div>
      <div className="mt-auto">
        <SocialLinks />
      </div>
    </div>
  );
}
