import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  MouseEvent,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import styles from "./AddBookmarkModal.module.scss";

interface IProps {
  closeModalFn: () => void;
}

const AddBookmarkModal: FC<IProps> = ({ closeModalFn }) => {
  //
  //  Reafactor to use React-hook-form
  //

  const [newBookmark, setNewBookmark] = useState({
    iconUrl: "",
    bookmarkName: "",
    bookmarkUrl: "",
  });

  const onClickAddBookmarkHandler = () => {
    // https://cdn.icon-icons.com/icons2/2351/PNG/96/logo_github_icon_143196.png
    const nextBookmarkState = JSON.parse(
      localStorage.getItem("bookmarksList") || "[]"
    );
    //
    // cteate folder types and use it
    //
    nextBookmarkState.push({
      iconUrl: newBookmark.iconUrl,
      name: newBookmark.bookmarkName,
      url: newBookmark.bookmarkUrl,
    });
    localStorage.setItem("bookmarksList", JSON.stringify(nextBookmarkState));
    closeModalFn();
  };

  const onClickModalHandler = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "iconurl") {
      setNewBookmark({ ...newBookmark, iconUrl: e.target.value });
    }
    if (e.target.name === "bookmarkname") {
      setNewBookmark({ ...newBookmark, bookmarkName: e.target.value });
    }
    if (e.target.name === "bookmarkurl") {
      setNewBookmark({ ...newBookmark, bookmarkUrl: e.target.value });
    }
  };

  return (
    <div className={styles.container} onClick={closeModalFn}>
      <div className={styles.modal} onClick={onClickModalHandler}>
        <span className={styles.header}>Add site to bookmark:</span>

        {newBookmark.iconUrl && (
          <img className={styles.previewicon} src={newBookmark.iconUrl} />
        )}
        <span>Icon url:</span>
        <input
          type="text"
          placeholder="Icon url..."
          name="iconurl"
          onChange={onChangeInputHandler}
          value={newBookmark.iconUrl}
        />
        <span>Bookmark name:</span>
        <input
          type="text"
          placeholder="Bookmark name..."
          name="bookmarkname"
          value={newBookmark.bookmarkName}
          onChange={onChangeInputHandler}
        />
        <span>Bookmark url:</span>
        <input
          type="text"
          placeholder="Bookmark url..."
          name="bookmarkurl"
          value={newBookmark.bookmarkUrl}
          onChange={onChangeInputHandler}
        />
        <button
          onClick={onClickAddBookmarkHandler}
          className={styles.addbookmarkbutton}
        >
          Add bookmark
        </button>
      </div>
    </div>
  );
};

export { AddBookmarkModal };
