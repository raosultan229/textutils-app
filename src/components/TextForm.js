import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText= text.toUpperCase();    
        
        setText(newText)
    // console.log("clicked ")
    props.showAlert("Converted to UpperCase!","success");
    }
    const handleLoClick=()=>{
        let newText= text.toLowerCase();    
        
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");
    // console.log("clicked ")
    }

    const handleExtraSpaces= ()=>{
        let newText= text.split(/[ ]+/)
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success");
    }

    const copyText= ()=>{
        let newText= document.getElementById("exampleFormControlTextarea1")
        // newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Copied!","success");
    }

    const clearText=()=>{
        let newText= "";    
        
        setText(newText)
    // console.log("clicked ")
    props.showAlert("Text Cleared!","success");
    

    }
    //   const titleCase=()=>{
    //     let newText= text.titleCase(); 
    //     text.split(' ')
    //     text.map((word) => word[0].toUpperCase() + word.slice(text).toLowerCase())
    //     text.join(' ');  
    //     console.log(titleCase(" ")); 
        
    //     setText(newText);
    // // console.log("clicked ")
    // }

    const handleOnChange=(event)=>{
        setText(event.target.value);
        
        }
    const [text, setText] = useState("");
  return (
      <>
    <div className="container"style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2 className='mb-4'> {props.heading}</h2>
    <div className="mb-3" >
    <textarea className="form-control my-2" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(28 51 86)':'white',color:props.mode==='dark'?'white':'#042743'}} id="exampleFormControlTextarea1" rows="10"></textarea>

    <button disabled={text.length===0} className="btn btn-success" onClick={handleUpClick}>Convert into UpperCase</button>
    <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert into LowerCase</button>
    <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    {/* <button className="btn btn-success mx-1" onClick={titleCase}>Title Case</button> */}
    <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={clearText}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={copyText}>Copy Text</button>




    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h3>Your text Summary</h3>
        <p>
            {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} mintues to read </p>

        <h3>Text Preview </h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
        {/* <h3>Contact Us</h3>
        <p>hafizsultan229@gmail.com</p> */}

    </div>
    </div>
    </>
    )
        }
