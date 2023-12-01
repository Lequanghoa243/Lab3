import React from 'react';


const App = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const profileImageStyle = {
    maxWidth: '200px',
    border: '4px solid #333',
    margin: '20px auto',
    display: 'block',
    borderRadius: '50%',
  };

  const menuStyle = {
    position: 'fixed',
    left: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#333',
    padding: '10px',
    textAlign: 'center',
    zIndex: '1000',
  };

  const menuItemStyle = {
    display: 'block',
    color: '#fff',
    textDecoration: 'none',
    marginBottom: '10px',
    cursor: 'pointer',
  };

  return (
    <div>
      {/* Menu */}
      <div style={menuStyle}>
        <a href="#about" style={menuItemStyle}>
          About Me
        </a>
        <a href="#education" style={menuItemStyle}>
          Education
        </a>
        <a href="#projects" style={menuItemStyle}>
          My Projects
        </a>
      </div>

      {/* Header */}
      <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '20px' }}>
        <h1>Le Quang Hoa</h1>
        <p>Web Developer</p>
      </header>

      {/* Main Content */}
      <div style={containerStyle}>
        <h2 id="about">About Me</h2>
        <p>{/* Your About Me content here */}</p>
        <img className="profile-image" src="3concho.jpg" alt="Lê Quang Hoa" style={profileImageStyle} />
        <p className="image-description">
          I am a final year student of VNUHCM majoring in Web Development. Passionate about creating innovative and
          user-friendly web applications. My journey in web development has equipped me with a diverse skill set
          including front-end and back-end technologies.
        </p>
        <h2 id="education">Education</h2>
        <p>UIT-VNUHCM 2020-2024</p>

        <h2 id="projects">My Projects</h2>

        {/* Project 1 */}
        <div className="project">
          <h3>Project Name 1</h3>
          <p>{/* Project 1 description */}</p>
          <p>
            <strong>Technologies Used:</strong> HTML, CSS, JavaScript, Node.js, Express, MongoDB
          </p>
        </div>

        {/* Project 2 */}
        <div className="project">
          <h3>Project Name 2</h3>
          <p>{/* Project 2 description */}</p>
          <p>
            <strong>Technologies Used:</strong> React Native, Firebase
          </p>
        </div>

        {/* Project 3 */}
        <div className="project">
          <h3>Project Name 3</h3>
          <p>{/* Project 3 description */}</p>
          <p>
            <strong>Technologies Used:</strong> PHP, MySQL, Laravel
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
