import React, { useState } from 'react'
import axios from "../../services/axios"

const StatusFormu = (props) => {
    console.log("StatusFormu: ",props)

    const [status, setStatus] = useState({title: ""});
    const [hata, setHata] = useState("");

    const onInputChange = event => 
        setStatus({ ...status, [event.target.name]: event.target.value})

    const onFormSubmit = (event) => {
        event.preventDefault();
        setHata("");
        axios
        .post("/posts", status)
        .then((response) => {
            console.log(response.data);
            props.history.push('/');
        })
        .catch((error) => {
            // console.log({error});
            setHata("title zorunludur");
        })
    }


  return (
    <div>

      <label>Status Title</label>
      <input 
        value={status.title} 
        type="text" 
        name="title" 
        onChange={onInputChange}
      />

      <button onClick={onFormSubmit}>
          Gönder
      </button>

    </div>
  )
}

export default StatusFormu;
