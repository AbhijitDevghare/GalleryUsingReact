import { Link } from "react-router-dom"
import "./GalleryPhotos.css"

function GalleryPhotos({photoUrl,description,id})
{
    

    return (
       <Link to={`/${id}`}>
            <div className="photoDiv">    
            
            <img src={photoUrl} alt="Image Not Found" />
           </div>
       </Link>
    )

}

export default GalleryPhotos