const fs = require('fs');
const path = require('path');

// Create a simpler output directory
const outDir = path.join(__dirname, 'netlify-deploy');
if (fs.existsSync(outDir)) {
  // Remove existing directory to start fresh
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

// Create directory for images and assets
fs.mkdirSync(path.join(outDir, 'images'), { recursive: true });
fs.mkdirSync(path.join(outDir, 'css'), { recursive: true });
fs.mkdirSync(path.join(outDir, 'js'), { recursive: true });

// Copy public files
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  const files = fs.readdirSync(publicDir);
  for (const file of files) {
    const srcPath = path.join(publicDir, file);
    // Images go to the images folder
    if (['.jpg', '.jpeg', '.png', '.gif', '.svg'].some(ext => file.toLowerCase().endsWith(ext))) {
      fs.copyFileSync(srcPath, path.join(outDir, 'images', file));
    } 
    // PDF files
    else if (file.toLowerCase().endsWith('.pdf')) {
      fs.copyFileSync(srcPath, path.join(outDir, file));
    }
    // Other files go to root
    else {
      fs.copyFileSync(srcPath, path.join(outDir, file));
    }
  }
}

// Copy resume from root directory if it exists
const resumePath = path.join(__dirname, 'Jairaj Kolhatkar_Resume Python.pdf');
if (fs.existsSync(resumePath)) {
  fs.copyFileSync(resumePath, path.join(outDir, 'Jairaj Kolhatkar_Resume Python.pdf'));
}

// Copy profile picture from root directory if it exists
const profilePicPath = path.join(__dirname, 'Jairaj Pic New.jpg');
if (fs.existsSync(profilePicPath)) {
  fs.copyFileSync(profilePicPath, path.join(outDir, 'images', 'Jairaj Pic New.jpg'));
  // Update the reference in HTML to use this file
  htmlContent = htmlContent.replace('src="images/jairaj pic.jpg"', 'src="images/Jairaj Pic New.jpg"');
}

// Create a simple HTML file with embedded CSS
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jairaj Kolhatkar - Portfolio</title>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
  <header>
    <nav>
      <div class="container">
        <div class="logo">Jairaj Kolhatkar</div>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>

  <section id="home" class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h2>Hello, I'm</h2>
          <h1>Jairaj Kolhatkar</h1>
          <h3 class="typing">I'm a Developer</h3>
          <p>Software Engineer with a strong foundation in programming languages such as Java, Python, and JavaScript. Passionate about building creative solutions and bringing ideas to life through clean, efficient code.</p>
          
          <div class="achievement">
            <span>🏆 Smart India Hackathon 2022 Winner</span>
          </div>
          
          <div class="social-links">
            <a href="https://github.com/JairajKolhatkar" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/jairaj-kolhatkar-77a81730a/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="mailto:jairajkolhatkar@gmail.com"><i class="far fa-envelope"></i></a>
          </div>
          
          <div class="cta-buttons">
            <a href="#projects" class="btn primary">View Projects</a>
            <a href="#contact" class="btn secondary">Contact Me</a>
          </div>
        </div>
        
        <div class="hero-image">
          <div class="profile-pic">
            <img src="images/Jairaj Pic New.jpg" alt="Jairaj Kolhatkar">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <p>Hello! I'm Jairaj Kolhatkar, a passionate software engineer with a focus on building efficient and creative solutions. I received my Computer Science degree from Prof Ram Meghe College of Engineering & Management.</p>
        <p>I love working with data and building applications that make a difference. My experience includes working with various programming languages and tools to create robust and scalable software.</p>
        <p>As a Smart India Hackathon 2022 Winner, I have demonstrated my ability to solve complex problems under pressure and deliver innovative solutions.</p>
      </div>
    </div>
  </section>

  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">My Projects</h2>
      <div class="projects-grid">
        <div class="project-card">
          <h3>Air Quality Prediction</h3>
          <p>A machine learning model that predicts air quality based on historical data and environmental factors.</p>
          <div class="technologies">
            <span>Python</span>
            <span>TensorFlow</span>
            <span>Data Analysis</span>
          </div>
        </div>
        
        <div class="project-card">
          <h3>Engineering Job Prediction</h3>
          <p>Predictive analysis system to match engineering graduates with suitable job opportunities based on their skills and preferences.</p>
          <div class="technologies">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Flask</span>
          </div>
        </div>
        
        <div class="project-card">
          <h3>Online Resume Builder</h3>
          <p>Web application that allows users to create professional resumes using customizable templates.</p>
          <div class="technologies">
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
          </div>
        </div>
        
        <div class="project-card">
          <h3>Blog Platform</h3>
          <p>Full-stack blogging platform with user authentication, content management, and social features.</p>
          <div class="technologies">
            <span>JavaScript</span>
            <span>MongoDB</span>
            <span>Express</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="skills" class="skills">
    <div class="container">
      <h2 class="section-title">Technical Expertise</h2>
      <div class="skills-categories">
        <button class="category-btn active" data-category="languages">Programming Languages</button>
        <button class="category-btn" data-category="data">Data Technologies</button>
        <button class="category-btn" data-category="tools">Development Tools</button>
        <button class="category-btn" data-category="ml">Machine Learning & AI</button>
      </div>
      
      <div class="skills-content">
        <div class="skills-group active" id="languages">
          <div class="skill-item">
            <div class="skill-info">
              <span>Python</span>
              <span>90%</span>
            </div>
            <div class="skill-bar"><div class="skill-level" style="width: 90%"></div></div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span>Java</span>
              <span>85%</span>
            </div>
            <div class="skill-bar"><div class="skill-level" style="width: 85%"></div></div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span>JavaScript</span>
              <span>80%</span>
            </div>
            <div class="skill-bar"><div class="skill-level" style="width: 80%"></div></div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span>SQL</span>
              <span>85%</span>
            </div>
            <div class="skill-bar"><div class="skill-level" style="width: 85%"></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="resume" class="resume">
    <div class="container">
      <h2 class="section-title">Resume</h2>
      <div class="resume-content">
        <p>View or download my complete resume to learn more about my education, skills, and professional experience.</p>
        <a href="Jairaj Kolhatkar_Resume Python.pdf" class="btn primary" target="_blank">View Resume</a>
      </div>
    </div>
  </section>

  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <i class="far fa-envelope"></i>
            <p>jairajkolhatkar@gmail.com</p>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <p>Bangalore, India</p>
          </div>
        </div>
        
        <div class="contact-form">
          <p>Feel free to reach out to me by email or through social media platforms.</p>
          <div class="social-links">
            <a href="https://github.com/JairajKolhatkar" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/jairaj-kolhatkar-77a81730a/" target="_blank"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>&copy; 2024 Jairaj Kolhatkar. All Rights Reserved.</p>
    </div>
  </footer>

  <script src="js/script.js"></script>
