import { use } from "react";
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
  const {
    toDos,
    addToDo,
    editToDo,
    showDialog,
    openDialog,
    closeDialog,
    selectedToDo,
  } = use(ToDoContext);

  function handleFormSubmit(formData) {
    if (selectedToDo) {
      editToDo(formData);
      closeDialog();
    } else {
      addToDo(formData);
      closeDialog();
    }
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
            <Dialog isOpen={showDialog} onClose={closeDialog}>
              <ToDoForm
                onSubmit={handleFormSubmit}
                defaultValue={selectedToDo?.description}
              ></ToDoForm>
            </Dialog>
            <FabButton onClick={() => openDialog()}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
