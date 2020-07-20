import React from "react";
import "./index.css";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="openSource">
        <a
          href="https://github.com/Aiia22/weather-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>
        <span>, by Tatiana Leclerc</span>
      </div>
    </div>
  );
}
