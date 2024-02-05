import React, { useState } from 'react';
import axios from 'axios';
import "./ocr.css"

function Ocr() {
    const [image, setImage] = useState(null);
    const [text, setText] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleOCR = async () => {
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post('http://127.0.0.1:5000/api/ocr', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setText(response.data.text);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div class="container">
            <div class="input-div">
                <h1>Printed Prescription:</h1>
            <input type="file" class="choose-img-button" onChange={handleImageChange}/>
            <button onClick={handleOCR} class="read-text-button">Read Text</button>
            <div class="result-text">{text && <div>{text}</div>}</div>  
            </div>

        </div>
    );
}

export default Ocr;
