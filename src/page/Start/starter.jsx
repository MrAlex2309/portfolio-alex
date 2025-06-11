import React from "react";
import profilePic from "../../assets/react.svg"
import "./starterCss.css"
function starter() {
  const containerStyle = {
    position: "relative",
    backgroundColor: "rgb(74, 104, 224)",
    height: "100vh",
  };
  const menuStyle = {
    position: "sticky",
    top:'0',
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "56px",
    width: "100%",
    // padding:'10px 10px'
  };
  const headerMenu = {
    margin: "0 0",
    top: "50%",
    marginLeft: "20px",
  };
  const fontSize = {
    fontSize:'60px',
    lineHeight:'1'
  }
  
  const flex = {
    flex:'1',
  }
  return (
    <div style={containerStyle}>
      <div style={menuStyle}>
        <div style={headerMenu} className="d-flex align-items-center">
          <h1 className="mb-0">{"<"}</h1><h1 className="mb-0" style={{color:'#6C0BA9'}}>Dev</h1> <h1 className="mb-0">{"/>"}</h1>
        </div>
        
        <div>
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active text-dark" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                Experience
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-md-flex justify-content-around w-100 align-items-center" style={{height:'calc(100vh - 56px)'}}>
        <div>
          <p style={flex} className="text-white mb-3 pt-4">Hello, I'm</p>
          <p className="mb-0 text-white fw-bold" style={fontSize}>Songheak</p>
          <p className="text-white fw-bold" style={fontSize}>Chanratanak</p>
          <p className="text-white typing" style={{fontSize:'35px', lineHeight:'1.5', display:'inline-block'}}>Web Developer</p>
          <p className="text-white" style={{fontSize:'20px'}}>I build exceptional digital experiences <br/> with clean, efficient code and creative <br /> problem-solving.</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-light p-3" style={{borderRadius:'50px'}}>Get in touch</button>
            <button className="btn btn-outline-light p-3" style={{borderRadius:'50px'}}>View My Work</button>
          </div>
        </div>
        <div>
          <img src={profilePic} style={{width:'350px'}} alt="" />
        </div>
      </div>
    </div>
  );
}

export default starter;
