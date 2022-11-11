import { motion } from 'framer-motion';
import MobileCard from './mobile-card/MobileCard';
import Computer from '@/public/images/3d-computer.png';
import Doll from '@/public/images/dall-doll.png';

import { MainContainer } from './Styles';

type Props = {};

function MobileTechnical({}: Props) {
  return (
    <MainContainer>
      <MobileCard
        title="Software Development"
        description="I build rich web products in collaboration with clients. I use the
            latest technology, creating blazingly fast API's with coding best
            practices."
        src={Computer}
        priority={true}
        alt="3D render of computer"
        styles="
                rounded-full 
                object-contain 
                w-40
                h-auto 
                shadow-2xl"
        initial={{ x: -75, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, x: 0 }}
        divstyle=""
        color="decoration-blue-600 dark:decoration-blue-400"
      />
      <MobileCard
        title="Product Design"
        description="I create products that are easy to use, look beautiful, and achieve your business goals."
        src={Doll}
        priority={true}
        alt="3D image of office worker"
        styles="
                rounded-full 
                object-contain 
                w-40
                h-auto 
                shadow-2xl"
        initial={{ x: 75, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, x: 0 }}
        divstyle=""
        color="decoration-indigo-600 dark:decoration-indigo-400"
      />
    </MainContainer>
  );
}

export default MobileTechnical;
