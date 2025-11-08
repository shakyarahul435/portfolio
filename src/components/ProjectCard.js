import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card card" aria-labelledby={`title-${project.id}`}>
      <h3 id={`title-${project.id}`}>{project.title}</h3>
      <p>{project.description}</p>
      <p>
        <strong>Tech:</strong> {project.tech.join(', ')}
      </p>
      {project.url && (
        <p>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            View
          </a>
        </p>
      )}
    </article>
  );
}
