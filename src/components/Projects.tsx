import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    
  ];

  const filters = [];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

 
}

export default Projects;
