import { useEffect, useState } from "react";

const backgrounds = [
  "/images/revisi.jpg",
  "/images/revisi2.jpg",
  "/images/revisi3.jpg",
];

export default function BgCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
  <div
    style={{
      height: "400px",
      backgroundImage: `url(${backgrounds[index]})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "background-image 1s ease-in-out",
    }}
    className="d-flex flex-column justify-content-center align-items-center text-center text-light"
  >
    {/* Overlay hitam transparan */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "426px",
        backgroundColor: "rgba(0, 0, 0, 0.2)", // ubah opacity di sini
        zIndex: 1,
      }}
    />
    <h2
      className="rounded-3 px-2 py-2 fw-bold "
      style={{
        zIndex: 2,
        fontSize: "1.1rem",
        textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)",
      }}
    >
      Belajar Sambil Bermain
    </h2>
    <h1
      className="rounded-3 px-2 py-2 fw-bold "
      style={{
        zIndex: 2,
        fontSize: "3rem",
        textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)",
      }}
    >
      CAPUNG INDONESIA
    </h1>

    <h2
      className="rounded-3 px-2 py-2 fw-bold"
      style={{
        zIndex: 2,
        fontSize: "1.1rem",
        textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)",
      }}
    >
      Nikmati Permainan dengan Isi Pembalajaran
    </h2>
    <a href="https://www.google.com" style={{textDecoration: 'none', zIndex: 2}} className="text-center bg-warning rounded-4 p-2 text-dark">
      Bergabung Sekarang
    </a>
  </div>
);
}