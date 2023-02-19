import styles from "./App.module.css";
import { useState } from "react";
import Modal from "./components/UI/Modal";
import TaskList from "./components/TaskList/TaskList";
import Provider from "./context/Provider";
import PinnedTodoLists from "./components/TaskList/PinnedTodoLists";
import Logo from "./components/UI/Logo";

function App() {
  return (
    <Provider>
      <main className={styles.container}>
        <Logo />
        <section className={styles.subContainer}>
          <h2>To Do List</h2>
          <hr></hr>
          <hr></hr>
          <article>
            <div className={styles.pinnedGroup}>
              <div>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.8861 0.553411C7.7796 -0.340086 9.29656 -0.0211116 9.75455 1.15657L10.3882 2.78609C10.7138 3.62316 11.2336 4.37086 11.9049 4.96755C12.5405 5.53255 13.2951 5.94723 14.1129 6.18087L18.072 7.31205C19.355 7.67862 19.7722 9.28863 18.8287 10.2322L15.0607 14.0001L20.6554 19.5947C20.9483 19.8876 20.9483 20.3625 20.6554 20.6554C20.3625 20.9483 19.8876 20.9483 19.5947 20.6554L14.0001 15.0607L10.2322 18.8287C9.28863 19.7722 7.67862 19.355 7.31205 18.072L6.18087 14.1129C5.94723 13.2951 5.53255 12.5405 4.96755 11.9049C4.37086 11.2336 3.62316 10.7138 2.78609 10.3882L1.15657 9.75454C-0.0211124 9.29656 -0.340086 7.7796 0.553411 6.8861L6.8861 0.553411ZM13.4748 13.4647C13.4731 13.4663 13.4714 13.468 13.4697 13.4697C13.468 13.4714 13.4663 13.4731 13.4647 13.4748L9.17149 17.768C9.0367 17.9028 8.8067 17.8432 8.75434 17.6599L7.62315 13.7008C7.32768 12.6666 6.80322 11.7122 6.08866 10.9083C5.33403 10.0594 4.3884 9.40194 3.32976 8.99024L1.70024 8.35654C1.532 8.29111 1.48643 8.0744 1.61407 7.94676L7.94676 1.61407C8.0744 1.48643 8.29111 1.532 8.35654 1.70024L8.99024 3.32976C9.40194 4.3884 10.0594 5.33403 10.9083 6.08866C11.7122 6.80322 12.6666 7.32768 13.7008 7.62315L17.6599 8.75434C17.8432 8.8067 17.9028 9.03671 17.768 9.17149L13.4748 13.4647Z"
                    fill="#FF7964"
                  />
                </svg>
                <span className={styles.pinTop}>Pin on the top</span>
              </div>

              <PinnedTodoLists />
              <hr className={styles.border}></hr>

              <TaskList />
            </div>

            <Modal className={styles.modal} />
          </article>
        </section>
      </main>
    </Provider>
  );
}

export default App;
