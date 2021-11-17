import React from 'react'


function Feature({image, title, text}) {

    return (
        <section>
            {image ? <img src={image} alt="title"/> :
                <>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </>
            }
        </section>
    )
}

export default Feature