</body>
</html>
`;

// Create CSS file
const cssContent = `
:root {
  --primary: #4f46e5;
  --secondary: #0ea5e9;
  --dark: #0f172a;
  --light: #f8fafc;
  --gray: #64748b;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: var(--light);
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Navigation */
nav {
  background-color: var(--dark);
  padding: 15px 0;
  position: fixed;
  width: 100%;
  z-index: 100;
}

nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: var(--light);
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  color: var(--light);
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--primary);
}

/* Section styles */
section {
  padding: 100px 0;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
  color: var(--dark);
  position: relative;
}

.section-title::after {
  content: "";
  width: 80px;
  height: 4px;
  background: var(--primary);
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

/* Hero Section */
.hero {
  min-height: 100vh;
  background: linear-gradient(to bottom right, var(--dark), rgba(15, 23, 42, 0.7));
  color: var(--light);
  display: flex;
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 768px) {
  .hero-content {
    flex-direction: row;
    justify-content: space-between;
  }
}

.hero-text {
  flex: 1;
}

.hero-text h2 {
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--primary);
  margin-bottom: 8px;
}

.hero-text h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.hero-text h3 {
  font-size: 1.5rem;
  font-weight: 500;
  color: #e2e8f0;
  margin-bottom: 20px;
  height: 30px;
}

