import { useParams } from "react-router-dom";
import placeHolderIcon from "../assets/react.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../helper";

/* eslint-disable react/prop-types */
export default function PostPage () {

    const [post, setPost] = useState()

    const { slug }  = useParams()


    useEffect(() => {

        async function getPost() {
            try {
                const response = await axios.get(BASE_URL + "posts/" + slug)
                console.log(response.data)
                setPost(response.data)
            } catch {
                console.error("error")
            }   
        }

        getPost()

    }, [slug])

    if (post === undefined) return <></>


    return(
        <>
            <div className="blog-container">
 
                <div className="blog-card">

                    <img className="profile-icon" src={post.author.profile === "" ?   placeHolderIcon : post.author.profile} width={"50px"} height={"50px"} />

                    <div className="blog-info">

                        <h3>{post.author?.name}</h3>

                        <h4>Time</h4>

                        <h2>{post.title}</h2>


                    </div>
                    
                </div>

                <p className="blog-content"> {post.content} </p> 

            </div>
        </>
    )
}