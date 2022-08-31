import React from "react";
import Image from "next/image";
import Link from "next/link";

import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero_wrapper}>
      <div className="container">
        <div className={classes.hero}>
          <div className={classes.hero_text}>
            <h1>
              <span>Studying</span> Online is now <br />
              much easier
            </h1>
            <p>
              Skilline is intresting plateform that will tech you in more an
              interactive way
            </p>
            <div className={classes.hero_links}>
              <div className={classes.join_link}>
                <Link href="#">Join for free</Link>
              </div>
              <div className={classes.play_link}>
                <Link href="#">
                  <a>
                    <div>
                      <Image
                        src="/play.png"
                        width={50}
                        height={50}
                        alt="play"
                        priority
                      />
                      <span>Watch how its work</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.hero_image}>
            <div className={classes.image_wrapper}>
              <Image
                src="/hero.png"
                width={804}
                height={754}
                alt="main image"
                layout="responsive"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
