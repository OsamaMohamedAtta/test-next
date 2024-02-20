"use client"
import "./page.css";
import React, { useState, useEffect } from "react";
import 'mathlive';
import '/node_modules/mathlive/dist/mathlive-static.css';
import '/node_modules/mathlive/dist/mathlive-fonts.css';

export default function Home() {
  const [value, setValue] = useState("");

  useEffect(() => {
    handleMathFailed()
  }, [value]);

  const handleMathFailed = () => {
    document.querySelector('.layer').classList.replace('hide-layer', 'show-layer');
    setTimeout(() => {
      document.querySelector('.layer').classList.replace('show-layer', 'hide-layer');
    }, 2000);
  }
  return (
    <main className="main">
      <math-field onInput={evt => setValue(evt.target.value)} >
        {value}
      </math-field>
      <div className="layer hide-layer"></div>
    </main>
  );
}
