import React from "react";
import Terms from "../../components/Terms/terms";
import styles from "./TermsYCopyright.module.css";

const TermsYCopyright = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["terms"]}>
        <Terms />
      </div>
    </div>
  );
};

export default TermsYCopyright;
