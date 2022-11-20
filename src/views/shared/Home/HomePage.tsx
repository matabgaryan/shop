import {useNavigationHook} from "../../../hooks/useNavigation";
import {ROUTES} from "../../../configs/routes";
import {Container} from "../../../components/container/Container";
import {AppButton} from "../../../components/buttons/BaseButton";
import {BUTTON_VARIANTS} from "../../../constants/appConstants";

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
                         <AppButton
                             variant={BUTTON_VARIANTS.dark}
                             onClick={() => handleNavigate(ROUTES.shop)}
                             text="Shop Now"
                             className="w-188 mr-3.5"
                         />
                         <AppButton
                             variant={BUTTON_VARIANTS.transparent}
                             onClick={() => handleNavigate(ROUTES.shop)}
                             text="Open account"
                             className="w-188"
                         />
                     </div>
                 </div>
            </div>
        </Container>

    );
};

export default HomePage;
