//domainsearch.js

import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./styles/DomainSearch.css";

const DomainSearch = () => {
  // const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [roadmaps, setRoadmaps] = useState([]);
  const [githubRepos, setGithubRepos] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
  
    setLoading(true);
    setError(null);
  
    try {
      // Fetch roadmaps
      const roadmapRes = await fetch(`https://subjectify-0t9q.onrender.com/api/roadmaps?query=${searchTerm}`);
      const roadmapData = await roadmapRes.json();
  
      // Fetch GitHub repos
      const githubRes = await fetch(`https://subjectify-0t9q.onrender.com/api/github?query=${searchTerm}`);
      const githubData = await githubRes.json();
  
      setRoadmaps(roadmapData.results || []);
      setGithubRepos(githubData.results || []);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch results. Please try again.');
      setRoadmaps([]);
      setGithubRepos([]);
    } finally {
      setLoading(false);
    }
  };

  // const handleCourseClick = (courseId) => {
  //   navigate(`/course/${courseId}`);
  // };

  return (
    <div className="domain">
      <div className="domain-body">
        <div className="upp">
          <div className="searcbar">
            <label htmlFor="domainid">
              <h1>Search Domain</h1>
            </label>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                className="domainname"
                value={searchTerm}
                placeholder="Enter Domain Name"
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: "500px" }}
              />
              <div className="btn-bar">
                <button type="submit" className="btn">
                  Search
                </button>
              </div>
            </form>
          </div>

          {loading && <div className="loading">Searching...</div>}
          {error && <div className="error">{error}</div>}

          {roadmaps.length > 0 && (
            <>
              <h2 className="poptitle">Learning Roadmaps</h2>
              <div className="popdomains courses-grid">
                {roadmaps.map((roadmap, idx) => (
                  <div key={idx} className="card-body">
                    <img src={roadmap.image_url} alt={roadmap.title} style={{ width: "100%", height: "auto" }} />
                    <h3>{roadmap.title}</h3>
                  </div>
                ))}
              </div>
            </>
          )}

          {githubRepos.length > 0 && (
            <>
              <h2 className="poptitle">Top GitHub Repositories</h2>
              <div className="popdomains courses-grid">
                {githubRepos.map((repo, idx) => (
                  <div key={idx} className="card-body">
                    <h3>
                      <a href={repo.url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                      </a>
                    </h3>
                    <p>{repo.description}</p>
                    <p>⭐ {repo.stars}</p>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default DomainSearch;
