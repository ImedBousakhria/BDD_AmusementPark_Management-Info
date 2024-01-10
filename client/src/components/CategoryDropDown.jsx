import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CategoryDropDown({ subCategories }) {
  const [isActive, setActive] = useState(null);

  return (
    <ul className="relative left-12 top-1">
      <AnimatePresence>
        {subCategories.map((el, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`${
              isActive === i
                ? "bg-gray-200 text-black"
                : "hover:bg-gray-50 text-gray-500"
            } pl-6 py-2 border-l border-l-gray-400 cursor-pointer w-[78%]`}
            onClick={() => setActive(isActive === i ? null : i)}
          >
            {el.name || el}
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}

export default CategoryDropDown;
