import { motion } from "framer-motion";

const text1 = "Hi,";
const text2 = "I'm Digi-Angler ";
const text3 = "Full-Stack Web Developer,";

const spanVariants = {
  visible: { y: 0, scaleY: 1 },
  hover: {
    y: [-1, -2, -2.8, 0.9, 0],
    scaleY: [1, 1.3, 0.8, 1, 1.2],
    color: "red",
  },
};

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: {
    opacity: 1,
    y: [-1, -1.9, -2.7, 1],
    scaleY: [1, 1.3, 0.8, 1],
  },
  hidden: {
    opacity: 0,
  },
};

const App = () => {
  return (
    <>
      <div className="home-page">
        <section className="landing-left-section">
          <div className="text">
            <motion.h1 variants={list} initial="hidden" animate="visible">
              {text1.split("").map((letter, id) => (
                <motion.span variants={item}>
                  <motion.span
                    key={id}
                    variants={spanVariants}
                    initial="visible"
                    whileHover="hover"
                  >
                    {letter}
                  </motion.span>
                </motion.span>
              ))}
            </motion.h1>
            <motion.h1 variants={list} initial="hidden" animate="visible">
              {text2.split("").map((letter, id) => {
                if (letter === "D")
                  return (
                    <motion.span variants={item}>
                      <motion.span
                        key={id}
                        style={{ color: "greenyellow", fontsize: "5rem" }}
                      >
                        {letter}
                      </motion.span>
                    </motion.span>
                  );
                else
                  return (
                    <motion.span variants={item}>
                      <motion.span
                        key={id}
                        variants={spanVariants}
                        initial="visible"
                        whileHover="hover"
                      >
                        {letter}
                      </motion.span>
                    </motion.span>
                  );
              })}
            </motion.h1>
            <motion.h1 variants={list} initial="hidden" animate="visible">
              {text3.split("").map((letter, id) => (
                <motion.span variants={item}>
                  <motion.span
                    key={id}
                    variants={spanVariants}
                    initial="visible"
                    whileHover="hover"
                  >
                    {letter}
                  </motion.span>
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
