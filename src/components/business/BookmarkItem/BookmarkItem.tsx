import { FC, MouseEvent, useState } from "react";
import styles from "./BookmarkItem.module.scss";
import { Modal } from "../ContextMenuModal/ContextMenuModal";

interface IProps {
  iconUrl: string;
  name: string;
  url: string;
  updateBookmarkFn: () => void;
}

const BookmarkItem: FC<IProps> = ({ iconUrl, name, url, updateBookmarkFn }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });

  const onClickBookmarkHandler = () => {
    window.open(url, "_blank");
  };

  const onContextOpenHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCoordinate({ x: e.clientX, y: e.clientY });
    setIsModalOpened(!isModalOpened);
    updateBookmarkFn();
  };

  return (
    <div
      className={styles.bookmark}
      onClick={onClickBookmarkHandler}
      onContextMenu={onContextOpenHandler}
    >
      <img src={iconUrl} />
      <span>{name}</span>
      {isModalOpened && (
        <Modal
          cb={onContextOpenHandler}
          coordinate={coordinate}
          bookmarkName={name}
        />
      )}
    </div>
  );
};

export { BookmarkItem };
