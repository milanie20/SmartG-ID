import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is Smart G-ID?",
    answer: "Smart G-ID is a digital goat profiling and trading system designed to connect farmers directly with consumers.",
  },
  {
    question: "How does the goat profiling work?",
    answer: "Each goat is assigned a unique digital ID with a QR code. The profile includes breed information, age, health records, vaccination history, lineage, weight, and other relevant data.",
  },
  {
    question: "Who can use this system?",
    answer: "The system is designed for goat farmers who want to sell their livestock directly to consumers, as well as consumers looking to purchase goats with full transparency.",
  }
];

export default function FAQ() {
  return (
    <div className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#7a1f3d] mb-4">
          Frequently Asked Questions
        </h1>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <details className="group rounded-xl border border-gray-200 bg-white p-5 cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <summary className="flex justify-between items-center font-medium text-slate-800 list-none">
                {faq.question}
                <span className="transition-transform duration-300 group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                {faq.answer}
              </p>
            </details>
          </motion.div>
        ))}
      </div>
    </div>
  );
}