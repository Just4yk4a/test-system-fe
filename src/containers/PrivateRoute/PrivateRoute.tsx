import {Redirect, Route} from "react-router";
import React from "react";
import {useSelector} from "react-redux";
import {getLoggedState} from "../../selector/user.selector";


function PrivateRoute({ children, ...rest }: any) {

    const isLogged: boolean = useSelector(getLoggedState);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLogged ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
