import React from 'react';
import './App.css';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import { projects } from './data';
import { FaGithub, FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Public assets are served from the site root. Put your image at public/Assets/Image/Profile.jpg */}
      <img
        className="profile"
        src={process.env.PUBLIC_URL + '/Assets/Image/Profile.jpg'}
        alt="Rahul Shakya Profile"
        loading="lazy"
      />

      <main className="container">
        <section id="about" className="card">
          <h2>About</h2>
          <p style={{fontSize: '18px'}}>
            Hi - I'm <b>Rahul Shakya</b>, a dedicated, proud, enthusiastic AI Engineer with a passion for developing innovative applications. <br />
            I build intelligent applications by combining cutting-edge AI technologies with seamless front-end user experiences. <br />
            With a Master's focus on Data Science and AI and solid experience in frontend development using JavaScript and modern frameworks, I create solutions that are both smart and user-friendly.
          </p>
        </section>

        <section id="projects" className="card">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>

        <section id="skills" className="card">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>AI Engineer</li>
            <li>React - JavaScript</li>
            <li>Flutter - Dart</li>
            <li>Java</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>Advanced Photography</li>
          </ul>
        </section>

        <section id="contact" className="card">
          <h2>Contact</h2>
         <p>
            Personal Email: <a href="mailto:shakyarahul435@gmail.com">shakyarahul435@gmail.com</a>
          </p>
          <p>
            Student Email: <a href="mailto:st125982@ait.asia">st125982@ait.asia</a>
          </p>
          <div className="social-links">
            <a href="https://github.com/shakyarahul435" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rahul-shakya-553a34258/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@ShakyaRahul" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            {/* <a href="https://www.facebook.com/rahul.shakya.961/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a> */}
            <a href="https://www.instagram.com/shakyarahulphotography/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
          <p style={{marginTop: '0.5rem'}}>
            <a className="btn-download" href={process.env.PUBLIC_URL + '/Assets/pdf/RahulShakya_st125982_CV.pdf'} download>
              Download CV (PDF)
            </a>
          </p>
        </section>
      </main>

      <footer className="app-footer">
        <small>© Rahul Shakya - Built with React</small>
      </footer>
    </div>
  );
}

export default App;
