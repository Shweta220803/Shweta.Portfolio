function Footer() {
  return (
    <footer className="border-t border-gray-200 px-6 py-8 dark:border-gray-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Shweta. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/Shweta220803"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition hover:text-blue-500"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shweta-bharti-48b850259/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition hover:text-blue-500"
          >
            LinkedIn
          </a>
          <a
            href="mailto:shwetaguraru99@gmail.coom"
            className="text-sm font-medium transition hover:text-blue-500"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
