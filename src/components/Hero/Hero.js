import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles';
import 'animate.css';
import Typist from 'react-typist';
import "react-typist/dist/Typist.css";

const Hero = (props) => {



  return (
    <Section row nopadding>
      <LeftSection>
          <SectionTitle main center>
            <Typist avgTypingDelay={120}>
            <span className="txt-rotate">{'Mario Eid'}<br/>{'Full Stack Developer'}</span>
            </Typist>
          </SectionTitle>
          <SectionText>
            A senior in Computer Science with a focus in full stack development. I'm always looking to learn and collaborate with fellow Software Engineers so feel free to look through my work!
          </SectionText>
          <Button onClick={() => window.location = '#about'}>Contact</Button>
      </LeftSection>
    </Section>
  )

}
export default Hero;