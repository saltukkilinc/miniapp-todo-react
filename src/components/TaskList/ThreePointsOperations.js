import React, {useContext} from "react";
import styles from "./ThreePointsOperations.module.css";
import context from "../../context/tasks-context";
import UpdateModal from "../UI/UpdateModal";

const ThreePointsOperations = () => {
  const ctx = useContext(context);

  
  return (
    <div className={styles.container}>
      <div onClick={ctx.pinHandler}>
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
            d="M6.88604 0.553411C7.77954 -0.340086 9.2965 -0.0211116 9.75448 1.15657L10.3882 2.78609C10.7137 3.62316 11.2335 4.37086 11.9048 4.96755C12.5404 5.53255 13.2951 5.94723 14.1128 6.18087L18.0719 7.31205C19.3549 7.67862 19.7721 9.28863 18.8286 10.2322L15.0607 14.0001L20.6553 19.5947C20.9482 19.8876 20.9482 20.3625 20.6553 20.6554C20.3624 20.9483 19.8876 20.9483 19.5947 20.6554L14 15.0607L10.2321 18.8287C9.28857 19.7722 7.67856 19.355 7.31199 18.072L6.18081 14.1129C5.94717 13.2951 5.53249 12.5405 4.96749 11.9049C4.3708 11.2336 3.6231 10.7138 2.78603 10.3882L1.15651 9.75454C-0.0211735 9.29656 -0.340147 7.7796 0.55335 6.8861L6.88604 0.553411ZM13.4748 13.4647C13.4731 13.4663 13.4714 13.468 13.4697 13.4697C13.468 13.4714 13.4663 13.4731 13.4646 13.4748L9.17143 17.768C9.03664 17.9028 8.80664 17.8432 8.75428 17.6599L7.62309 13.7008C7.32762 12.6666 6.80316 11.7122 6.0886 10.9083C5.33397 10.0594 4.38834 9.40194 3.3297 8.99024L1.70017 8.35654C1.53194 8.29111 1.48637 8.0744 1.61401 7.94676L7.9467 1.61407C8.07434 1.48643 8.29105 1.532 8.35648 1.70024L8.99018 3.32976C9.40188 4.3884 10.0593 5.33403 10.9083 6.08866C11.7122 6.80322 12.6665 7.32768 13.7007 7.62315L17.6599 8.75434C17.8431 8.8067 17.9027 9.03671 17.768 9.17149L13.4748 13.4647Z"
            fill="#010A1B"
          />
        </svg>

        <span>Pin on the top</span>
      </div>
      
      <div >
        <UpdateModal onClick={ctx.updateInputValue} />
      </div>
    
      <div onClick={ctx.deleteHandler}>
        <svg
          width="16"
          height="19"
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 3.30005H2.3V8.00005V14.3C2.3 16 3.6 17.3 5.3 17.3H10.7C12.4 17.3 13.7 16 13.7 14.3V8.00005V3.30005H8Z"
            stroke="#010A1B"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.1 7.1001V13.4001"
            stroke="#010A1B"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.9 7.1001V13.4001"
            stroke="#010A1B"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 3.30005H15"
            stroke="#010A1B"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.2 3.30005L10.5 2.10005C10 1.30005 9.1 0.800049 8.1 0.800049C7.1 0.800049 6.2 1.30005 5.7 2.10005L4.8 3.30005"
            stroke="#010A1B"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span>Delete</span>
      </div>
    </div>
  );
};

export default ThreePointsOperations;
