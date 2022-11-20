import React from "react";
import {useNavigationHook} from "../../../hooks/useNavigation";
import {ROUTES} from "../../../configs/routes";
import {useProducts} from "../../../hooks/useProducts";
import {Container} from "../../../components/container/Container";

export const AdminDashboard = () => {
    const { handleNavigate } = useNavigationHook();
    const { allProducts } = useProducts();
    return (
        <Container>
            <div className="w-full flex flex-col items-center">
                <div className="w-full">
                    <p className="text-appBlack font-GoogleSansBold font-[700] text-[22px]">
                         Dashboard
                    </p>
                    <p className="font-GoogleSansRegular font-[400] text-[18px] text-lightGrey">Company</p>
                    <p className="max-w-2xl font-GoogleSansRegular font-[400] text-[18px] text-appBlack">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore neque nulla qui sapiente veniam. Accusamus, laboriosam, necessitatibus! Ab accusantium ea eum laborum odio quis sed sunt voluptate! Commodi, nihil, rerum.</p>
                </div>
                <div className="w-full mt-[72px]">
                    <div className="w-full flex flex-row justify-between items-center px-6">
                        <p className="flex flex-row font-GoogleSansBold text-[22px] text-appBlack font-[700] ">
                            Products
                            <span
                                className={`ml-1.5 bg-oziPurple text-white text-xs px-3 py-1 font-GoogleSansRegular font-[400]  flex justify-center items-center rounded-[50px] `}>
                                JJT
                            </span>
                        </p>
                        <button
                            onClick={() => handleNavigate(ROUTES.createProduct)}
                            className="w-[140px] h-[44px] text-white bg-appBlack hover:opacity-70  font-GoogleSansRegular rounded-[6px] text-[16px]  px-5 py-2.5 text-center ">
                            Add Products
                        </button>
                    </div>
                    <table
                        className="mt-4 border-separate border-spacing-0 w-full table-auto rounded-[10px] border border-[rgba(200, 200, 200, 0.5)] pt-8 shadow-[2px_2px_10px_0px_#C8C8C880]">
                        <thead className="border-b border-greyBorder">
                        <tr className="bg-white text-appBlack">
                            <td className="py-3 px-6 font-GoogleSansRegular text-[15px] text-greyPrimary">Name</td>
                            <td className="py-3 px-6 font-GoogleSansRegular text-[15px] text-greyPrimary">Weight</td>
                            <td className="py-3 px-6 font-GoogleSansRegular text-[15px] text-greyPrimary">Start Date</td>
                            <td className="py-3 px-6 font-GoogleSansRegular text-[15px] text-greyPrimary">End Date</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            allProducts.map((item) => {
                                return (
                                    <tr key={item.id} className="even:bg-tableLightGrey odd:bg-white">
                                        <td className="flex justify-between flex-row items-center py-3 px-6 font-GoogleSansRegular text-[15px] text-appBlack">
                                            {item.name}
                                        </td>
                                        <td className="py-3 px-6 font-GoogleSansRegular text-[15px] text-appBlack">
                                            {item.weight}
                                        </td>
                                        <td className="py-3 px-6 font-GoogleSansRegular text-[15px] text-appBlack">
                                            {item.startDate}
                                        </td>
                                        <td className="py-3 px-6 font-GoogleSansRegular text-[15px] text-appBlack">
                                            {item.endDate}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </Container>
    )
}
