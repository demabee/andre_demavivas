import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { useWindowSize } from './helpers/useWindowDimension';
import { TABLET } from './helpers/constants';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import RainEffects from './components/RainEffects';
import quagsireHi from './assets/images/quagsire-hi.png';
import pokeball from './assets/images/pokeball.png';
import pokeDialogue from './assets/images/pokedialogue.png';
import './App.css';
import WaveEffect from './components/WaveEffect';
import SnowEffect from './components/SnowEffect';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainContent = styled.div`
  // margin-left: ${props => props.noMargin ? '272px' : '0'};
  width: 100%;
  height: 100%;
  background-color: #b0e8ff80;
  z-index: 1;
`;

const FloatingImage = styled.div`
  position: fixed;
  left: -${props => (props.scrollPos * 2) + 240}px;
  transform: rotate(-${300}deg);
  z-index: 2;
`;

const FloatingImageTablet = styled.div`
  position: fixed;
  top: 250px;
  left: -${props => (props.scrollPos) + 100}px;
  transform: rotate(-${300}deg);
  transition-duration: 2s;
  z-index: 2;
`;

const FloatingPokeball = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 2;
  cursor: pointer;
  animation: hithere 2s ease infinite;
  @keyframes hithere {
    30% { transform: scale(1.2); }
    40%, 60% { transform: rotate(-20deg) scale(1.2); }
    50% { transform: rotate(20deg) scale(1.2); }
    70% { transform: rotate(0deg) scale(1.2); }
    100% { transform: scale(1); }
  }
`;

const BattleBox = styled.div`
  position: fixed;
  bottom: 20px;
  width: 100vw;
  z-index: 3;
`;
const BattleDialogue = styled.div`
  border: 15px solid transparent;
  border-image: url(${pokeDialogue}) 60 stretch;
  background: white;
  padding: 10px;
