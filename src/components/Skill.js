import React from "react";

const Skill = () => {
  return (
    <div className="skills-container">
      <div className="skills-title">
        <h2>---My Skills---</h2>
      </div>
      <div className="skills-row row">
        <div className="skills-left-col col-md-6 ">
  
          <div className="card  shadow-lg p-3 mb-5 bg-body rounded" >
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
    animi non adipisci quas ipsa excepturi, delectus ducimus neque, est,
    quod et quos placeat quae sit minima architecto illum deserunt
    itaque!Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Corporis animi non adipisci quas ipsa excepturi, delectus ducimus
    neque, est, quod et quos placeat quae sit minima architecto illum
    deserunt itaque!</p>
   
  </div>
</div>
        </div>
        
        <div className="skills-right-col col-md-5">
        <div className="card  shadow-lg p-3 mb-5 bg-body rounded" >
        <div className="bars">
        <div className="info">
          <span>HTML5</span>
          <span>95%</span>
        </div>
        <div className="line html"></div>
      </div>
      <div className="bars">
        <div className="info">
          <span>CSS</span>
          <span>95%</span>
        </div>
        <div className="line css"></div>
      </div>
      <div className="bars">
        <div className="info">
          <span>SCSS(SASS)</span>
          <span>90%</span>
        </div>
        <div className="line sass"></div>
      </div>
      <div className="bars">
        <div className="info">
          <span>Bootstrap</span>
          <span>90%</span>
        </div>
        <div className="line bootstrap"></div>
      </div>
      <div className="bars">
        <div className="info">
          <span>JavaScript</span>
          <span>70%</span>
        </div>
        <div className="line js"></div>
      </div>
      <div className="bars">
        <div className="info">
          <span>React.js</span>
          <span>70%</span>
        </div>
        <div className="line react"></div>
       
        <div className="bars"></div>
       <div className="info">
       <span>Redux</span>
        <span>75%</span>
        
       </div>
       <div className="line redux"></div>
     </div>
      </div>
       
        </div>
      </div>
    </div>
  );
};

export default Skill;
