import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? (
          <div className="flex gap-1 items-center rounded-full">
            <FaMoon size={20}></FaMoon>
            <h1 className="font-bangers text-lg">Dark</h1>
          </div>
        ) : (
          <div className="flex gap-1 items-center rounded-full">
            <FaSun size={20}></FaSun>
            <h1 className="font-bangers text-lg">Light</h1>
          </div>
        )}
      </button>
    </div>
  );
}
