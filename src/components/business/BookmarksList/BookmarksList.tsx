import { FC, useState } from "react";
import { BookmarkItem } from "../BookmarkItem/BookmarkItem";
import styles from "./BookmarksList.module.scss";
import { IoMdAdd } from "react-icons/io";
import { AddBookmarkModal } from "../AddBookmarkModal/AddBookmarkModal";

interface IBookmarksList {
  iconUrl: string;
  name: string;
  url: string;
}

interface IProps {}

const BookmarksList: FC<IProps> = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [bookmarksList, setBookmarksList] = useState<IBookmarksList[]>(
    JSON.parse(localStorage.getItem("bookmarksList") || "[]") || []
  );

  const onClickAddBookmarkHeandler = () => {
    setIsModalOpened(!isModalOpened);
    updateBookmarkState();
  };

  const updateBookmarkState = () => {
    setBookmarksList(JSON.parse(localStorage.getItem("bookmarksList") || "[]"));
  };

  return (
    <div className={styles.bookmarkslist}>
      {bookmarksList.map((bookmark) => {
        return (
          <BookmarkItem
            iconUrl={bookmark.iconUrl}
            name={bookmark.name}
            url={bookmark.url}
            key={bookmark.name}
            updateBookmarkFn={updateBookmarkState}
          />
        );
      })}
      <div className={styles.addbookmark} onClick={onClickAddBookmarkHeandler}>
        <IoMdAdd className={styles.addicon} />
        <span>Add</span>
      </div>
      {isModalOpened && (
        <AddBookmarkModal closeModalFn={onClickAddBookmarkHeandler} />
      )}
    </div>
  );
};

export { BookmarksList };
