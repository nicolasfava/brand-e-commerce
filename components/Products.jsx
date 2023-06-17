import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@costants/index';

const Products = () => {
  return (
    <section className='py-[60px]'>
        <h2 className='sm:text-xl text-md text-purple font-semibold text-center mt-4'>...or buy separately</h2>
        <div className='flex xl:flex-row flex-col items-center justify-center py-[60px]'>
        {products.map(product => {
            return (
                <div key={product.id} className='flex flex-col mx-[100px] border-[1px] rounded-[10px] shadow-lg mb-[50px] xl:mb-0'>
                    <div className='border-[1px] rounded-t-[10px] flex justify-center py-10 px-[100px]'>
                        <Image 
                            src={product.img}
                            alt='img_product'
                            height={200}
                        />
                    </div>
                    
                    <div className='p-8'>
                        <p className='md:text-sm text-s text-purple font-medium mt-4'>{product.name}</p>
                        <p className='md:text-s text-xs text-dimPurple font-regular mt-4'>{product.description}</p>
                        <p className='md:text-s text-xs text-purple font-medium mt-4'>${product.price}</p>
                        <Link href={`/product/${product.id}`}>
                            <button className='bg-blue p-4 text-center rounded-[10px] mt-4 text-white font-medium'>MORE DETAILS</button>
                        </Link>
                        
                    </div>

                </div>
            )
        })}
    </div>
    </section>
    
  )
}

export default Products