import React from "react";

export default function Footer() {
  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {currentYear}</p>
    </footer>
  );
}


