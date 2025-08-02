function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} JobFinder. All rights reserved.
          </p>
        </div>

        <nav className="flex gap-6 text-sm">
          <a href="/" className="hover:text-white transition">
            Home
          </a>
          <a href="jobs" className="hover:text-white transition">
            Jobs
          </a>
          <a href="#" className="hover:text-white transition">
            Products
          </a>
          <a href="#" className="hover:text-white transition">
            About
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </nav>

        <div className="flex gap-4">
          <a
            href="https://t.me/nazirovabdurahmon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Telegram"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M9.04 15.56l-.37 5.42c.53 0 .77-.23 1.04-.5l2.5-2.38 5.2 3.8c.95.53 1.63.25 1.87-.9l3.39-15.81c.3-1.39-.5-1.94-1.4-1.6L2.9 10.9c-1.38.53-1.37 1.29-.24 1.65l4.57 1.43 10.6-6.7c.5-.3.95-.14.58.18" />
            </svg>
          </a>

          <a
            href="https://instagram.com/__abdurahmon90"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm8 2a1 1 0 110 2 1 1 0 010-2zm-4 1a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
          </a>

          <a
            href="https://github.com/abdurahmon203"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.18 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85.004 1.7.11 2.5.32 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.39.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.91.68 1.84v2.72c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;