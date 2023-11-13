import Modal from 'react-bootstrap/Modal';
import DateTimePicker from 'react-datetime-picker';
import {DatePicker, Stack} from "rsuite";

const TaskCreatorModal = ({open, handleHide, reqBody, setReqBody}) => {

    const handleReqBodyChange = (name, value) => {
        setReqBody((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCreate = () => {
        console.log('CREATE==>', reqBody);
    };

    return (
        <Modal show={open} onHide={handleHide}>
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
                        <DateTimePicker
                            value={reqBody?.date}
                            onChange={(date) => handleReqBodyChange('date', date)}
                        />
                        <Stack direction="column" alignItems="flex-start" spacing={6}>
                            <DatePicker format="yyyy-MM-dd HH:mm:ss"/>
                        </Stack>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={handleCreate}>Create</button>
            </Modal.Footer>
        </Modal>
    );
};

export default TaskCreatorModal;
