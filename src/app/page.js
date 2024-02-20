"use client"
import styles from "./page.module.css";
import React, { useState } from "react";
import 'mathlive';

export default function Home() {
  const [value, setValue] = useState("");
  return (
    <main className={styles.main}>
      <math-field onInput={evt => setValue(evt.target.value)} >
        {value}
      </math-field>
    </main>
  );
}
