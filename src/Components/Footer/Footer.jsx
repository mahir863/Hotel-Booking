import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Vivanta Resort | Hotel Room Book</h2>
      <p>
        &copy; <span>{year}</span> Team WebCoders.com - All Rights Copyright
        Reserved To{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://vivaanintellects.com/"
        >
          Team WebCoders
        </a>
      </p>
    </footer>
  );
}
