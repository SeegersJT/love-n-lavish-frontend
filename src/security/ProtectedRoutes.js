import React from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getAuthToken } from "../services/auth";
import { useDispatch } from "react-redux";
import { setAuthDestination } from "../actions/authActions";

function ProtectedRoute() {
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const token = getAuthToken();

    dispatch(setAuthDestination(pathname));

    if (!token) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />;
}

export default ProtectedRoute;
