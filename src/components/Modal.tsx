import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  isSuccess: boolean;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message, isSuccess }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#1c1917] rounded-lg p-6 max-w-sm w-full"
          >
            <div className={`text-2xl mb-4 ${isSuccess ? 'text-[#2dac5c]' : 'text-[#F8EF7B]'}`}>
              {isSuccess ? '✅ Успешно!' : '⚠️ Внимание'}
            </div>
            <p className="text-white mb-6">{message}</p>
            <button
              onClick={onClose}
              className="w-full py-2 px-4 bg-[#2dac5c] hover:bg-[#259d52] text-white transition-colors duration-300 rounded-lg"
            >
              OK
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
