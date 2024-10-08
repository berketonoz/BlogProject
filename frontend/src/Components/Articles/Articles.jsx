import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Articles.css"; // Import the external CSS file

// Static list of beginner-friendly data structure articles
const articles = [
  {
    id: 1,
    title: "Understanding Stacks: A Comprehensive Guide",
    category: "Data Structures",
    publishDate: "2024-09-24",
    programmingLanguages: ["C++", "Python"],
    description:
      "Learn the fundamentals of stacks, a crucial data structure used for managing data in a LIFO (Last In, First Out) manner, along with practical examples in C++ and Python.",
    comments: [],
  },
  {
    id: 2,
    title: "Linked Lists Explained: From Basics to Advanced",
    category: "Data Structures",
    publishDate: "2024-09-26",
    programmingLanguages: ["C++", "Python"],
    description:
      "Explore linked lists, a versatile data structure that allows for dynamic memory allocation, with clear examples and comparisons to arrays in C++ and Python.",
    comments: [],
  },
];

// Articles Component
const Articles = () => {
  const navigate = useNavigate();
  return (
    <div className="article-container">
      <h1 className="article-header">Articles</h1>
      <ul className="article-list">
        {articles.map((article) => (
          <li key={article.id} className="article-item">
            <h2 className="title">{article.title}</h2>
            <div className="article-detail-header">
              <p className="info">
                <strong>Programming Languages:</strong>
                <span className="info-item">
                  {article.programmingLanguages.map((language, index) => (
                    <span key={index} className="item-badge">
                      {language}
                    </span>
                  ))}
                </span>
              </p>
              <p className="info">
                <strong>Category:</strong>
                <span className="info-item">
                  <span className="item-badge">{article.category}</span>
                </span>
              </p>
              <p className="info">
                <FontAwesomeIcon icon={faCalendar} /> {article.publishDate}
              </p>
              <p className="info">
                <FontAwesomeIcon icon={faComment} /> {article.comments.length}
              </p>
            </div>
            <p className="description">{article.description}</p>
            <div className="button-container">
              <Button
                variant="primary"
                onClick={() => navigate(`/blog/article/${article.id}`)}
              >
                Continue Reading
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
