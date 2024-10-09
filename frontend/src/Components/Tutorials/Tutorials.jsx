import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Tutorials.css"; // Import the external CSS file

// Tutorials Component
const Tutorials = () => {
  const [tutorials, setTutorials] = useState([]);
  const navigate = useNavigate();
  const url =
    "https://raw.githubusercontent.com/berketonoz/blog/refs/heads/dev/frontend/public/tutorials.json";

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        data.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
        setTutorials(data);
      } catch (err) {
        console.error("Failed to fetch tutorials:", err);
      }
    };

    fetchTutorials();
  }, [url]);

  return (
    <div className="tutorial-container">
      <ul className="tutorial-list">
        {tutorials.map((tutorial) => (
          <li key={tutorial.id} className="tutorial-item">
            <h2
              className="tutorial-title"
              onClick={() => navigate(`/tutorial/${tutorial.id}`)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') navigate(`/tutorial/${tutorial.id}`);
              }}
              aria-label={`Navigate to ${tutorial.title}`}
            >
              {tutorial.title}
            </h2>
            <div className="tutorial-details">
              <div className="detail-group">
                <strong>Languages:</strong>
                <div className="badges">
                  {tutorial.programmingLanguages.map((language, index) => (
                    <span key={index} className="badge">
                      {language}
                    </span>
                  ))}
                </div>
              </div>
              <div className="detail-group">
                <strong>Category:</strong>
                <span className="badge">{tutorial.category}</span>
              </div>
              <div className="detail-group">
                <FontAwesomeIcon icon={faCalendar} />{" "}
                <span>{new Date(tutorial.publishDate).toLocaleDateString()}</span>
              </div>
              <div className="detail-group">
                <FontAwesomeIcon icon={faComment} />{" "}
                <span>{tutorial.comments.length} Comments</span>
              </div>
            </div>
            <p className="tutorial-description">{tutorial.description}</p>
            <div className="button-container">
              <Button
                variant="primary"
                onClick={() => navigate(`/tutorial/${tutorial.id}`)}
                className="read-button"
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

export default Tutorials;
