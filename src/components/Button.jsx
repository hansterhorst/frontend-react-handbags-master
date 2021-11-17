import React from 'react'

function Button({title, disabled}) {

    const onClick = () => {
        console.log(title)
    }

    return (
        <button onClick={onClick} disabled={disabled}>{title}</button>
    )
}

export default Button