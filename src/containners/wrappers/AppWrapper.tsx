import { Router } from "../../router";
import {useEffect, useState} from "react";
import AppModals from "../wrappers/ModelsWrapper";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', hideMenu);
        return () => {
            window.removeEventListener('resize', hideMenu);
        };
    });

    return (
        <>
            <AppModals />
            <div className="relative bg-white h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-screen">
                    <Router  />
                </div>
            </div>
        </>
    );
}

export default App;
