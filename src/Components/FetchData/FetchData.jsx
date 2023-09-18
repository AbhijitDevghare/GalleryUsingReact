import axios from "axios";
import { useState, useEffect } from "react";
import GalleryPhotos from "../GalleryPhotos/GalleryPhotos.jsx";
import "./FetchData.css"
import NavBar from "../Search/Search.jsx";
import { Link } from "react-router-dom";

function FetchData()
{
    const [offset,setOffset] = useState(0);
    const [fetchDataLink,setfetchDataLink] = useState(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=30`);

    const [photo,setPhoto] = useState([]);
    const [isLoading,setisLoading] = useState(false)
    async function data()
    {
          // setfetchDataLink(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=30`)
         const response =  await axios.get(fetchDataLink)
        //  setOffset(offset+20)

         const photosArray = response.data.photos

         const respJson =  photosArray.map((photo)=>{
             
         return {
          id:photo.id,
          description:photo.description,
          photoUrl:photo.url
         }
         })

         setPhoto(respJson);
         setisLoading(true);

     //     console.log(respJson)

    }



    useEffect(()=>{
            data();
    },[fetchDataLink])


    

     return (
        <>
          <NavBar/>
           
           {/* Previous Button */}
           
           
          <button  hidden ={offset<=0} className="prev-next" onClick={()=>{
            if(offset>=0)
            {
              setOffset(offset-20)
              setfetchDataLink(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=30`)
              // data()
            }}
            }>Previous</button>
          

          {/* next button */}

          <button  hidden={offset>=132} className="prev-next" onClick={()=>{
            if(offset<132)
            {
              setOffset(offset+20)
              setfetchDataLink(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=30`)
              // data()
            }}
            }>Next</button>
            
          <div className="GalleryPage" >
          {  !isLoading ? "downloading" : photo.map((image)=><GalleryPhotos id={image.id} photoUrl={image.photoUrl} description={image.description} />)}
          </div>


        </>
     )
}

export default FetchData