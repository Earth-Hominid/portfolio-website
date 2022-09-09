import TechnicalCard from '@/components/mobile/technical-section/technical-card/TechnicalCard';

import Computer from '@/public/images/3d-comp.png';
import Whiteboard from '@/public/images/dall-doll.png';

import { MainSection } from './Styles';

const TechnicalSection = () => {
  return (
    <MainSection id="technical_section">
      <TechnicalCard
        title="Software Development"
        description="I build rich web products in collaboration with clients. I use the latest technology, creating blazingly fast API's with coding best practices."
        src={Computer}
        styles="text-black "
      />
      <TechnicalCard
        title="Product Design"
        description="I create products that are easy to use, look beautiful, and achieve your business goals."
        src={Whiteboard}
        styles="text-black"
      />
    </MainSection>
  );
};

export default TechnicalSection;
