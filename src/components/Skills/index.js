import quagsire from '../../assets/images/quagsire.webp'
import RotatingText from '../RotatingText';
import styled from 'styled-components';
import quagsireHi from '../../assets/images/quagsire-hi.png';
import classes from './Skills.module.css';

const BubbleContainer = styled.div`
  border-radius: 50%;
  border: 25px solid black;
  background: var(--quagsire-mist);
  background-image: url(${quagsire});
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  height: ${props => props.isTablet ? '350px' : '700px'};
  width: ${props => props.isTablet ? '350px' : '700px'};
  overflow: hidden;
  filter: alpha(Opacity=90);
  // opacity: 0.8;
`;

const FloatingImage = styled.div`
  position: absolute;
  left: -50px;
  z-index: -1;
  top: ${props => props.scrollPos > 906 ? '1000' : '500'}px;
  transition-duration: 3s;
`;

const FloatingImageTablet = styled.div`
  position: absolute;
  left: ${props => props.scrollPos > 906 ? '20' : '-20'}px;
  z-index: -1;
  top: ${props => props.scrollPos > 906 ? '150' : '20'}px;
  transform: rotate(340deg);
  transition-duration: 3s;
`;

const Skills = ({ isTablet, scrollPos, backgroundAnimation }) => {
  return (
    <div className={`mt-10 ${classes.skills}`}>
      <div className="text-center mb-6">
        <h1 className="font-body xl:text-5xl xl:mx-0 mx-3 font-pokemon">Tech Stacks</h1>
      </div>
      <div className="flex justify-center" style={{ background: 'transparent' }}>
        <BubbleContainer isTablet={isTablet}>
          <RotatingText isTablet={isTablet} />
        </BubbleContainer>
      </div>
      {!isTablet && (
        <FloatingImage scrollPos={scrollPos}>
          <img src={quagsireHi} alt="Andre Demavivas" loading="lazy" />
        </FloatingImage>
      )}
      {isTablet && (
        <FloatingImageTablet scrollPos={scrollPos}>
          <img src={quagsireHi} alt="Andre Demavivas" width={200} />
        </FloatingImageTablet>
      )}
      {backgroundAnimation === "bubbleBeam" && (
        <div className={classes.backgroundWrap}>
          <div className={`${classes.bubble} ${classes.x1}`}></div>
          <div className={`${classes.bubble} ${classes.x2}`}></div>
          <div className={`${classes.bubble} ${classes.x3}`}></div>
          <div className={`${classes.bubble} ${classes.x4}`}></div>
          <div className={`${classes.bubble} ${classes.x5}`}></div>
          <div className={`${classes.bubble} ${classes.x6}`}></div>
          <div className={`${classes.bubble} ${classes.x7}`}></div>
          <div className={`${classes.bubble} ${classes.x8}`}></div>
          <div className={`${classes.bubble} ${classes.x9}`}></div>
          <div className={`${classes.bubble} ${classes.x10}`}></div>
        </div>
      )}
    </div>
  );
};

export default Skills;