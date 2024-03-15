import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import posts from "../dummy";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function HomePage (props) {

    const [postList, setPostList]  = useState(posts)

    console.log(posts)


    useEffect(() => {
        const newArray = [...posts]

        if (props.pageInfo == "latest") {
            setPostList(newArray.sort((a, b) => b.date - a.date))
        } else if (props.pageInfo == "top") {
            setPostList(newArray.sort((a, b) => b.views - a.views))
        } else {
            setPostList(posts)
        }
    }, [props.pageInfo])

    console.log("_______0000000")
    console.log(posts[0])
    console.log(postList[0])

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