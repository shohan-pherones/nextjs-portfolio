"use client";

import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    message: string;
  }>({
    fullName: "",
    email: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    /* EMAIL JS */
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID as string
      )
      .then(
        () => {
          toast.success("Your message has been successfully sent.");
          /* FIELD RESET */
          setFormData({
            fullName: "",
            email: "",
            message: "",
          });
        },
        () => {
          toast.error("Your message could not be sent successfully.");
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-5 items-start"
    >
      <div className="flex gap-5 w-full">
        <div className="form-control w-full">
          <input
            required
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="w-full bg-transparent border-b border-dark/25 outline-none pb-1 focus-within:border-dark duration-300"
          />
        </div>
        <div className="form-control w-full">
          <input
            required
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full bg-transparent border-b border-dark/25 outline-none pb-1 focus-within:border-dark duration-300"
          />
        </div>
      </div>
      <div className="form-control w-full">
        <textarea
          required
          rows={7}
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full bg-transparent border-b border-dark/25 outline-none pb-1 focus-within:border-dark duration-300 resize-none"
        />
      </div>
      <button
        type="submit"
        className="px-5 py-3 rounded-lg duration-300 bg-dark text-light hover:bg-dark/80"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
