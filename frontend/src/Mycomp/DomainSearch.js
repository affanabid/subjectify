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

  const [youtubePlaylists, setYoutubePlaylists] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);

    try {
      // const BASE_URL = "http://127.0.0.1:8000";
      // const roadmapRes = await fetch(`${BASE_URL}/api/roadmaps?query=${searchTerm}`);
      // const githubRes = await fetch(`${BASE_URL}/api/github?query=${searchTerm}`);
      // const ytRes = await fetch(`${BASE_URL}/api/youtube?query=${searchTerm}`);
      // const blogRes = await fetch(`${BASE_URL}/api/blogs?query=${searchTerm}`);

      // Fetch roadmaps
      const roadmapRes = await fetch(`https://subjectify-0t9q.onrender.com/api/roadmaps?query=${searchTerm}`);
      const roadmapData = await roadmapRes.json();

      // Fetch GitHub repos
      const githubRes = await fetch(`https://subjectify-0t9q.onrender.com/api/github?query=${searchTerm}`);
      const githubData = await githubRes.json();

      // Fetch YouTube
      const ytRes = await fetch(`https://subjectify-0t9q.onrender.com/api/youtube?query=${searchTerm}`);
      const ytData = await ytRes.json();

      // Fetch Blogs
      const blogRes = await fetch(`https://subjectify-0t9q.onrender.com/api/blogs?query=${searchTerm}`);
      const blogData = await blogRes.json();

      setRoadmaps(roadmapData.results || []);
      setGithubRepos(githubData.results || []);
      setYoutubePlaylists(ytData.results || []);
      setBlogs(blogData.results || []);

      // Collect messages if any
      let messages = [];
      if (roadmapData.message) messages.push(roadmapData.message);
      if (ytData.message) messages.push(ytData.message);
      if (blogData.message) messages.push(blogData.message);

      if (messages.length > 0) {
        setError(messages.join(" | "));
      }

    } catch (err) {
      console.error(err);
      setError('Failed to fetch results. Please try again.');
      setRoadmaps([]);
      setGithubRepos([]);
      setYoutubePlaylists([]);
      setBlogs([]);
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
                    <h3>About Image:</h3>
                    <p>{roadmap.title}</p>
                    <button 
                      className="repo-link-btn btn"
                      onClick={() => window.open(roadmap.image_url, '_blank', 'noopener,noreferrer')}
                    >
                      Open
                    </button>
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
                    <h3>Description</h3>
                    <p className="stars">⭐ {repo.stars}</p>
                    <p>{repo.description}</p>
                    <button 
                      className="repo-link-btn btn"
                      onClick={() => window.open(repo.url, '_blank', 'noopener,noreferrer')}
                    >
                      View Repository
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}

          {youtubePlaylists.length > 0 && (
            <>
              <h2 className="poptitle">YouTube Playlists</h2>
              <div className="popdomains courses-grid">
                {youtubePlaylists.map((playlist, idx) => (
                  <div key={idx} className="card-body">
                    <img src={playlist.thumbnail} alt={playlist.title} style={{ width: "100%", height: "auto" }} />
                    <h3>{playlist.title}</h3>
                    <p>{playlist.channelTitle}</p>
                    <button
                      className="repo-link-btn btn"
                      onClick={() => window.open(`https://www.youtube.com/playlist?list=${playlist.playlistId}`, '_blank', 'noopener,noreferrer')}
                    >
                      Watch
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}

          {blogs.length > 0 && (
            <>
              <h2 className="poptitle">Relevant Blogs</h2>
              <div className="popdomains courses-grid">
                {blogs.map((article, idx) => (
                  <div key={idx} className="card-body">
                    <h3>{article.title}</h3>
                    <button
                      className="repo-link-btn btn"
                      onClick={() => window.open(article.url, '_blank', 'noopener,noreferrer')}
                    >
                      Read
                    </button>
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
