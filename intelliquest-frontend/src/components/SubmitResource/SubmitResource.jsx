/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './SubmitResource.module.css';

const SubmitResource = () => {
  // State variables for the form fields and messages
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [tags, setTags] = useState('');
  const [message, setMessage] = useState('');

  // Function to extract YouTube video ID and generate thumbnail URL
  const generateThumbnailUrl = (videoUrl) => {
    // Extract the video ID from the URL
    const videoIdMatch = videoUrl.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)([^&=\n%\?]{11})|(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^&=\n%\?]{11})/);
    const videoId = videoIdMatch ? (videoIdMatch[1] || videoIdMatch[2]) : null;

    // Return the thumbnail URL if the video ID is found
    if (videoId) {
      return {
        cleanUrl: `https://www.youtube.com/watch?v=${videoId}`,
        thumbnailUrl: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      };
    }
    return { cleanUrl: '', thumbnailUrl: '' };
  };

  // Function to handle URL input change and automatically generate thumbnail URL
  const handleUrlChange = (e) => {
    const videoUrl = e.target.value;
    const { cleanUrl, thumbnailUrl } = generateThumbnailUrl(videoUrl);
    setUrl(cleanUrl);
    setThumbnail(thumbnailUrl);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const tagsArray = tags.split(',').map(tag => tag.trim());
      //Development
      // const response = await axios.post('http://localhost:5000/api/resources/submit', {
      //   title,
      //   description,
      //   url,
      //   thumbnail,
      //   type: 'video',
      //   tags: tagsArray
      // });
      //Production
      const response = await axios.post('https://intelliquestdb.onrender.com/api/resources/submit', {
        title,
        description,
        url,
        thumbnail,
        type: 'video',
        tags: tagsArray
      });

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
        <label htmlFor="title">
          <i className="fas fa-heading"></i> Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="description">
          <i className="fas fa-align-left"></i> Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <label htmlFor="url">
          <i className="fas fa-link"></i> YouTube Video URL
        </label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={handleUrlChange}
          required
        />
        <label htmlFor="thumbnail">
          <i className="fas fa-image"></i> Thumbnail URL
        </label>
        <input
          type="url"
          id="thumbnail"
          value={thumbnail}
          readOnly
        />
        {thumbnail && (
          <div className={styles.thumbnailPreview}>
            <img src={thumbnail} alt="Thumbnail Preview" />
          </div>
        )}
        <label htmlFor="tags">
          <i className="fas fa-tags"></i> Tags (comma separated)
        </label>
        <input
          type="text"
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          required
        />
        <button type="submit">
          <i className="fas fa-paper-plane"></i> Submit Resource
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default SubmitResource;
