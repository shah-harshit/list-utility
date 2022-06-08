export const AppRoute = {
    BASE: "/list-utility",
    LIST: "/list-utility/list",
}

export const getBasePath = (): string => {
    return AppRoute.BASE;
}


export const getListPath = (): string => {
    return AppRoute.LIST;
}
