interface SocialLink {
  name: string;
  url: string;
  isExternal?: boolean;
}

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "http://instagram.com/bareshells",
    isExternal: true,
  },
  { name: "FAQ", url: "/faq", isExternal: false },
  { name: "Contact us", url: "mailto:bareshells@gmail.com", isExternal: true },
];

export default function SocialLinks() {
  return (
    <div className="w-full flex flex-row gap-8 justify-center items-center   py-4 pb-safe">
      {socialLinks.map((link) => (
        <a
          href={link.url}
          key={link.name}
          {...(link.isExternal && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
          className="hover:opacity-50 transition-opacity"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
