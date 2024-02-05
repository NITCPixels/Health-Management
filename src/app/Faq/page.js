"use client";
import React from "react";
import { useState } from "react";
import "./faq.css";
// import ReactDOM from "react-dom/client/";
// const root = ReactDOM.createRoot(document.getElementById('arrow'));
// root.render(<comp/>);

export default function Faq() {
  const [selected, setSelected] = useState(null);
  const toggle = (matteri) => {
    if (selected === matteri) {
      document.getElementsByClassName("arrow").transform = "rotate(180deg)";
      return setSelected(null);
    }
    setSelected(matteri);
    document.getElementsByClassName("arrow").transform = "rotate(0deg)";
  };
  const [bar, setBar] = useState(0);
  const togglebar = (navi) => {
    if (bar === navi) {
      return setBar(null);
    }
    setBar(navi);
  };
  return (
    <div>
      <div className="qwrapper">
        <div className="qwrapper-up">
          <div className="title">FAQs</div>
          <div className="bar">
            {pin.map((nav, navi) => (
              <div
                key={navi}
                className={bar == navi ? "bar-pin show" : "bar-pin"}
                onClick={() => togglebar(navi)}
              >
                {nav.title}
              </div>
            ))}
          </div>
          <div className="full-box">
            <div className="box">
              {box[bar].data.map((matter, matteri) => (
                <div className="sub-box" key={matteri}>
                  <div className={selected == matteri ? "faqs show" : "faqs"}>
                    <div
                      className={selected == matteri ? "faq-title show" : "faq-title"}
                      onClick={() => toggle(matteri)}
                    >
                      {matter.title}
                    </div>
                    <div
                      className={
                        selected == matteri ? "faq-content show" : "faq-content"
                      }
                    >
                      {matter.content}
                    </div>
                  </div>
                  {selected === matteri ? (
                    <div className="arrow-down" onClick={() => toggle(matteri)}></div>
                  ) : (
                    <div className="arrow" onClick={() => toggle(matteri)}>    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}
const data1 = [
  {
    title: 'What are the recommended screenings for adults?',
    content:
      "Recommended screenings for adults include blood pressure checks, cholesterol screenings, diabetes screenings, mammograms (for women), and colorectal cancer screenings.",
  },
  {
    title: "How much physical activity is recommended for adults?",
    content:
      "Adults should aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week, along with muscle-strengthening activities on two or more days per week.",
  },
  {
    title: "What is a healthy diet?",
    content:
      "A healthy diet includes a variety of fruits, vegetables, whole grains, lean proteins, and low-fat dairy products. Limiting saturated fats, trans fats, sodium, and added sugars is also important.",
  },
{
  title: "Frequency of Health Check-ups?",
content: "Adults should have a regular check-up with a primary care provider at least once a year. The frequency may vary based on individual health conditions and risk factors."
},
{
  title: "Signs of a Heart Attack?",
content: "Signs of a heart attack include chest pain or discomfort, shortness of breath, nausea, lightheadedness, and pain or discomfort in the arms, back, neck, jaw, or stomach."
},
{
  title: "Stress Management for Better Health?",
content: "Stress management techniques include regular exercise, deep breathing exercises, meditation, yoga, adequate sleep, and maintaining a healthy work-life balance."
},
{
  title: "Recommended Vaccines for Adults?",
content: "Vaccines recommended for adults may include influenza, Tdap (tetanus, diphtheria, and pertussis), shingles, and pneumococcal vaccines. The recommendations may vary based on age and health conditions."
},
{
  title: "Key Factors for Maintaining Good Mental Health?",
content: "Key factors for maintaining good mental health include social connections, regular physical activity, a balanced diet, adequate sleep, stress management, and seeking professional help when needed."
},
{
  title: "Preventing the Spread of Infectious Diseases?",
content: "Preventive measures include practicing good hand hygiene, getting vaccinated, staying home when sick, covering coughs and sneezes, and following public health guidelines during outbreaks."
},
{
  title: "Benefits of Staying Hydrated?",
content: "Staying hydrated supports overall health by helping maintain bodily functions, regulating body temperature, aiding digestion, and supporting skin health."
}
];
const data2 = [
  {
    title: "Diabetes?",
    content: "Diabetes is a chronic condition that affects how the body uses insulin to process sugar (glucose). There are two main types: Type 1, where the body doesn't produce insulin, and Type 2, where the body doesn't use insulin properly."
  },
  {
    title: "Heart Disease Symptoms?",
    content: "Symptoms of heart disease may include chest pain, shortness of breath, fatigue, irregular heartbeat, and dizziness. It is a broad term encompassing various conditions affecting the heart."
  },
  {
    title: "Hypertension Causes?",
content: "Hypertension is often caused by factors such as genetics, unhealthy diet, lack of physical activity, and excessive alcohol consumption. It can lead to serious complications like heart disease and stroke."
  },
  {
    title: "Arthritis?",
    content: "Arthritis refers to inflammation of the joints. Common types include osteoarthritis (wear and tear), rheumatoid arthritis (autoimmune), and gout. Symptoms include joint pain, swelling, and stiffness."
  },
  {
    title: "Asthma?",
    content: "Asthma is a chronic respiratory condition characterized by inflammation of the airways, leading to breathing difficulties. Common symptoms include wheezing, coughing, and shortness of breath."
  },
  {
    title: "Causes of Cancer?",
    content: "Cancer results from uncontrolled cell growth. Causes include genetic factors, environmental exposures (like tobacco and UV radiation), and lifestyle choices. Early detection and treatment are crucial."
  },
  {
    title: "Alzheimer's Disease?",
content: "Alzheimer's is a progressive neurodegenerative disorder affecting memory and cognitive function. The exact cause is unknown, but age, genetics, and certain risk factors may contribute."
  },
  {
    title: "Common Cold Symptoms?",
    content: "The common cold is a viral infection causing symptoms like a runny or stuffy nose, sneezing, coughing, and a sore throat. It is usually mild and self-limiting."
  },
  {
    title: "Osteoporosis?",
content: "Osteoporosis is a condition characterized by weakened bones, making them more prone to fractures. It is often related to aging, hormonal changes, and a lack of calcium and vitamin D."
  },
  {
    title: "Depression?",
content: "Depression is a mental health disorder characterized by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in daily activities. It can affect thoughts, feelings, and behavior."
  }
];

const data3 = [
  {
    title: "Balanced and Healthy Diet?",
    content: "A balanced and healthy diet includes a variety of fruits, vegetables, whole grains, lean proteins, and dairy or dairy alternatives. It aims to provide essential nutrients for optimal health."
  },
  {
    title: "Importance of Hydration",
content: "Staying hydrated is crucial for maintaining bodily functions, regulating body temperature, aiding digestion, and supporting overall health. It helps prevent dehydration and promotes optimal organ function."
  },
  {
    title: "Incorporating Fruits and Vegetables",
content: "To increase fruit and vegetable intake, consider adding them to smoothies, salads, and snacks. Aim to include a variety of colors for a diverse range of nutrients"
  },
  {
    title: "Importance of Whole Grains",
content: "Whole grains are rich in fiber, vitamins, and minerals. They contribute to heart health, aid digestion, and provide sustained energy. Examples include brown rice, quinoa, and whole wheat."
  },
  {
    title: "Limiting Added Sugars",
content: "Excessive added sugars can contribute to various health issues, including obesity, type 2 diabetes, and dental problems. It's important to read food labels and choose options with less added sugar."
  },{
    title: "Lean Protein Sources",
content: "Lean protein sources include poultry, fish, beans, lentils, tofu, and low-fat dairy products. These options provide essential amino acids without excessive saturated fats."
  },
  {
    title: "Role of Water in Health",
content: "Water is essential for hydration, digestion, nutrient absorption, and temperature regulation. It helps flush toxins from the body and supports overall bodily functions."
  },
  {
    title: "Portion Control in a Healthy Diet",
content: "Practicing portion control helps prevent overeating and supports weight management. Using smaller plates, being mindful of portion sizes, and listening to hunger cues are effective strategies."
  },
  {
    title: "Limiting Processed Foods",
content: "Excessive consumption of processed foods, high in added sugars, salt, and unhealthy fats, can contribute to health issues such as obesity and cardiovascular diseases. Choosing whole, unprocessed foods is key."
  }
];

const box = [
  {
    data: data1,
  },
  {
    data: data2,
  },
  {
    data: data3,
  },


];
const pin = [
  {
    title: "General",
  },
  {
    title: "Dieases",
  },
  {
    title: 'Diet'
  },

];