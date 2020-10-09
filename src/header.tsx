import * as React from 'react';

//props help to make react component dynamic
//text?: string will allow null values
type HeaderProps = {
    text: string
}

//camel case for attributes abcAbc fontSize
function Header(props : HeaderProps) {
    return(
    <h1 className="primary-header">Hello from header.tsx during prop value: {props.text}</h1>
    )
}

export {
    Header
}

//export default Header; for single export

//<h1 style={{color:"red"}}> old school

