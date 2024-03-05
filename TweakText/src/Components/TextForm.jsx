import React, {useState} from 'react'

function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        alert("text copied")
    }


    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter text here")

    return (
        <>
        <div className="container" style={{color: props.mode === "light" ? "black" : "white"}}>
            <div className="mb-3">
                <h1 className="my-3">{props.heading}</h1>
                <textarea className="form-control"  style={{background: props.mode === "light" ? "white" : "gray", color: props.mode === "light" ? "black" : "white"}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-3"  onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-primary mx-3"  onClick={handleLowClick}>Lowercase</button>
            <button className="btn btn-primary mx-3"  onClick={handleCopyClick}>Copy</button> 
        </div>
        <div className="container my-3" style={{color: props.mode === "light" ? "black" : "white"}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length } Minutes to read article</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    );
}

export default TextForm
