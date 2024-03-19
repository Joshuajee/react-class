import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../helper";

/* eslint-disable react/prop-types */
export default function HomePage (props) {

    const [postList, setPostList]  = useState([])


    useEffect(() => {

        async function getPosts(endpoint) {
            try {
              const response = await axios.get(BASE_URL + "posts/" + endpoint);
              setPostList(response.data);
            } catch (error) {
              console.error(error);
            }
        }

        if (props.pageInfo == "latest") {
            getPosts("latest")
        } else if (props.pageInfo == "top") {
            getPosts("top")
        } else {
            getPosts("")
        }
    }, [props.pageInfo])

    return(
        <>
            <div className="tabs container">
                <Link to="/">Relevant </Link>
                <Link to="/latest">Lastest</Link>
                <Link to="/top">Top</Link>
            </div>

            <div className="blog-container">
                {
                    postList.map((post)=> {
                        return <BlogCard key={post.id} post={post}  />
                    } )
                }
            </div>
        </>
    )
}