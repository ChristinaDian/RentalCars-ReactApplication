import { Navigate, useNavigate } from "react-router-dom";
import { getLoggeduser } from "../http-utils/user-requests";

export function AuthenticatedRoute({ children }) {
    const navigate = useNavigate

    const user = getLoggeduser();
    if(!user)
    {
        return <Navigate to='/login' />
    }

    return children;
}