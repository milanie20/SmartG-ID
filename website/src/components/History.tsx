import { motion } from "framer-motion";

const timelineEvents = [
  {
    date: "January 2026",
    title: "Project Conception",
    description: "The Smart G-ID concept was born from the need to modernize goat farming and trading in the Philippines, addressing the gap between farmers and consumers.",
  },
  {
    date: "February 2026",
    title: "Research & Planning",
    description: "Conducted extensive research on existing livestock management systems, farmer needs, and consumer behavior to shape the project's direction.",
  },
  {
    date: "March 2026",
    title: "System Design",
    description: "Designed the system architecture, user interfaces, and database schema for goat profiling, identification, and the trading platform.",
  },
  {
    date: "April 2026",
    title: "Development Phase",
    description: "Currently in active development — building the core modules including goat profiling, smart identification, and the farmer-to-consumer marketplace.",
  },
];

export default function History() {
  return (
    <div className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary italic mb-4">
          History
        </h1>
        <p className="text-muted-foreground font-body text-sm md:text-base mb-16 max-w-xl">
          The journey of the Smart G-ID project from idea to implementation.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Dot */}
              <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

              <span className="text-xs font-body font-semibold text-primary uppercase tracking-wider">
                {event.date}
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground mt-1 mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-lg">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}