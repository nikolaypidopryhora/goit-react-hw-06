import css from "./SearchBox.module.css";

export default function SearchBox({ text, onFilter }) {
  return (
    <div>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input
        className={css.searchInput}
        type="text"
        value={text}
        id="searchBox"
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
