import React from 'react';
import { useState, useEffect } from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles';
import 'animate.css';

const Hero = (props) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "Full Stack Developer", "Web Developer" ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
  <Section row nopadding>
    <LeftSection>
        <SectionTitle main center>
        Mario Eid <br/> <span className="txt-rotate"> <span className="wrap">{text}</span></span>
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