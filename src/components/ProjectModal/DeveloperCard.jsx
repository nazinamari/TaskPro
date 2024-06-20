import './DeveloperCard.css';

const DeveloperCard = ({ developer }) => {
  return (
    <div className="developer-card">
      <img
        src={`/images/${developer.photo}`}
        alt={developer.name}
        className="developer-photo"
      />
      <h2>{developer.name}</h2>
      <h3>{developer.role}</h3>
      <p>{developer.description}</p>
      <div className="social-links">
        <a
          href={developer.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href={developer.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default DeveloperCard;
