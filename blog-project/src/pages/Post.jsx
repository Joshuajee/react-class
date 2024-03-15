import { useParams } from "react-router-dom";
import placeHolderIcon from "../assets/react.svg";
import posts from "../dummy";

/* eslint-disable react/prop-types */
export default function PostPage () {

    const params  = useParams()

    const currentPost = posts.find(post => post.id == params.id)

    const { author, title, content }  = currentPost

    console.log(currentPost)

    return(
        <>
            <div className="blog-container">

                <div className="blog-card">

                    <img className="profile-icon" src={ author.profile === "" ?   placeHolderIcon : author.profile} width={"50px"} height={"50px"} />

                    <div className="blog-info">

                        <h3>{author?.name}</h3>

                        <h4>Time</h4>

                        <h2>{title}</h2>


                    </div>
                    
                </div>

                <p className="blog-content"> {content} </p>

                

            </div>
        </>
    )
}