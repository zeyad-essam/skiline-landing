import React from "react";
import Image from "next/image";

import classes from "./News.module.css";
import Link from "next/link";

const News = () => {
  return (
    <section className={classes.news}>
      <div className="container">
        <h3 className="heading">Lastest News and Resources</h3>
        <p className="heading_para">
          See the developments that have occurred to Skillines in the world
        </p>
        <div className={classes.news_wrapper}>
          <div className={classes.news_main}>
            <div style={{ marginBottom: 15 }}>
              <Image
                src="/news-main.png"
                width={640}
                height={340}
                alt="news-main"
                layout="responsive"
                priority
              />
            </div>
            <div className={classes.news_tag}>
              <span>news</span>
            </div>
            <h4>
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h4>
            <p>
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <Link href="#">Read more</Link>
          </div>
          <div className={classes.news_list}>
            <ul>
              <li className={classes.news_item}>
                <Link href="#">
                  <a>
                    <div className={classes.image_wrapper}>
                      <Image
                        src="/school-girl.png"
                        width={280}
                        height={200}
                        alt="school girl"
                        priority
                      />
                      <div className={classes.news_tag}>
                        <span>RELEASE</span>
                      </div>
                    </div>
                    <div className={classes.list_text}>
                      <h4>
                        Class Technologies Inc. Closes $30 Million Series A
                        Financing to Meet High Demand
                      </h4>
                      <p>
                        Class Technologies Inc., the company that created
                        Class,...
                      </p>
                    </div>
                  </a>
                </Link>
              </li>
              <li className={classes.news_item}>
                <Link href="#">
                  <a>
                    <div className={classes.image_wrapper}>
                      <Image
                        src="/zoom.png"
                        width={280}
                        height={200}
                        alt="zoom call image"
                        priority
                      />
                      <div className={classes.news_tag}>
                        <span>news</span>
                      </div>
                    </div>
                    <div className={classes.list_text}>
                      <h4>
                        Zoom’s earliest investors are betting millions on a
                        better Zoom for schools
                      </h4>
                      <p>
                        Zoom was never created to be a consumer product.
                        Nonetheless, the...
                      </p>
                    </div>
                  </a>
                </Link>
              </li>
              <li className={classes.news_item}>
                <Link href="#">
                  <a>
                    <div className={classes.image_wrapper}>
                      <Image
                        src="/black-board.png"
                        width={280}
                        height={200}
                        alt="cat image"
                        priority
                      />
                      <div className={classes.news_tag}>
                        <span>news</span>
                      </div>
                    </div>
                    <div className={classes.list_text}>
                      <h4>
                        Former Blackboard CEO Raises $16M to Bring LMS Features
                        to Zoom Classrooms
                      </h4>
                      <p>
                        This year, investors have reaped big financial returns
                        from betting on Zoom...
                      </p>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
