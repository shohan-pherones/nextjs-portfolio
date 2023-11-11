'use client';

import { getTransition } from '@/utils/getTransition';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

const Form = () => {
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    message: string;
  }>({
    fullName: '',
    email: '',
    message: '',
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
          toast.success('Your message has been successfully sent.');
          /* FIELD RESET */
          setFormData({
            fullName: '',
            email: '',
            message: '',
          });
        },
        () => {
          toast.error('Your message could not be sent successfully.');
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className='flex w-full flex-col items-start gap-5'
    >
      <div className='flex w-full flex-col gap-5 sm:flex-row'>
        <div className='form-control w-full overflow-hidden'>
          <motion.input
            initial={{ x: '-100%' }}
            whileInView={{ x: 0 }}
            transition={getTransition()}
            required
            type='text'
            name='fullname'
            placeholder='Full Name'
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className='w-full border-b border-dark/25 bg-transparent pb-1 outline-none duration-300 focus-within:border-dark'
          />
        </div>
        <div className='form-control w-full overflow-hidden'>
          <motion.input
            initial={{ x: '-100%' }}
            whileInView={{ x: 0 }}
            transition={getTransition(0.2)}
            required
            type='email'
            name='email'
            placeholder='Email Address'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className='w-full border-b border-dark/25 bg-transparent pb-1 outline-none duration-300 focus-within:border-dark'
          />
        </div>
      </div>
      <div className='form-control w-full overflow-hidden'>
        <motion.textarea
          initial={{ x: '-100%' }}
          whileInView={{ x: 0 }}
          transition={getTransition(0.4)}
          required
          rows={7}
          name='message'
          placeholder='Message'
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className='w-full resize-none border-b border-dark/25 bg-transparent pb-1 outline-none duration-300 focus-within:border-dark'
        />
      </div>
      <div className='overflow-hidden'>
        <motion.button
          initial={{ y: '100%' }}
          whileInView={{ y: 0 }}
          transition={getTransition(0.6)}
          type='submit'
          className='rounded-lg bg-dark px-5 py-3 text-light duration-300 hover:bg-dark/80'
        >
          Submit
        </motion.button>
      </div>
    </form>
  );
};

export default Form;
