import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <a href="#" className="text-xl font-bold text-gradient mb-4 inline-block">
              Pham<span className="text-primary">HaiDang</span>
            </a>
            <p className="mb-4 max-w-md">
              A modern portfolio for web developers showcasing skills, projects, and experience.
              Built with React, TypeScript, and TailwindCSS.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
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
            </div>
          </div>

          {/* Links Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-sm">600 Nguyen Van Cu (Extended), An Binh Ward, Can Tho City</li>
              <li>
                <a
                  href="mailto:lighthouse.dev@gmail.com"
                  className="text-sm hover:text-primary transition-colors"
                >
                  lighthouse.dev@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+0778167802"
                  className="text-sm hover:text-primary transition-colors"
                >
                  + 0778167802
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {currentYear} PhamHaiDang. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="text-sm hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 