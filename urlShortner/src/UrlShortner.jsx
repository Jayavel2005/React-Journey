import React, { useState } from 'react';
import { FaCopy } from "react-icons/fa";

const UrlShortner = ({ setPage }) => {
    const [url, setUrl] = useState("");
    const [shortnedUrl, setShortnedUrl] = useState("");
    const [copied, setCopied] = useState("");

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };

    const shortUrl = () => {
        const shortURL = `bit.ly/${Math.random().toString(36).substr(2, 6)}`;
        setShortnedUrl(shortURL);
        setCopied(false); // Reset copied state
    };

    const copyToClipboard = () => {
        if (shortnedUrl) {
            navigator.clipboard.writeText(shortnedUrl).then(() => {
                setCopied("Link Copied Successfully.");
                setTimeout(() => setCopied(""), 3000); // Hide message after 3 seconds
            }).catch(err => console.error("Failed to copy:", err));
        }
        if (shortnedUrl.trim() === "") {
            setCopied("Copy Failed.")
            setTimeout(() => setCopied(""), 3000)
        }
    };


    return (
        <div>
            <div className='urlshortner--main'>
                {/* Heading */}
                <h1>
                    <span style={{ color: '#108ae7' }}>URL</span> SHORTNER
                </h1>

                {/* Input Box */}
                <div className="link--container">
                    <div className='input--box'>
                        <input
                            type="text"
                            placeholder='Paste your link...'
                            value={url}
                            onChange={handleUrlChange}
                        />
                        <button onClick={shortUrl}>Convert</button>
                    </div>
                </div>

                {/* Clipboard Box */}

                <div className="clipboard--main">
                    <div className='clipboard--textfieldGroup'>
                        <input className='clipboard--textfield' readOnly value={shortnedUrl} />
                        <button className='copy--button' onClick={copyToClipboard}>
                            <FaCopy />
                        </button>
                    </div>
                    <span
                        className='informative--message'
                        style={{ color: copied === "Link Copied Successfully." ? "green" : "red", display: copied ? "block" : "none" }}
                    >{copied}</span>
                </div>



            </div>
            <button
                className='logout--button'
                onClick={() => {
                    setPage("Login")
                }}>Logout</button>
        </div>
    );
};

export default UrlShortner;
