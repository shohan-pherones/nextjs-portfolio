import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-dark text-light w-fit h-20 fixed bottom-10 left-1/2 -translate-x-1/2 flex justify-center items-center px-10 rounded-2xl">
      <nav>
        <ul className="flex gap-10">
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
