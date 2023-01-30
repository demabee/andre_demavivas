import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import About from './components/About';
import './App.css';
import Skills from './components/Skills';
import quagsireHi from './assets/images/quagsire-hi.png';
import Works from './components/Works';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import { useWindowSize } from './helpers/useWindowDimension';
import { TABLET } from './helpers/constants';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

const MainContent = styled.div`
  // margin-left: ${props => props.noMargin ? '272px' : '0'};
  width: 100%;
  height: 100%;
  // background: var(--quagsire-muddy);
`;

const FloatingImage = styled.div`
  position: fixed;
  left: -${props => (props.scrollPos * 2) + 240}px;
  transform: rotate(-${300}deg);
  z-index: -1;
`;

const FloatingImageTablet = styled.div`
  position: absolute;
  top: 250px;
  left: -${props => (props.scrollPos) + 100}px;
  transform: rotate(-${300}deg);
  transition-duration: 2s;
`;

function App() {
  const { height, width } = useWindowSize();
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
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
    console.log(ref);
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setOpen(!open);
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
        <div
          className={`fixed bg-[#6A5A8B] ${open ? 'w-[100%]' : 'w-0'} h-[100vh] text-white flex justify-center items-center z-50 overflow-hidden origin-left duration-500`}
        >
          <ul className="text-[40px] trackiong-[1px] font-bold text-center">
            <li
              onClick={() => scrollToView(aboutRef)}
              className="hover:textShadow duration-500 hover:translate-y-[5px] cursor-pointer"
            >
              ABOUT
            </li>
            <li
              onClick={() => scrollToView(skillsRef)}
              className="hover:textShadow duration-500 hover:translate-y-[5px cursor-pointer"
            >
              SKILLS
            </li>
            <li
              onClick={() => scrollToView(workRef)}
              className="hover:textShadow duration-500 hover:translate-y-[5px] cursor-pointer"
            >
              WORK
            </li>
            <li
              onClick={() => scrollToView(contactRef)}
              className="hover:textShadow duration-500 hover:translate-y-[5px] cursor-pointer"
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
    </div>
  );
}

export default App;
