import React, { useState } from 'react';
import axios from 'axios';
import styles from './CodeOptimizer.module.css';

const CodeOptimizer = () => {
  const [code, setCode] = useState('');
  const [optimizedCode, setOptimizedCode] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the server to optimize the code
      const response = await axios.post('/optimize', { code });
      setOptimizedCode(response.data.optimized_code);
      setSteps(response.data.steps);
      setError('');
    } catch (err) {
      setError('Error optimizing code');
      console.error('Error:', err);
    }
  };

  const handleReset = () => {
    // Reset the state variables
    setCode('');
    setOptimizedCode('');
    setSteps('');
    setError('');
  };

  return (
    <div className={styles.container}>
      <h1>Code Optimizer and Explainer</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here..."
          className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.button}>Optimize Code</button>
        <button type="button" onClick={handleReset} className={styles.button}>Reset Page</button>
      </form>
      {error && <div className={styles.error}>{error}</div>}
      <h2>Optimized Code:</h2>
      <pre className={styles.pre}>{optimizedCode}</pre>
      <h2>Steps for Optimization:</h2>
      <pre className={styles.pre}>{steps}</pre>
    </div>
  );
};

export default CodeOptimizer;

