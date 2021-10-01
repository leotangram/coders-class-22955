const Dog = ({ age, name }) => {
  return (
    <>
      <div>
        <h2>Nombre: {name}</h2>
        <h2>Edad: {age}</h2>
      </div>
      <hr />
    </>
  );
};

export default Dog;
