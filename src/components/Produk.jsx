import produks from './produk.json'

function GambarKiri (props) {
    return (
        <div class="row pt-3">
            <div className="col-4">
                <div className="card">
                    <img
                    src={props.src}
                    alt={props.alt}></img>
                    <div className="card-body">
                        <p className="card-text">
                            {props.name}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-8">
                <h1>
                    {props.name}
                </h1>
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

function GambarKanan (props) {
    return (
        <div className="row pt-3">
            <div className="col-8 text-end">
                <h1>
                    {props.name}
                </h1>
                <p>
                    {props.text}
                </p>
            </div>
            <div className="col-4 ms-auto">
                <div className="card">
                    <img
                    src={props.src}
                    alt={props.alt}></img>
                    <div className="card-body">
                        <p className="card-text">
                            {props.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function Produk (){
    return (
        <div className="container-fluid pt-5 text-dark bg-light rounded-4">
            {produks.map(({ name, alt, src, text }, index ) => 
                index % 2 === 0 ? (
                    <GambarKiri { ...{name, alt, src, text}}/>
                ) : (
                    <GambarKanan { ...{name, alt, src, text}}/>
                )
            )}
        </div>
    )
}