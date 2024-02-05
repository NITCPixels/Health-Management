"use client";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './bmi.css'; // Import CSS file for styling
import Navbar from '../Navbar/page';
import Footer from '../Footer/page';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) {
      setMessage('Please enter weight and height.');
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setMessage('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setMessage('Healthy Weight');
    } else {
      setMessage('Overweight');
    }
  };

  return (<>
    <Navbar/>
    <div className="container">
      <h2 className="title">BMI Calculator</h2>
      <div className="input-container">
        <label className="label">
          Weight (kg):
          <input
            className="input"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label className="label">
          Height (cm):
          <input
            className="input"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      <button className="calculate-button" onClick={calculateBMI}>Calculate BMI</button>
      {bmi !== null && (
        <div className="result-container">
          <p className="result">Your BMI is: {bmi}</p>
          <p className="message">{message}</p>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}

ReactDOM.render(<BMICalculator />, document.getElementById('root'));
