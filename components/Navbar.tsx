import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-dark text-light w-fit h-20 fixed bottom-10 left-1/2 -translate-x-1/2 flex justify-center items-center px-10 rounded-2xl">
      <nav>
        <ul className="flex items-center gap-10">
          <li className="flex items-center">
            <Link
              href="/"
              className="w-12 h-12 overflow-hidden rounded-full inline-block"
            >
              <Image
                src="https://res.cloudinary.com/dpkbthpcw/image/upload/v1689173952/nextjs-portfolio/assets/profile/Profile_Photo_of_Mine_jn1jmc.jpg"
                alt="Profile photo of Md. Shohanur Rahman"
                width={50}
                height={50}
                priority
                className="w-full h-full object-cover"
              />
            </Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#projects">Projects</Link>
          </li>
          <li>
            <Link href="/#skills">Skills</Link>
          </li>
          <li>
            <Link href="/#blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
          <li>
            <Link href="/" className="bg-light text-dark px-5 py-3 rounded-lg">
              Download Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
