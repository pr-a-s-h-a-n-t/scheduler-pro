import {toast, Toaster} from "react-hot-toast";
import {useEffect} from "react";

const ShowNotification = ({type, message}) => {

    useEffect(()=>{
        if(type === "success"){
            toast.success(message);
        }
        if(type === "error"){
            toast.error(message);
        }
        if(type === "warning"){
            toast.warning(message);
        }
        if(type === "loading"){
            toast.loading(message);
        }
    },[type, message]);
    return (
        <div>
            <Toaster
                position="bottom-left"
                toastOptions={{
                    duration: 3000,
                    iconTheme: {
                        primary: "red",
                        secondary: "white"
                    },
                    role: "status",
                    ariaLive: "polite",
                }}
            />
        </div>
    )
}
export default ShowNotification;