export default function Braket({ text = "Selamat Datang" }) {
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        margin: '10px 0',
        justifyContent: "center"
    }}>
        {/* <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #FFFFFF' }} /> */}
        <span style={{ padding: '0 10px'}}>
            <h2>{text}</h2>
        </span>
      {/* <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #FFFFFF' }} /> */}
    </div>
  );
}
