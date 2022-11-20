import {useNavigationHook} from "../../../hooks/useNavigation";
import {ROUTES} from "../../../configs/routes";
import {Container} from "../../../components/container/Container";

const HomePage = () => {
    const { handleNavigate } = useNavigationHook();

    return (
        <Container>
            <div className="flex flex-col h-screen">
                 <div className="flex flex-col justify-center items-center flex-grow">
                     <h1 className="leading-extra-loose text-[72px] font-GoogleSansBold text-appBlack text-center  inset-0 ">
                         Find All Your Needs In One Place
                     </h1>
                     <p  className="mt-6 text-center max-w-3xl	tracking-tighter font-GoogleSansRegular text-[22px]">
                         A single place for all your products. Discover more products on our products section
                     </p>
                     <div className="flex flex-row mt-12">
                         <button
                             onClick={() => handleNavigate(ROUTES.shop)}
                             className="w-188 h-60 text-[22px] mr-3.5 bg-appBlack hover:opacity-80 text-white font-GoogleSansRegular  rounded-md">
                             Shop Now
                         </button>
                         <button
                             className="w-188 h-60 text-[22px] bg-transparent hover:opacity-80 text-appBlack font-GoogleSansRegular  border border-oziGrey  rounded-md">
                             Open account
                         </button>
                     </div>
                 </div>
            </div>
        </Container>

    );
};

export default HomePage;
