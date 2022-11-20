import { useNavigate } from "react-router-dom";

export const useNavigationHook = () => {
    let navigate = useNavigate();

    const handleNavigate = (routeName: string) => {
        navigate(routeName);
    }

    return {
        handleNavigate
    }
}
