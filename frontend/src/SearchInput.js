const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, onRandomSearch }) {
    const $wrapper = document.createElement("section");
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    $searchInput.className = "SearchInput";
    $wrapper.appendChild($searchInput);
    $target.appendChild($wrapper);

    $searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        onSearch(e.target.value);

        // 최근 키워드 저장
        this.KeywordHistory.addKeyword(e.target.value);
      }
    });

    const $randomBtn = document.createElement("button");
    this.$randomBtn = $randomBtn;
    this.$randomBtn.className = "random";
    this.$randomBtn.textContent = "랜덤냥";

    $randomBtn.addEventListener("click", (e) => {
      onRandomSearch();
    });

    this.KeywordHistory = new KeywordHistory({
      $target,
      onSearch,
    });

    $wrapper.appendChild($randomBtn);

    // console.log("SearchInput created.", this);
  }
  render() {}
}
