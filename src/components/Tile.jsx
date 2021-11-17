import React from 'react'

function Tile({image, title, body}) {

    return (
        <section>
            {/* ternary operator*/}
            {image ? <img src={image} alt="title"/> :
                <>
                    <h2>{title}</h2>
                    {body.map((text, index) => <p key={index}>{text.text}</p>)}
                </>
            }
        </section>
    )
}

export default Tile