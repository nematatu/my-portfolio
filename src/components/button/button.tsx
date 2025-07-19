import { toggleDarkMode } from "@/utils/darkmode";

export const Button = () => {
    return (
        <button
            onClick={toggleDarkMode}
            className="bg-blue-500 text-white px-4 py-2 rounded dark:bg-gray-800"
        >
            ダークモード切り替え
        </button>
    );
};

export default Button;