.typing::after {
  content: '|';
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-text p {
  max-width: 500px;
  margin-bottom: 20px;
  color: #cbd5e1;
}

.achievement {
  display: inline-block;
  background: linear-gradient(to right, rgba(79, 70, 229, 0.1), rgba(14, 165, 233, 0.1));
  padding: 10px 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.achievement span {
  color: var(--primary);
  font-weight: 500;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.social-links a {
  color: #cbd5e1;
  font-size: 1.5rem;
  transition: all 0.3s;
}

.social-links a:hover {
  color: var(--primary);
  transform: translateY(-3px);
}

.cta-buttons {
  display: flex;
  gap: 15px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
}

.primary {
  background-color: var(--primary);
  color: white;
}

.primary:hover {
  background-color: #4338ca;
}

.secondary {
  border: 1px solid var(--primary);
  color: var(--primary);
}

.secondary:hover {
  background-color: rgba(79, 70, 229, 0.1);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

@media (min-width: 768px) {
  .hero-image {
    margin-top: 0;
  }
}

.profile-pic {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(79, 70, 229, 0.3);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  position: relative;
}

@media (min-width: 768px) {
  .profile-pic {
    width: 350px;
    height: 350px;
  }
}

.profile-pic::before {
  content: "";
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: linear-gradient(to top right, rgba(79, 70, 229, 0.2), rgba(14, 165, 233, 0.2));
  animation: rotate 20s linear infinite;
  z-index: -1;
}

.profile-pic::after {
  content: "";
  position: absolute;
  inset: -35px;
  border-radius: 50%;
  background: linear-gradient(to bottom left, rgba(79, 70, 229, 0.1), rgba(14, 165, 233, 0.1));
  animation: rotate 15s linear infinite reverse;
  z-index: -2;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.profile-pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* About Section */
.about {
  background-color: #f8fafc;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.about-content p {
  margin-bottom: 20px;
  color: #334155;
}

/* Projects Section */
.projects {
  background-color: #f1f5f9;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.project-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 25px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.project-card h3 {
  color: var(--dark);
  margin-bottom: 10px;
}

.project-card p {
  color: #64748b;
  margin-bottom: 20px;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.technologies span {
  background-color: #f1f5f9;
  color: var(--primary);
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
}

/* Skills Section */
.skills {
  background-color: #f8fafc;
}

.skills-categories {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 40px;
}

.category-btn {
  padding: 10px 20px;
  border-radius: 25px;
  border: none;
  background-color: rgba(15, 23, 42, 0.05);
  color: #64748b;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.category-btn:hover {
  background-color: rgba(15, 23, 42, 0.1);
}

.category-btn.active {
  background-color: var(--primary);
  color: white;
  box-shadow: 0 5px 15px rgba(79, 70, 229, 0.2);
}

.skills-content {
  background-color: #ffffff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.skills-group {
  display: none;
}

.skills-group.active {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
}

.skill-item {
  margin-bottom: 15px;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.skill-bar {
  width: 100%;
  height: 8px;
  background-color: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
}

.skill-level {
  height: 100%;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  border-radius: 4px;
  transition: width 1s;
}

/* Resume Section */
.resume {
  background-color: #f1f5f9;
  text-align: center;
}

.resume-content p {
  max-width: 600px;
  margin: 0 auto 30px;
}

/* Contact Section */
.contact {
  background-color: #f8fafc;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

@media (min-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr 1fr;
  }
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.contact-item i {
  font-size: 1.5rem;
  color: var(--primary);
}

.contact-form {
  text-align: center;
}

.contact-form p {
  margin-bottom: 20px;
}

/* Footer */
footer {
  background-color: var(--dark);
  color: var(--light);
  padding: 30px 0;
  text-align: center;
}
`;

// Create simple JavaScript
const jsContent = `
// Skills category buttons
document.addEventListener('DOMContentLoaded', function() {
  // Category buttons
  const categoryBtns = document.querySelectorAll('.category-btn');
  const skillsGroups = document.querySelectorAll('.skills-group');
  
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      categoryBtns.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Hide all skills groups
      skillsGroups.forEach(group => group.classList.remove('active'));
      
      // Show the corresponding skills group
      const category = this.getAttribute('data-category');
      document.getElementById(category).classList.add('active');
    });
  });
  
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    });
  });
  
  // Simulate typing effect
  const typingElement = document.querySelector('.typing');
  const phrase = "I'm a Developer";
  let i = 0;
  let isDeleting = false;
  let text = '';
  
  function type() {
    if (!isDeleting && i < phrase.length) {
      text += phrase.charAt(i);
      typingElement.textContent = text;
      i++;
    } else if (isDeleting && text.length > 0) {
      text = text.substring(0, text.length - 1);
      typingElement.textContent = text;
    } else if (i >= phrase.length) {
      isDeleting = true;
      setTimeout(type, 2000); // Pause before deleting
      return;
    } else if (text.length === 0) {
      isDeleting = false;
      i = 0;
    }
    
    const typeSpeed = isDeleting ? 50 : 150;
    setTimeout(type, typeSpeed);
  }
  
  type();
});
`;

// Write files
fs.writeFileSync(path.join(outDir, 'index.html'), htmlContent);
fs.writeFileSync(path.join(outDir, 'css', 'styles.css'), cssContent);
fs.writeFileSync(path.join(outDir, 'js', 'script.js'), jsContent);

console.log('Simple deployment files created in the "netlify-deploy" folder.');
console.log('To deploy to Netlify:');
console.log('1. Go to https://app.netlify.com/drop');
console.log('2. Drag and drop the entire "netlify-deploy" folder onto the page');
console.log('3. Netlify will deploy your site in seconds and give you a URL'); 