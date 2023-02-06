module.exports = function () {
    return {
        navbar: [
            { id: 1, name: "Home",path:"shop" },
            { id: 2, name: "Products",path:"checkout"  },
            { id: 3, name: "Cart" ,path:"cart" },
            { id: 4, name: "Orders" ,path:"orders" },
            { id: 5, name: "Add Product",path:"shop"  },
            { id: 6, name: "Admin Products" ,path:"shop" },
            { id: 7, name: "Add Category" ,path:"shop" },
            { id: 8, name: "Categories" ,path:"shop" },


        ],
        products: [
            { id: 1, name: " Samsung S5", price: 1000, imageUrl: "1.jpg", description: "idare film", category: "Telefon" },
            { id: 2, name: " Samsung S7", price: 2000, imageUrl: "2.jpg", description: "iyi film", category: "Telefon" },
            { id: 3, name: " Samsung S8", price: 3000, imageUrl: "3.jpg", description: "fenA film", category: "Telefon" },
            { id: 4, name: " Samsung S2", price: 4000, imageUrl: "4.jpg", description: "ADİL film", category: "Bilgisayar" },
            { id: 5, name: " Samsung S3", price: 5000, imageUrl: "5.jpg", description: "idare film", category: "Bilgisayar" },
            { id: 6, name: " Samsung S4", price: 6000, imageUrl: "6.jpg", description: "idare film", category: "Bilgisayar" },
            { id: 7, name: " Samsung S9", price: 7000, imageUrl: "7.jpg", description: "idare film", category: "Elektronik" },

        ],
        categories: [
            { id: 1, name: "Telefon" },
            { id: 2, name: "Bilgisayar" },
            { id: 3, name: "Elektronik" },

        ],
        orders: [

        ]
    }
}