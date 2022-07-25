import { ChangeEvent, FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useDebounce } from "../../hooks/useDebounce";
import {
  fetchPosts,
  fetchSearchPosts,
} from "../../store/reducers/acyncFetches";
import { setCurrentPage, setSearch } from "../../store/reducers/postsReduser";

import { Input, InputContainer, SearchIcon } from "./styles";

export const Search: FC = () => {
  const [value, setValue] = useState("");
  const debounce = useDebounce(value, 400);
  const dispatch = useAppDispatch();

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    dispatch(setSearch(debounce.toLowerCase()));
    if (debounce !== "") {
      dispatch(fetchSearchPosts(debounce));
    } else {
      dispatch(fetchPosts(1));
    }
    dispatch(setCurrentPage());
  }, [debounce, dispatch]);
  return (
    <InputContainer>
      <Input
        value={value}
        onChange={(e) => handleChangeValue(e)}
        placeholder="Поиск..."
      ></Input>
      <SearchIcon />
    </InputContainer>
  );
};
