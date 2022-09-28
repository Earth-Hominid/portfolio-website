import Link from 'next/link';

import CallToAction from '../call-to-action/CallToAction';

import {
  MainContainer,
  SectionTitle,
  FormContainer,
  StyledForm,
  InputLabelContainer,
  StyledInput,
  StyledLabel,
  FormButton,
  TextAreaLabel,
  WideTextArea,
} from './Styles';
import { CallToActionButton } from '../call-to-action/Styles';

const Contact: React.FC = () => {
  return (
    <MainContainer className="dashboard-polka">
      <SectionTitle>Contact</SectionTitle>
      <FormContainer>
        <StyledForm
          action="https://formsubmit.co/fe3200a7c64411b94ea0d3fd177c522f"
          method="POST"
        >
          <InputLabelContainer>
            <StyledInput
              type="text"
              id="Name"
              name="Name"
              placeholder="Name"
              min="2"
              max="50"
              required
            />
            <input
              type="hidden"
              name="_subject"
              value="New submission!"
            ></input>
            <input type="text" name="_honey" className="hidden"></input>
            <StyledLabel htmlFor="Name">Name</StyledLabel>
          </InputLabelContainer>
          <InputLabelContainer>
            <StyledInput
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              min="1"
              max="50"
            />
            <StyledLabel htmlFor="category">Email</StyledLabel>
          </InputLabelContainer>
          <TextAreaLabel htmlFor="content">Content</TextAreaLabel>
          <WideTextArea
            id="content"
            name="content"
            placeholder="Let's talk about your idea"
            required
            rows={8}
            cols={30}
            maxLength={500}
            spellCheck={true}
          />

          <div className="mt-6 mb-12">
            <CallToAction
              styles="w-full p-2 flex justify-center"
              title="Submit"
            />
          </div>
        </StyledForm>
      </FormContainer>
    </MainContainer>
  );
};

export default Contact;
