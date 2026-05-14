export function ProductItem({prop}){
    return(<div key={prop.id} style={{borderStyle: 'solid', gap: '5px', padding: '5px'}}>
        <p>id: {prop.id}</p>
        <p>название: {prop.name}</p>
        <p>цена: {prop.price}</p>
        <p>раздел: {prop.category}</p>
    </div>)
}