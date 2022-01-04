import Reeact from "react";
import styled from "@emotion/styled";
import { jsx, css } from "@emotion/react";

import { Pagination } from "antd";

const Spagination = styled(Pagination)`
  .ant-pagination-item-active {
  }

  .ant-pagination-item-active a {
    color: ${(props) => props.color};
  }

  .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    border: none;
    background: transparent;

    font-family: "Rubik";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    color: ${(props) => props.color};

    &::selection {
      font-weight: bold;
    }
  }
  .ant-pagination-item {
    a {
      font-family: "Rubik";
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      color: ${(props) => props.color};
    }

    border: none;
    background: transparent;
    &::selection {
      font-weight: bold;
    }
  }
`;

const StyledPagination = ({ color, total, onShowSizeChange, PAGE_LIMIT }) => {
  return (
    <Spagination
      color={color}
      size="medium"
      total={total}
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={1}
      defaultPageSize={PAGE_LIMIT}
      onChange={onShowSizeChange}
    />
  );
};
export default StyledPagination;
