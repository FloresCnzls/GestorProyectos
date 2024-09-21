'use client';
import React, { useState } from "react";
import styles from "./projectmanager-role.module.css";

const ProjectForm =  () => {

    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({name: '', description: '', status: 'New', progress: 0});
    const [editingProject, setEditingProject] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (editMode) {
            const updatedProjects = projects.map((project, index) => {
                if (index === editingProject) {
                    return newProject;
                }
                return project;
            });
            setProjects(updatedProjects);
            setEditMode(false);
        } else {
            setProjects([...projects, newProject]);
        }
        setNewProject({name: '', description: '', status: 'New', progress: 0});
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'progress') {
            const progressValue = Math.max(0, Math.min(100, parseInt(value)));
            setNewProject({ ...newProject, [name]: progressValue });
        } else {
            setNewProject({ ...newProject, [name]: value });
        }
    };

    const handleDeleteProject = (index) => {
        setProjects(projects.filter((projects, i) => i !== index));
    };

    const handleEditProject = (index) => {
        setEditingProject(index);
        setEditMode(true);
        const projectToEdit = projects[index];
        setNewProject(projectToEdit);
    };

    const handleUpdateStatus = (index, status) => {
        const updatedProjects = projects.map((project, i) => {
            if (i === index) {
                return { ...project, status };
            }
            return project;
        });
        setProjects(updatedProjects);
    };

    const handleUpdateProgress = (index, progress) => {
        const updatedProgress = Math.max(0, Math.min(100, parseInt(progress)));
        const updatedProjects = projects.map((project, i) => {
            if (i === index) {
                if (updatedProgress === 100) {
                    return { ...project, progress: updatedProgress, status: 'Completed' };
                } else {
                    return { ...project, progress: updatedProgress };
                }
            }
            return project;
        });
        setProjects(updatedProjects);
    };

    return (
        <div className={styles.container}>
        <h1 className={styles.title}>Project Manager</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Project Name:
            <input type="text" name="name" value={newProject.name} onChange={handleInputChange} className={styles.input} />
          </label>
          <br />
          <label className={styles.label}>
            Project Description:
            <textarea name="description" value={newProject.description} onChange={handleInputChange} className={styles.textarea} />
          </label>
          <br />
          <label className={styles.label}>
            Project Status:
            <select name="status" value={newProject.status} onChange={handleInputChange} className={styles.select}>
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="On Hold">On Hold</option>
              <option value="Completed">Completed</option>
            </select>
          </label>
          <br />
          {editMode ? (
            <button type="submit" className={styles.submitbutton}>Update Project</button>
          ) : (
            <button type="submit" className={styles.submitbutton}>Create Project</button>
          )}
        </form>
        <ul className={styles.projectlist}>
          {projects.map((project, index) => (
            <li key={index} className={styles.projectsitem}>
              <h2 className={styles.projecttitle}>{project.name}</h2>
              <p className={styles.projectdescription}>{project.description}</p>
              <p className={styles.projectstatus}>Status: {project.status}</p>
              {project.status === 'In Progress' && (
                <div className={styles.progressbar}>
                  <div style={{ width: `${project.progress}%` }} className={styles.progressbarinner} />
                  <p>{project.progress}%</p>
                </div>
              )}
              <button onClick={() => handleDeleteProject(index)} className={styles.deletebutton}>Delete</button>
              <button onClick={() => handleEditProject(index)} className={styles.editbutton}>Edit</button>
              <button onClick={() => handleUpdateStatus(index, 'In Progress')} className={styles.updatestatusbutton}>Start Progress</button>
              <button onClick={() => handleUpdateStatus(index, 'On Hold')} className={styles.updatestatusbutton}>Put On Hold</button>
              {project.status !== 'Completed' && (
                <button onClick={() => handleUpdateStatus(index, 'Completed')} className={styles.updatestatusbutton}>Complete</button>
              )}
              {project.status === 'In Progress' && (
                <input type="number" value={project.progress} onChange={(e) => handleUpdateProgress(index, e.target.value)} className={styles.progressinput} />
              )}
            </li>
          ))}
        </ul>
      </div>  
    );
}

export default ProjectForm;