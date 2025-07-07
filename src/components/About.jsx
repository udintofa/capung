export default function About() {
  return (
    <div className="container d-flex flex-column flex-md-row align-items-center gap-4 py-4">
      <img
        src="/images/logo.png"
        style={{ height: "200px" }}
        className="bg-light p-2 rounded-4"
        alt="Logo Capung"
      />
      <div style={{ minWidth: "300px" }}>
        <h2>Capung Indonesia</h2>
        <p>
          Capung Indonesia merupakan lorem ipsum yang sangat banyak sekali dan banyak dua kali.
          Lorem adalah salah satu teks unggulan di HTML. Oleh karena itu, kita harus memanfaatkan
          lorem dengan sangat baik, serta sebaik-baiknya.
        </p>
      </div>
    </div>
  );
}
