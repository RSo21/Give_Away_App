import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const currentUser = sessionStorage.getItem("email");
    return (
        <Route
            {...rest}
            render={routeProps =>
                (currentUser) ? (<RouteComponent {...routeProps} />) : (<Redirect to={"/login"} />)
            }
        />
    );
};

export default PrivateRoute