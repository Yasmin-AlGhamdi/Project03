import axios from 'axios';
import React from 'react';
import './CatsList.css';
import { useState, useEffect } from 'react';

export default function CatList () {
    const [url, setUrl] = useState('');
    
    useEffect(() => {
        getCatPic()
    }, [])

   const getCatPic= () =>
   {
    axios.get("https://thatcopy.pw/catapi/rest/")
    .then((res)=>{
        setUrl(res.data.url)
    }).catch((err) => {
            console.log("error", err);
        })
    }

        return (
            <div className="catMain">
                <img className="CatImg" src={url} alt="Cat pic"/><br/>
                <button className="Catbtn" onClick={getCatPic}> Generate </button>
            </div>
        )
    }