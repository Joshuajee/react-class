/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import placeHolderIcon from "../assets/react.svg"

export default function BlogCard (props) {

    const { title, author } = props?.post

    return (
        <div className="blog-card">

            <img className="profile-icon" src={placeHolderIcon} width={"50px"} height={"50px"} />

            <div className="blog-info">

                <h3>{author?.name}</h3>

                <h4>Time</h4>

                <h2>
                    <Link to={"/post"}>
                     {title}
                    </Link>
                </h2>

       
            </div>


        </div>
    )
}