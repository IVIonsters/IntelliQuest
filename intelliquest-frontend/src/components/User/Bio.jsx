import React, {useState} from 'react'
import styles from './Bio.module.css'


export default function editProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("John Smith");
    const [email, setEmail] = useState("JohnSmith@example.com");
    const [pronoun, setPronoun] = useState("He/Him")
    const [bio, setBio] = useState("Tell us about yourself!")


    
  return (
    <form 
    onSubmit = {(e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    }} 
    >
        <div>
            {isEditing ? (
                 <input
                  value= {name}
                  onChange={(e) => {
                      setName(e.target.value)
                   }}
                   className={styles.name}
                 />
             ) : (
                 <b>{name}</b>
             )}
        </div>
        <div>
            {isEditing ? (
                    <select 
                    value={pronoun}
                    onChange={(e) => {
                        setPronoun(e.target.value)
                    }}
                    className={styles.pronouns}
                    >
                    <option value="She/Her"> She/Her</option>
                    <option value= "He/Him"> He/Him</option>
                    <option value="They/Them"> They/Them </option>
                    <option value="Other"> Other</option>
                    </select>
            ) : (
                <b>{pronoun}</b>
            )}
        </div>
        <button type="submit"> {isEditing ? "Save" : "Edit"} Profile </button>
        <div>
             {isEditing ? (
                <input
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                className={styles.formBox}
                />
            ) : (
                <b>{email}</b>
             )}
        </div>
        <div>
            {isEditing ? (
                <textarea
                value={bio}
                onChange={(e) => {
                    setBio(e.target.value)
                }}
                className={styles.bio}
                />
            ) : ( 
                <b>{bio}</b>
            )}
        </div>
    </form>
  );
}