import me from '../../assets/images/me.jpeg';
import styled from 'styled-components';
import Waves from '../Waves';
import moment from 'moment';

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  border: 20px solid var(--quagsire-colby);
  border-radius: 50%;
`;

const About = ({ isTablet }) => {
  return (
    <>
      <div className="mt-10 text-center">
        <div className="flex justify-center">
          <ImageContainer>
            <img src={me} alt="Andre Demavivas" style={{ borderRadius: '50%' }} />
          </ImageContainer>
        </div>
        <div className="my-5 xl:mx-0 mx-4">
          <h1 className="xl:text-4xl font-bold font-pokemon mb-2">Andre Demavivas</h1>
          <p>A frustrated artist that fuels his passion by the help of coding. </p>
        </div>
        <Waves />
        <div className="bg-quagsire-muddy p-20 text-white relative">
          <p className="font-bold text-2xl">Fullstack, Frontend and Mobile Developer.</p>
          <p className="xl:w-3/6 mx-auto mt-5">I started my journey as a developer for over {moment().diff('2019', 'years', false)} years. I've done remote works for startups, agencies, freelance, and I collaborated with smart and talented people throughout the course of my career.</p>
        </div>
        <div style={{ transform: 'rotate(180deg)' }}>
          <Waves />
        </div>
      </div>
    </>
  )
};

export default About;