"use client";

import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const ThemToggle = () => {
  const [theme, setTheme] = useState(themes.winter);

  const toggle = () => {
    const newTheme = theme === themes.winter ? themes.dracula : themes.winter;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggle} className="btn btn-outline btn-sm">
      {theme === "winter" ? (
        <BsMoonFill className="w-4 h-4" />
      ) : (
        <BsSunFill className="w4 h-4" />
      )}
    </button>
  );
};
export default ThemToggle;
