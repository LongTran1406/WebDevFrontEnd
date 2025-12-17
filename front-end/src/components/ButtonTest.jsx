import React from 'react'
import { useState } from 'react';

const ButtonTest = () => {
    const [data, setData] = useState(null);

    const fetchMessage = async () => {
        const res = await fetch("https://webdevbackend-azfta6breyh2enh2.australiaeast-01.azurewebsites.net/api/message");
        // const res = await fetch("http://127.0.0.1:8000/api/message");
        const json = await res.json();
        setData(json);
    };

    return (
        <div className="p-6">
            <button className="bg-blue-500 text-white px-4 py-2" onClick={fetchMessage}>
                Call Backend
            </button>

            {data && <p className="mt-4">Message: {data.message}</p>}
        </div>
    );
}

export default ButtonTest