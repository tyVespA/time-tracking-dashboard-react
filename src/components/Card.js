import React from "react";
import styles from "../styles/Card.module.css";
import IconEllepsis from "../assets/icon-ellipsis.svg";
import UserPfp from "../assets/image-jeremy.png";

function Card({ title }) {
  return (
    <div className={styles.cardContainer}>
      {/* <h2>{title}</h2> */}
      <div className={styles.cardTitle}>
        <h2>Title</h2>
        <button>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className={styles.cardBody}>
        <p>32hrs</p>
        <p className={styles.recap}>last week - hrs</p>
      </div>
    </div>
  );
}

export default Card;
