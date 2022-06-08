export const AppRoute = {
    BASE: "/",
    LIST: "/list-utility",
}

export const getBasePath = (): string => {
    return AppRoute.BASE;
}


export const getListPath = (): string => {
    return AppRoute.LIST;
}
