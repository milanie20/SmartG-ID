import { motion } from "framer-motion";
import { User } from "lucide-react";

const teamMembers = [
  {
    name: "Team Member 1",
    role: "Project Leader",
    description: "Oversees the overall project direction, system architecture, and development milestones.",
  },
  {
    name: "Team Member 2",
    role: "Developer",
    description: "Responsible for front-end and back-end development of the Smart G-ID platform.",
  },
  {
    name: "Team Member 3",
    role: "Researcher",
    description: "Conducts field research, data collection, and analysis for goat profiling requirements.",
  },
  {
    name: "Team Member 4",
    role: "Designer",
    description: "Creates the user experience and visual design for the web and mobile applications.",
  },
  {
    name: "Team Member 5",
    role: "Designer",
    description: "Creates the user experience and visual design for the web and mobile applications.",
  },
  {
    name: "Team Member 6",
    role: "Designer",
    description: "Creates the user experience and visual design for the web and mobile applications.",
  },
  {
    name: "Team Member 7",
    role: "Designer",
    description: "Creates the user experience and visual design for the web and mobile applications.",
  },
  {
    name: "Team Member 8",
    role: "Designer",
    description: "Creates the user experience and visual design for the web and mobile applications.",
  },
  {
    name: "Team Member 9",
    role: "Designer",
    description: "Creates the user experience and visual design for the web and mobile applications.",
  },
  {
    name: "Team Member 10",
    role: "Designer",
    description: "Creates the user experience and visual design for the web and mobile applications.",
  },
  {
    name: "Team Member 11",
    role: "Designer",
    description: "Creates the user experience and visual design for the web and mobile applications.",
  },
  {
    name: "Team Member 12",
    role: "Designer",
    description: "Creates the user experience and visual design for the web and mobile applications.",
  },
  {
    name: "Team Member 13",
    role: "Designer",
    description: "Creates the user experience and visual design for the web and mobile applications.",
  },
];

export default function Team() {
  return (
    <div className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary italic mb-4">
          Our Team
        </h1>
        <p className="text-muted-foreground font-body text-sm md:text-base mb-16 max-w-xl">
          The people behind the Smart G-ID project.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4">
              <User className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">
              {member.name}
            </h3>
            <span className="text-xs font-body font-semibold text-primary uppercase tracking-wider">
              {member.role}
            </span>
            <p className="mt-3 text-sm text-muted-foreground font-body leading-relaxed">
              {member.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}