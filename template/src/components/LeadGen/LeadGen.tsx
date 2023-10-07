import React, { useState } from "react";

import styles from "./LeadGen.module.css";

export const LeadGen = () => {
  const [joined, setJoined] = useState(false);
  const [email, setEmail] = useState(null);

  const handleChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  const submit = async () => {
    if (!email) {
      return;
    }

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email,
        subject: "[Simple Home Page] New Subscriber!", // TODO: Replace this
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      return;
    }

    setJoined(true);
  };

  return (
    <section className={styles.subscribeSection}>
      {joined ? (
        <>
          {/* TODO: Use the following div below, or replace this */}
          <div>You have joined the waitlist!</div>
        </>
      ) : (
        <>
          {/* TODO: Use the following div below, or replace this */}
          <div>
            Are you interested in our product? Join the waitlist with your
            e-mail!
          </div>

          <div className={styles.inputContainer}>
            <input
              className={styles.joinInput}
              type="text"
              placeholder="email@gmail.com"
              onChange={handleChange}
            />
            <input
              className={styles.joinBtn}
              type="submit"
              value="Join"
              onClick={submit}
            />
          </div>
        </>
      )}
    </section>
  );
};
