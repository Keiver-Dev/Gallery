import { motion, AnimatePresence } from "framer-motion";

function Modal({ isOpen, onClose, message }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <motion.div
            className="bg-white dark:bg-zinc-900 text-black dark:text-white p-6 rounded-xl shadow-lg h-auto max-w-sm relative"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.1 }}
          >
            <p>{message}</p>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-[#D9A066] text-white rounded hover:bg-[#b77c1e]"
            >
              Cerrar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
