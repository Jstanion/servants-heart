import React from 'react';
import ContactForm from '../component/contactForm/ContactForm';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="flex w-full my-4 bg-accent">
      <ContactForm />
      <Image src="/donationImg.jpg" alt="Contact" width={500} height={500} className="p-4 w-fit h-fit"/>
    </div>
  )
}

export default Contact