import { FC } from "react";
import styles from "./ContextMenuModal.module.scss";

interface IProps {
  cb: () => void;
  coordinate: {
    x: number;
    y: number;
  };
  bookmarkName: string;
}

const Modal: FC<IProps> = ({ cb, coordinate, bookmarkName }) => {
  const onClickOpenInNewTabHandler = () => {
    window.open();
  };

  const onClickDeleteBookmarkHandler = () => {
    const bookmarksList = JSON.parse(
      localStorage.getItem("bookmarksList") || "[]"
    );
    const nextBookmarksState = bookmarksList.filter(
      (b) => b.name !== bookmarkName
    );
    console.log(nextBookmarksState);

    localStorage.setItem("bookmarksList", JSON.stringify(nextBookmarksState));
  };

  return (
    <div className={styles.container} onClick={cb}>
      <div
        className={styles.modal}
        style={{ top: coordinate.y, left: coordinate.x }}
      >
        <span onClick={onClickOpenInNewTabHandler}>Open in new tab</span>
        <span>Edit bookmark</span>
        <span onClick={onClickDeleteBookmarkHandler}>Delete bookmark</span>
      </div>
    </div>
  );
};

export { Modal };
