import React from "react";
import {useProducts} from "../../../hooks/useProducts";
import {ProductsList} from "./components/ProductsList";
import {PageLoader} from "../../../components/loaders/PageLoader";
import {Container} from "../../../components/container/Container";

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
                    <button
                        data-testid="products-filter-btn"
                        className={`${showAllProducts ? 'bg-white text-appBlack' : 'bg-appBlack text-white'} py-2.5 px-5 mr-2 mb-2 text-sm font-medium  focus:outline-none rounded-lg border border-gray-200 `}
                        onClick={() => setShowAllProducts(false)}
                        type="button"
                    >
                        More Probable Products
                    </button>
                    <button
                        data-testid="products-show-all-btn"
                        className={`${showAllProducts ? 'bg-appBlack text-white' : 'bg-white text-appBlack'} py-2.5 px-5 mr-2 mb-2 text-sm font-medium focus:outline-none  rounded-lg border border-gray-200  `}
                        onClick={() => setShowAllProducts(true)}
                        type="button"
                    >
                        All Products
                    </button>
                </div>
                {isLoading ? <PageLoader/> :
                    <ProductsList products={showAllProducts ? allProducts : mostProbableProducts}/>
                }
            </div>
        </Container>
    )
}
