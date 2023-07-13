import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="bg-dark text-light w-fit h-20 fixed bottom-10 left-1/2 -translate-x-1/2 flex justify-center items-center px-10 rounded-xl border border-light/20">
      <nav>
        <ul className="flex items-center gap-10">
          <li className="flex items-center">
            <Link
              href="/"
              className="w-12 h-12 overflow-hidden rounded-full inline-block hover:brightness-75 duration-300"
            >
              <Image
                src="https://res.cloudinary.com/dpkbthpcw/image/upload/v1689227673/nextjs-portfolio/assets/profile/Profile_Photo_Red_Shirt_qwci0o.jpg"
                alt="Profile photo of Md. Shohanur Rahman"
                width={50}
                height={50}
                priority
                className="w-full h-full object-cover"
              />
            </Link>
          </li>
          <li>
            <Link href="/" className="link-item">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="link-item">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="link-item">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/#blogs" className="link-item">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="link-item">
              Contact
            </Link>
          </li>
          <li>
            <Button href="/" target="_blank" color="light">
              Download Résumé
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
