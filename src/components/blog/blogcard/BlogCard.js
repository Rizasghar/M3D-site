import React from "react";
import styles from "./BlogCard.module.css";
import Link from "next/link";
import { FaUser, FaClock, FaCalendar } from "react-icons/fa";

const BlogCard = ({ title, description, id, author, image, date }) => {
  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const formattedDate = `${dateObject.getFullYear()}-${String(
      dateObject.getMonth() + 1
    ).padStart(2, "0")}-${String(dateObject.getDate()).padStart(2, "0")}`;
    return formattedDate;
  };

  function formatTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return `${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    }
  }

  const renderDescription = (description, wordLimit) => {
    const formattedDescription = description
      .replace(/<b>/g, "<strong>")
      .replace(/<\/b>/g, "</strong>");
    const words = formattedDescription.split(" ");
    const truncatedDescription = words.slice(0, wordLimit).join(" ");
    return <div dangerouslySetInnerHTML={{ __html: truncatedDescription }} />;
  };

  return (
    
    <div className={styles.blogCard}>
      <div className={styles.imageContainer}>
        <img alt="" src={image} />
      </div>
      <div className={styles.blogContent}>
        <Link className={styles.blogCardTitle} href={`/blog/${id}`}>
          <div className={styles.blogCardTitle}>
            <h2>{title}</h2>
          </div>
        </Link>
        <p className={styles.blogCardContent}>
          {renderDescription(description, 40)}
        </p>
        <br />

        <div className={styles.stats}>
          <p>
            <FaUser />
            &nbsp;&nbsp;{author}
          </p>
          <p>
            <FaClock />
            &nbsp;&nbsp;{formatTime(date)}
          </p>
          <p>
            <FaCalendar />
            &nbsp;&nbsp;{formatDate(date)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
