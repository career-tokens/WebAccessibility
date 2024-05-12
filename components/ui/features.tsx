import { motion } from "framer-motion";
import Image from "next/image";

const ProjectsData = [
  {
    id: 1,
    name: "Accessible Images",
    description:
      "Learn to differentiate between normal images and accessible images",
    link: "/perceive",
    image: "https://img.icons8.com/fluency/48/image--v1.png",
  },
  {
    id: 2,
    name: "Accessible Form",
    description: "Experience a completely accessible form",
    link: "/form",
    image: "https://img.icons8.com/fluency/48/form.png",
  },
  {
    id: 3,
    name: "Accessible Modal",
    description: "Experience a completely accessible modal",
    link: "/modal",
    image:
      "https://img.icons8.com/external-flat-design-circle/64/external-Modal-Popup-seo-and-web-flat-design-circle.png",
  },
  {
    id: 4,
    name: "Skip to Main Content Button",
    description:
      "Available on this very page, try to shift focus using Tab key",
    link: "/",
    image:
      "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-skip-button-advertising-agency-flaticons-lineal-color-flat-icons.png",
  },
];

const Features = () => {
  return (
    <div>
      <div className="w-full flex flex-wrap gap-x-4 gap-y-4 items-center justify-center">
        {ProjectsData.map((project) => {
          return (
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: "spring",
                bounce: 0.7,
              }}
              key={project.id}
              className="mt-5 text-left bg-opacity-10 bg-gray-500 p-5 rounded-lg"
            >
              <a target="_blank" rel="noopener noreferrer" href={project.link}>
                <Image
                  src={project.image}
                  width={30}
                  height={30}
                  className="mb-3 rounded-lg"
                  alt={project.name}
                />
                <div className="mb-1 text-sm font-medium text-gray-900">
                  {project.name}
                </div>
                <div className="max-w-[250px] text-sm font-normal text-gray-500">
                  {project.description}
                </div>
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
