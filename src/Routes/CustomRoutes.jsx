import { Routes,Route } from "react-router-dom"
import FetchData from "../Components/FetchData/FetchData"
import Description from "../Components/ImageDescription/Description"
function CustomRoutes()
{
   return (
      
   < Routes >
        <Route  path="/" element={<FetchData/>} />
        <Route path="/:id" element={<Description/>}/>
     </Routes>
   )
}

export default CustomRoutes