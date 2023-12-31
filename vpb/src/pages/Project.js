import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Project = () => {
  const [projectIds, setProjectIds] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Fetch the list of project IDs from your API
    axios.get(`${apiUrl}/api/project`)
      .then((response) => {
        setProjectIds(response.data); // Assuming your API returns an array of project IDs
      })
      .catch((error) => {
        console.error('Error fetching project IDs:', error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {projectIds.map((projectId) => (
          <div className="col-md-4" key={projectId}>
            <div className="card mb-4">
              <img src={`${projectId.image_url}`} className="card-img-top" alt={`Project ${projectId}`} />
              <div className="card-body">
                <h5 className="card-title">{`Project ${projectId.name}`}</h5>
                <p className="card-text">{`Description for Project ${projectId.description.split('\n')[1]}`}</p>
                <Link to={`/project/${projectId._id}`} className="btn btn-primary">
                  More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
