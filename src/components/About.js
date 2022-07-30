import React from 'react'

export default function About(props) {
    
    // const [mystyle,setMyStyle]=useState({
    //     color: "white",
    //     backgroundColor: " black "
    // }
    // )

    let mystyle={
      color: props.mode==="dark"?"white":"#042743",
      backgroundColor: props.mode==="dark"?"rgb(36 74 104)":"white"
        };
    // const [btnText,setbtnText]=useState("Enable light mode");
    // let toggleStyle=()=>{
    //     if(mystyle.color==="white"){
    //     setMyStyle(
    //         {
    //             color: "black",
    //             backgroundColor: " white "
    //         })
    //         setbtnText("Enable dark mode");
           
    //     }
    //     else{
    //         setMyStyle(
    //             {
    //                 color: "white",
    //                 backgroundColor: " black "
    //             })
    //             setbtnText("Enable light mode");
    //     }
    // }





  return (
    <div>
    <div className="container" >
        <h1 className="container my-3" style={{color: props.mode==="dark"?"white":"#042743",
        }}>About Us</h1>

        <div className="accordion" id="accordionExample" >
     <div className="accordion-item" >
     <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>How to convert text into your desired case?</strong> 
          </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
         Have you ever typed out a document, made a few capitalization mistakes and wished you won't have to waste much time editing? It happens a lot, and if you are using a typical word processing tool, you will have your mistakes autocorrected as you typed. If you have to capitalize on a whole portion, you will need to do it manually. And that takes time. However, with an online text transforming tool like ours, you can easily transform the case of your texts. All you have to do is copy and paste your text, then select the case you want to transform it to.

        </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle} >
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong> How to use textUtils?</strong>
            </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle} >
      Upper Case Tools - Upper CASE tools are used in planning, analysis and design stages of SDLC.

      Lower Case Tools - Lower CASE tools are used in implementation, testing and maintenance.
         </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>
            More about textUtils </strong>
           </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse"  aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Text-utils is a freely word couting app that can be convert your words or senetences to your desired converter. 
         </div>
    </div>
    </div>
  </div>
  </div>
</div>
  )
}
