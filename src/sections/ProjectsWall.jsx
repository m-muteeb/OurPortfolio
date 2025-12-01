import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../sections/supabaseClient'; // Import the supabase client

const ProjectsWall = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false }); // Show newest first

      if (error) {
        setError(error.message);
        setProjects([]);
      } else {
        setProjects(data);
        setError(null);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
        <Link to="/submitidea" style={{ marginRight: '20px' }}>Submit Idea</Link>
        <Link to="/projectwall">Projects Wall</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <h1>Projects Wall</h1>
        <p>A collection of innovative ideas submitted to The Foundry.</p>

        {loading && <p>Loading projects...</p>}
        {error && <p>Error fetching projects: {error}</p>}

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} style={{ border: '1px solid #eee', padding: '15px', margin: '10px', borderRadius: '8px' }}>
              <h3>Project Idea</h3>
              <p>{project.project_idea}</p>
              <hr />
              <h4>Led by: {project.team_lead_name}</h4>
              <p>Contact: {project.team_lead_contact}</p>
              
              {project.team_members && project.team_members.length > 0 && (
                <>
                  <h5>Team Members:</h5>
                  <ul>
                    {project.team_members.map((member, index) => (
                      <li key={index}>{member.name} - ({member.contact})</li>
                    ))}
                  </ul>
                </>
              )}
               <small>Submitted on: {new Date(project.created_at).toLocaleDateString()}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsWall;