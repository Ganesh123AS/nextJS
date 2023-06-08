import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="about-image"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Story Tellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            magnam sapiente ut numquam consectetur quod totam reprehenderit
            aperiam corrupti obcaecati eligendi voluptatibus ex non possimus eum
            debitis inventore et soluta asperiores amet. Aut ipsa et temporibus
            quas at. Eligendi nobis cumque accusamus, cupiditate quis quod
            recusandae vero quo libero aperiam. Perspiciatis ipsam fugiat quos
            animi quibusdam, voluptatum in laboriosam eveniet.
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            magnam sapiente ut numquam consectetur quod totam reprehenderit
            aperiam corrupti obcaecati eligendi voluptatibus ex non possimus eum
            debitis inventore et soluta asperiores amet. Aut ipsa et temporibus
            quas at. Eligendi nobis cumque accusamus, cupiditate quis quod
            recusandae vero quo libero aperiam. Perspiciatis ipsam fugiat quos
            animi quibusdam, voluptatum in laboriosam eveniet.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
