import Modal from 'react-bootstrap/Modal';
import {DatePicker, Stack, Button} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import {useDispatch} from "react-redux";
import {createTask} from "../../../api/task.js";
import {useEffect, useState} from "react";
import {showToast} from "../../../utils/Notification.jsx";

const TaskCreatorModal = ({open, handleHide}) => {
    const dispatch = useDispatch();

    const [userId, setIserId] = useState(null);
    const [reqBody, setReqBody] = useState({
        title: '',
        description: '',
        date: new Date(),
        userId: ""
    });

    useEffect(() => {
        const userData = JSON.parse(window.localStorage.getItem("userData"))
        console.log("userdata",userData)
        if (userData) setIserId(userData?.userId);
    }, []);

    useEffect(() => {
        if (userId !== null) handleReqBodyChange("userId", userId);
    }, [userId])
    const handleReqBodyChange = (name, value) => {
        setReqBody((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCreate = () => {
        console.log('CREATE==>', reqBody);
        if (reqBody?.userId == "") {
            showToast("Something went Wrong", "error");
            return
        }
        if (reqBody?.title === "" || reqBody?.description === "") {
            showToast("Please Fill All the details", "error");
            return;
        }
        dispatch(createTask(reqBody));
    };

    return (
        <Modal size={"xl"}
               style={{
                   position: "absolute",
                   top: "50%",
                   left: "50%",
                   transform: "translate(-50%, -50%)",
                   border: "1px solid red"
               }}
               show={open} onHide={handleHide}>
            <Modal.Header closeButton>
                <Modal.Title>Create Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className="input_wrapper">
                        <span>Title</span>
                        <input
                            value={reqBody?.title}
                            onChange={(e) => handleReqBodyChange('title', e.target.value)}
                        />
                    </div>
                    <div className="input_wrapper">
                        <span>Description</span>
                        <textarea
                            value={reqBody?.description}
                            rows={4}
                            onChange={(e) => handleReqBodyChange('description', e.target.value)}
                        />
                    </div>
                    <div className="input_wrapper">
                        <span>Date</span>
                        <Stack direction="column" alignItems="flex-start" spacing={6}>
                            <DatePicker
                                format="yyyy-MM-dd HH:mm:ss"
                                value={reqBody?.date}
                                onChange={(value) => handleReqBodyChange('date', value)}
                            />
                        </Stack>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleCreate} appearance="primary">
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TaskCreatorModal;
