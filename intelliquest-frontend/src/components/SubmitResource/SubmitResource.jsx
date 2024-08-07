// src/components/SubmitResource/SubmitResource.jsx
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import styles from './SubmitResource.module.css';

const SubmitResource = () => {
  // State variables to manage form inputs and submission status
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [type, setType] = useState('video');
  const [tags, setTags] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Split tags by comma and trim spaces
      const tagsArray = tags.split(',').map(tag => tag.trim());
      
      // POST request to submit the resource
      const response = await axios.post('http://localhost:5000/api/resources/submit', {
        title,
        description,
        url,
        thumbnail,
        type,
        tags: tagsArray
      });

      // Display success message and reset form
      setMessage('Resource submitted successfully!');
      setTitle('');
      setDescription('');
      setUrl('');
      setThumbnail('');
      setType('video');
      setTags('');
    } catch (error) {
      console.error('Error submitting resource:', error);
      setMessage('Error submitting resource');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Submit a Resource</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <label htmlFor="url">URL</label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <label htmlFor="thumbnail">Thumbnail URL</label>
        <input
          type="url"
          id="thumbnail"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          required
        />
        <label htmlFor="type">Type</label>
        <select id="type" value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="video">Video</option>
          <option value="tutorial">Tutorial</option>
          <option value="course">Course</option>
          <option value="exercise">Exercise</option>
          <option value="website">Website</option>
          <option value="channel">Channel</option>
          <option value="programming">Programming</option>
        </select>
        <label htmlFor="tags">Tags (comma separated)</label>
        <input
          type="text"
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          required
        />
        <button type="submit">Submit Resource</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SubmitResource;