`;

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [backgroundAnimation, setBackgroundAnimation] = useState(null);
  const [showMoveset, setShowMoveset] = useState(false);

  const { height, width } = useWindowSize();

  const notify = (text) => {
    toast(`Quagsire used ${text}!`);
  };
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPos(position);
  };

  const openNav = () => {
    setOpen(!open);
  };

  const closeNav = () => {
    setOpen(!open);
  };

  const scrollToView = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setOpen(!open);
  };

  const handleBattleAnimation = (moveset) => {
    setBackgroundAnimation(moveset);
    switch (moveset) {
      case 'rainDance':
        notify('Rain Dance');
        break;
      case 'mist':
        notify('Mist');
        break;
      case 'surf':
        notify('Surf');
        break;
      case 'bubbleBeam':
        notify('Bubble Beam');
        break;
      default:
    }
    setShowMoveset(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);
  return (
    <div className="App">
      <div className="flex relative">
        {width >= TABLET && (
          <FloatingImage scrollPos={scrollPos}>
            <img src={quagsireHi} alt="Andre Demavivas" />
          </FloatingImage>
        )}
        {width <= TABLET && (
          <FloatingImageTablet scrollPos={scrollPos}>
            <img src={quagsireHi} alt="Andre Demavivas" width={200} />
          </FloatingImageTablet>
        )}
        <FloatingPokeball onClick={() => setShowMoveset(true)}>
          <img src={pokeball} alt="Andre Demavivas" width={50} />
        </FloatingPokeball>
        {showMoveset && (
          <BattleBox>
            <BattleDialogue className="relative w-auto h-auto mx-2 text-center font-pokemon">
              <div className="grid grid-cols-2 gap-2">
                <div
                  onClick={() => handleBattleAnimation('rainDance')}
                  className={`hover:battleTextBg cursor-pointer p-2
                    ${backgroundAnimation === "rainDance" ? 'battleTextBg' : ''}`}
                >
                  <p style={{ fontSize: '14px' }}>Rain Dance</p>
                </div>
                <div
                  onClick={() => handleBattleAnimation('mist')}
                  className={`hover:battleTextBg cursor-pointer p-2
                    ${backgroundAnimation === "mist" ? 'battleTextBg' : ''}`}
                >
                  <p style={{ fontSize: '14px' }}>Mist</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 content-center">
                <div
                  onClick={() => handleBattleAnimation('surf')}
                  className={`hover:battleTextBg cursor-pointer p-2
                    ${backgroundAnimation === "surf" ? 'battleTextBg' : ''}`}
                >
                  <p style={{ fontSize: '14px' }}>Surf</p>
                </div>
                <div
                  onClick={() => handleBattleAnimation('bubbleBeam')}
                  className={`hover:battleTextBg cursor-pointer p-2
                    ${backgroundAnimation === "bubbleBeam" ? 'battleTextBg' : ''}`}
                >
                  <p style={{ fontSize: '14px' }}>Bubble Beam</p>
                </div>
              </div>
            </BattleDialogue>
          </BattleBox>
        )}
        <div
          className={`fixed bg-[#6A5A8B] ${open ? 'w-[100%]' : 'w-0'} h-[100vh] text-white flex justify-center items-center z-50 overflow-hidden origin-left duration-500`}
        >
          <ul className="text-[40px] trackiong-[1px] font-bold text-center">
            <li
              onClick={() => scrollToView(aboutRef)}
              className={`${scrollPos <= 40 ? 'active' : 'hover:textShadow'} duration-500 hover:translate-y-[5px] cursor-pointer`}
            >
              ABOUT
            </li>
            <li
              onClick={() => scrollToView(skillsRef)}
              className={`${scrollPos <= 1060 && scrollPos >= 50 ? 'active' : 'hover:textShadow'} duration-500 hover:translate-y-[5px] cursor-pointer`}
            >
              SKILLS
            </li>
            <li
              onClick={() => scrollToView(workRef)}
              className={`${scrollPos <= 1530 && scrollPos >= 1060 ? 'active' : 'hover:textShadow'} duration-500 hover:translate-y-[5px] cursor-pointer`}
            >
              WORK
            </li>
            <li
              onClick={() => scrollToView(contactRef)}
              className={`${scrollPos >= 1530 ? 'active' : 'hover:textShadow'} duration-500 hover:translate-y-[5px] cursor-pointer`}
            >
              CONTACT ME
            </li>
          </ul>
          <div className="absolute top-0 w-screen">
            <div className="flex justify-end w-full p-3 pr-6">
              <MdClose className="text-3xl cursor-pointer" onClick={closeNav} />
            </div>
          </div>
        </div>
        <div className="fixed top-0 w-screen z-40">
          <div className="flex justify-end w-full p-3 pr-6">
            <GiHamburgerMenu className="text-quagsire-mist text-3xl cursor-pointer" onClick={openNav} />
          </div>
        </div>
        <MainContent noMargin={width >= TABLET}>
          <div ref={aboutRef}>
            <About isTablet={width <= TABLET} />
          </div>
          <div ref={skillsRef}>
            <Skills
              backgroundAnimation={backgroundAnimation}
              isTablet={width <= TABLET}
              scrollPos={scrollPos}
              quagsireHi={quagsireHi}
            />
          </div>
          <div ref={workRef}>
            <Works isTablet={width <= TABLET} />
          </div>
          <div ref={contactRef}>
            <ContactMe
              isTablet={width <= TABLET}
              scrollPos={scrollPos}
              quagsireHi={quagsireHi}
              height={height}
              width={width}
            />
          </div>
          <Footer />
        </MainContent>
      </div>
      {backgroundAnimation === "rainDance" && (
        <RainEffects />
      )}
      {backgroundAnimation === "surf" && (
        <WaveEffect />
      )}
      {backgroundAnimation === "mist" && (
        <SnowEffect />
      )}
      <ToastContainer
        className="w-[500px]"
        bodyClassName="font-pokemon text-xs"
        position={width >= TABLET ? 'bottom-right' : 'top-center'}
        autoClose={5000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
