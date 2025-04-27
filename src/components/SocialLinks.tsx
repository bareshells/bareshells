interface SocialLink {
  name: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  { name: "Instagram", url: "http://instagram.com/bareshells" },
  { name: "Contact us", url: "mailto:bareshells@gmail.com" },
];

export default function SocialLinks() {
  return (
    <div className="w-full flex flex-row gap-8 justify-center items-center   py-4 pb-safe">
      {socialLinks.map((link) => (
        <a
          href={link.url}
          key={link.name}
          className="hover:opacity-50 transition-opacity"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
