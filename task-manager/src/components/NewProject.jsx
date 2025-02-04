import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() == "" ||
      enteredDueDate.trim() == ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption='Close'>
        <h2>Invalid Input</h2>
        <p>OOPS! Looks like you did not provide any value</p>
        <p>Please provide valid inputs</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4'>
          <li>
            <button className='text-stone-800 hover:text-stone-950'>
              Cancel
            </button>
          </li>
          <li>
            <button
              className='px-6 py-2 rounded-md bg-stone-800 hover:bg-stone-950 text-stone-50'
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type='text' ref={title} label='Title'></Input>
          <Input
            ref={description}
            label='Description'
            isTextarea={true}
          ></Input>
          <Input type='date' ref={dueDate} label='Due Date'></Input>
        </div>
      </div>
    </>
  );
}
