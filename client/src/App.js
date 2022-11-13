import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState([{}])
    useEffect(() => {
        fetch("/members").then(
            result => {
                console.log(result)
                return result.json()
            }
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])
    return (
        <section>
            {
                (typeof data.members === "undefined") ? (
                    <p>Loading...</p>
                ) : (
                    data.members.map((member, index) => {
                        <p key={index}>{member}</p>
                    })
                )
            }
        </section>
    );
}

export default App;
