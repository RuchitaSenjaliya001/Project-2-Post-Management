
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props) => {

    if (props.isAuth) {
        return <Outlet />
    } else {
        return <Navigate to="/login" />
    }
}

export default PrivateRoute;