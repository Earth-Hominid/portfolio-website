import Computer from '@/public/images/3d-computer.png';
import Doll from '@/public/images/dall-doll.png';
import WebTechnicalCard from '@/components/cards/WebTechnicalCard';

import { MainContainer } from './Styles';

type Props = {};

const WebTechnical: React.FC<Props> = () => {
  return (
    <MainContainer>
      <WebTechnicalCard
        title="Software Development"
        description="I build rich web products in collaboration with clients. I use the latest technology, creating blazingly fast API's with coding best practices."
        src={Computer}
        priority={true}
        alt="3D render of computer"
        styles="h-56 w-72 lg:h-64 lg:w-96 rounded-2xl shadow-xl object-fill flex-shrink-0"
        initial={{ y: 0, x: 200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        divstyle=""
        color="decoration-blue-600"
        imageStyle="min-w-fit"
      />
      <WebTechnicalCard
        title="Product Design"
        description="I create products that are easy to use, look beautiful, and achieve your business goals."
        src={Doll}
        priority={true}
        alt="3D image of office worker"
        styles="h-56 w-72 lg:h-64 lg:w-96 rounded-2xl shadow-xl object-fill flex-shrink-0"
        initial={{ x: -200, y: 0, opacity: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        divstyle="flex-row-reverse"
        imageStyle="min-w-fit"
        color="decoration-indigo-600"
      />
    </MainContainer>
  );
};

export default WebTechnical;
