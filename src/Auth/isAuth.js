import {Navigate,Outlet} from "react-router-dom";
const ProtectedRoutes=()=>{
    
    const isAuthToken=window.localStorage.getItem("StoreId")
    console.log("token is",isAuthToken);
    return isAuthToken?<Outlet/>:<Navigate to="/login-page"/>;

}
export default ProtectedRoutes;