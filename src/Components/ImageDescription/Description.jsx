import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Description.css"
import NavBar from "../Search/Search";

function Description() {

  const [title,setTitle] = useState()
  const [url,setUrl]=useState()
  const [description,setDescription]=useState()
  const [resp,setResp]=useState(false);

  const { id } = useParams();
  console.log(id)
  async function data()
  {
      const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
      
      const photo= response.data.photo
      console.log(photo)
      setTitle(photo.title)
      setUrl(photo.url)
      setDescription(photo.description)
      console.log(url)
      console.log(description)
      setResp(true)
  }

  useEffect(()=>{
        data();
  },[])

  return (
    <>
     <NavBar/>
     <Link to={`/`}><button className="prev-next">Back</button></Link>
     {resp ? <div className="Image-Box">
        <img src={url} alt="Image not found" />

         <div id="title-description">
           <h2>{title}</h2>
           <p>{description}</p>
         </div>
      </div> : <p id="downloadingPara">downloading</p>
      }
      
    </>
  );
}

export default Description;
