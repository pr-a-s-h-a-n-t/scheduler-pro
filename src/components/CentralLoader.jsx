import { Spinner } from "react-bootstrap";

const CentralLoader = () => {
  const loaderContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const spinnerStyle = {
    width: "100px",
    height: "100px",
    color: "red",
  };

  return (
    <div style={loaderContainerStyle}>
      <Spinner animation="border" role="status" style={spinnerStyle}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default CentralLoader;
