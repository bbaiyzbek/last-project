import React from 'react';
import {useNavigate} from "react-router-dom";
import './style.css'

const BackBtn = () => {
    const navigate = useNavigate()
    return (
        <div>
            <button className={'back-btn'} onClick={() => navigate(-1)}>back</button>
        </div>
    );
};

export default BackBtn;