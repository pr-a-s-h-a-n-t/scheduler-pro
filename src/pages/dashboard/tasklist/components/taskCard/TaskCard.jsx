import styles from "./TaskCard.module.css"
import {formatDate} from "../../../../../utils/formatDate.js";

const TaskCard = ({task}) => {
    return (
        <div className={styles.task_card}>
            <div className={styles.card_top_bar}>
                <span className={styles.complete_status}>{task?.status ? "Completed" : "Not Completed"}</span>
                <span>{formatDate(task?.date)}</span>
            </div>
            <h1 className={styles.task_title}>{task?.title}</h1>
            <p className={styles.task_description}>{task?.description}</p>
            <p className={styles.task_time}>{task?.time}</p>
        </div>
    );
};

export default TaskCard;