import React, {useState} from 'react'


function ProfilePicture() {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
    const handleImageUpload = e  => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const {current} = uploadedImage;
            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    };


  return (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
        }}
        >
        <input
         type="file" 
         accept="image/*" 
         onChange ={handleImageUpload}
         ref = {imageUploader}
         style ={{
            display: "none"
         }}
         />
            <div 
            onClick = {() => imageUploader.current.click()}
        >
            <img 
                ref={uploadedImage}
                style ={{
                    width: "300px",
                    height: "300px",
                    padding: "5px",
                    borderRadius: "50%",
                    marginBottom: "1%"
                }}

            />
        </div>
    </div>
  );
}

export default ProfilePicture