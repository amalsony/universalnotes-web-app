import React from "react";
import Link from "next/link";

// Styles
import styles from "./TextLogo.module.css";

// Components
import LogoSVG from "./Logo";

export default function Logo({ color, ...props }: { color?: string }) {
  return (
    <div>
      <Link href="/" className={styles.logo_container}>
        <LogoSVG width="22" height="22" color={color ? color : "#0a96fb"} />
        <h1
          className={styles.logo_title}
          style={{ color: `${color ? color : "#000"}` }}
        >
          UniversalNotes
        </h1>
      </Link>
    </div>
  );
}
