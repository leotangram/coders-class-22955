import React, { memo, useEffect } from "react";
import "./ConditionRendering.css";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const ConditionalRendering = memo(({ condition, other }) => {
  console.log('ConditionalRendering se renderizó')
    console.log("Numbers renderizado", numbers);

    const conditionToShowInConsole = condition ? "La condición ha sido modificada a TRUE" : "La condición ha sido modificada a false"

  useEffect(() => {
    console.log("El componente ConditionalRendering se ha montado :D");
    return () => {
      console.log("El componente ConditionalRendering se ha desmontado :P");
    };
  }, []);

  useEffect(() => {
      console.log(conditionToShowInConsole);
  }, [condition]);

  if (condition) {
    // return <h2 style={condition ? {color:  'blue'} : null}>Condición es TRUE</h2>;
    return (
      <>
    <h2 className={`${condition ? 'header-two' : 'hidden-text'} ${other ? other : null}`}>Condición es TRUE</h2>
    {numbers.map(number => (
      <h3 key={number}>Número renderizado: {number}</h3>
    ))}
    </>
    )
  }

  return <h2>Condición es FALSE</h2>;
});

// const ConditionalRendering = ({ condition, other }) => {
//   console.log("ConditionalRendering se renderizó");
//   console.log("Numbers renderizado", numbers);

//   const conditionToShowInConsole = condition
//     ? "La condición ha sido modificada a TRUE"
//     : "La condición ha sido modificada a false";

//   useEffect(() => {
//     console.log("El componente ConditionalRendering se ha montado :D");
//     return () => {
//       console.log("El componente ConditionalRendering se ha desmontado :P");
//     };
//   }, []);

//   useEffect(() => {
//     console.log(conditionToShowInConsole);
//   }, [condition]);

//   return (
//     <>
//       <h2
//         className={`${condition ? "header-two" : "hidden-text"} ${
//           other ? other : null
//         }`}
//       >
//         Condición es TRUE
//       </h2>
//       {numbers.map((number) => (
//         <h3 key={number}>Número renderizado: {number}</h3>
//       ))}
//     </>
//   );
// };

export default ConditionalRendering;
