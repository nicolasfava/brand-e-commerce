import img_1 from '@public/assets/medico1.png'
import img_2 from '@public/assets/medico2.png'
import img_3 from '@public/assets/medico3.png'
import day_night from '@public/assets/prodotto2.png'
import cleanser from '@public/assets/prodotto1.png'
import moisturizer from '@public/assets/prodotto3.png'
import full_img_1 from '@public/assets/single_product.png'
import full_img_2 from '@public/assets/single_product_2.png'
import full_img_3 from '@public/assets/single_product_3.png'


const reviews = [
    {
        id: 1,
        name: 'Alice Cattelan',
        job: 'co-founder',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        img: img_1

    },
    {
        id: 2,
        name: 'Lucas McConley  ',
        job: 'co-founder',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        img: img_2
    },
    {
        id: 3,
        name: 'George Allister',
        job: 'co-founder',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        img: img_3
    }
]


const  products = [
    {
        id: '101',
        name:'DAY & NIGHT',
        img: day_night,
        img_full: full_img_1, 
        price: '10',
        description: 'RX formula, 100ml',
        full_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: '102',
        name:'THE CLEANSER',
        img: cleanser,
        img_full: full_img_2,
        price: '8',
        description: 'RX formula, 80ml',
        full_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: '103',
        name:'THE MOISTURIZER',
        img: moisturizer,
        img_full: full_img_3,
        price: '8',
        description: 'RX formula, 50ml',
        full_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
]

export {
    reviews,
    products
}

