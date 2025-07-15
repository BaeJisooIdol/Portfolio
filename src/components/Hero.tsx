import { motion } from "framer-motion";
import me from "../assets/imgs/me.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="section pt-24 md:pt-32 min-h-screen flex items-center"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-accent text-sm font-medium mb-2">
                Font-end & Back-end Web Developer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                I Build <span className="text-gradient">Modern</span> Web
                Applications
              </h1>
              <p className="text-lg mb-8 max-w-lg">
                I create responsive, modern websites with clean code and optimal
                performance. Let's turn your ideas into reality.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="btn btn-primary">
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="btn border border-border hover:bg-card transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {[
                { icon: "github", url: "https://github.com/BaeJisooIdol" },
                {
                  icon: "facebook",
                  url: "https://www.facebook.com/pham.ang.755674",
                },
                { icon: "x", url: "https://x.com/phamdang152003" },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 bg-card hover:bg-card/80 transition-colors"
                  aria-label={`Visit my ${social.icon} profile`}
                >
                  {social.icon === "github" && (
                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  )}
                  {social.icon === "facebook" && (
                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  )}
                  {social.icon === "x" && (
                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-full aspect-square max-w-md mx-auto">
              <img
                src={me}
                alt="Developer profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-45 from-primary/30 to-accent/30 mix-blend-overlay"></div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-card p-4 rounded-lg shadow-lg"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm">Professional Skills</div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-card p-4 rounded-lg shadow-lg"
              animate={{ y: [0, 15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <div className="text-4xl font-bold">2+</div>
              <div className="text-sm">Projects Completed</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
