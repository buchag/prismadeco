

import {saira} from "../../styles/fonts"

const Banner = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "black",
        zIndex: "1",
        position: "fixed",
        paddingTop: "0.5em",
        paddingBottom: "0.5em",
        top: "0",
        right: "0",
      }}
    >
      <p
        style={{
          height: "100%",
          fontSize: "0.9em",
          color: "white",
          textAlign: "center",
          width: "100%",

        }}
        className={saira.className}
      >
        3 cuotas SIN INTERES | 10% off con Transferencia | ENVIOS GRATIS desde
        $100.000
      </p>
    </div>
  );
};

export default Banner;

