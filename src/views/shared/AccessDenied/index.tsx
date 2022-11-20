import React from "react";
import {Container} from "../../../components/container/Container";

const AccessDenied = () => {
    return (
        <Container>
            <div className="flex flex-col h-screen">
                <div className="flex flex-col justify-center items-center flex-grow">
                    <p className="leading-extra-loose text-[40px] font-GoogleSansBold text-appBlack text-center  inset-0 ">
                        The page you are looking for Access Denied for you :(
                    </p>
                    <button>
                        <a href='/'>Go Back</a>
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default AccessDenied;
