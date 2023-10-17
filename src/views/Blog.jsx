import React, { useEffect, useState } from "react";
import style from "../styles/Blog.module.css";
import Card from "../components/Card/Card";
import bitcoin from "../assets/Blog_Assets/Rectangle 4245.png";
import NFT_1 from "../assets/Blog_Assets/Rectangle 4248.png";
import NFT_2 from "../assets/Blog_Assets/Rectangle 4252.png";
import NFT_3 from "../assets/Blog_Assets/Rectangle 4255.png";
import NFT_4 from "../assets/Blog_Assets/Rectangle 4261.png";
import NFT_5 from "../assets/Blog_Assets/Rectangle 4258.png";
import NFT_6 from "../assets/Blog_Assets/Rectangle 4264.png";
import NFT_7 from "../assets/Blog_Assets/Rectangle 4266.png";
import NFT_8 from "../assets/Blog_Assets/Rectangle 4265.png";
import Page from "../components/Page";

const Blog = () => {
  const [recentOrientation, setRecentOrientation] = useState("horizontal");

  useEffect(() => {
    // change orientation of recent posts to vertical on mobile
    if (window.innerWidth < 768) {
      setRecentOrientation("vertical");
    }

  }, [])

  return (
    <Page>
      <header className={style.header}>
        <h1>
          dApps over apps: <span className="purple-text">Stories</span> &{" "}
          <span className="pink-text">Ideas</span>
        </h1>
        <p>The Latest News on Blockchain and Web 3.0</p>
      </header>

      {/* <section className={style.blog__content}> */}
      <section className={style.recent}>
        <h2>Recent Blog Posts</h2>
        <div className={style.posts}>
          <div className={style.first__card}>
            <div className={style.imgCtn}>
              <img src={bitcoin} alt="" />
            </div>
            <Card
              author="The dapps over apps team"
              date="24 June 2023"
              title="How NFTs can drive Crypto adoption through Blockchain education."
              body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
              tags={["NFTS", "Metamask"]}
            />
          </div>
          <Card
            className={style.other__card}
            img_path={NFT_1}
            author="The dapps over apps team"
            date="24 June 2023"
            title="How NFTs can drive Crypto adoption through Blockchain education."
            body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
            tags={["NFTS", "Metamask"]}
            orientation={recentOrientation}
          />
          <Card
            className={style.other__card}
            img_path={NFT_2}
            author="The dapps over apps team"
            date="24 June 2023"
            title="How NFTs can drive Crypto adoption through Blockchain education."
            body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
            tags={["NFTS", "Metamask"]}
            orientation={recentOrientation}
          />
        </div>
      </section>

      <section className={style.all_posts}>
        <h2 className="purple-text">All Blog Posts</h2>
        <div className={style.grid__posts}>
          <Card
            img_path={NFT_3}
            author="The dapps over apps team"
            date="24 June 2023"
            title="How NFTs can drive Crypto adoption through Blockchain education."
            body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
            tags={["NFTS", "Metamask"]}
            orientation="vertical"
            noPadding={true}
          />

          <Card
            img_path={NFT_4}
            author="The dapps over apps team"
            date="24 June 2023"
            title="How NFTs can drive Crypto adoption through Blockchain education."
            body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
            tags={["NFTS", "Metamask"]}
            orientation="vertical"
            noPadding={true}
          />

          <Card
            img_path={NFT_5}
            author="The dapps over apps team"
            date="24 June 2023"
            title="How NFTs can drive Crypto adoption through Blockchain education."
            body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
            tags={["NFTS", "Metamask"]}
            orientation="vertical"
            noPadding={true}
          />
          <Card
            img_path={NFT_6}
            author="The dapps over apps team"
            date="24 June 2023"
            title="How NFTs can drive Crypto adoption through Blockchain education."
            body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
            tags={["NFTS", "Metamask"]}
            orientation="vertical"
            noPadding={true}
          />

          <Card
            img_path={NFT_7}
            author="The dapps over apps team"
            date="24 June 2023"
            title="How NFTs can drive Crypto adoption through Blockchain education."
            body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
            tags={["NFTS", "Metamask"]}
            orientation="vertical"
            noPadding={true}
          />

          <Card
            img_path={NFT_8}
            author="The dapps over apps team"
            date="24 June 2023"
            title="How NFTs can drive Crypto adoption through Blockchain education."
            body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
            tags={["NFTS", "Metamask"]}
            orientation="vertical"
            noPadding={true}
          />
        </div>
      </section>
      {/* </di> */}
    </Page>
  );
};

export default Blog;
