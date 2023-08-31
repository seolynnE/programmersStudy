class DarkToggle {
  isDarkMode = null;

  constructor({ $target }) {
    const $wrapper = document.createElement("section");
    const $darkToggle = document.createElement("input");
    this.$darkToggle = $darkToggle;
    this.$darkToggle.type = "checkbox";

    $darkToggle.className = "darkToggle";
    $wrapper.appendChild($darkToggle);
    $target.appendChild($wrapper);

    $darkToggle.addEventListener("change", (e) => {
      this.setColorMode(e.target.checked);
    });

    this.initColorMode();
  }

  initColorMode() {
    // 초기화
    this.isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    this.$darkToggle.checked = this.isDarkMode;
    this.setColorMode(this.isDarkMode);
  }

  setColorMode(isDarkMode) {
    document.documentElement.setAttribute(
      "color-mode",
      isDarkMode ? "dark" : "light"
    );
  }
  render() {}
}

export default DarkToggle;
