import React from 'react';
import styles from "./footer.module.css";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>@2023 Sameer. All right reserved</div>
            <div className={styles.social}>
                <Image className={styles.icon} src="/1.png" width={22} height={22} alt='footer-facebook' />
                <Image className={styles.icon} src="/2.png" width={22} height={22} alt='footer-instagram' />
                <Image className={styles.icon} src="/3.png" width={22} height={22} alt='footer-twitter' />
                <Image className={styles.icon} src="/4.png" width={22} height={22} alt='footer-youtube' />
            </div>
        </div>
    );
};

export default Footer;