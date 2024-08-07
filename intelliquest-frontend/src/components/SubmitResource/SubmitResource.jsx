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

  