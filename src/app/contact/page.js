import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';
import Button from '@/components/button/button';

export const metadata = {
    title: "Ganesh Bhatt contact Information",
    description: "This is a contact information",
  };

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Let`s Keep In Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/contact.png"
                        alt='contact-image'
                        fill={true}
                        className={styles.image}
                    />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder='Enter your name...' className={styles.input} />
                    <input type="text" placeholder='Enter your email...' className={styles.input} />
                    <textarea placeholder='Enter the description...' className={styles.textarea} cols="10" rows="7"></textarea>
                    <Button url="#" text="send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;