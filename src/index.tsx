import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Header} from './header';
import {TutorialDateCustom} from './date';
import {FruitLoops} from './fruit-loops';

let fruit1 : Array<string> = [
    "red",
    "green",
    "blue",
    "yellow"
]

ReactDOM.render(
    <div>
        <Header text="prop1"/>
        <Header text="prop2"/>
        <Header text="prop3"/>
        <TutorialDateCustom/>
        <FruitLoops fruit = {fruit1}/>
        <h1>Welcome to UI</h1>
        <p>This project will introduce react js with node and typescript</p>
        <a href='#'> click me</a>
    </div>,
    document.querySelector('#root')
)


//<Header></Header>
//        <header/>