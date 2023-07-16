"use client";

import { motion } from "framer-motion";
import { getTransition } from "@/utils/getTransition";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

interface BlogCardProps {
  index: number;
  image: string;
  title: string;
  author: string;
  authorUrl: string;
  publishedDate: string;
  body: string;
  blogUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  index,
  image,
  title,
  author,
  authorUrl,
  publishedDate,
  body,
  blogUrl,
}) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <motion.article
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={getTransition(index / 10)}
        className="w-full h-full bg-light overflow-hidden rounded-xl border border-dark/10"
      >
        <div className="w-full h-[10rem] sm:h-[15rem] overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5 flex flex-col gap-3 items-start">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <div className="flex justify-between w-full text-dark/50">
            <p>
              by{" "}
              <Link
                href={authorUrl}
                target="_blank"
                className="text-dark link-item-dark"
              >
                {author}
              </Link>
            </p>
            <p className="text-dark">{publishedDate}</p>
          </div>
          <p>{body}</p>
          <Button href={blogUrl} target="_blank">
            Read Full Article
          </Button>
        </div>
      </motion.article>
    </div>
  );
};

export default BlogCard;
