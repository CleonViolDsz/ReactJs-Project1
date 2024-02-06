import React from "react"
import reactLogo from "../components/images/react-icon-small.png"

export default function Navbar(props) {
    return (
        <nav className={props.darkMode?"dark":""}>
            <img src={reactLogo} alt="" className="nav-icon" />
            <h3 className="nav-logo-text">React Facts</h3>
            {/* <h4 className="nav-title">React course - Project 1</h4> */}
            <div className="toggler">
                <p className="toggler-light">Light</p>
                <div className="toggler-slider" onClick={props.toggleDarkMode}>
                    <div className="toggler-slider-circle"></div>
                </div>
                <p className="toggler-dark">Dark</p>
            </div>
        </nav>
    )
}