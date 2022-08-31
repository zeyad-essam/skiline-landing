import React from "react";
import Image from "next/image";

import classes from "./Services.module.css";

const Services = () => {
  return (
    <section className={classes.services}>
      <div className="container">
        <div className={classes.services_top}>
          <h2 className="heading">
            <span>All-In-One</span> Cloud Software.
          </h2>
          <p className="heading_para">
            Skilline is one powerful online software suite that combines all the
            <br />
            tools needed to run a successful school or office.
          </p>
        </div>
        <div className={classes.services_bottom}>
          <div className={classes.service_card}>
            <div className={classes.card_header}>
              <Image
                src="/billing.png"
                width={100}
                height={100}
                alt=""
                priority
              />
            </div>
            <h3>
              Online Billing,
              <br /> Invoicing, &amp; Contracts
            </h3>
            <p>
              Simple and secure control of your organization’s financial and
              legal transactions. Send customized invoices and contracts
            </p>
          </div>
          <div className={classes.service_card}>
            <div className={classes.card_header}>
              <Image
                src="/calendar.png"
                width={100}
                height={100}
                alt=""
                priority
              />
            </div>
            <h3>
              Easy Scheduling &amp;
              <br /> Attendance Tracking
            </h3>
            <p>
              Schedule and reserve classrooms at one campus or multiple
              campuses. Keep detailed records of student attendance
            </p>
          </div>
          <div className={classes.service_card}>
            <div className={classes.card_header}>
              <Image
                src="/customer.png"
                width={100}
                height={100}
                alt=""
                priority
              />
            </div>
            <h3>Customer Tracking</h3>
            <p>
              Automate and track emails to individuals or groups. Skilline’s
              built-in system helps organize your organization
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
