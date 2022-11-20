import {Container} from "../../../components/container/Container";

export  function NotFound() {
    return (
        <Container>
            <div className="flex flex-col h-screen">
                <div className="flex flex-col justify-center items-center flex-grow">
                    <p className="leading-extra-loose text-[40px] font-GoogleSansBold text-appBlack text-center  inset-0 ">
                       The page you are looking for does not exist.
                    </p>
                    <button>
                        <a href='/'>Go Back</a>
                    </button>
                </div>
            </div>
        </Container>
    );
}
