export default function Header () {
    return (
        <div
        className="row rounded-5 shadow-lg d-flex align-items-center"
        style={{ width: "90%", margin: "10px auto", minHeight: "440px" ,maxHeight: "440px",  backgroundColor: 'rgba(13, 110, 253, 0.5)'}}>
            <div className="col-md-4 d-flex text-center align-items-center pt-4">
                <h1
                    className=""
                    >
                    Belajar Sambil Bermain dan Berpetualang
                </h1>
            </div>
            <div className="col-md-8 d-flex justify-content-center">
                <div style={{height: "370px"}} >
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" >
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="3000">
                            <img src="/images/header1.png" className="d-block w-100" alt="gambar header" ></img>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                            <img src="/images/header1.png" className="d-block w-100" alt="gambar header" ></img>
                            </div>
                            <div className="carousel-item">
                            <img src="/images/header1.png" className="d-block w-100" alt="gambar header" ></img>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                </div>
            </div>
        </div>
    )
}