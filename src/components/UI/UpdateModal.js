import Sheet from "react-modal-sheet";
import { useState } from "react";
import ModalContentHeader from "./ModalContentHeader";
import NewUpdateTodo from "../TaskList/NewUpdateTodo";

function UpdateModal() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{ backgroundColor: "inherit", border: "none", width: '100%',borderBottom: "1px solid #E5E5E5",height: "72px", display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px'}}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.99997 1.5C5.35466 1.5 3.87737 2.22227 2.86883 3.36881L4.07322 4.5732C4.23071 4.73069 4.11917 4.99998 3.89645 4.99998H0.25C0.11193 4.99998 0 4.88805 0 4.74998V1.10353C0 0.8808 0.26929 0.76926 0.42678 0.92675L1.8066 2.30658C3.08696 0.89075 4.93912 0 6.99997 0C10.5822 0 13.5351 2.69021 13.9501 6.16094C13.9993 6.57222 13.7058 6.94551 13.2945 6.99469C12.8832 7.04388 12.5099 6.75034 12.4607 6.33906C12.1348 3.61345 9.8136 1.5 6.99997 1.5ZM0.70545 7.00531C1.11673 6.95612 1.49001 7.24966 1.5392 7.66094C1.86516 10.3865 4.18631 12.5 6.99997 12.5C8.6453 12.5 10.1226 11.7777 11.1311 10.6312L9.9268 9.4268C9.7693 9.2693 9.8808 9 10.1036 9H13.75C13.8881 9 14 9.112 14 9.25V12.8965C14 13.1192 13.7307 13.2307 13.5732 13.0732L12.1934 11.6934C10.913 13.1092 9.0608 14 6.99997 14C3.41771 14 0.46489 11.3098 0.0498101 7.83906C0.000630051 7.42778 0.29417 7.05449 0.70545 7.00531Z"
            fill="#010A1B"
          />
        </svg>

        <span>Update</span>
      </button>

      <Sheet isOpen={isOpen} onClose={() => setOpen(false)} snapPoints={[600]}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <ModalContentHeader setOpen={setOpen} />
            <NewUpdateTodo setOpen={setOpen}/>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop onClick={() => setOpen(false)} />
      </Sheet>
    </>
  );
}

export default UpdateModal;
