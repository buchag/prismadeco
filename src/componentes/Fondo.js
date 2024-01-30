import Image from "next/image";
import fondo from "../../src/images/ambiente.jpg"

const Fondo = () => {
  return (
    <section>
      <div
        style={{
          zIndex: "0",
          position: "absolute",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          src={fondo}
          alt="fondo-ambiente"
          layout="fill"
          objectFit="fill"
        />
      </div>
    </section>
  );
};

export default Fondo;