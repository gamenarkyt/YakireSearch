export interface IBookmark {
  iconUrl: string;
  name: string;
  url: string;
  updateBookmarkFn?: () => void;
}
