import React from 'react';
import Pic from '../../asset/image/joonha_Kim.png';
const About_Us_Second = () => {
  return (
    <div>
      <div>
        <img
          src={Pic}
          alt='Pic'
          style={{
            width: '250px'
          }}
        />
      </div>
      <div>
        <h3>Joonha Kim</h3>
        <h4>Web/App Developer</h4>
        <h6>Auburn University 21’ </h6>
        <h6>Software Engineering major</h6>

        <h6> jzh0169@auburn.edu </h6>
        <h6> 000/000-0000</h6>
      </div>
    </div>
  );
};

export default About_Us_Second;
