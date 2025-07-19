
export const Button = () => {
    const themeToggle = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;

    if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        if (htmlElement.classList.contains("dark")) {
            htmlElement.classList.remove("dark");
            localStorage.setItem("theme", "light"); // 設定を保存
        } else {
            htmlElement.classList.add("dark");
            localStorage.setItem("theme", "dark"); // 設定を保存
        }
    });

    }
    // ページ読み込み時にテーマ設定を適用
    if (localStorage.getItem("theme") === "dark") {
        htmlElement.classList.add("dark");
    }
    return (
        <button id="theme-toggle" className="bg-blue-500 text-white px-4 py-2 rounded dark:bg-gray-800j">
            ダークモード切り替え
        </button>
    );
};

export default Button;
