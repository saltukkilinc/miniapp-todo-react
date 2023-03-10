import React from "react";
import styles from './ModalContentHeader.module.css';

const ModalContentHeader = ({setOpen}) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.first}>
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
              fill="#FF7964"
            />
          </svg>
          <div>Add a task</div>
        </div>
        <div>
          <svg
            onClick={() => setOpen(false)}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7925 1.00391L1.00781 12.7886"
              stroke="#010A1B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7945 12.797L1 1"
                stroke="#010A1B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </svg>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ModalContentHeader;
