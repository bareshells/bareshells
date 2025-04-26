import Image from "next/image";

export default function NavBar({ isSticky = false }) {
  return (
    <div
      className={`flex justify-between items-center p-3 ${
        isSticky ? "bg-transparent" : "bg-white"
      } px-6`}
    >
      <div className="text-black flex flex-row gap-8 justify-start items-end tracking-[2px] text-[11px]">
        <a>MENU</a>
      </div>
      <Image
        src="/Bareshells-Thin.svg"
        alt="BARESHELLS"
        width={100}
        height={16}
        className="w-auto h-4 object-contain mb-0.5"
      />
    </div>
  );
}
