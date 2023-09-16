import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Blog from "./views/Blog";
import EducatonalContent from "./views/Educatonal_Content";
import About from "./views/About";
import Team from "./views/Team";
import Blog1 from "./views/Blog_1";
import Portfolio from "./views/Portfolio";
import EducationalContent1 from "./views/EducationalContent1";
import Portfolio1 from "./views/Portfolio1";
import Events from "./views/Events";



export const router = createBrowserRouter(
    [
        {
            element: <Layout/>,
            children: [{
                path: "/",
                element: <Home/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/educational_content",
                element: <EducatonalContent/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/team",
                element: <Team/>
            },
            {
                path: "/portfolio",
                element: <Portfolio/>
            },
            {
                path: "/blog/blog_1",
                element: <Blog1/>
            },
            {
                path: "/educational_content/educational_content1",
                element: <EducationalContent1/>
            },
            {
                path: "/portfolio/portfolio1",
                element: <Portfolio1/>
            },
            {
                path: "/events",
                element: <Events/>
            }
        ]
        }
    ]
);


//