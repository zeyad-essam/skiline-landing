import React from "react";
import Image from "next/image";

import classes from "./Companies.module.css";

const Companies = () => {
  return (
    <section className={classes.companies}>
      <p>Trusted by 5,000+ Companies Worldwide</p>
      <div className={classes.image_wrapper}>
        <Image
          src="/companies.png"
          alt="companies image"
          width={1338}
          height={69}
          layout="responsive"
          priority
        />
      </div>
    </section>
  );
};

export default Companies;
