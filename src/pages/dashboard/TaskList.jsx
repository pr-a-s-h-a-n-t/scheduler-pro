import { useState } from "react";
import TaskCreatorModal from "./TaskCreaterModal";

const TaskList = () => {
  const [isTaskModal, setIsTaskModal] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setIsTaskModal(true)}> Add Task</button>
      </div>
      {isTaskModal && (
        <TaskCreatorModal
          open={isTaskModal}
          handleHide={() => setIsTaskModal(false)}
        />
      )}
    </>
  );
};

export default TaskList;
