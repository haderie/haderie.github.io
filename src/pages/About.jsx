import React from "react";
import Spline from '@splinetool/react-spline';


const About = () => {
    return (
      <section className="aboutDescription">
        <div className="secondHalf" >
            <div className="meImage">
            <Spline scene="https://prod.spline.design/1NMwXUu28bFVap-T/scene.splinecode" />
            </div>
          <div className="content-wrapper">
            <h1 className="text-big" id="program">
              About Me!
            </h1>
            <p className="text-small">
              <a1>Hi! I'm Hareg! (hair-eg, \hɛər-ɛg\) <br/>
              an aspiring computer scientist with a deep-rooted commitment to making a positive impact through technology. 
              Currently a second year computer science student at Northeastern University with a concentration in software,
              I thrive on transforming ideas into tangible solutions through code.
              Throughout my academic and personal projects, I strive to create solutions that not only showcase technical prowess
              but also resonate with the needs of the community. My belief in the importance of collaboration extends beyond the 
              digital realm, and I actively seek opportunities to engage with and contribute to the communities around me.
              Beyond the code, I value effective communication and collaboration. My strong interpersonal skills make me not just 
              a proficient coder but also a team player who thrives in collaborative environments. I am always eager to learn, adapt,
              and explore new technologies! I am excited about the potential for innovation to bring about positive social change, 
              and I'm dedicated to using my skills to contribute to projects that align with these values.

              </a1>
            </p>
          </div>
        </div>
	</section>
    );
};

export default About;