import React from "react";
import "../stylingsheets/Projects.css";

import oldPortfolio from "../vid_img/Projects/oldportfolio.png";
import beginningProject from "../vid_img/Projects/beginningProject.png";
import foodRecipe from "../vid_img/Projects/foodRecipe.png";
import icloudNoteBook from "../vid_img/Projects/ICloudNoteBook.png";
import textUtilsApp from "../vid_img/Projects/textUtilsApp.png";

export default function Projects() {
  return (
    <div className="container_p">
      <p className="head">Projects</p>
      <div className="subcontainer_p">
        {/* here to */}

        <a href="https://bbqlnow0karreseypovyxq.on.drv.tw/mywebsite/main.html" rel="noreferre" className="cards">
          <p className="title">First Project</p>
          <div className="imgDiv">
            <img src={beginningProject} alt="beginningProject" />
          </div>
        </a>
        {/* here */}
        
        <a href="https://manishkulalold.netlify.app/" rel="noreferre" className="cards">
          <p className="title">Old Portfolio</p>
          <div className="imgDiv">
            <img src={oldPortfolio} alt="oldPortfolio" />
          </div>
        </a>
        
        
        <a href="https://manishkulal-textutil.netlify.app" rel="noreferre"className="cards">
          <p className="title">TextUtils</p>
          <div className="imgDiv">
            <img src={textUtilsApp} alt="textUtilsApp" />
          </div>
        </a>
        
        
        <a href="https://manishkulal-foodrecipe.netlify.app" rel="noreferre" className="cards">
          <p className="title">Food recipe app</p>
          <div className="imgDiv">
            <img src={foodRecipe} alt="foodRecipe" />
          </div>
        </a>
       
       
        <a href="https://manishkulal-icloudnotebook.netlify.app" rel="noreferre" className="cards">
          <p className="title">ICloudNotebook</p>
          <div className="imgDiv">
            <img src={icloudNoteBook} alt="icloudNoteBook" />
          </div>
        </a>


      </div>
    </div>
  );
}
