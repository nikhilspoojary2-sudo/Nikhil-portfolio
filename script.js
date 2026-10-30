/**
 * Nikhil S Poojary - Cyber Minimalist Interactive Engine
 * Handles Canvas Particle HUD, CLI Terminal Drawer, Resume Printable & ATS Export, and Filtering
 */

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------------------------------------------
     1. Interactive Canvas Particle HUD
  ------------------------------------------------------------- */
  const canvas = document.getElementById('cyber-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = Math.min(Math.floor(width / 22), 65);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.radius = Math.random() * 1.8 + 0.8;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.45)';
        ctx.fill();
      }
    }

    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    }
    animate();
  }

  /* -------------------------------------------------------------
     2. Skills Filter Functionality
  ------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillItems = document.querySelectorAll('.skill-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      skillItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  /* -------------------------------------------------------------
     3. Resume Modal, Print & JSON ATS Export
  ------------------------------------------------------------- */
  const resumeModal = document.getElementById('resume-modal');
  const openModalBtns = [
    document.getElementById('resume-modal-btn'),
    document.getElementById('hero-resume-btn')
  ].filter(Boolean);
  const closeModalBtn = document.getElementById('close-modal-btn');
  const printResumeBtn = document.getElementById('print-resume-btn');
  const downloadJsonBtn = document.getElementById('download-json-ats');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      resumeModal.classList.add('open');
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      resumeModal.classList.remove('open');
    });
  }

  // Close when clicking outside dialog
  window.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
      resumeModal.classList.remove('open');
    }
  });

  // Print button triggers browser print
  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Export JSON ATS format
  if (downloadJsonBtn) {
    downloadJsonBtn.addEventListener('click', () => {
      const resumeData = {
        name: "Nikhil S Poojary",
        title: "Software Engineer / Student Developer",
        email: "nikhilspoojary2@gmail.com",
        phone: "+91 6363998235",
        github: "https://github.com/nikhilspoojary2-sudo",
        linkedin: "https://www.linkedin.com/in/nikhil-s-poojary-16463431a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        location: "Udupi, Karnataka, India",
        education: [
          {
            institution: "Poornaprajna Institute of Management",
            degree: "Master of Computer Application (MCA)",
            cgpa: 7.31,
            timeline: "Nov 2025 – Sep 2027"
          },
          {
            institution: "Mahatma Gandhi Memorial College",
            degree: "Bachelor of Computer Application (BCA)",
            cgpa: 7.92,
            timeline: "Aug 2022 – Jun 2025"
          }
        ],
        experience: [
          {
            role: "Student Developer (Full-time)",
            organization: "Google Summer of Code — Submitty",
            timeline: "Aug 2022 – Present",
            location: "Remote",
            highlights: [
              "Writing, testing, reviewing, and debugging production code within CI/CD pipelines.",
              "Applying software development lifecycle (SDLC) best practices to large-scale automated grading architecture."
            ]
          }
        ],
        projects: [
          {
            title: "Agro-Fertility",
            date: "February 2026",
            tagline: "Smart Agriculture & Custom Fertilizer E-Commerce Platform",
            techStack: ["PHP", "MySQL (3NF)", "JavaScript", "HTML", "CSS"],
            highlights: [
              "Coordinated 3 distinct stakeholder personas (Farmers, Delivery Agents, Store Admins).",
              "Implemented 3NF normalized relational database schema.",
              "Engineered real-time soil-to-crop recommendation engine.",
              "Automated Section 31 CGST statutory tax invoice generation and staged order fulfillment queues."
            ]
          },
          {
            title: "Food Court",
            date: "May 2025",
            tagline: "Online Food Ordering Platform (Open Source)",
            techStack: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
            highlights: [
              "Built web-based ordering platform with responsive UI, real-time cart customization, and order tracking."
            ]
          }
        ],
        skills: {
          languages: ["Python", "PHP", "C++", "JavaScript", "SQL", "R", "Java"],
          frameworks: ["Flutter", "Angular", "Bootstrap", "TensorFlow", "Django", "Flask", "NodeJS"],
          tools: ["Kubernetes", "Git", "PostgreSQL", "MySQL", "SQLite"],
          platforms: ["Linux", "Web", "Windows", "AWS", "GCP", "IBM Cloud"],
          softSkills: ["Leadership", "Event Management", "Technical Writing", "Public Speaking", "Time Management"]
        }
      };

      const blob = new Blob([JSON.stringify(resumeData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Nikhil_S_Poojary_Resume_ATS.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  /* -------------------------------------------------------------
     4. CLI Terminal HUD Engine
  ------------------------------------------------------------- */
  const cliDrawer = document.getElementById('cli-drawer');
  const cliToggleBtn = document.getElementById('cli-toggle-btn');
  const cliCloseBtn = document.getElementById('cli-close-btn');
  const cliClearBtn = document.getElementById('cli-clear-btn');
  const cliForm = document.getElementById('cli-form');
  const cliInput = document.getElementById('cli-input');
  const cliOutput = document.getElementById('cli-output');

  if (cliToggleBtn && cliDrawer) {
    cliToggleBtn.addEventListener('click', () => {
      cliDrawer.classList.toggle('active');
      if (cliDrawer.classList.contains('active')) {
        cliInput.focus();
      }
    });

    cliCloseBtn.addEventListener('click', () => {
      cliDrawer.classList.remove('active');
    });

    cliClearBtn.addEventListener('click', () => {
      cliOutput.innerHTML = '<p class="cli-line intro">Terminal cleared. Type <span class="highlight">help</span> for commands.</p>';
    });

    cliForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = cliInput.value.trim().toLowerCase();
      if (!val) return;

      // Append user command
      const cmdLine = document.createElement('p');
      cmdLine.className = 'cli-line user-cmd';
      cmdLine.textContent = `$ ${val}`;
      cliOutput.appendChild(cmdLine);

      // Process response
      const response = document.createElement('p');
      response.className = 'cli-line';

      switch (val) {
        case 'help':
          response.innerHTML = `Available commands:<br />
            • <span class="highlight">projects</span> - View flagship projects<br />
            • <span class="highlight">skills</span> - List core stack<br />
            • <span class="highlight">edu</span> - View degree records<br />
            • <span class="highlight">exp</span> - View GSoC experience<br />
            • <span class="highlight">contact</span> - Show email, phone & social handles<br />
            • <span class="highlight">resume</span> - Open CV viewer<br />
            • <span class="highlight">github</span> - Open GitHub in new tab<br />
            • <span class="highlight">linkedin</span> - Open LinkedIn in new tab<br />
            • <span class="highlight">email</span> - Open mail client<br />
            • <span class="highlight">clear</span> - Clear terminal`;
          break;

        case 'projects':
          response.innerHTML = `Flagship: <strong>Agro-Fertility</strong> (3NF MySQL, PHP, Recommendation Engine, CGST Tax Invoicing)<br />Featured: <strong>Food Court</strong> (Ordering platform with Bootstrap & PHP)`;
          break;

        case 'skills':
          response.innerHTML = `Languages: Python, PHP, C++, JS, SQL, Java, R<br />Frameworks: Flutter, Angular, TensorFlow, Django, Flask, NodeJS<br />Databases/Tools: MySQL, PostgreSQL, Git, Kubernetes`;
          break;

        case 'edu':
          response.innerHTML = `MCA @ Poornaprajna Institute of Management (CGPA: 7.31)<br />BCA @ Mahatma Gandhi Memorial College (CGPA: 7.92)`;
          break;

        case 'exp':
          response.innerHTML = `Google Summer of Code — Submitty (Student Developer, Full-time, Aug 2022 - Present)`;
          break;

        case 'contact':
          response.innerHTML = `Email: nikhilspoojary2@gmail.com | Phone: +91 6363998235<br />GitHub: github.com/nikhilspoojary2-sudo<br />LinkedIn: linkedin.com/in/nikhil-s-poojary-16463431a`;
          break;

        case 'resume':
          resumeModal.classList.add('open');
          response.innerHTML = `Opened resume viewer modal.`;
          break;

        case 'github':
          window.open('https://github.com/nikhilspoojary2-sudo', '_blank', 'noopener,noreferrer');
          response.innerHTML = `Redirected to GitHub profile.`;
          break;

        case 'linkedin':
          window.open('https://www.linkedin.com/in/nikhil-s-poojary-16463431a?utm_source=share_via&utm_content=profile&utm_medium=member_android', '_blank', 'noopener,noreferrer');
          response.innerHTML = `Redirected to LinkedIn profile.`;
          break;

        case 'email':
          window.location.href = 'mailto:nikhilspoojary2@gmail.com';
          response.innerHTML = `Triggered default email client.`;
          break;

        case 'clear':
          cliOutput.innerHTML = '';
          cliInput.value = '';
          return;

        default:
          response.innerHTML = `Command not recognized: <span style="color:#ef4444;">${val}</span>. Type <span class="highlight">help</span> for list.`;
      }

      cliOutput.appendChild(response);
      cliInput.value = '';
      cliOutput.scrollTop = cliOutput.scrollHeight;
    });
  }

});
