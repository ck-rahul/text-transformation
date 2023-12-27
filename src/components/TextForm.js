import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpperCaseClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  }

  const handleOnChange = (event) =>{
    setText(event.target.value);
  }

  const handleLowerCaseClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  }

  const handleExtraWhiteSpaceClick = () =>{
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert("Extra white space has been removed", "success");
  }

  const handleCapitalizeClick = () =>{
    let getTexts = text;
    let newText = getTexts.split(' ').map(txt=> txt[0].toUpperCase()+txt.substring(1)).join(' ');
    setText(newText);
    props.showAlert("Converted to Capitalize", "success");
  }

  const handleCopyClipboardClick = () =>{
    try{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied", "success");
    } catch(err){
        console.error('text copied failed!', err);
    }
  }

  const handleClearClick = () =>{
    setText('');
    props.showAlert("Text cleared", "success");
  }
  return (
    <>
        <div className="container my-5">
            <h1 style={{color:props.mode==='dark' ? '#ffffff' : ''}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="textbox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={() => text && handleUpperCaseClick()}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={() => text && handleLowerCaseClick()}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={() => text && handleExtraWhiteSpaceClick()}>Remove extra white space</button>
            <button className="btn btn-primary mx-2" onClick={() => text && handleCapitalizeClick()}>Convert to Capitalize</button>
            <button className="btn btn-primary mx-2" onClick={() => text && handleCopyClipboardClick()}>Copy to Clipboard</button>
            <button className="btn btn-primary mx-2" onClick={() => text && handleClearClick()}>Clear</button>
        </div>
        <div className="container my-5">
            <h3 style={{color:props.mode==='dark'?'#ffffff':''}}>Text Summary</h3>
            {Boolean(text) && (
                <p style={{color:props.mode==='dark'?'#ffffff':''}}><strong>{text.split(/[^\s]+/).length - 1}</strong> words and <strong>{text.replace(/\s/g, "").length} </strong> characters</p>
            )}
        </div>
    </>
  );

}
