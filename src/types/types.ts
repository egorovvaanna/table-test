export type PostItem = {
  id: number;
  title: string;
  body: string;
};

export type Sort = "Increment" | "Decrement" | null;
export type ActionSort = "title" | "body";

export type SortBy = {
  id: Sort;
  title: Sort;
  body: Sort;
};

export type PostsState = {
  postsArr: PostItem[];
  isLoading: boolean;
  error: boolean;
  totalCountPosts: number;
  pages: number[];
  currentPage: number;
  search: string;
  sort: SortBy;
};

export type PostsPayload = {
  posts: PostItem[];
  totalCount: string;
};

export type currentPagePayload = { payload: number };
