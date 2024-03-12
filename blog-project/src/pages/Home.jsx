import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import posts from "../dummy";

/* eslint-disable react/prop-types */
export default function HomePage (props) {

    return(
        <>
            <div className="tabs container">
                <Link to="/">Relevant </Link>
                <Link to="/latest">Lastest</Link>
                <Link to="/top">Top</Link>
            </div>

            <div className="blog-container">
                {props.pageInfo}
                {
                    posts.map((post, index)=> {
                        return <BlogCard key={index} post={post}  />
                    } )
                }
            </div>
        </>
    )
}