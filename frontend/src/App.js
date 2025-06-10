// app.js

import './App.css';
import Header from "./Mycomp/Header.js";
import Hero from "./Mycomp/Hero.js";
import DomainSearch from "./Mycomp/DomainSearch.js";
import CourseDetails from './Mycomp/CourseDetails';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <div className='home'>
              <Hero />
            </div>
          } />
          <Route path="/DomainSearch" element={<DomainSearch />} />
          <Route path="/course/:courseId" element={<CourseDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
