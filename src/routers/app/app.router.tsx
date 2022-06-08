
import React, { FunctionComponent, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { AppRoute } from "../../utils/routes/routes.util";

const ListUtilityRouter = lazy(() =>
    import(
        /* webpackChunkName: "list-utility-router" */
        "../list-utility/list-utility.router"
    ).then((module) => ({ default: module.ListUtilityRouter }))
);

export const AppRouter: FunctionComponent = () => {

    return (
        <Switch>
            {/* Direct base path to list router */}
            <Route
                component={ListUtilityRouter}
                path={AppRoute.BASE}
            />

        </Switch>
    );
};
