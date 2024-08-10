import React, { useState } from 'react';
import styles from './LearnBot.module.css';

const LearnBot = () => {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSend = async () => {
        if (!userInput.trim()) return;

        const newMessages = [...messages, { sender: 'User', text: userInput }];
        setMessages(newMessages);
        setUserInput('');

        const response = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userInput }),
        });

        const data = await response.json();
        setMessages([...newMessages, { sender: 'LearnBot', text: data.response }]);
    };

    return (
        <div className={styles.container}>
            <h1>IntelliQuest LearnBot</h1>
            <div id="chatbox" className={styles.chatbox}>
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender === 'User' ? styles.userMessage : styles.botMessage}>
                        {msg.sender}: {msg.text}
                    </div>
                ))}
            </div>
            <div className={styles.inputGroup}>
                <input
                    type="text"
                    id="user-input"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your message here..."
                />
                <button id="send-btn" onClick={handleSend}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default LearnBot;
