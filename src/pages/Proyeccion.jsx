import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useClientesContext from "../../hook/useContext";

const Proyeccion = () => {
  const { cliente } = useClientesContext();
  const espectativa = 76 - cliente.edad;

  return (
    <>
      {cliente ? (
        <div className=" flex max-h-full">
          <CircularProgressbar
            value={espectativa}
            text={`Años Vividos`}
            styles={buildStyles({
              pathColor: "#3B82F6",
              trailColor: "#00b347 ",
              textSize: "12px",
            })}
          />
          <div className="flex flex-col justify-evenly text-center mt-6 border-4 rounded-s-full border-cyan-700 ml-8 p-4 mb-4">
          <p className=" font-semibold text-black text-2xl uppercase">Cliente {cliente.nombre} </p>
          <p className=" font-semibold text-cyan-700 text-2xl uppercase ">Años vividos {cliente.edad}</p>
          <p className=" font-semibold text-green-600 text-2xl uppercase">Espectativa {espectativa}</p>
         
          </div>
        </div>
      ) : (
        <p className="font-bold text-center text-red-800 uppercase mt-5 text-3xl leading-relaxed">
          No seleccionaste ningun cliente desde el listado, para que la app
          funcione debes hacerlo.
        </p>
      )}
    </>
  );
};

export default Proyeccion;
