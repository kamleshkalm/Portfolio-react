import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="modal-images">
          {project.images.map((image, index) => (
            <img key={index} src={image} alt={`Project Screenshot ${index + 1}`} className="modal-image" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
