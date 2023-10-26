import React from 'react';
import ContactForm from '../component/contactForm/ContactForm';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="flex w-full my-4 p-4 bg-accent">
      <ContactForm />
      <Image src="/donationImg.jpg" alt="Contact" width={500} height={500} className="w-fit h-fit pl-4"/>
    </div>
  )
}

export default Contact