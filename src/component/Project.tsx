import "../CSS/Project.css";

const projects = [
  {
    title:
      "AI-Powered Document Processing & Data Extraction (Final Year Research)",
    status: "Present",
    details: [
      "Automated claims assessment and fraud detection with AI models.",
      "AI chatbot for customer support.",
      "OCR for accurate data extraction.",
      "Blockchain integration for data security.",
    ],
  },
  {
    title: "House Price Prediction",
    details: [
      "Machine learning model for house price prediction using regression.",
      "Proficiency in Python and statistical modeling for real estate analysis.",
    ],
  },
  {
    title: "Sticky Note++ Application",
    details: [
      "Developed with user login, secure note encryption, and data backup.",
      "User-friendly interface for note management.",
    ],
    tools: ["Java", "Spring Boot", "Encryption libraries", "GitHub"],
  },
];

const Projects = () => (
  <div className="projects-container">
    <h2
      style={{
        marginBottom: "50px",
        marginTop: "50px",
        fontWeight: "bold",
      }}
    >
      LATEST PROJECTS
    </h2>
    {projects.map((project, index) => (
      <div
        key={index}
        style={{
          marginBottom: "30px",
          border: "2px solid rgba(32,32,32,0.8)",
          padding: "20px",
          boxShadow: "5px 5px rgba(32,32,32,0.3)",
        }}
        className="project-card"
      >
        <h3 style={{ fontWeight: "bold", color: "black" }}>{project.title}</h3>
        {project.status && (
          <p className="project-status">Status: {project.status}</p>
        )}
        <div className="project-details">
          <ul>
            {project.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
        {project.tools && (
          <div className="project-tools">
            <strong>Tools:</strong> <p>{project.tools.join(", ")}</p>
          </div>
        )}
      </div>
    ))}
  </div>
);

export default Projects;
