import React from "react";
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

const Blog = () => {
  return (
    <div>
      <h1 className={style.intro__head}>
        dApps over apps: <span className={style.stories}>Stories</span> &{" "}
        <span className={style.ideas}>Ideas</span>
      </h1>
      <p className={style.intro__text}>
        The Latest News on Blockchain and Web 3.0
      </p>

      <div className={style.blog__content}>
        <h2 className={style.blog__content__text}>Recent Blog Posts</h2>
        <div className={style.recent_blog_post}>
          <div className={style.first__card}>
            <img src={bitcoin} alt=""/>
            <Card
              author="The dapps over apps team"
              date="24 June 2023"
              title="How NFTs can drive Crypto adoption through Blockchain education."
              body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
              tags={["NFTS", "Metamask"]}
              height="auto"
            />
          </div>
          <div>
            <Card
              img_path={NFT_1}
              author="The dapps over apps team"
              date="24 June 2023"
              title="How NFTs can drive Crypto adoption through Blockchain education."
              body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
              tags={["NFTS", "Metamask"]}
              display={"flex"}
            />
            <Card
              img_path={NFT_2}
              author="The dapps over apps team"
              date="24 June 2023"
              title="How NFTs can drive Crypto adoption through Blockchain education."
              body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
              tags={["NFTS", "Metamask"]}
              display={"flex"}
            />
          </div>
        </div>
        <div className={style.blog__posts}>
          <h3>All Blog Posts</h3>
          <div className={style.all__blog__posts}>
            <Card
              img_path={NFT_3}
              author="The dapps over apps team"
              date="24 June 2023"
              title="How NFTs can drive Crypto adoption through Blockchain education."
              body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
              tags={["NFTS", "Metamask"]}
              marginBottom="2em"
            />

            <Card
              img_path={NFT_4}
              author="The dapps over apps team"
              date="24 June 2023"
              title="How NFTs can drive Crypto adoption through Blockchain education."
              body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
              tags={["NFTS", "Metamask"]}
              marginBottom="2em"
            />

            <Card
              img_path={NFT_5}
              author="The dapps over apps team"
              date="24 June 2023"
              title="How NFTs can drive Crypto adoption through Blockchain education."
              body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
              tags={["NFTS", "Metamask"]}
              marginBottom="2em"
            />
          </div>
          <div className={style.all__blog__posts}>
          <Card
              img_path={NFT_6}
              author="The dapps over apps team"
              date="24 June 2023"
              title="How NFTs can drive Crypto adoption through Blockchain education."
              body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
              tags={["NFTS", "Metamask"]}
              marginBottom="2em"
            />

            <Card
              img_path={NFT_7}
              author="The dapps over apps team"
              date="24 June 2023"
              title="How NFTs can drive Crypto adoption through Blockchain education."
              body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
              tags={["NFTS", "Metamask"]}
              marginBottom="2em"
            />

            <Card
              img_path={NFT_8}
              author="The dapps over apps team"
              date="24 June 2023"
              title="How NFTs can drive Crypto adoption through Blockchain education."
              body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
              tags={["NFTS", "Metamask"]}
              marginBottom="2em"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
