import { FC, Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchPosts } from "../../store/reducers/acyncFetches";

import { TableBody } from "../Posts/style";

export const Posts: FC = () => {
  const { postsArr, isLoading, error, search, totalCountPosts } =
    useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts(currentPage));
  }, [currentPage, dispatch]);

  if (isLoading) return <h3> Идет загрузка...</h3>;
  if (error) return <h3> Что-то пошло не так...</h3>;
  if (search !== "" && totalCountPosts === 0)
    return <h3>Ничего не найдено :( </h3>;
    
  return (
    <Fragment>
      {postsArr.length &&
        postsArr.map((item) => (
          <TableBody key={item.id}>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>{item.body}</div>
          </TableBody>
        ))}
    </Fragment>
  );
};
