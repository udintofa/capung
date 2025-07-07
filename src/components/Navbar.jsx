export default function Navbar () {
    return(
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark fixed-top py-3" style={{minHeight: '85px'}}>
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
                    <ul className="navbar-nav ms-auto d-flex align-items-center">
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
                                <div className="rounded-5 d-flex align-items-center"
                                    style={{
                                        height: '50px',
                                        padding: '0px 15px',
                                        backgroundColor: 'red',
                                        color: 'black'
                                    }}
                                    >
                                        Kontak Kami
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}