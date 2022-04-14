const product = [
    {
        id: 1,
        name: 'Fernet 750ML',
        stock: 20,
        price: 800,
        categoryId: 1,
        category:{
         name:'destilados',
         id:1
        },
        img: 'https://res.cloudinary.com/ddyfnbcts/image/upload/v1649736460/Fondo/FERNET_BRANCA_750ml_tcmaab.jpg',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 2,
        name: 'Chandon',
        stock: 30,
        price: 1200,
        categoryId: 2,
        category:{
         name:'espumantes',
         id:2
        },
        img: 'https://res.cloudinary.com/ddyfnbcts/image/upload/v1649962455/Fondo/CHANDON_EXTRA_BRUT_750ml_hj7ue6.jpg',
        description:'La descripcion cjanclndjvnjvnsjvnsnvkzdnvknj <bmvbjbvjbfb<jcnakfbsjdncjk<bshjebkjbdjfv<jhbf',
    },
    {
        id: 3,
        name: 'Smirnoff',
        stock: 20,
        price: 700,
        categoryId: 1,
        category:{
         name:'destilados',
         id:1
        },
        img: 'https://res.cloudinary.com/ddyfnbcts/image/upload/v1649962606/Fondo/2169_SMIRNOFF_750ml_yhiigy.jpg',
        description:'La descripcion cjanclndjvnjvnsjvnsnvkzdnvknj <bmvbjbvjbfb<jcnakfbsjdncjk<bshjebkjbdjfv<jhbf',
    },
    {
        id: 4,
        name: 'Baron b',
        stock: 34,
        price: 1800,
        categoryId: 2,
        category:{
         name:'espumantes',
         id:2
        },
        img: 'https://res.cloudinary.com/ddyfnbcts/image/upload/v1649962894/Fondo/4597_BARON_B_EXTRA_BRUT_ROSE_750ml_y4yxh6.png',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 5,
        name: 'Corona',
        stock: 40,
        price: 600,
        categoryId: 3,
        category:{
            name:'Cervezas',
            id:3
           },
        img: 'https://res.cloudinary.com/ddyfnbcts/image/upload/v1649962948/Fondo/873_CORONA_710ml_hpawrf.jpg',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 6,
        name: 'Miller',
        stock: 67,
        price: 530,
        categoryId: 3,
        category:{
            name:'Cervezas',
            id:3
           },
        img: 'https://res.cloudinary.com/ddyfnbcts/image/upload/v1649962981/Fondo/1669_MILLER_330ml_d5bbeu.jpg',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 7,
        name: 'Crios',
        stock: 20,
        price: 700,
        categoryId: 4,
        category:{
            name:'Vinos',
            id:4
           },
        img: 'https://res.cloudinary.com/ddyfnbcts/image/upload/v1649963112/Fondo/4494_CRIOS_CHENIN_750ml_n1uwte.png',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 8,
        name: 'Callia',
        stock: 43,
        price: 550,
        categoryId: 4,
        category:{
            name:'Vinos',
            id:4
           },
        img: 'https://res.cloudinary.com/ddyfnbcts/image/upload/v1649963090/Fondo/4933_CALLIA_HOY_MALBEC_750ml_bbjs65.png',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 9,
        name: 'Johnnie walker',
        stock: 12,
        price: 2800,
        categoryId: 1,
        category:{
         name:'destilados',
         id:1
        },
        img: 'https://res.cloudinary.com/ddyfnbcts/image/upload/v1649963168/Fondo/1419_JOHNNIE_WALKER_RED_LABEL_1000ml_quccaq.jpg',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 10,
        name: 'Navarro Correa',
        stock: 20,
        price: 1000,
        categoryId: 2,
        category:{
         name:'espumantes',
         id:2
        },
        img: 'https://res.cloudinary.com/ddyfnbcts/image/upload/v1649963207/Fondo/2778_NAVARRO_CORREAS_NATURE_750ml_lw87eo.jpg',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
] 
module.exports= {
    product,
}