import React, { useState } from 'react'
import '../App.css'

export default function TextField(props) {
    const [text, setText] = useState("Replace this text with yours...")
    const convertToUppercase = () => {
        setText(text.toUpperCase())
        props.showAlert("Successfully converted into UPPERCASE", "success")
        setTimeout(() => {
            props.setAlert(null)
        }, 4000);
    }

    const convertToLowercase = () => {
        setText(text.toLowerCase())
        props.showAlert("Successfully converted into lowercase...", "success")
        setTimeout(() => {
            props.setAlert(null)
        }, 4000);
    }

    const clearText = () => {
        setText("")
        props.showAlert("Successfully cleared the text", "success")
        setTimeout(() => {
            props.setAlert(null)
        }, 4000);
    }

    const copyToClipboard = () => {
        let myText = document.getElementById('text-box')
        myText.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Successfully copied to clipboard", "success")
        setTimeout(() => {
            props.setAlert(null)
        }, 4000);
    }

    const removeExtraSpaces = () => {
        let myText = text.split(/[ ]+/)
        setText(myText.join(" "))
        props.showAlert("Successfully removed all the extra spaces", "success")
        setTimeout(() => {
            props.setAlert(null)
        }, 4000);
    }

    // Logic for total number of words
    let result = text.split(" ")
    let finalResult = result.filter((word) => {
        return (word !== "")
    })

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <h2>Enter your text here and then start analyzing it....</h2>
            <textarea className="form-control" rows="8" value={text} onChange={handleOnChange} id="text-box" style={{background: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
            <button className="btn btn-success mt-3" onClick={convertToUppercase}>Convert To UPPERCASE</button>
            <button className="btn btn-success mt-3 mx-2" onClick={convertToLowercase}>Convert To lowercase</button>
            <button className="btn btn-success mt-3 mx-2" onClick={clearText}>Clear Text</button>
            <button className="btn btn-success mt-3 mx-2" onClick={copyToClipboard}>Copy To Clipboard</button>
            <button className="btn btn-success mt-3 mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <div className="row mt-3">
                <div className="col-lg-6">
                    <h2>Preview</h2>
                    <p>{text.length>0 ? text : 'Enter some text above to preview here...'}</p>
                </div>
                <div className="col-lg-6">
                <h2>Your Text Summary</h2>
                    <ul className="list-group">
                        <li className="list-group-item" style={{background: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}><strong>Total Number Of Words: </strong>{finalResult.length}</li>
                        <li className="list-group-item" style={{background: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}><strong>Total Number Of Characters: </strong>{text.length}</li>
                        <li className="list-group-item" style={{background: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}><strong>Read Time: </strong>{text.length > 0 ? 0.008 * text.split(" ").length : '0' } minutes</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
