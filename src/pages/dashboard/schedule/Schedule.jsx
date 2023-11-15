import {useState} from "react";
import TaskCreateModal from "../createTaskModal/TaskCreaterModal.jsx";
import styles from "./Schedule.module.css";

const ScheduleTaskNow = () => {
    const [isScheduleTaskNowModal, setIsScheduleTaskNowModal] = useState(false);

    return (
        <div style={{
            position: "relative"
        }}>
            <div className={styles.schedule}>
                <button onClick={() => setIsScheduleTaskNowModal(true)}>Schedule Now!</button>
            </div>
            {
                isScheduleTaskNowModal && <TaskCreateModal
                    handleHide={() => setIsScheduleTaskNowModal(false)}
                    open={isScheduleTaskNowModal}
                />
            }

        </div>
    )
}
export default ScheduleTaskNow;