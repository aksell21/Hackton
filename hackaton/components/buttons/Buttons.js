import { useState } from "react";
import styles from "./Buttons.module.css";

// Button is missing it's styling, but it can be easily be edited as we need. Can be made primary or secondary button.

//Added some basic CSS rules. - Sabino

const Buttons = ({ children, ...props }) => {
  return (
    <div className={styles.buttonDiv}>
      <button {...props} className={styles.button}>
        {children}
      </button>
    </div>
  );
};

export default Buttons;
