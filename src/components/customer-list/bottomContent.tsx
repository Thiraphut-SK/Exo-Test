import { Pagination } from "@heroui/react";
import React, { useMemo } from "react";

interface BottomContentProps {
  page: number;
  pages: number;
  setPage: (page: number) => void;
  hasSearchFilter: boolean;
}

const BottomContent: React.FC<BottomContentProps> = ({
  page,
  pages,
  setPage,
  hasSearchFilter,
}) => {
  const memoizedContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-center items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
      </div>
    );
  }, [page, pages, hasSearchFilter]);

  return memoizedContent;
};

export default BottomContent;
