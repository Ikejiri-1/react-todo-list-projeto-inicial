import { use, useState } from "react";
import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { Dialog } from "./components/Dialog";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import { ToDoForm } from "./components/ToDoForm";
import ToDoContext from "./components/ToDoProvider/ToDoContext";
import { ToDoGroup } from "./components/ToDoGroup";

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const { toDos, addToDo } = use(ToDoContext);

  function toggleDialog() {
    setShowDialog(!showDialog);
  }

  function handleFormSubmit(formData) {
    addToDo(formData);
    toggleDialog();
  }

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <ToDoGroup
            heading="Para estudar"
            items={toDos.filter((t) => !t.completed)}
          />
          <ToDoGroup
            heading="Concluídos"
            items={toDos.filter((t) => t.completed)}
          />

          <Footer>
            <Dialog isOpen={showDialog} onClose={toggleDialog}>
              <ToDoForm onSubmit={handleFormSubmit}></ToDoForm>
            </Dialog>
            <FabButton onClick={toggleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
