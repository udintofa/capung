export default function Navbar () {
    return(
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark fixed-top py-3">
            <div className="container">
                <a href="/" className="navbar-brand ms-3">
                    <img
                        className="img-fluid me-3"
                        src="/images/logo.png" 
                        style={{ height: "25px" }}
                        >
                    </img>
                        Capung Indonesia
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#about" className="nav-link">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#promo" className="nav-link">
                                Promo
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#product" className="nav-link">
                                Product
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}