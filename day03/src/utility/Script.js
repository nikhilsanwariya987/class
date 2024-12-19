import products from "./Data.js";
console.log(products);
const p = products.flatMap((product) =>(
    product.productName.map((item) =>({
        category: product.category, productName: item
    }))
));
console.log(p)