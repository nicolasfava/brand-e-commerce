import React from "react";
import { products } from "@costants/index";
import Image from "next/image";
import Link from "next/link";
import Button from "@components/Button";
import ButtonCart from "@components/ButtonCart";

export async function generateStaticParams() {
    const items = products
    return items.map((product) => {
        return {
            params: {
                id: product.id
            }
            
        }
    })
        
    }


const Page = async(props) => {


    const item = products.filter(product => product.id === props.params.id)
    
    return (
        <section className="flex xl:flex-row flex-col xl:max-h-[100vh] min-h-[100vh] w-full relative flex-wrap overflow-hidden">
            <div className="flex flex-1 flex-col md:px-[130px] px-[60px] py-[180px]">
                <h2 className="sm:text-xl text-md text-purple font-semibold">{item[0].name}</h2>
                <p className="md:text-s text-xs text-dimPurple font-regular mt-4">{item[0].description}</p>
                <p className="md:text-s font-xs text-purple font-regular mt-4">{item[0].full_description}</p>
                <p className="md:text-sm font-s text-purple font-medium mt-4">$ {item[0].price}</p>
                <div className="flex flex-row gap-[50px]">
                    
                <Button text='BUY NOW'/>
                         
                </div>
            </div>
            <div className="flex-1">
                <Image 
                    src={item[0].img_full}
                    alt="product_img"
                    width={700}
                    height={700}
                    className="object-cover w-[100%] h-[100%]"
                />
            </div>
        </section>
    )
}

export default Page

//{props.params.id}