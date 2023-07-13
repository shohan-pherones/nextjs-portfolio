import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import clsx from "clsx";

const buttonVariants = cva("px-5 py-3 rounded-xl duration-300", {
  variants: {
    color: {
      dark: "bg-dark text-light hover:bg-dark/80",
      light: "bg-light text-dark hover:bg-light/20 hover:text-light",
    },
  },
  defaultVariants: {
    color: "dark",
  },
});

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  target?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, target, color, children }) => {
  return (
    <Link
      href={href}
      target={target}
      className={clsx(buttonVariants({ color }))}
    >
      {children}
    </Link>
  );
};

export default Button;
