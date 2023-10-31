import Waves from '../Waves';
import styled from 'styled-components';
import { works } from '../../helpers/constants';

const WorkContainer = styled.div`
  position: relative;
  border-radius: 2em;
  width: 100%;
  height: 100%;
  background-position: top;
  transition: background-position ease-in-out 6s;
  background: url(${props => props.image || ''});
  background-size: cover;
  &:hover {
    background-position: bottom;
    color: black !important;
  }
`;
const WorkContainerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 2em;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  &:hover {
    background: transparent;
  }
`;
const WorKTitle = styled.h1`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const Works = ({ isTablet }) => {
  return (
    <div className="mt-5">
      <Waves />
      <div className="bg-quagsire-muddy xl:p-20 p-5 text-white relative text-center">
        <h1 className="text-3xl font-bold font-pokemon">Recent Works</h1>
        <p className="mt-3">These are the past few projects I've worked on.</p>
        <div className="mt-10 relative">
          {works.map((work, index) => (
            <div style={{ height: '500px', marginTop: '50px' }} key={index}>
              <WorkContainer image={work.image}>
                <WorkContainerOverlay />
                <WorKTitle className="xl:text-5xl font-bold uppercase font-pokemon">{work.title}</WorKTitle>
              </WorkContainer>
            </div>
          ))}
        </div>
      </div>
      <div style={{ transform: 'rotate(180deg)' }}>
        <Waves />
      </div>
    </div>
  );
};

export default Works;