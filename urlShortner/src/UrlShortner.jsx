import React, { useState } from 'react';
import { FaCopy } from "react-icons/fa";

const UrlShortner = ({ setPage }) => {
    const [url, setUrl] = useState("");
    const [shortnedUrl, setShortnedUrl] = useState("");
    const [copied, setCopied] = useState("");
    const [linkInputErrorMessage, setLinkInputErrorMessage] = useState("");

    const API_KEY = "WyweEs3Hx4N3DCdKQp-mPqvdZ19ABZ3GmY4pTZtw";

    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch (err) {
            return false;
        }
    };

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };

    const shortUrl = () => {
        if (url.trim() === "") {
            setLinkInputErrorMessage("Please enter the URL.");
            return;
        }

        if (!isValidUrl(url)) {
            setLinkInputErrorMessage("Invalid URL. Please enter a valid link.");
            return;
        }

        setLinkInputErrorMessage("");
        setUrl("")

        fetch("https://thingproxy.freeboard.io/fetch/https://kutt.it/api/v2/links", {
            method: "POST",
            headers: {
                "X-API-Key": API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ target: url })
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setLinkInputErrorMessage(data.error);
                    alert(linkInputErrorMessage)
                    setShortnedUrl("");
                } else {
                    const shortLink = data.link.replace(/^https?:\/\//, "");
                    setShortnedUrl(shortLink);
                }
            })
            .catch(() => setLinkInputErrorMessage("Failed to shorten the URL. Try again."));
    };

    const copyToClipboard = () => {
        if (shortnedUrl) {
            navigator.clipboard.writeText(shortnedUrl).then(() => {
                setCopied("Link Copied Successfully.");
                setTimeout(() => setCopied(""), 3000);
            });
        } else {
            setCopied("Copy Failed.");
            setTimeout(() => setCopied(""), 3000);
        }
    };

    return (
        <div>
            <div className='urlshortner--main'>
                <h1>
                    <span style={{ color: '#108ae7' }}>URL</span> SHORTNER
                </h1>

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

                {shortnedUrl &&
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
                        >
                            {copied}
                        </span>
                    </div>}
            </div>
            <button className='logout--button' onClick={() => setPage("Login")}>
                Logout
            </button>
        </div>
    );
};

export default UrlShortner;
