import React from "react";

const About = () => {
  return (
    <div class="about">
      <div class="row">
        <div class="col-md-6  left-col">
          <div className="card shadow-lg p-3 mb-5 bg-body rounded"
           style={{border:"none"}}>
           <div className="card-body">
           <h1 className="card-title">About Me</h1>
           <p>
             I'm Subhana. I have experience in HTML5,CSS3,SCSS(SASS) <br />
             Javascript,Bootstrap,React js,Redux.I'm studying at <br /> ASOIU.My
             speciality is Information Technology. I am a 4rd year
             <br /> student. <br />
             
               <b>Languages:</b> English,Turkish <br />
            
            
               <b>Interests:</b> Coding,Listening english music,Watching english
               movies. <br />
             
            
               <b>Email:</b> naghizadahsubhana@gmail.com <br />
             
               <b>My GitHub Account:</b>{" "} 
               <a
                 href="https://github.com/naghizadahsubhana?tab=repositories"
                 target="blank"
               >
                 Enter
               </a>
             </p></div>
          </div>
         
        </div>
        <div class="col-md-5  right-col">
        <div className="card shadow-lg p-3 mb-5 bg-body rounded"
        style={{border:"none"}}>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
