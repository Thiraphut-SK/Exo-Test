import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/react";
import React, { useCallback, useMemo } from "react";

interface TopContentProps {
  page: number;
  total: number;
  setPage: (page: number) => void;
  filterValue: string;
  setFilterValue: (value: string) => void;
  rowsPerPage: number;
  setRowsPerPage: (rows: number) => void;
}

const TopContent: React.FC<TopContentProps> = ({
  page,
  total,
  setPage,
  filterValue,
  setFilterValue,
  rowsPerPage,
  setRowsPerPage,
}) => {
  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const onRowsPerPageChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    // eslint-disable-next-line prettier/prettier
    [setRowsPerPage, setPage]);

  const memoizedTopContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-center items-center flex-col gap-3 w-full">
        <div className="flex justify-between gap-3 items-end w-full">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name, company or salesperson"
            // startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <Button
            className="bg-brand-primary text-white font-bold"
            //  endContent={<PlusIcon />}
          >
            Add Customer
          </Button>
        </div>
        <div className="flex justify-between w-full items-center">
          <span className="text-default-400 text-small">
            Total {total} users
          </span>
          <label className="flex items-center text-default-400 text-small">
            <p className="flex">Rows per page:</p>
            {/* <select
              className="bg-transparent outline-solid outline-transparent text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select> */}
            <Select
              isRequired
              className="w-20 text-small"
              defaultSelectedKeys={["10"]}
              size="sm"
              selectedKeys={[rowsPerPage.toString()]}
              variant="bordered"
              onChange={onRowsPerPageChange}
            >
              <SelectItem key={"5"}>5</SelectItem>
              <SelectItem key={"10"}>10</SelectItem>
              <SelectItem key={"20"}>20</SelectItem>
              <SelectItem key={"100"}>100</SelectItem>
            </Select>
          </label>
        </div>
      </div>
    );
  }, [
    page,
    total,
    filterValue,
    onClear,
    onSearchChange,
    onRowsPerPageChange,
    rowsPerPage,
  ]);

  return memoizedTopContent;
};

export default TopContent;
