import React, { useState } from 'react';
import Accordian from './Accordian';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import {
  AccordianContainer,
  AccordianSummary,
  SummaryTitle,
  IconHolder,
} from './Styles';

interface DatapointInterface {
  id: string;
  name: string;
}

interface Props {
  props: {
    title: string;
    datapoints: Array<DatapointInterface>;
  };
}

const MenuAccordian: React.FC<Props> = ({ props }) => {
  const [accordianOpen, setAccordianOpen] = useState(false);

  const handleAccordianClick = () => {
    if (!accordianOpen) {
      setAccordianOpen(true);
    } else {
      setAccordianOpen(false);
    }
  };

  return (
    <AccordianContainer>
      <details>
        <AccordianSummary onClick={handleAccordianClick}>
          <SummaryTitle>{props.title}</SummaryTitle>
          {accordianOpen ? (
            <IconHolder>
              <ChevronDownIcon />
            </IconHolder>
          ) : (
            <IconHolder>
              <ChevronRightIcon />
            </IconHolder>
          )}
        </AccordianSummary>
        <Accordian props={props} />
      </details>
    </AccordianContainer>
  );
};

export default MenuAccordian;
