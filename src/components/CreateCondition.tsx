import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../config";
import clouds from "../assets/clouds.jpeg"


function CreateCondition() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    about: "",
    info: "",
    advice: ""
  });

  function handleChange(e: any) {
    const fieldName = e.target.name;
    const newFormData = structuredClone(formData);
    newFormData[fieldName as keyof typeof formData] = e.target.value;
    setFormData(newFormData);
  }

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log(token);
    console.log(formData);
    const resp = await axios.post(`${baseUrl}/conditions`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("resp", resp.data);
    navigate("/conditions");
  }



  return <div style ={{
        backgroundImage: `url(${clouds})`,
        backgroundSize: 'cover',
        minHeight: '100vH',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
    <div className="section">
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Condition Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'name'}
              onChange={handleChange}
              value={formData.name}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">About You</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'about'}
              onChange={handleChange}
              value={formData.about}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Information About Your Condition</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'info'}
              onChange={handleChange}
              value={formData.info}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Advice</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'advice'}
              onChange={handleChange}
              value={formData.advice}
            />
          </div>
        </div>
        <button className="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div></div>
  </div>
}

export default CreateCondition