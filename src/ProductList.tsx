import { ProductItem } from "./ProductItem"
export function ProductList({props}){
    return(props.map((prop) => {
        return(<ProductItem prop= {prop}/>)
    }))
}