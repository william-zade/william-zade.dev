import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-4 bg-navy text-cream">
      <motion.h1
        className="text-4xl sm:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Welcome to My Portfolio
      </motion.h1>

      <div className="bg-crimson text-cream p-4 text-xl font-bold">
            If this is crimson with cream text, your config works!
        </div>

      <motion.p
        className="text-lg sm:text-2xl max-w-2xl mb-6 text-muted-teal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Hi! I'm <span className="text-crimson font-semibold">William Zade</span>, a passionate developer specializing in React and Tailwind CSS.
      </motion.p>

      <motion.a
        href="#contact"
        className="bg-crimson hover:bg-muted-teal text-cream font-semibold py-3 px-6 rounded-lg transition duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Get in Touch
      </motion.a>
    </section>
  );
}
