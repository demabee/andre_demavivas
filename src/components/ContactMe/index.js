import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CustomButton from '../CustomButton';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validateEmailInput } from '../../helpers/customFunctions';
// import ReCAPTCHA from 'react-google-recaptcha';

const InputText = styled.input`
  border: 5px solid ${props => props.isError ? '#ff5d5d' : 'var(--quagsire-muddy)'};
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
  border: 5px solid ${props => props.isError ? '#ff5d5d' : 'var(--quagsire-muddy)'};
  border-radius: 1em;
  padding: 10px;
  width: 100%;
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right var(--quagsire-water);
  color: var(--quagsire-muddy);
  -webkit-appearance: none;
  background-position-x: 99%;
  background-position-y: 12px;
`;

const TextArea = styled.textarea`
  border: 5px solid ${props => props.isError ? '#ff5d5d' : 'var(--quagsire-muddy)'};
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
  top: ${props => props.scrollPos > 3700 ? '750' : '800'}px;
  transition-duration: 3s;
`;

const ContactMe = ({ isTablet, scrollPos, quagsireHi, width }) => {
  const form = useRef();
  // const recatpchaRef = useRef();
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [selectInput, setSelectInput] = useState('');
  const [addtInfoInput, setAddtInfoInput] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState({
    name: true,
    email: true,
    selectInput: true,
    addtlInfo: true,
  });

  const handleSendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const params = {
      name: nameInput,
      email: emailInput,
      jobType: selectInput,
      additionalInfo: addtInfoInput,
      // 'g-recaptcha-response': recatpchaRef.current.getValue(),
    }
    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      params,
      process.env.REACT_APP_USER_ID,
    )
      .then((result) => {
        if (result.status === 200) {
          setNameInput('');
          setEmailInput('');
          setSelectInput('');
          setAddtInfoInput('');
          setIsLoading(false);
          // recatpchaRef.current.reset();
          notify('Email sent successfully');
        }
      }, (error) => {
        console.log(error.text);
      });
  };

  const notify = (text) => {
    toast(`${text}!`);
  };

  useEffect(() => {
    setIsComplete(
      nameInput !== '' &&
      emailInput !== '' &&
      selectInput !== '' &&
      addtInfoInput !== '' &&
      isEmailValid
      // recatpchaRef.current.getValue() !== null
    );
  }, [nameInput, emailInput, selectInput, addtInfoInput, isEmailValid, setIsComplete]);
  return (
    <div className="mt-10 p-20 relative">
      {!isTablet && (
        <FloatingImage scrollPos={scrollPos} width={width}>
          <img src={quagsireHi} alt="Andre Demavivas" />
        </FloatingImage>
      )}
      {isTablet && (
        <FloatingImageTablet scrollPos={scrollPos}>
          <img src={quagsireHi} alt="Andre Demavivas" width={200} loading="lazy" />
        </FloatingImageTablet>
      )}
      <div className="text-center mb-6">
        <h1 className="font-body xl:text-5xl font-pokemon">Want to discuss?</h1>
        <p className="mt-5">Interested in collaborating with me? I'm always open to discuss.</p>
      </div>
      <div className="mt-10 xl:mx-20">
        <form ref={form} onSubmit={handleSendEmail} data-netlify="true" data-netlify-recaptcha="true">
          <div className="xl:grid xl:grid-cols-2 xl:gap-4">
            <div className="form-group">
              <InputText
                value={nameInput}
                onChange={(e) => {
                  setNameInput(e.target.value);
                  setIsFormValid(prev => (
                    { ...prev, name: e.target.value !== '' }
                  ));
                }}
                isError={!isFormValid.name}
                type="text"
                placeholder="Name"
                name="name"
              />
              {!isFormValid.name && (
                <small className="pl-2 text-red-500">Name should not be empty!</small>
              )}
            </div>
            <div className="form-group xl:mt-0 mt-4">
              <InputText
                value={emailInput}
                onChange={(e) => {
                  const emailValid = validateEmailInput(e.target.value);
                  setIsEmailValid(emailValid.isValid);
                  setEmailInput(e.target.value);
                  setIsFormValid(prev => (
                    { ...prev, email: e.target.value !== '' }
                  ));
                }}
                isError={!isFormValid.email || !isEmailValid}
                type="email"
                placeholder="Email"
                name="email"
              />
              {!isFormValid.email && (
                <small className="pl-2 text-red-500">Email should not be empty!</small>
              )}
              {emailInput !== '' && !isEmailValid && (
                <small className="pl-2 text-red-500">Email is not valid!</small>
              )}
            </div>
          </div>
          <div className="form-group mt-4">
            <SelectInput
              value={selectInput}
              onChange={(e) => {
                setSelectInput(e.target.value);
                setIsFormValid(prev => (
                  { ...prev, selectInput: e.target.value !== '' }
                ));
              }}
              isError={!isFormValid.selectInput}
              placeholder="Name"
              name="jobType"
              width={width}
            >
              <option value="" disabled>Choose an Option</option>
              <option value="FullStack">FullStack</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
            </SelectInput>
            {!isFormValid.selectInput && (
              <small className="pl-2 text-red-500">Job type should not be empty!</small>
            )}
          </div>
          <div className="form-group mt-4">
            <TextArea
              value={addtInfoInput}
              onChange={(e) => {
                setAddtInfoInput(e.target.value);
                setIsFormValid(prev => (
                  { ...prev, addtlInfo: e.target.value !== '' }
                ));
              }}
              isError={!isFormValid.addtlInfo}
              placeholder="Additional Information"
              name="additionalInfo"
            >
            </TextArea>
            {!isFormValid.addtlInfo && (
              <small className="pl-2 text-red-500">Additional Info should not be empty!</small>
            )}
          </div>
          <div className="flex justify-center mt-5">
            {/* <ReCAPTCHA
              ref={recatpchaRef}
              sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
              size="normal"
              id="recaptcha-google"
            /> */}
          </div>
          <div className="flex justify-center mt-5">
            <CustomButton type="submit" disabled={!isComplete || isLoading}>
              <div className="flex align-center justify-center">
                {isLoading && (
                  <div role="status">
                    <svg aria-hidden="true" className="inline w-5 h-5 mr-2 mb-1 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                  </div>
                )}
                Submit
              </div>
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;