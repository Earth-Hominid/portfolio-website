import TechnicalCard from '@/components/technical-card/TechnicalCard';

import ComputerImage from '@/public/comp-purple.png';
import ComputerJungle from '@/public/comp-jungle.png';
import ComputerPurpleOne from '@/public/comp-purp-1.png';
import ComputerPurpleTwo from '@/public/comp-purp-2.png';
import { MainSection } from './Styles';

const TechnicalSection = () => {
  return (
    <MainSection>
      <TechnicalCard
        title="Software Development"
        description="I build rich web products in collaboration with clients. I use the latest technology, creating blazingly fast API's with coding best practices."
        src={ComputerPurpleTwo}
      />
    </MainSection>
  );
};

export default TechnicalSection;
