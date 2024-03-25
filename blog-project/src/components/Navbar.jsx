import { Link } from "react-router-dom";
import NavButton from "./NavButton";

export default function Navbar () {

    return (
        <nav className="container">

            <div>
                <Link className="red" to={"/"}> My Blog </Link> 
            </div>

            <div>

                <NavButton title="Sign Up" link="/create-account" />

                <NavButton title="Login" link={"/login"} />


            </div>

        </nav>
    )
}