import { createBrowserRouter } from "react-router-dom"
import Layout from "../dribble/Layout"
import { Homescreen } from "../pages/Homescreen"
import Upload from "../pages/Upload"



export const mainRouter = createBrowserRouter([
{
    path: "/",
    element: <Layout/>,
   children:[
    {
       index: true,
       element: <Homescreen/>
    }
   ]
},
{
   path: "/upload-books",
   element: <Upload/>
}

])