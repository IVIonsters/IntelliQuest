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
  const [tags, setTags] = useState('');
  const [message, setMessage] = useState('');

  // Function to extract YouTube video ID and generate thumbnail URL
  const generateThumbnailUrl = (videoUrl) => {
    const videoId = videoUrl.split('v=')[1] || videoUrl.split('/')[3];
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    return '';
  };

  // Function to handle URL input change and automatically generate thumbnail URL
  const handleUrlChange = (e) => {
    const videoUrl = e.target.value;
    setUrl(videoUrl);
    const generatedThumbnailUrl = generateThumbnailUrl(videoUrl);
    setThumbnail(generatedThumbnailUrl);
  };

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
        type: 'video', // Fixed type to 'video'
        tags: tagsArray
      });

      // Display success message and reset form
      setMessage('Resource submitted successfully!');
      setTitle('');
      setDescription('');
      setUrl('');
      setThumbnail('');
      setTags('');
    } catch (error) {
      console.error('Error submitting resource:', error);
      setMessage('Error submitting resource');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Submit a YouTube Video Resource</h1>
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
        <label htmlFor="url">YouTube Video URL</label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={handleUrlChange}
          required
        />
        <label htmlFor="thumbnail">Thumbnail URL</label>
        <input
          type="url"
          id="thumbnail"
          value={thumbnail}
          readOnly
        />
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
