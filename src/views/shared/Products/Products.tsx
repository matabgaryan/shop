import React from "react";
import {useProducts} from "../../../hooks/useProducts";
import {ProductsList} from "./components/ProductsList";
import {PageLoader} from "../../../components/loaders/PageLoader";
import {Container} from "../../../components/container/Container";
import {AppButton} from "../../../components/buttons/BaseButton";
import {BUTTON_VARIANTS} from "../../../constants/appConstants";

export const Products = () => {
    const {
        isLoading, showAllProducts,
        setShowAllProducts, allProducts, mostProbableProducts
    } = useProducts();

    return (
        <Container>
            <div className="w-full flex flex-col items-center">
                <div className="w-full">
                    <p className="text-appBlack font-GoogleSansBold font-[700] text-[22px]">
                        Shop by Collection
                    </p>
                    <p className="max-w-2xl font-GoogleSansRegular font-[400] text-[18px] text-appBlack">
                        Each season, we collaborate with world class designers to create a
                        collection inspired by natural world.
                    </p>
                </div>
                <div className="w-full flex items-center justify-end">
                    <AppButton
                        variant={`${showAllProducts ? BUTTON_VARIANTS.transparent : BUTTON_VARIANTS.dark}`}
                        onClick={() =>  setShowAllProducts(false)}
                        text="Probable Products"
                        className={`w-48`}
                    />
                    <AppButton
                        variant={`${showAllProducts ? BUTTON_VARIANTS.dark : BUTTON_VARIANTS.transparent}`}
                        onClick={() =>  setShowAllProducts(true)}
                        text=" All Products"
                        className={`w-48`}
                    />
                </div>
                {isLoading ? <PageLoader/> :
                    <ProductsList products={showAllProducts ? allProducts : mostProbableProducts}/>
                }
            </div>
        </Container>
    )
}
