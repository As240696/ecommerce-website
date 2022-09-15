import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className='Newsletter-container'>
        <h1>Newsletter</h1>
        <div className='Newsletter-desc'>
            Get timely updates from your favourite products.
        </div>
        <div className='input-container'>
            <input placeholder='Your email'/>
            <button>
                <SendIcon />
            </button>
        </div>
    </div>
  )
}

export default Newsletter;