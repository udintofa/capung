export default function Footer () {
    return (
        <div className="bg-dark text-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img
                            src='/images/header1.png'
                            alt="Gambar Footer Seharusnya"
                            className="img-fluid"
                            ></img>
                    </div>
                    <div className="col-md-5">
                        <h2>Ini adalah footer, mohon dimengerti</h2>
                        <p>
                            Ini bagian dari footer, jadi jangan diganggu. gausa pada protes
                        </p>
                        <ul>
                            <li>Alamat</li>
                            <li>Duit</li>
                            <li>Utang</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h1>Copiraig, Ojo diganggu</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}