import {Pojo} from "../../core/types";

export interface IMobileNavbarProps {
    open: boolean,
    setOpen: (v: boolean) => void,
    routes: Pojo[]
}

export interface IAppNavbarProps {
    rightSide: JSX.Element,
    routes: Pojo[]
}

export interface INavItemProps {
    navItem: Pojo
}
