import React, { useState } from 'react';

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <ul className="flex ml-auto w-full font-bold">
      <li className="text-xs text-gray-800 ml-auto mr-6 border-b-2 border-green-400 cursor-pointer">
        Weather
      </li>
      <li className="text-xs text-gray-800 mr-6 cursor-pointer border-b-2 hover:border-green-400">
        News
      </li>
      <li
        className={`relative text-xs text-gray-800 cursor-pointer border-b-2 hover:border-green-400 ${
          isDropdownOpen ? 'z-10' : ''
        }`}
        onClick={toggleDropdown}
      >
        Favorites{' '}
        <span className={`caret ${isDropdownOpen ? 'caret-up' : 'caret-down'}`} />
        {isDropdownOpen && (
          <ul className="absolute left-0 w-24 mt-2 p-2 bg-white shadow">
            <li><a class="block px-3 py-2 hover:bg-gray-400">Feature 1</a></li>
            <li><a class="block px-3 py-2 hover:bg-gray-200">Feature 2</a></li>
            <li><a class="block px-3 py-2 hover:bg-gray-400">Feature 3</a></li>
            <li><a class="block px-3 py-2 hover:bg-gray-200">Feature 4</a></li>
          </ul>
        )}
      </li>
    </ul>
  );
}

export default Header;
