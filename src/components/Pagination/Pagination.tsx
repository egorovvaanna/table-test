import { FC } from "react";
import {
  setPreviousPage,
  setNextPage,
} from "../../store/reducers/postsReduser";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { usePagination } from "../../hooks/usePagination";

import { ReactComponent as Dots } from "./../../utils/dots.svg";
import { PaginationContainer, Span, PagesItem, Button } from "./styles";

export const Pagination: FC = () => {
  const { pages, currentPage, postsArr } = useAppSelector(
    (state) => state.posts
  );
  const { allPages, notFirst3, threeLast } = usePagination(pages, currentPage);

  const dispatch = useAppDispatch();

  const prevPage = () => {
    if (currentPage === 1) return;
    dispatch(setPreviousPage());
  };

  const nextPage = () => {
    if (currentPage === pages[pages.length - 1]) return;
    dispatch(setNextPage());
  };

  if (postsArr.length === 10)
    return (
      <PaginationContainer>
        <Button to={`/${currentPage - 1}`} onClick={prevPage}>
          Назад
        </Button>

        <PagesItem>
          {notFirst3 && <span>{pages[0]}</span>}
          {notFirst3 && <Dots />}

          {allPages.map((page, index) => (
            <Span current={currentPage === page} key={page}>
              {page}
            </Span>
          ))}

          {!threeLast && <Dots />}
          {!threeLast && <span>{pages[pages.length - 1]}</span>}
        </PagesItem>

        <Button to={`/${currentPage + 1}`} onClick={nextPage}>
          Вперед
        </Button>
      </PaginationContainer>
    );
  return null;
};
