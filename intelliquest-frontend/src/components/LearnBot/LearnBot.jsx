/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './LearnBot.module.css';

const LearnBot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    const handleSend = async () => {
        if (!userInput.trim()) return;

        const newMessages = [...messages, { sender: 'User', text: userInput }];
        setMessages(newMessages);
        setUserInput('');

        try {
            const response = await fetch('https://intelliquestdb.onrender.com/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userInput }),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.statusText}`);
            }

            const data = await response.json();
            setMessages([...newMessages, { sender: 'LearnBot', text: data.response }]);
        } catch (error) {
            console.error('Error during fetch:', error);
            setMessages([...newMessages, { sender: 'LearnBot', text: 'Sorry, something went wrong.' }]);
        }
    };

    // Helper function to convert plain text with URLs into clickable links
    const renderMessageWithLinks = (text) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.split(urlRegex).map((part, index) => {
            if (urlRegex.test(part)) {
                return (
                    <a key={index} href={part} target="_blank" rel="noopener noreferrer">
                        {part}
                    </a>
                );
            }
            return part;
        });
    };

    return (
        <div className={styles.container}>
            <h1>IntelliQuest LearnBot</h1>
            <div id="chatbox" className={styles.chatbox}>
                {messages.map((message, index) => (
                    <div key={index} className={message.sender === 'User' ? styles.userMessage : styles.botMessage}>
                        <strong>{message.sender}:</strong> {renderMessageWithLinks(message.text)}
                    </div>
                ))}
            </div>
            <div className={styles.inputGroup}>
                <input
                    type="text"
                    id="user-input"
                    placeholder="Type your message here..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button id="send-btn" onClick={handleSend}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default LearnBot;

