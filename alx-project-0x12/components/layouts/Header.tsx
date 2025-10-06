import Link from 'next/link';

// components/layouts/Header.tsx
const Header = () => (
  <header className="bg-blue-600 text-white p-4 shadow-md">
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">ImageGen</h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>Gallery</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
);

export default Header;

