import { useState } from "react"
export function ProductItem({product}){
    {console.log('ProductItem')}
    const [selProduct, setSelProduct] = useState(false)
    return(<div key={product.id} style={{borderStyle: 'solid', gap: '5px', padding: '5px'}}>
        <button style={{backgroundColor: selProduct ? 'yellow' : 'white'}} onClick={() => {
            if(selProduct){
                alert('товар удалён из корзины')
                setSelProduct(false)
            }
            else{
                alert('товар добален в корзину')
                setSelProduct(true)
            }
        }}>{selProduct ? 'убрать товар с корзины' : 'добавить в корзину'}</button>
        <p>id: {product.id}</p>
        <p>название: {product.name}</p>
        <p>цена: {product.price}</p>
        <p>раздел: {product.category}</p>
    </div>)
}