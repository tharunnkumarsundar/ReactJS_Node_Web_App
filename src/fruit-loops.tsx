import * as React from 'react';

function FruitLoops1() {
    let fruit1 : Array<string> = [
        "red",
        "green",
        "blue",
        "yellow"
    ]
}


type FruitLoopsProps = {
     fruit : Array<string>
}

    function FruitLoops(props : FruitLoopsProps) {

    return (
        <ul>
            {props.fruit.map((value, index) => {
                let color : string = "";
                if(value != ""){
                    color = value;
                }
                return <li key = {index} style={{color : color}}> {value} </li>
            })}
        </ul>
    )
}

export {
    FruitLoops
}