export default function Keunggulan () {
    return (
        <div className="container d-flex row justify-content-around">
            <div className="col-12 col-md-4">
                <div className="bg-danger bg-gradient d-flex text-center align-items-center rounded-4 border border-3 border-dark mb-2" style={{height: '130px'}}>
                    <span style={{fontSize: '80px'}}>&#128521;</span>
                    <h3 className="text-dark">Bermain Dengan Penuh Ceria</h3>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <div className="bg-warning bg-gradient d-flex text-center align-items-center rounded-4 border border-3 border-dark mb-2" style={{height: '130px'}}>
                    <h3 className="text-dark">Belajar Dengan Media Permainan</h3>
                    <span style={{fontSize: '80px'}}>&#129299;</span>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <div className="bg-info bg-gradient d-flex text-center align-items-center rounded-4 border border-3 border-dark" style={{height: '130px'}}>
                    <span style={{fontSize: '80px'}}>&#129382;</span>
                    <h3 className="text-dark">Pengenalan Alam Untuk Pendidikan</h3>
                </div>
            </div>
        </div>
    )
}