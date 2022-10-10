import Link from 'next/link';
import { motion } from 'framer-motion';
import { BottomNavigationMenu, ActionButtonHolder, LinkText } from './Styles';

function BottomNavigation({
  toggleNavigationButton,
}: {
  toggleNavigationButton: Function;
}) {
  return (
    <BottomNavigationMenu>
      <ActionButtonHolder>
        <Link href="#projects">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <LinkText>My Work</LinkText>
          </motion.div>
        </Link>
      </ActionButtonHolder>
      <ActionButtonHolder>
        <Link href="#contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-blue-600 cursor-pointer"
            onClick={toggleNavigationButton}
          >
            <LinkText> Contact</LinkText>
          </motion.button>
        </Link>
      </ActionButtonHolder>
    </BottomNavigationMenu>
  );
}

export default BottomNavigation;
