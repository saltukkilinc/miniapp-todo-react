import Sheet from "react-modal-sheet";
import { useState } from "react";
import styles from "./Modal.module.css";
import ModalContentHeader from "./ModalContentHeader";
import NewTodo from "../TaskList/NewTodo";

function Modal() {
  const [isOpen, setOpen] = useState(false);


  return (
    <>
      <button onClick={() => setOpen(true)} className={styles.taskAdder}>
        <div>
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 1.25C0 0.835786 0.335786 0.5 0.75 0.5H14.25C14.6642 0.5 15 0.835786 15 1.25C15 1.66421 14.6642 2 14.25 2H0.75C0.335786 2 0 1.66421 0 1.25ZM0.75 6C1.16421 6 1.5 6.33579 1.5 6.75V13.75C1.5 14.1642 1.16421 14.5 0.75 14.5C0.335786 14.5 0 14.1642 0 13.75V6.75C0 6.33579 0.335786 6 0.75 6ZM5 7.3125C5 6.89829 5.33579 6.5625 5.75 6.5625H17.25C17.6642 6.5625 18 6.89829 18 7.3125C18 7.72671 17.6642 8.0625 17.25 8.0625H5.75C5.33579 8.0625 5 7.72671 5 7.3125ZM5 13.25C5 12.8358 5.33579 12.5 5.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H5.75C5.33579 14 5 13.6642 5 13.25Z"
              fill="white"
            />
          </svg>

          <span style={{ paddingLeft: "20px" }}>Add a task</span>
        </div>
        <svg
          width="17"
          height="15"
          viewBox="0 0 17 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.3122 0.85171C8.72841 0.435498 9.40324 0.435498 9.81945 0.85171L15.8589 6.89118C16.2751 7.3074 16.2751 7.98222 15.8589 8.39844L9.81945 14.4379C9.40324 14.8541 8.72841 14.8541 8.3122 14.4379C7.89599 14.0216 7.89599 13.3469 8.3122 12.9307L12.5322 8.7106H1.96056C1.37195 8.7106 0.894775 8.23342 0.894775 7.64481C0.894775 7.0562 1.37195 6.57902 1.96056 6.57902H12.5322L8.3122 2.35896C7.89599 1.94275 7.89599 1.26792 8.3122 0.85171Z"
            fill="white"
          />
        </svg>
      </button>

      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        snapPoints={[643]}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <ModalContentHeader setOpen={setOpen}/>
            <NewTodo setOpen={setOpen}/>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop onClick={() => setOpen(false)} />
      </Sheet>
    </>
  );
}

export default Modal;
