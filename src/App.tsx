import React, { useEffect, useState } from "react";
import "./App.css";

const GITHUB = "https://github.com/prasanthreddymannem";
const LINKEDIN = "https://www.linkedin.com/in/prasanthreddymannem/";

type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: React.ReactNode;
  description: string;
};

type ExperiencePointProps = {
  number: string;
  title: string;
  text: string;
};

type FeatureProps = {
  title: string;
  text: string;
};

type ApproachCardProps = {
  number: string;
  title: string;
  text: string;
};

type TransactionProps = {
  name: string;
  amount: string;
  positive?: boolean;
};

const skills: Record<string, string[]> = {
  Backend: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "REST APIs",
    "JWT",
    "Struts MVC",
  ],

  Frontend: [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "jQuery",
    "Axios",
  ],

  Database: [
    "MySQL",
    "SQL Server",
  ],

  Engineering: [
    "OOP",
    "Data Structures & Algorithms",
    "Exception Handling",
    "Git",
    "Maven",
  ],
};

function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(
          (entry) => entry.isIntersecting
        );

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className="site">

      {/* ================================
          HEADER
      ================================= */}

      <header className="header">
        <div className="container nav">

          <button
            className="brand"
            onClick={() => scrollTo("home")}
            aria-label="Go to home"
          >
            PR<span>.</span>
          </button>

          <nav
            className={`nav-links ${
              menuOpen ? "open" : ""
            }`}
          >
            {[
              ["experience", "Experience"],
              ["projects", "Projects"],
              ["skills", "Skills"],
              ["education", "Education"],
            ].map(([id, label]) => (
              <button
                key={id}
                className={
                  activeSection === id ? "active" : ""
                }
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            ))}

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="nav-linkedin"
            >
              LinkedIn ↗
            </a>
          </nav>

          <button
            className={`menu-button ${
              menuOpen ? "active" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>

        </div>
      </header>

      <main>

        {/* ================================
            HERO
        ================================= */}

        <section id="home" className="hero">

          <div className="hero-grid" />

          <div className="container hero-content">

            <div className="hero-copy">

              <div className="availability">
                <span />
                Software Engineer · Bangalore, India
              </div>

              <p className="overline">
                HELLO, I'M
              </p>

              <h1>
                Mannem
                <br />
                <span>Prasanth Reddy.</span>
              </h1>

              <h2>
                Software Engineer specializing in{" "}
                <strong>
                  Java, Spring Boot & React.
                </strong>
              </h2>

              <p className="hero-description">
                Building enterprise banking applications
                at TCS and full-stack applications with a
                focus on clean APIs, secure authentication
                and reliable software.
              </p>

              <div className="hero-actions">

                <button
                  className="button button-primary"
                  onClick={() => scrollTo("experience")}
                >
                  View experience
                  <span>↓</span>
                </button>

                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                >
                  GitHub
                  <span>↗</span>
                </a>

                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                >
                  LinkedIn
                  <span>↗</span>
                </a>

              </div>

            </div>

            <div className="hero-aside">

              <div className="profile-card">

                <div className="profile-card-top">

                  <span className="card-label">
                    CURRENTLY
                  </span>

                  <span className="live">
                    <i />
                    Working
                  </span>

                </div>

                <div className="profile-company">

                  <div className="company-mark">
                    TCS
                  </div>

                  <div>
                    <strong>
                      Tata Consultancy Services
                    </strong>

                    <span>
                      Software Engineer
                    </span>
                  </div>

                </div>

                <div className="profile-divider" />

                <div className="profile-role">
                  <span>DOMAIN</span>
                  <strong>Core Banking</strong>
                </div>

                <div className="profile-role">
                  <span>PRODUCT</span>
                  <strong>TCS BaNCS FS</strong>
                </div>

                <div className="profile-role">
                  <span>FOCUS</span>
                  <strong>
                    Java · APIs · SQL · UI
                  </strong>
                </div>

                <div className="profile-footer">
                  <span>Since Dec 2025</span>
                  <span>Bangalore, IN</span>
                </div>

              </div>

              <div className="hero-note">
                <span>01</span>

                <p>
                  Enterprise experience combined with
                  hands-on full-stack development.
                </p>
              </div>

            </div>

          </div>

          <div className="scroll-indicator">
            <span />
            Scroll to explore
          </div>

        </section>

        {/* ================================
            CREDENTIALS
        ================================= */}

        <section className="credentials">

          <div className="container credentials-grid">

            <div>
              <span>01</span>
              <strong>TCS</strong>
              <p>Enterprise Experience</p>
            </div>

            <div>
              <span>02</span>
              <strong>Java</strong>
              <p>Backend Development</p>
            </div>

            <div>
              <span>03</span>
              <strong>React</strong>
              <p>Frontend Development</p>
            </div>

            <div>
              <span>04</span>
              <strong>8.71</strong>
              <p>B.Tech CGPA</p>
            </div>

          </div>

        </section>

        {/* ================================
            EXPERIENCE
        ================================= */}

        <section
          id="experience"
          className="section"
        >

          <div className="container">

            <SectionHeading
              number="01"
              eyebrow="EXPERIENCE"
              title={
                <>
                  Building software for
                  <br />
                  <span>real-world systems.</span>
                </>
              }
              description="My professional experience combines enterprise banking development, production debugging, API integration and database work."
            />

            <article className="experience-card reveal">

              <div className="experience-top">

                <div>

                  <span className="eyebrow-small">
                    TATA CONSULTANCY SERVICES
                  </span>

                  <h3>
                    Software Engineer
                  </h3>

                  <p className="experience-product">
                    TCS BaNCS FS · Core Banking
                  </p>

                </div>

                <div className="experience-date">
                  <span>DEC 2025</span>
                  <i />
                  <span>PRESENT</span>
                </div>

              </div>

              <div className="experience-body">

                <div className="experience-summary">

                  <p>
                    Developing and maintaining UI and
                    business logic for core banking
                    workflows supporting daily banking
                    operations.
                  </p>

                  <p>
                    Working across frontend, MVC action
                    layers, REST API integrations and SQL
                    Server while collaborating with QA
                    engineers and business analysts.
                  </p>

                </div>

                <div className="experience-points">

                  <ExperiencePoint
                    number="01"
                    title="Banking Workflows"
                    text="Develop and maintain features for customer onboarding and loan creation."
                  />

                  <ExperiencePoint
                    number="02"
                    title="Production Issues"
                    text="Debug issues across UI, Struts action layers and database queries."
                  />

                  <ExperiencePoint
                    number="03"
                    title="API & Data"
                    text="Consume REST APIs and write SQL Server queries for data retrieval and validation."
                  />

                </div>

              </div>

              <div className="tech-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>jQuery</span>
                <span>Struts MVC</span>
                <span>REST APIs</span>
                <span>SQL Server</span>
              </div>

            </article>

          </div>

        </section>

        {/* ================================
            PROJECT
        ================================= */}

        <section
          id="projects"
          className="section project-section"
        >

          <div className="container">

            <SectionHeading
              number="02"
              eyebrow="FEATURED PROJECT"
              title={
                <>
                  From idea to
                  <br />
                  <span>working product.</span>
                </>
              }
              description="A full-stack personal finance application built independently to deepen practical experience across frontend, backend, security and databases."
            />

            <article className="project-card reveal">

              <div className="project-preview">

                <div className="browser">

                  <div className="browser-bar">

                    <div className="browser-dots">
                      <i />
                      <i />
                      <i />
                    </div>

                    <div className="browser-url">
                      finance-tracker.local/dashboard
                    </div>

                  </div>

                  <div className="dashboard">

                    <aside className="dashboard-sidebar">

                      <strong>FT</strong>

                      <div className="sidebar-item active">
                        <span />
                        Overview
                      </div>

                      <div className="sidebar-item">
                        <span />
                        Transactions
                      </div>

                      <div className="sidebar-item">
                        <span />
                        Analytics
                      </div>

                      <div className="sidebar-item">
                        <span />
                        Settings
                      </div>

                    </aside>

                    <div className="dashboard-main">

                      <div className="dashboard-header">

                        <div>
                          <small>
                            OVERVIEW
                          </small>

                          <h4>
                            Good morning, Prasanth
                          </h4>
                        </div>

                        <div className="avatar">
                          PR
                        </div>

                      </div>

                      <div className="balance-grid">

                        <div className="balance-card primary">
                          <span>
                            Total Balance
                          </span>

                          <strong>
                            ₹84,250
                          </strong>

                          <small>
                            +12.8% this month
                          </small>
                        </div>

                        <div className="balance-card">
                          <span>
                            Income
                          </span>

                          <strong>
                            ₹62,500
                          </strong>

                          <small className="green">
                            +8.4%
                          </small>
                        </div>

                        <div className="balance-card">
                          <span>
                            Expenses
                          </span>

                          <strong>
                            ₹18,250
                          </strong>

                          <small className="red">
                            -3.2%
                          </small>
                        </div>

                      </div>

                      <div className="dashboard-lower">

                        <div className="chart-card">

                          <div className="chart-header">
                            <span>
                              Cash flow
                            </span>

                            <small>
                              Last 7 months
                            </small>
                          </div>

                          <div className="chart">

                            {[32, 48, 40, 63, 55, 76, 67].map(
                              (height, index) => (
                                <div
                                  key={index}
                                  className="chart-bar"
                                  style={{
                                    height: `${height}%`,
                                  }}
                                />
                              )
                            )}

                          </div>

                        </div>

                        <div className="recent-card">

                          <span>
                            Recent
                          </span>

                          <Transaction
                            name="Salary"
                            amount="+₹62,500"
                            positive
                          />

                          <Transaction
                            name="Groceries"
                            amount="-₹2,450"
                          />

                          <Transaction
                            name="Transport"
                            amount="-₹1,200"
                          />

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div className="project-content">

                <span className="project-label">
                  PERSONAL PROJECT · 2025
                </span>

                <h3>
                  Personal Finance Tracker
                </h3>

                <p className="project-intro">
                  A secure full-stack application for
                  managing personal income and expenses,
                  with authenticated user-specific data.
                </p>

                <div className="project-features">

                  <Feature
                    title="Authentication"
                    text="JWT-based authentication and user authorization."
                  />

                  <Feature
                    title="Transactions"
                    text="Complete create, edit, cancel and delete workflows."
                  />

                  <Feature
                    title="Validation"
                    text="DTO-based validation using Jakarta Bean Validation."
                  />

                  <Feature
                    title="Error Handling"
                    text="Centralized API exception handling with @RestControllerAdvice."
                  />

                </div>

                <div className="project-tags">
                  <span>React.js</span>
                  <span>Spring Boot</span>
                  <span>Spring Security</span>
                  <span>JWT</span>
                  <span>MySQL</span>
                  <span>Axios</span>
                </div>

                <a
                  className="project-github"
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    View project on GitHub
                  </span>

                  <b>↗</b>
                </a>

              </div>

            </article>

          </div>

        </section>

        {/* ================================
            ENGINEERING APPROACH
        ================================= */}

        <section className="section approach-section">

          <div className="container">

            <SectionHeading
              number="03"
              eyebrow="ENGINEERING APPROACH"
              title={
                <>
                  How I think about
                  <br />
                  <span>building software.</span>
                </>
              }
              description="The technologies matter, but so does the way they are used. These are the engineering principles reflected in my work."
            />

            <div className="approach-grid">

              <ApproachCard
                number="01"
                title="Build clearly"
                text="Keep frontend, API and data responsibilities separated so features remain easier to understand and maintain."
              />

              <ApproachCard
                number="02"
                title="Secure by design"
                text="Use authentication, authorization and backend validation to protect application data and user workflows."
              />

              <ApproachCard
                number="03"
                title="Debug systematically"
                text="Trace issues across UI, application layers and database queries instead of treating symptoms in isolation."
              />

              <ApproachCard
                number="04"
                title="Keep learning"
                text="Use personal projects to turn concepts like Spring Security, JWT and REST APIs into practical experience."
              />

            </div>

          </div>

        </section>

        {/* ================================
            SKILLS
        ================================= */}

        <section
          id="skills"
          className="section skills-section"
        >

          <div className="container">

            <SectionHeading
              number="04"
              eyebrow="TECHNICAL SKILLS"
              title={
                <>
                  A practical
                  <br />
                  <span>engineering toolkit.</span>
                </>
              }
              description="Technologies I have worked with professionally and through hands-on development projects."
            />

            <div className="skills-list">

              {Object.entries(skills).map(
                ([category, values], index) => (
                  <div
                    className="skill-row reveal"
                    key={category}
                  >

                    <div className="skill-category">

                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <strong>
                        {category}
                      </strong>

                    </div>

                    <div className="skill-values">

                      {values.map((skill) => (
                        <span key={skill}>
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>
                )
              )}

            </div>

          </div>

        </section>

        {/* ================================
            EDUCATION
        ================================= */}

        <section
          id="education"
          className="section education-section"
        >

          <div className="container">

            <SectionHeading
              number="05"
              eyebrow="EDUCATION"
              title={
                <>
                  Strong technical
                  <br />
                  <span>foundation.</span>
                </>
              }
              description="Computer Science education with a specialization in Artificial Intelligence and Machine Learning."
            />

            <article className="education-card reveal">

              <div className="education-year">
                <span>2025</span>
              </div>

              <div className="education-main">

                <span className="eyebrow-small">
                  KALASALINGAM ACADEMY OF RESEARCH AND EDUCATION
                </span>

                <h3>
                  B.Tech — Computer Science & Engineering
                </h3>

                <p>
                  Specialization in Artificial Intelligence
                  & Machine Learning.
                </p>

              </div>

              <div className="education-score">

                <span>CGPA</span>

                <strong>
                  8.71
                </strong>

              </div>

            </article>

            <div className="certification">

              <span>
                CERTIFICATION
              </span>

              <strong>
                Cambridge English BEC Preliminary (B1)
              </strong>

            </div>

          </div>

        </section>

        {/* ================================
            CONTACT
        ================================= */}

        <section className="contact-section">

          <div className="container">

            <div className="contact-card">

              <div className="contact-copy">

                <span className="overline">
                  GET IN TOUCH
                </span>

                <h2>
                  Let's build something
                  <br />
                  <span>useful.</span>
                </h2>

                <p>
                  Interested in software engineering,
                  backend development, full-stack
                  applications or building reliable products?
                </p>

              </div>

              <div className="contact-links">

                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <span>
                    <small>CONNECT</small>
                    LinkedIn
                  </span>

                  <b>↗</b>
                </a>

                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <span>
                    <small>CODE</small>
                    GitHub
                  </span>

                  <b>↗</b>
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* ================================
          FOOTER
      ================================= */}

      <footer>

        <div className="container footer-inner">

          <span>
            © {new Date().getFullYear()} Mannem Prasanth Reddy
          </span>

          <span>
            Java · Spring Boot · React
          </span>

          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              scrollTo("home");
            }}
          >
            Back to top ↑
          </a>

        </div>

      </footer>

    </div>
  );
}

/* =========================================
   SECTION HEADING
========================================= */

function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">

      <div className="section-title">

        <div className="heading-meta">
          <span>{number}</span>
          <span>{eyebrow}</span>
        </div>

        <h2>
          {title}
        </h2>

      </div>

      <p>
        {description}
      </p>

    </div>
  );
}

/* =========================================
   EXPERIENCE POINT
========================================= */

function ExperiencePoint({
  number,
  title,
  text,
}: ExperiencePointProps) {
  return (
    <div className="experience-point">

      <span>{number}</span>

      <div>

        <h4>
          {title}
        </h4>

        <p>
          {text}
        </p>

      </div>

    </div>
  );
}

/* =========================================
   FEATURE
========================================= */

function Feature({
  title,
  text,
}: FeatureProps) {
  return (
    <div className="feature">

      <span />

      <div>

        <strong>
          {title}
        </strong>

        <p>
          {text}
        </p>

      </div>

    </div>
  );
}

/* =========================================
   APPROACH CARD
========================================= */

function ApproachCard({
  number,
  title,
  text,
}: ApproachCardProps) {
  return (
    <article className="approach-card">

      <span className="approach-number">
        {number}
      </span>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </article>
  );
}

/* =========================================
   TRANSACTION
========================================= */

function Transaction({
  name,
  amount,
  positive = false,
}: TransactionProps) {
  return (
    <div className="transaction">

      <div className="transaction-icon" />

      <span>
        {name}
      </span>

      <strong
        className={
          positive ? "positive" : ""
        }
      >
        {amount}
      </strong>

    </div>
  );
}

export default App;
