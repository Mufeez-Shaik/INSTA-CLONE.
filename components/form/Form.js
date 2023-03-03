import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
function Form() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    file:null,
    name: "",
    location: "",
    description: "",
  });
  const uploadImage =(e)=>{
     

    setForm({ ...form, file: e.target.files[0] })
    console.log(form);
  }
  const handleSubmit =  async(e) => {
    e.preventDefault();
    //console.log(form.file, form.file.name);
        const data = new FormData();
        data.append('postImage',form.file,form.file.name );
        data.append('name', form.name);
        data.append('location', form.location);
        data.append('description',form.description)
        console.log(data.postImage)
     
    try {
      const response = await axios({
          method: "post",
          url: "https://instaclone-irfan-backend.onrender.com/instaclone/v1",
          data: data,
          headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);
  } catch (error) {
      console.log(error)
  }
  
  navigate("/");
  };

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
       <input type="file" name="myFile" autoComplete="off" onChange={uploadImage} />
        <label>author: </label>
        <input
          type="text"
          id="author"
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
          }}
        />
        <label>location: </label>
        <input
          type="text"
          id="location"
          onChange={(e) => {
            setForm({ ...form, location: e.target.value });
          }}
        />
        
        <label>description: </label>
        <input
          type="text"
          id="description"
          onChange={(e) => {
          
            setForm({ ...form, description: e.target.value });
          }}
        />
        <button>post</button>
      </form>
    </>
  );
}

export default Form;
