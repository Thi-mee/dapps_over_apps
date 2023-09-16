import React from 'react';
import { FaHeart } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";
import {
  FaDiscord,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import style from "../styles/EducationalContent1.module.css";
import Image_4 from "../assets/Educational_Content_Assets/Rectangle 4288.png";
import Image_5 from "../assets/Educational_Content_Assets/Rectangle 4289.png";
import Image_6 from "../assets/Educational_Content_Assets/Rectangle 4290.png";
import EduCard from '../components/Edu_Card/Edu_Card';
import EducationalSlider from '../components/EducationalSlider/EducationalSlider';

const EducationalContent1 = () => {
  return (
    <div className={style.container}>
    <p className={style.blog__date}>24 June 2023</p>

    <div className={style.blog__content}>
      <h1>
        How NFTs can drive Crypto adoption through Blockchain
        <br /> education.
      </h1>
      <img src={Image_6} alt="" className={style.image_NFT} />
      <div className={style.blog__des_text}>
        <p className={style.blog__des_text__first}>The dapps over apps team</p>
        <span className={style.blog__tags}>
          <p>Beginner</p>
        </span>
      </div>
      <div className={style.blog__content__text}>
        <h2>Web3 and Blockchain: Clearing up your confusion</h2>
        <h3>Introduction:</h3>
        <p>
          <span>Welcome to the world of Web3, where the blockchain technology and
          the internet converge in a powerful union, like Jay Z and Beyonce’s
          marriage 😂. In this blog post, we will take you on a thrilling
          journey through the relationship between Web3 and the blockchain,
          exploring the potential they hold and the exciting possibilities
          they bring to the digital realm.</span><span><br/> 1. The Rise of Web3:<br/> Web3, often
          referred to as the "decentralized web," represents the next
          evolutionary stage of the internet. It moves beyond the traditional
          centralized architecture to empower individuals, build trust, and
          enable peer-to-peer interactions. At the heart of this, lies the
          blockchain, a groundbreaking technology that fuels the decentralized
          nature of Web3.</span><span><br/> 2. Blockchain: The Game-Changer: <br/> The blockchain acts as
          the backbone of Web3, revolutionizing how data is stored, verified,
          and shared. Its distributed ledger technology eliminates the need
          for intermediaries and enables secure, transparent, and
          tamper-resistant transactions. With blockchain, every participant in
          the network holds a copy of the ledger, ensuring a shared source of
          truth and building trust among users.</span><span><br/> 3. Web3 Applications:<br/> Beyond
          : While cryptocurrencies like Bitcoin and Ethereum
          popularized the concept of blockchain, Web3 extends its potential
          far beyond digital currencies. From decentralized finance (DeFi)
          platforms that allow for autonomous financial services to
          decentralized applications (dApps) that run on peer-to-peer
          networks, Web3 is opening up new frontiers of innovation and
          possibilities.</span><span><br/> 4. Empowering Digital Ownership:<br/> One of the most
          exciting aspects of Web3 is its ability to empower digital
          ownership. Through non-fungible tokens (NFTs), individuals can claim
          ownership of unique digital assets, such as artwork, collectibles,
          or virtual real estate. This shift challenges the traditional
          notions of ownership and provides creators and collectors with
          unprecedented control over their digital creations.</span><span><br/> 5.Privacy and
          Security in Web3:<br/> Web3 places a strong emphasis on privacy and
          security. By utilizing cryptographic techniques and decentralized
          networks, Web3 ensures that individuals have greater control over
          their data. Personal information can be stored securely, and users
          can choose to share their data selectively, thereby mitigating
          privacy concerns that happens in the traditional web.</span><span><br/> 6. Collaboration
          and Governance:<br/> Web3 allows for a collaborative and inclusive
          ecosystem. Decentralized autonomous organizations (DAOs) enable
          individuals to participate in decision-making processes and
          contribute to the governance of platforms and protocols. This
          collective intelligence empowers users to shape the future of Web3
          and ensures that the benefits are distributed more equally among
          stakeholders.</span> <br/><span className={style.conclusion__span}>Conclusion:</span><br/> As we go deeper into the era of Web3,
          powered by the blockchain, we are witnessing a transformation that
          disrupts the status quo and unleashes new possibilities. Web3
          empowers individuals, builds trust, and creates an internet that is
          more open, secure, and inclusive. With decentralized applications,
          digital ownership, and innovative governance models, we are on the
          brink of a digital revolution that will redefine the way we
          interact, transact, and collaborate online. So fasten your
          seatbelts, for the journey into the future has just begun! Remember,
          the Web3 and the blockchain hold the abilities to reshape the
          digital landscape, and it's up to all of us to harness their
          potential for a brighter and more decentralized future.
        </p>
      </div>
      <div className={style.reaction__flex}>
        <div>
          <p>
            <FaHeart />
            Like
          </p>
          <p>1,540 likes</p>
        </div>
        <div>
          <p>
            <BsShareFill />
            Share
          </p>
          <p>
            <FaDiscord className={style.social__icon} />
            <FaFacebookF className={style.social__icon}/>
            <FaTwitter className={style.social__icon} />
            <FaInstagram className={style.social__icon} />
            <FaLinkedinIn className={style.social__icon} />
          </p>
        </div>
      </div>
      <div className={style.recent__posts}>
        <h1>Recent Educational Content</h1>
        <div className={style.all__blog__posts}>
          <EducationalSlider/>
        </div>

        <div className={style.all__related__educational__content}>
            <EduCard
                  imgPath={Image_4}
                  title={"Introduction to Blockchain Technology"}
                  viewers={"4,560"}
                  time={"6 minutes"}
                  level={"Beginner"}
                />
                <EduCard
                  imgPath={Image_5}
                  title={
                    "Web3 Career Paths: A Guide to Finding the Right Fit for Your Skills and Interests"
                  }
                  viewers={"4,560"}
                  time={"6 minutes"}
                  level={"Intermediate"}
                />
                <EduCard
                  imgPath={Image_6}
                  title={
                    "Web3 Career Paths: A Guide to Finding the Right Fit for Your Skills and Interests"
                  }
                  viewers={"4,560"}
                  time={"6 minutes"}
                  level={"Expert"}
                />
        </div>

      </div>
    </div>
  </div>
  )
}

export default EducationalContent1
