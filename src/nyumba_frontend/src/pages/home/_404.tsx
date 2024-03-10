import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Not Found</h1>
      <span role="img" aria-label="Sad Emoji" style={styles.emoji}>
        😢
      </span>
      <p style={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" style={styles.button}>
        Go Back Home
      </Link>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  
  container: {
    textAlign: "center",
    padding: "0px",
    margin: "0",
    overflow: "hidden",
  },
  heading: {
    fontSize: "6em",
    color: "#333",
  },
  emoji: {
    fontSize: "10em",
    margin: "20px",
    display: "block",
  },
  message: {
    fontSize: "1.2em",
    color: "#666",
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#3B6F3B",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "1em",
    transition: "background-color 0.3s ease",
  },
};

export default NotFoundPage;
