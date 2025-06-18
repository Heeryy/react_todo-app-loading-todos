type HeaderProps = {
  addInput: string;
  setAddInput: (item: string) => void;
};

export default function Header({ addInput, setAddInput }: HeaderProps) {
  return (
    <header className="todoapp__header">
      {/* this button should have `active` class only if all todos are completed */}
      <button
        type="button"
        className="todoapp__toggle-all active"
        data-cy="ToggleAllButton"
      />

      {/* Add a todo on form submit */}
      <form>
        <input
          data-cy="NewTodoField"
          type="text"
          value={addInput}
          onChange={e => setAddInput(e.target.value)}
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
        />
      </form>
    </header>
  );
}
