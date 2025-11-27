import "../assets/css/technology/technology.css";
import { motion } from "framer-motion";

const TECHNOLOGY_SECTIONS = [
  {
    title: "Languages and Frameworks",
    items: [
      "HTML5",
      "CSS3",
      "SCSS",
      "PHP7",
      "JavaScript",
      "jQuery",
      "React",
      "Vue",
      "Laravel",
      "React",
      "Vue",
    ],
  },
  {
    title: "Platforms and CMS",
    items: ["WordPress", "Shopify", "PrestaShop"],
  },
  {
    title: "Design and Visual",
    items: [
      "Illustrator",
      "Photoshop",
      "Affinity Designer",
      "Affinity Photo",
      "Premiere Pro",
      "After Effects",
    ],
  },
  {
    title: "Accessibility",
    items: ["WCAG 2.0", "WCAG 2.1", "ADA", "Section 508"],
  },
];

function Technology() {
  return (
    <div className="page-content technology">
      <motion.div
        className="actions"
        initial={{ opacity: 0, transform: "translate(0%,-100%)" }}
        animate={{ opacity: 1, transform: "translate(0%,0%)" }}
        transition={{
          opacity: { duration: 1.5 },
          transform: { duration: 0.35 },
        }}
      >
        <div className="contain">
          {TECHNOLOGY_SECTIONS.map((section) => (
            <div key={section.title} className="technology-sector">
              <h2>{section.title}</h2>
              <div className="technology-sector--inner">
                {section.items.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Technology;
