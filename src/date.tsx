import * as React from 'react';

function TutorialDateCustom() {
    

    //"" => default value
    let [date, setDate] = React.useState("")
    let [time, setTime] = React.useState("")
    
    //let date : string = new Date().toDateString();
    //let date : string;

    let getDate = () => {
        setDate(new Date().toDateString());
        setTime(new Date().toTimeString());
        //alert('button is clicked');
    }

    return(
        <div>
            {date}
            {time}
            <button onClick = {getDate}>Get the Date and time</button>
           
        </div>
    )
    //</div> <button onClick = {getDate}>Get the Date and time</button>
}

export {
    TutorialDateCustom
}

//kebab casing a-c-c-d