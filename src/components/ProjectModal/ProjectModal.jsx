import './ProjectModal.css';
import { useEffect, useState } from 'react';
import DeveloperCard from './DeveloperCard';

const ProjectModal = ({ isOpen, onClose }) => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    fetch('/developers.json')
      .then(response => response.json())
      .then(data => setDevelopers(data));
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Our Development Team</h2>
        <div className="developer-list">
          {developers.map(developer => (
            <DeveloperCard key={developer.id} developer={developer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
