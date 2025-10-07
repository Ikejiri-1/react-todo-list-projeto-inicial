import { Button } from "../Button";
import { TextInput } from "../TextInput";

import "./todo-form.style.css";

export function ToDoForm({ onSubmit, defaultValue }) {
  return (
    <form className="form-dialog" action={onSubmit}>
      <TextInput
        placeholder="Digite o item que deseja adicionar"
        required
        name="description"
        defaultValue={defaultValue}
      ></TextInput>
      <Button>Salvar item</Button>
    </form>
  );
}
