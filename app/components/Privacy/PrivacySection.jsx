// components/PrivacySection.js
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function PrivacySection({ title, content, isExpanded, toggleSection }) {
  return (
    <div className="mb-4">
      <motion.button
        onClick={toggleSection}
        className="w-full flex justify-between items-center bg-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="font-semibold">{title}</span>
        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
      </motion.button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-4 rounded-b-lg"
          >
            <p>{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}