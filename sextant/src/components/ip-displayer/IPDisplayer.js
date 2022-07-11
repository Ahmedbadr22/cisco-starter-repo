import "./ip-displayer-style.css";
import {useEffect, useState} from "react";

const IPDisplayer = ({ipV = 4}) => {
    const [ip, setIp] = useState(null);

    const getIpAddress = async (url) => {
        const response = await fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        if (response.status === 200) setIp(data.ip);
        else console.log(data);
    }

    useEffect(() => {
        if (ipV === 4) getIpAddress('https://api.ipify.org?format=json').then();
        else if (ipV === 6) getIpAddress('https://api64.ipify.org?format=json').then();
    }, [ipV])

    return (
        <div className="ip-displayer">
            <h4>IPV{ipV}</h4>
            <span>{ip}</span>
        </div>
    );
};

export default IPDisplayer;