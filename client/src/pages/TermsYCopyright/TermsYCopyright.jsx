import React from "react";
import Terms from "../../components/Terms/terms";
import Copyright from "../../components/Copyright/Copyright";
import styles from "./TermsYCopyright.module.css";

const TermsYCopyright = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["terms"]}>
        <Terms />
      </div>
      <div className={styles["copyright"]}>
        <Copyright />
      </div>
    </div>
  );
};

export default TermsYCopyright;
