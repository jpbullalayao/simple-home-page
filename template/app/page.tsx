"use client";

import React, { useState } from "react";

import styles from "./page.module.css";

export default function Home() {
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
    <main className={styles.main}>
      <section>
        <h1 className={styles.pageTitle}>
          {/* TODO: Replace this text */}
          Simple Home Page
        </h1>

        <h2 className={styles.pageSubtitle}>
          {/* TODO: Replace this text */}
          The simplest home page template for new projects
        </h2>
      </section>

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

      <section></section>
    </main>
  );
}
