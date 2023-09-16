import React from "react";
import style from "../styles/Events.module.css";
import Button from "../components/Button/Button";
import Timer from "../components/Timer/Timer"
import person_1 from "../assets/Events_Assets/image 53.png";
import frame_1 from "../assets/Events_Assets/Component 27.png";
import frame_2 from "../assets/Events_Assets/Component 29.png";
import frame_3 from "../assets/Events_Assets/Component 30.png";
import frame_4 from "../assets/Events_Assets/Component 28.png";
import mobile_frame_1 from "../assets/Events_Assets/Component 43.png";
import mobile_frame_2 from "../assets/Events_Assets/Component 44.png";
import mobile_frame_3 from "../assets/Events_Assets/Component 46.png";
import mobile_frame_4 from "../assets/Events_Assets/Component 47.png";
import polygon_3 from "../assets/Events_Assets/Polygon 3(1).png";
import polygon_4 from "../assets/Events_Assets/Polygon 5(1).png";
import Union from "../assets/Events_Assets/Union.png";
import { CiLocationOn } from "react-icons/ci";
import { BsArrowUpRight } from "react-icons/bs";

const Events = () => {
  return (
    <div >
      <section className={style.first__section}>
        <div className={style.first__section__flex}>
            <p className={style.first__section__para}>June 24 - 25 2023</p>
            <h1><span>dApps over apps</span> conference Unilag 2023</h1>

            <p className={style.first__section__para2}>
              Join the dapps over apps community and propel your career in the
              blockchain ecosystem. Go from noob to expert, join the community of
              web/app developers, creatives, NFT traders, an
            </p>

            <div>
              <Timer/>
            </div>

            <div className={style.first__section__flex__btn}>
              <div className={style.first__section__first__btn__div}>
                <button className={style.first__section__first__btn}>Add to Calendar</button>
              </div>
              <Button
                bgColor={
                  "linear-gradient(90deg, var(--secondary-bg-color) 0%, var(--asset-bg-color) 100%)"
                }
                text="Get tickets on Eventbrite"
              />
            </div>
        </div>
            <div className={style.first__section__flex__img}>
              <img src={polygon_3} alt=''/>
              <img src={polygon_4} alt=''/>
            </div>
      </section>

      <section className={style.second__section}>
        <button>
          Become a Sponsor <BsArrowUpRight className={style.arrow__icon} />
        </button>
        <div className={style.second__section__text}>
          <p className={style.second__section__first__para}>About the dApps over apps event</p>
          <h1 className={style.second__section__header}>
            Take Advantage of the opportunities presented to you by the{" "}
            <span>Web3</span>
          </h1>
          <p>
            Join the dapps over apps community and propel your career in the
            blockchain ecosystem. Go from noob to expert, join the community of
            web/app developers, creatives, <span>NFT traders</span>, and general
            masses moving to the blockchain.
          </p>
          <p>
            Join the dapps over apps community and propel your career in the
            blockchain ecosystem. Go from noob to expert, join the community of
            web/app developers, creatives, NFT traders, and general masses
            moving to the <span>blockchain</span>.
          </p>
          <p>
            Join the dapps over apps community and propel your career in the
            blockchain ecosystem. Go from noob to expert, join the community of
            web/app developers, creatives, NFT
          </p>
        </div>
        <img src={person_1} alt="" />
      </section>

      <section className={style.third__section} >
        <p className={style.third__section__para}>Why should we see you there?</p>
        <h1 className={style.third__section__header}>Great reasons to attend the dApps over Apps Conference.</h1>
        <div className={style.angry_grid}>
          <div className={style.item_0}>
            <img src={frame_1} alt="" className={style.frame_1} />
            <div className={style.item_0_overlay}>
              <h2>Featuring Industry Experts</h2>
              <p>The 2023 Decentralized Intelligence Summit will feature some of the top speakers across the industry.</p>
              <Button
                bgColor={
                  "linear-gradient(90deg, var(--secondary-bg-color) 0%, var(--asset-bg-color) 100%)"
                }
                text="Get tickets on Eventbrite"
              />
            </div>
            <img src={mobile_frame_1} alt="" className={style.mobile_frame_1}/>
          </div>
          <div className={style.item_1}>
            <img src={frame_2} alt="" className={style.frame_2} />
            <div className={style.item_1_overlay}>
              <h2>Over 50+ talks</h2>
              <p>Among other things, we shall be exploring key ethical considerations surrounding the use of AI in decentralized environments, including issues of bias, fairness, and accountability.</p>
              <Button
                bgColor={
                  "linear-gradient(90deg, var(--secondary-bg-color) 0%, var(--asset-bg-color) 100%)"
                }
                text="Get tickets on Eventbrite"
              />
            </div>
            <img src={mobile_frame_2} alt="" className={style.mobile_frame_2}/>
          </div>
          <div className={style.item_2}>
            <img src={frame_3} alt="" className={style.frame_3} />
            <div className={style.item_2_overlay}>
              <h2>Networking</h2>
              <p>We have never stopped building this ecosystem and this conference will be hosted on the strength of those early foundations. We have connected thousands to their destinies in the decentralized future. We won't stop building!</p>
              <Button
                bgColor={
                  "linear-gradient(90deg, var(--secondary-bg-color) 0%, var(--asset-bg-color) 100%)"
                }
                text="Get tickets on Eventbrite"
              />
            </div>
            <img src={mobile_frame_3} alt="" className={style.mobile_frame_3}/>
          </div>
          <div className={style.item_3}>
            <img src={frame_4} alt="" className={style.frame_4} />
            <div className={style.item_3_overlay}>
              <h2>Biggest Blockchain & Web3 Conference in Africa</h2>
              <p>While growing this community here in Nigeria in the past 7 years, we've created the largest gathering of crypto investors, developers, and industry professionals in the entire country and across Africa.</p>
              <Button
                bgColor={
                  "linear-gradient(90deg, var(--secondary-bg-color) 0%, var(--asset-bg-color) 100%)"
                }
                text="Get tickets on Eventbrite"
              />
            </div>
            <img src={mobile_frame_4} alt="" className={style.mobile_frame_4}/>
          </div>
        </div>
      </section>

      <section className={style.fourth__section}>
        <div className={style.angry_grid_2}>
            <img src={Union} alt=""/>
        </div>
        <div>
          <p>Conference Venue</p>
          <h1>The Civic Center Royal Banquet Hall</h1>
          <p className={style.fourth__section__second__para}>The Civic Center is located in Victoria Island, Lagos Nigeria. It is one of the largest and most prestigeous Convention Centers in the city. It has been the venue for many national and international events in the past and offers state of art event hosting services. It has been the venue of all our tech conferences since 2017.</p>
          <div className={style.button__flex}>
            <button className={style.event__location}>View Event Location <CiLocationOn className={style.location__icon}/></button>
            <Button
            bgColor={
              "linear-gradient(90deg, var(--secondary-bg-color) 0%, var(--asset-bg-color) 100%)"
            }
            text="Get tickets on Eventbrite"
          />
          </div>
        </div>
      </section>


      <section className={style.mobile__fourth__section}>
        <div>
          <p>Conference Venue</p>
          <h1>The Civic Center Royal Banquet Hall</h1>
          <p className={style.fourth__section__second__para}>The Civic Center is located in Victoria Island, Lagos Nigeria. It is one of the largest and most prestigeous Convention Centers in the city. It has been the venue for many national and international events in the past and offers state of art event hosting services. It has been the venue of all our tech conferences since 2017.</p>
          <div className={style.angry_grid_2}>
            <img src={Union} alt=""/>
        </div>
          <div className={style.button__flex}>
            <button className={style.event__location}>View Event Location <CiLocationOn className={style.location__icon}/></button>
            <Button
            bgColor={
              "linear-gradient(90deg, var(--secondary-bg-color) 0%, var(--asset-bg-color) 100%)"
            }
            text="Get tickets on Eventbrite"
          />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
