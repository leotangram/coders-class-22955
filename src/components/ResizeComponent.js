import React from "react";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function ResizeComponent() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 300);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  const handleClick = (event) => {
    console.log("eventClick", event);
    console.log("eventClickNative", event.nativeEvent);
  };

  const handleKey = (event) => {
    event.preventDefault();
    console.log("eventKey", event);
  };

  const handleClickPropagation = (event, message) => {
    event.stopPropagation();
    console.log("message: " + message);
  };

  return (
    <div>
      <h2>
        Renderizado en {dimensions.width} de ancho x {dimensions.height} de alto
      </h2>
      <input onKeyDown={handleKey} type="text" />
      <button onClick={handleClick}>Click me!</button>
      <div onClick={(event) => handleClickPropagation(event, "Desde el div")}>
        <button
          onClick={(event) => handleClickPropagation(event, "Desde el botón")}
        >
          Click de botón
        </button>
      </div>
    </div>
  );
}

export default ResizeComponent;
