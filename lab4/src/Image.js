import {useState, useEffect} from "react";
import {Button} from 'react-bootstrap'
import './App.css';

export function Image(){
    const [data, setData] = useState(null);
    const onButtonClick = () => {
        fetch(`https://random.dog/woof.json?ref=apilist.fun`)
            .then(response => response.json())
            .then(setData)
            .catch(() => {
                console.log("Error");
            })
    }

    return (
        <div className="flex-div margin-bottom">
            <Button variant="primary" type="submit" onClick={onButtonClick}>Get image</Button>
            <img className="avatar" src={data ? data.url : ""}/>
        </div>
    )
}
