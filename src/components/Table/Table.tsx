import { FC, Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { sortPostsById, sortPostsBy } from "../../store/reducers/postsReduser";

import { Arrow, Button, PostsHeader } from "../Table/style";

export const Table: FC = () => {
  const { sort } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const sortById = () => {
    dispatch(sortPostsById());
  };
  const sortByTitle = () => {
    dispatch(sortPostsBy("title"));
  };
  const sortByBody = () => {
    dispatch(sortPostsBy("body"));
  };

  return (
    <Fragment>
      <PostsHeader>
        <Button onClick={sortById}>
          ID <Arrow sorted={sort.id} />
        </Button>

        <Button onClick={sortByTitle}>
          Заголовок <Arrow sorted={sort.title} />
        </Button>

        <Button onClick={sortByBody}>
          Описание <Arrow sorted={sort.body} />
        </Button>
      </PostsHeader>
    </Fragment>
  );
};
