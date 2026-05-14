import { ProductItem } from "./ProductItem"
export function ProductList({products}){
    {console.log('ProducList')}
    return(products.map((product) => {
        return(<ProductItem key={product.id} product= {product}/>)
    }))
}