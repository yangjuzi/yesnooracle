export default function Header() {
  return (
    <header className="fixed w-full top-0 bg-black/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-cinzel font-bold">Yes No Oracle</div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-purple-400 transition">
              Home
            </a>
            <a
              href="/decision-making-tools.html"
              className="hover:text-purple-400 transition"
            >
              All Tools
            </a>
            <a href="/blog.html" className="hover:text-purple-400 transition">
              Blog
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
