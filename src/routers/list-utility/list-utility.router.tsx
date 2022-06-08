
import React, { FunctionComponent, lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import { ListUtilityPage } from "../../pages/list-utility/list-utility";
import {
    AppRoute,
} from "../../utils/routes/routes.util";

const ListUtilityPage = lazy(() =>
    import(
        /* webpackChunkName: "list-utility-page" */
        "../../pages/list-utility/list-utility"
    ).then((module) => ({ default: module.ListUtilityPage }))
);

const PageNotFoundPage = lazy(() =>
    import(
        /* webpackChunkName: "page-not-found-page" */
        "../../pages/page-not-found/page-not-found"
    ).then((module) => ({ default: module.PageNotFound }))
);

export const ListUtilityRouter: FunctionComponent = () => {
    return (
        <Suspense>
            <Switch>
                {/* List path */}
                <Route exact path={AppRoute.BASE}>
                    {/* Redirect to list path */}
                    <Redirect to={AppRoute.LIST} />
                </Route>

                {/* List path */}
                <Route
                    exact
                    component={ListUtilityPage}
                    path={AppRoute.LIST}
                />

                {/* No match found, render page not found */}
                <Route component={PageNotFoundPage} />
            </Switch>
        </Suspense>
    );
};
