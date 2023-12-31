import uniqueArray from "./utils/uniqArray.js";

class KeywordHistory {
  $keywordHistory = null;
  data = null;

  constructor({ $target, onSearch }) {
    const $keywordHistory = document.createElement("ul");
    this.$keywordHistory = $keywordHistory;
    this.$keywordHistory.className = "keyword-history";
    $target.appendChild(this.$keywordHistory);

    // this.data = ["아", "고양이", "cat"];
    this.onSearch = onSearch;
    this.init();
    this.render();
  }

  init() {
    const data =
      localStorage.getItem("keywordHistory") === null
        ? []
        : localStorage.getItem("keywordHistory").split(",");
    this.setState(data);
  }

  addKeyword(keyword) {
    // 최근 키워드 저장
    let keywordHistory = this.getHistory();
    keywordHistory.unshift(keyword);
    // 중복제거
    keywordHistory = uniqueArray(keywordHistory);
    keywordHistory = keywordHistory.slice(0, 5);
    localStorage.setItem("keywordHistory", keywordHistory.join(","));
    this.init();
  }

  getHistory() {
    return localStorage.getItem("keywordHistory") === null
      ? []
      : localStorage.getItem("keywordHistory").split(",");
  }
  setState(nextData) {
    this.data = nextData;
    this.render();
  }
  bindEvent() {
    this.$keywordHistory
      .querySelectorAll("li button")
      .forEach(($item, index) => {
        $item.addEventListener("click", () => {
          console.log($item);
          console.log(index);
          console.log(this.data[index]);
          this.onSearch(this.data[index]);
        });
      });
  }

  render() {
    this.$keywordHistory.innerHTML = this.data
      .map(
        (keyword) => `
        <li><button>${keyword}</button></li>`
      )
      .join("");

    this.bindEvent();
  }
}

export default KeywordHistory;
