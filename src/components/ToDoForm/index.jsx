import { Button } from "../Button";
import { TextInput } from "../TextInput";

import "./todo-form.style.css";

export function ToDoForm({ onSubmit }) {
  return (
    <form className="form-dialog" action={onSubmit}>
      <TextInput
        placeholder="Digite o item que deseja adicionar"
        required
      ></TextInput>
      <Button>Salvar item</Button>
    </form>
  );
}
