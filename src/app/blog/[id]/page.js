import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  })
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

export async function generateMetaData({ params }){
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  }
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>  {data.desc}    </p>
          <div className={styles.author}>
            <Image
              className={styles.avatar}
              src={data.img}
              alt="avatar"
              width={46}
              height={46}
            />
            <span className={styles.username}>  {data.username} </span>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={data.img}
            alt="blog-image"
            fill={true}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {data.content}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
