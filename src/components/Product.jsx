import Braket from "./Braket";
import Keunggulan from "./Keunggulan";
import Produk from "./Produk";

export default function Product() {
  return (
    <div className="container-fluid bg-primary text-white p-3 rounded-top-5">
      <div className="text-white">
        <Braket text='Mengapa Memilih Kami?'/>
      </div>
      <div className="d-flex justify-content-center">
        <Keunggulan/>
      </div>
      <div className="text-white mt-3">
        <Braket text='Produk Unggulan'/>
      </div>
      <div>
        <Produk/>
      </div>
    </div>
  );
}
