import { useRef } from 'react';
import styled from 'styled-components';
import CustomButton from '../CustomButton';

const InputText = styled.input`
  border: 5px solid var(--quagsire-muddy);
  border-radius: 1em;
  padding: 10px;
  width: 100%;
  background: var(--quagsire-water);
  color: var(--quagsire-muddy);

  &::placeholder {
    color: var(--quagsire-muddy);
  }
`;

const SelectInput = styled.select`
  border: 5px solid var(--quagsire-muddy);
  border-radius: 1em;
  padding: 10px;
  width: 100%;
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right var(--quagsire-water);
  color: var(--quagsire-muddy);
  -webkit-appearance: none;
  background-position: 740px 12px;
`;

const TextArea = styled.textarea`
  border: 5px solid var(--quagsire-muddy);
  border-radius: 1em;
  padding: 10px;
  width: 100%;
  background: var(--quagsire-water);
  color: var(--quagsire-muddy);
  
  &::placeholder {
    color: var(--quagsire-muddy);
  }
`;

const FloatingImage = styled.div`
  position: absolute;
  left: 200px;
  z-index: -1;
  top: ${props => props.scrollPos > 4200 ? '470' : '500'}px;
  transition-duration: 1s;
`;
const FloatingImageTablet = styled.div`
  position: absolute;
  left: -20px;
  z-index: -1;
  top: ${props => props.scrollPos > 3700 ? '600' : '800'}px;
  transition-duration: 3s;
`;

const ContactMe = ({ isTablet, scrollPos, quagsireHi, width }) => {
  const form = useRef();
  const handleSendEmail = (e) => {
    console.log(e);
    console.log(form);
    e.preventDefault();
    // emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
    //   .then((result) => {
    //     setShowToast(true);
    //   }, (error) => {
    //     console.log(error.text);
    //   });
  };
  return (
    <div className="mt-10 p-20 relative">
      {!isTablet && (
        <FloatingImage scrollPos={scrollPos} width={width}>
          <img src={quagsireHi} alt="Andre Demavivas" />
        </FloatingImage>
      )}
      {isTablet && (
        <FloatingImageTablet scrollPos={scrollPos}>
          <img src={quagsireHi} alt="Andre Demavivas" width={200} />
        </FloatingImageTablet>
      )}
      <div className="text-center mb-6">
        <h1 className="font-body xl:text-5xl font-pokemon">Want to discuss?</h1>
        <p className="mt-5">Interested in collaborating with me? I'm always open to discuss.</p>
      </div>
      <div className="mt-10 xl:mx-20">
        <form ref={form} onSubmit={handleSendEmail}>
          <div className="xl:grid xl:grid-cols-2 xl:gap-4">
            <div className="form-group">
              <InputText type="text" placeholder="Name" name="name" />
            </div>
            <div className="form-group xl:mt-0 mt-4">
              <InputText type="email" placeholder="Email" name="email" />
            </div>
          </div>
          <div className="form-group mt-4">
            <SelectInput placeholder="Name" name="jobType">
              <option value="" disabled>Choose an Option</option>
              <option value="FullStack">FullStack</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
            </SelectInput>
          </div>
          <div className="form-group mt-4">
            <TextArea placeholder="Additional Information" name="additionalInfo">
            </TextArea>
          </div>
          <div className="flex justify-center mt-5">
            <CustomButton type="submit">Submit</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;