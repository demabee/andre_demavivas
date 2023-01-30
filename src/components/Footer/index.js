import moment from 'moment';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import Waves from '../Waves';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <Waves />
      <div className="bg-quagsire-muddy p-16 text-white relative text-center">
        <p className="font-bold text-2xl font-pokemon">Get in touch.</p>
        <div className={`flex justify-center mt-5 gap-4 text-5xl ${classes.logoContainer}`}>
          <a href="https://www.facebook.com/andredemavivas" target="_blank" rel="noreferrer">
            <BsFacebook />
          </a>
          <a href="https://github.com/demabee" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/andredemavivas/" target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
        </div>
        <p className="mt-5 text-sm text-center">&copy; {moment().year()} Andre Demavivas</p>
      </div>
    </>
  );
};

export default Footer;