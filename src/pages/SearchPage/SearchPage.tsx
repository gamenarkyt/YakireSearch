import styles from "./SearchPage.module.scss";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BookmarksList } from "../../components/business/BookmarksList/BookmarksList";

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const onClickSettingsHandler = () => {
    navigate("/settings");
  };
  const onSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    window.open(`https://searx.tiekoetter.com/search?q=${query}`);
  };

  return (
    <div className={styles.searchpage}>
      <div className={styles.appbar}>
        <FiSettings
          className={styles.settingsicon}
          onClick={onClickSettingsHandler}
        />
      </div>
      <span className={styles.logo}>YakireSearch</span>
      <form className={styles.searchcontainer} onSubmit={onSubmit}>
        <AiOutlineSearch className={styles.searchicon} />
        <input
          className={styles.searchbar}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <BookmarksList />
      <div className={styles.todos}>
        <li>Use state manager or useContext</li>
        <li>Refactoring (search // )</li>
        {/* <li></li> */}
      </div>
    </div>
  );
};

export { SearchPage };
