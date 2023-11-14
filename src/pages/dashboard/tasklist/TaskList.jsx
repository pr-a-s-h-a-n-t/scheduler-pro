import {useEffect, useState} from "react";
import TaskCreatorModal from "../createTaskModal/TaskCreaterModal.jsx";
import TaskCard from "./components/taskCard/TaskCard.jsx";
import {tasks} from "../../../constant/Constant.js";
import {useDispatch, useSelector} from "react-redux";
import {getTaskList} from "../../../api/task.js";
import {showToast} from "../../../utils/Notification.jsx";

const TaskList = () => {
    const dispatch = useDispatch();

    const {
        listResponse,
        loading
    } = useSelector(state => state.getTaskList);

    const [isTaskModal, setIsTaskModal] = useState(false);
    const [count, setCount] = useState(0);
    const [reqBody, setReqBody] = useState({
        title: '',
        description: '',
        date: new Date(),
    });

    useEffect(() => {
        const {userId} = JSON.parse(window.localStorage.getItem("userData"));
        if (userId) dispatch(getTaskList({userId: userId}));
    }, [])

    useEffect(() => {
        if (listResponse?.status) showToast(listResponse?.message, 'success');
        else {
            if (count >= 1) {
                return;
            }
            setCount(1);
            showToast(listResponse?.message, 'error');
        }
    }, [listResponse])

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
                {listResponse?.status ? listResponse?.data?.map((task) => {
                    return (
                        <div key={task?.id} onClick={() => handleCardClick(task, index)}>
                            <TaskCard task={task}/>
                        </div>
                    )
                }) : <div>No Task Found </div>

                }
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
