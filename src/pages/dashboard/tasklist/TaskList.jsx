import { useState } from "react";
import TaskCreatorModal from "../createTaskModal/TaskCreaterModal.jsx";
import TaskCard from "./components/taskCard/TaskCard.jsx";
import {tasks} from "../../../constant/Constant.js";

const TaskList = () => {
    const [taskList, setTaskList] = useState(tasks);
    const [isTaskModal, setIsTaskModal] = useState(false);
    const [reqBody, setReqBody] = useState({
        title: '',
        description: '',
        date: new Date(),
    });

    const handleCardClick = (task, index) => {
        setReqBody(prevState => ({
            ...prevState,
            title: task?.title,
            description: task?.description,
            date: task?.date
        }));
    }

    return (
        <>
            <div>
                <button onClick={() => setIsTaskModal(true)}>Add Task</button>
            </div>

            <div>
                {taskList?.map((task) => {
                    return (
                        <div key={task?.id} onClick={() => handleCardClick(task, index)}>
                            <TaskCard task={task} />
                        </div>
                    )
                })}
            </div>
            {isTaskModal && (
                <TaskCreatorModal
                    reqBody={reqBody}
                    setReqBody={setReqBody}
                    open={isTaskModal}
                    handleHide={() => setIsTaskModal(false)}
                />
            )}
        </>
    );
};

export default TaskList;
