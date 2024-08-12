/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styles from "./CourseList.module.css";
import PlaceHolderImage from "../../assets/images/placeholder.jpg";

function CourseList() {
  return (
    <div className={styles.courseListContainer}>
      <div className={styles.courseListInnerContainer}>
        <div className={styles.gridContainer}>
          <div className={styles.card}>
            <img
              src={PlaceHolderImage}
              alt="Quiz"
              className={styles.cardImage}
            />
            <div className={styles.cardOverlay}>
              <h2> Quiz </h2>
              <p>Test your knowledge with a randomly generated quiz </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseList;
