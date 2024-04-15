import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { baseUrl } from "../config";

export default function CreateCondition() {
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
    // console.log("resp", resp.data);
    navigate("/conditions");
  }

  // console.log("this is form", formData);


  return (
    <div className="section hero is-flex is-fullheight">
      <div className="container add is-max-desktop is-flex-grow-0 custom-border-radius p-6">
        <form onSubmit={handleSubmit}>
          <div className="title is-size-2 pl-1 mb-5">Add Condition</div>
          <div className="columns is-multiline p-1 mb-0">
            <div className="field column">
              <div className="control has-icons-right">
                <input
                  className="input"
                  placeholder="Name"
                  type="text"
                  name={"name"}
                  onChange={handleChange}
                  value={formData.name}
                />
          <button className="button mt-6">Submit</button>
        </form>
      </div>
    </div>
  );
}