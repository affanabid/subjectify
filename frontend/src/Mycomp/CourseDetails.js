// coursedetails.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './styles/CourseDetails.css';

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/course/${courseId}`);
        if (!response.ok) {
          throw new Error('Course not found');
        }
        const data = await response.json();
        setCourse(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  if (loading) {
    return (
      <div className="course-details">
        <div className="course-details-container">
          <div className="loading">Loading course details...</div>
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="course-details">
        <div className="course-not-found">
          <h1>Course not found</h1>
          <button className="btn" onClick={() => navigate('/')}>Back to Search</button>
        </div>
      </div>
    );
  }

  return (
    <div className="course-details">
      <div className="course-details-container">
        <div className="course-header">
          <h1 className="course-title">{course.title}</h1>
          <div className="course-level">
            <span className="level-badge">{course.level}</span>
          </div>
        </div>

        <div className="course-content">
          <div className="course-info">
            <div className="info-section">
              <h2>Description</h2>
              <p>{course.description}</p>
            </div>

            <div className="info-section">
              <h2>Course Pathway</h2>
              <ul className="learning-points">
                {course.pathway.map((week, index) => (
                  <li key={index}>{week}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails; 