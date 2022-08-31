import Image from "next/image";
import Link from "next/link";
import React from "react";

import classes from "./Definition.module.css";

const Definition = () => {
  return (
    <section className={classes.definition}>
      <div className="container">
        <div className={classes.definition_text}>
          <h2 className="heading">
            What is <span>skiline?</span>
          </h2>
          <p className="heading_para">
            Skilline is a platform that allows educators to create online
            classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>
        <div className={classes.definition_links}>
          <div className={classes.definition_link}>
            <Image
              src="/instructors.png"
              width={600}
              height={400}
              alt="constructor"
              layout="responsive"
              priority
            />
            <div>
              <h3>FOR instructors</h3>
              <Link href="#">start a class today</Link>
            </div>
          </div>
          <div className={classes.definition_link}>
            <Image
              src="/students.png"
              width={600}
              height={400}
              alt="students"
              layout="responsive"
              priority
            />
            <div>
              <h3>FOR students</h3>
              <Link href="#">start a class today</Link>
            </div>
          </div>
        </div>
        <div className={classes.classroom}>
          <div className={classes.classroom_text}>
            <h3>
              Everything you can do in a physical classroom,
              <span>you can do with Skilline</span>
            </h3>
            <p>
              Skilline’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <Link href="#">Learn more</Link>
          </div>
          <div className={classes.classroom_image}>
            <Image
              src="/classroom.png"
              width={705}
              height={472}
              alt="class room"
              layout="responsive"
              priority
            />
            <div className={classes.play_button}>
              <Image
                src="/play.png"
                width={50}
                height={50}
                alt="play button"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Definition;
