import { Fragment, FC } from "react";
import { Outlet } from "react-router-dom";

import { Pagination } from "./Pagination/Pagination";
import { Search } from "./Search/Search";
import { Table } from "./Table/Table";

export const Body: FC = () => {
  return (
    <Fragment>
      <Search />
      <Table />

      <Outlet />

      <Pagination />
    </Fragment>
  );
};
