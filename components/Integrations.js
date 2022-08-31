import Image from "next/image";
import Link from "next/link";
import React from "react";

import classes from "./Integrations.module.css";

const Integrations = () => {
  return (
    <section className={classes.integrations}>
      <div className="container">
        <div className={classes.integrations_inner}>
          <div className={classes.integrations_image}>
            <div>
              <Image
                src="/integrations.webp"
                width={500}
                height={459}
                alt="integrations image"
                layout="responsive"
                priority
              />
            </div>
          </div>
          <div className={classes.integrations_text}>
            <div className={classes.integrations_title}>
              <Image src="/line.png" width={50} height={2} alt="___" priority />
              Integrations
            </div>
            <h3>
              200+ educational tools and platform <span>integrations</span>
            </h3>
            <p>
              Schoology has every tool your classroom needs and comes
              pre-integrated with more than 200+ tools, student information
              systems (SIS), and education platforms.
            </p>
            <div className={classes.integrations_link}>
              <Link href="#">
                <a className="link_button">See All Integrations</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
