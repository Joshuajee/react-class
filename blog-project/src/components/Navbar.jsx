import NavButton from "./NavButton";

export default function Navbar () {

    return (
        <nav className="container">

            <div>My Blog</div>

            <div>

                <NavButton title="Sign Up" />

                <NavButton title="Login" />


            </div>

        </nav>
    )
}