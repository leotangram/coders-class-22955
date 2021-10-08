import { useState } from "react";
import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import FunctionalCommponent from "./components/functional-component/FunctionalCommponent";
import ClassComponent from "./components/class-component/ClassComponent";
import CustomButton from "./components/custom-button/CustomButton";
import { Item } from "./components/item/Item";
import Container from "./layouts/Container";
import { Modal } from "react-bootstrap";
import ItemListContainer from "./layouts/item-list-container/ItemListContainer";

const hello = "Coders!";

const themes = ["red", "blue", "green", "yellow"];

function App() {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const showMessage = () => {
    alert(`Hola ${hello}`);
  };

  const handleClickButton = (nameButton) => setName(nameButton);

  return (
    <>
      <div className="App">
        <NavBar />
        <ItemListContainer greeting="Bienvenido a mi tienda">
          <h1>
            Hola {name} {1 + 1}
          </h1>
          <ul>
            <Container>
              {themes.map((theme) => (
                <Item key={theme} color={theme} item={theme} />
              ))}
            </Container>
          </ul>
          <FunctionalCommponent
            hello={hello}
            setName={setName}
            showMessage={showMessage}
          />
          <FunctionalCommponent
            hello={hello}
            setName={setName}
            showMessage={showMessage}
          />
          <ClassComponent hello={hello} showMessage={showMessage} />
          <Container>
            <CustomButton
              action={() => handleClickButton("Juan")}
              className="parent-button"
              color="red"
              name="Botón 1"
            />
            <CustomButton
              action={() => handleClickButton("Pedro")}
              className="parent-button"
              color="blue"
              name="Botón 2"
            />
            <CustomButton
              action={() => setShowModal(true)}
              color="green"
              className="parent-button"
              name="Botón 3"
            />
          </Container>
        </ItemListContainer>
      </div>
      {showModal && (
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <CustomButton action={() => setShowModal(false)} name="Close" />
            <CustomButton name="Save changes" />
          </Modal.Footer>
        </Modal.Dialog>
      )}
    </>
  );
}

export default App;
