import DefaultLayout from "@/layouts/default";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  SortDescriptor,
  Chip,
  ChipProps,
  Link,
} from "@heroui/react";

import data from "../mock/mock_customers_100.json";
import { useCallback, useEffect, useMemo, useState } from "react";
import BottomContent from "@/components/customer-list/bottomContent";
import TopContent from "@/components/customer-list/topContent";
import { CustomerType } from "@/types/customer";
import moment from "moment";

export default function CustomerListPage() {
  const mockData = data;

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterValue, setFilterValue] = useState("");
  const hasSearchFilter = Boolean(filterValue);

  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "name",
    direction: "ascending",
  });

  // Filter the items based on the search filter
  const filteredItems = useMemo(() => {
    let filteredUsers = [...mockData];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(filterValue.toLowerCase()) ||
          user.company.toLowerCase().includes(filterValue.toLowerCase()) ||
          // eslint-disable-next-line prettier/prettier
          user.salesperson.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredUsers;
  }, [mockData, filterValue]);

  // Paginate the filtered items
  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage) || 1;

  const sortedItems = useMemo(() => {
    return [...items].sort((a: CustomerType, b: CustomerType) => {
      const first = a[sortDescriptor.column as keyof CustomerType] as number;
      const second = b[sortDescriptor.column as keyof CustomerType] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const statusColorMap: Record<string, ChipProps["color"]> = {
    "Good Credit": "success",
    Overdue: "danger",
    "No Credit": "primary",
    "Pending Review": "warning",
  };

  const columns = [
    {
      key: "name",
      label: "NAME",
      sortable: true,
    },
    {
      key: "company",
      label: "Company",
    },
    {
      key: "salesperson",
      label: "Salesperson",
    },
    {
      key: "total_spend",
      label: "Total Spend",
      sortable: true,
    },
    {
      key: "number_of_purchases",
      label: "Purchases",
      sortable: true,
    },
    {
      key: "credit_status",
      label: "Status",
      sortable: true,
    },
    {
      key: "active_since",
      label: "Last Active",
      sortable: true,
    },
  ];

  const renderCell = useCallback(
    (customer: CustomerType, columnKey: React.Key) => {
      const cellValue = customer[columnKey as keyof CustomerType];

      switch (columnKey) {
        case "name":
          return (
            <Link href={`/customers/${customer.id}`}>
              <span className="text-brand-text">{String(cellValue)}</span>
            </Link>
          );
        case "credit_status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[customer.credit_status]}
              size="sm"
              variant="flat"
            >
              {String(cellValue)}
            </Chip>
          );
        case "active_since":
          return (
            <span className="text-brand-text">
              {moment(String(cellValue)).format("DD MMM YYYY")}
            </span>
          );
        default:
          return String(cellValue);
      }
    },
    // eslint-disable-next-line prettier/prettier
    []
  );

  return (
    <DefaultLayout>
      <div className="mt-10">
        <Table
          isHeaderSticky
          isStriped
          aria-label="Example table with dynamic content"
          bottomContent={BottomContent({
            page,
            setPage,
            pages: pages,
            hasSearchFilter: false,
          })}
          sortDescriptor={sortDescriptor}
          topContent={TopContent({
            page,
            total: mockData.length,
            setPage,
            filterValue,
            setFilterValue,
            rowsPerPage,
            setRowsPerPage,
          })}
          onSortChange={setSortDescriptor}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.key}
                allowsSorting={column.sortable}
                className="text-brand-text"
              >
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody emptyContent={"No users found"} items={sortedItems}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </DefaultLayout>
  );
}
