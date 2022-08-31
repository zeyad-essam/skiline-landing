import Image from "next/image";
import Link from "next/link";
import React from "react";

import classes from "./Features.module.css";

const Features = () => {
  return (
    <section className={classes.features}>
      <div className="container">
        <h2 className="heading">
          Our <span>Features</span>
        </h2>
        <p className="heading_para">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
        <section>
          <div>
            <Image
              src="/interface.png"
              width={956}
              height={582}
              alt="interface"
              layout="responsive"
              priority
            />
          </div>
          <div>
            <h3>
              A <span>user interface</span> designed for the classroom
            </h3>
            <ul>
              <li>
                <div className={classes.icon_wrapper}>
                  <Image src="/grid.png" alt="grid" width={27} height={26} />
                </div>
                <p>
                  Teachers don’t get lost in the grid view and have a dedicated
                  Podium space.
                </p>
              </li>
              <li>
                <div className={classes.icon_wrapper}>
                  <Image
                    src="/presenters.png"
                    alt="presenters"
                    width={28}
                    height={26}
                    priority
                  />
                </div>
                <p>
                  TA’s and presenters can be moved to the front of the class.
                </p>
              </li>
              <li>
                <div className={classes.icon_wrapper}>
                  <Image
                    src="/people.png"
                    alt="people"
                    width={30}
                    height={26}
                    priority
                  />
                </div>
                <p>
                  Teachers can easily see all students and class data at one
                  time.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <h3>
              <span>Tools</span> For Teachers
              <br /> And Learners
            </h3>
            <p>
              Class has a dynamic set of teaching tools built to be deployed and
              used during class. Teachers can handout assignments in real-time
              for students to complete and submit.
            </p>
          </div>
          <div className={classes.image_wrapper}>
            <div>
              <Image
                src="/tools.png"
                width={679}
                height={611}
                alt="tools"
                layout="responsive"
                priority
              />
            </div>
          </div>
        </section>
        <section>
          <div className={classes.image_wrapper}>
            <div>
              <Image
                src="/tests.png"
                width={670}
                height={724}
                alt="tests"
                layout="responsive"
                priority
              />
            </div>
          </div>
          <div>
            <h3>
              Assessments,
              <br /> <span>Quizzes</span>, Tests
            </h3>
            <p>
              Easily launch live assignments, quizzes, and tests. Student
              results are automatically entered in the online gradebook.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h3>
              <span>Class Management</span> Tools for Educators
            </h3>
            <p>
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </p>
          </div>
          <div className={classes.image_wrapper}>
            <div>
              <Image
                src="/grade-book.png"
                width={881}
                height={624}
                alt="grade book"
                layout="responsive"
                priority
              />
            </div>
          </div>
        </section>
        <section>
          <div className={classes.image_wrapper}>
            <div>
              <Image
                src="/private.png"
                width={767}
                height={565}
                alt="private discussion"
                layout="responsive"
                priority
              />
            </div>
          </div>
          <div>
            <h3>
              One-on-One
              <br /> <span>Discussions</span>
            </h3>
            <p>
              Teachers and teacher assistants can talk with students privately
              without leaving the Zoom environment.
            </p>
          </div>
        </section>
        <div className={classes.features_link}>
          <Link href="#">
            <a className="link_button">see more features</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
