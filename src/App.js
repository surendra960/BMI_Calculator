import React, { useState } from "react";
import "./App.css";
import "./bmi.css";
function App() {
  // const [height, setHeight] = useState(0);
  // const [weight, setWeight] = useState(0);

  const [formData, setFormData ] = useState({height:0, weight : 0});
  const [bmi, setBmi] = useState(0);

  const calculateBMI = () => {
    const heighiInMeter = formData.height / 100;
    const customBmi = formData.weight / heighiInMeter ** 2;
    console.log(customBmi);

    setBmi(customBmi);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(name);

  };



  const resetFields = () => {
    // setWeight(0);
    // setHeight(0);
    formData(0);
    setBmi(0);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="inner">
          <h1>BMI Calculator</h1>
          <p className="discription">Weight in (Kg)</p>
          <input
            className="input1"
            type="text"
            value={formData.weight}
            onChange={handleChange}
          />
          <p className="discription">Height (cm)</p>{" "}
          <input
            className="input2"
            type="text"
            value={formData.height}
            onChange={handleChange}
          />
          <button className="common" onClick={calculateBMI} id="btn">
            Submit
          </button>
          <button className="common" onClick={resetFields} id="Reload">
            Reload
          </button>
          <h3>Your BMI is : {bmi.toFixed(1)}</h3>
          <p className="discription">calculated {}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
