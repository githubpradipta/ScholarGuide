import React from 'react'

export default function Input({type,placeholder,className}) {
    return (
        <input 
        type={type}
        placeholder={placeholder}
        className={className}
        />
    )
}
