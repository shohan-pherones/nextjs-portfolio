import Link from "next/link";

const Footer = () => {
  return (
    <footer className="wrapper section-padding mb-[7.5rem]">
      <p className="w-2/5 text-dark/50">
        Loosely sketched in{" "}
        <Link
          href="https://www.adobe.com/products/photoshop.html"
          target="_blank"
          className="text-dark link-item-dark"
        >
          Adobe Photoshop
        </Link>{" "}
        and coded in{" "}
        <Link
          href="https://code.visualstudio.com"
          target="_blank"
          className="text-dark link-item-dark"
        >
          Visual Studio Code
        </Link>{" "}
        by yours truly. Built with{" "}
        <Link
          href="https://nextjs.org"
          target="_blank"
          className="text-dark link-item-dark"
        >
          Next.js
        </Link>{" "}
        and{" "}
        <Link
          href="https://tailwindcss.com"
          target="_blank"
          className="text-dark link-item-dark"
        >
          Tailwind CSS
        </Link>
        , deployed with{" "}
        <Link
          href="https://vercel.com"
          target="_blank"
          className="text-dark link-item-dark"
        >
          Vercel
        </Link>
        . All text is set in the{" "}
        <Link
          href="https://fonts.google.com/specimen/Space+Grotesk"
          target="_blank"
          className="text-dark link-item-dark"
        >
          Space Grotesk
        </Link>{" "}
        typeface.
      </p>
    </footer>
  );
};

export default Footer;
