"use client";

import React from "react";

import { LeadGen } from "@/components/LeadGen";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <h1 className={styles.pageTitle}>
          {/* TODO: Replace this text */}
          Simple Home Page
        </h1>

        <h2 className={styles.pageSubtitle}>
          {/* TODO: Replace this text */}
          Generate simple home pages fast
        </h2>
      </section>

      {/* TODO: Remove this if you don't want to collect leads */}
      <LeadGen />
    </main>
  );
}
