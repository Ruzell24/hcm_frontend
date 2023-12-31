import Cookies from "js-cookie"
import { Navigate } from "react-router-dom";
import service from '../service/user';
import { useQuery } from "react-query";
import React from "react";
import AuthProvider from "../context/user/UserContext";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
    const token = Cookies.get('token');
    const query = useQuery({ queryKey: ['user'], queryFn: service.getUserDetails })
    
    if (!token) {
        return <Navigate to={'/'} />
    }

    if (query.isLoading){
        return <Loading/>
    }
    
    if(query.isError){
        return <Navigate to={'/'} />
    }

    return <AuthProvider userDetails={query.data}>{children}</AuthProvider>
}

export default PrivateRoute;
