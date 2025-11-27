import PageTitle from "../PageTitle";
import { motion } from "framer-motion";

// Primary ReactJs Function
function AboutPageContent(props) {
  // Enclosing tag in the return necesssary when adjacent elements used

  return (
    <div className="page-content about contain">
      <motion.div
        className="actions"
        initial={{ opacity: 0, transform: "translate(0%,-100%)" }}
        animate={{ opacity: 1, transform: "translate(0%,0%)" }}
        transition={{
          opacity: { duration: 1.5 },
          transform: { duration: 0.35 },
        }}
      >
        <PageTitle name="A developer at heart" />

        <div>
          A development porfolio site by Tyler Akin, a software engineer from
          Louisville, Kentucky.
        </div>
      </motion.div>
    </div>
  );
}

// Export app function to use it in index.js
export default AboutPageContent;
