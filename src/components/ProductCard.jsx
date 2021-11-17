import React from 'react'

function ProductCard({label, image, title, price}) {
    return (
        <article>
            <span>{label}</span>
            <img src={image} alt="Bag"/>
            <p>{title}</p>
            <h4>{`€${price},-`}</h4>
        </article>
    )

}

export default ProductCard