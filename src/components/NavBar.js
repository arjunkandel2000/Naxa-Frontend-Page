import React from 'react'
export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><strong>naxa</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Services</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Portfolio
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="https://www.naxa.com.np/portfolio/keyhighlights">General</a></li>
                                    <li><a className="dropdown-item" href="https://www.naxa.com.np/showcase/All">International</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Company
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="https://www.naxa.com.np/about">About us</a></li>
                                    <li><a className="dropdown-item" href="https://www.naxa.com.np/team">Team</a></li>
                                    <li><a className="dropdown-item" href="https://www.naxa.com.np/workwithus">Work with us</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Events & Media
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="https://www.naxa.com.np/events/All">Events</a></li>
                                    <li><a className="dropdown-item" href="https://www.naxa.com.np/medias/All">Media</a></li>
                                    <li><a className="dropdown-item" href="https://www.naxa.com.np/publications/All">Publications</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.naxa.com.np/blogs/all">Blogs</a>
                            </li>
                        </ul>
                        <form className="d-flex" action='https://www.naxa.com.np/contact'>
                            <button className="btn btn-warning btn-sm" type="submit">Let's talk</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}




