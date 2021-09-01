import React from 'react';
import {
  fireEvent, getByText, queryByText, render,
} from '@testing-library/react';
import { MAX_PAGES_WITH_ELLIPSIS_COUNT, Pagination } from './pagination';
import {
  getAllByDataTest, getByDataTest, queryByDataTest,
} from '../../../test-utils';

const PAGE_LENGTH = 8;
const PAGE_INDEX = 1;
const PAGE_SIZE = 25;
const ROWS_COUNT = 25;
const goToPage = jest.fn();
const previousPage = jest.fn();
const nextPage = jest.fn();
const setPageSize = jest.fn();

beforeEach(() => {
  goToPage.mockRestore();
  previousPage.mockRestore();
  nextPage.mockRestore();
  setPageSize.mockRestore();
});

const DEFAULT_PROPS = {
  pagesLength: PAGE_LENGTH,
  gotoPage: goToPage,
  pageIndex: PAGE_INDEX,
  previousPage,
  nextPage,
  canPreviousPage: true,
  canNextPage: true,
  pageSize: PAGE_SIZE,
  setPageSize,
  rowsCount: ROWS_COUNT,
};

describe('Pagination', () => {
  it('should not render select pages block if pageLength is equal 0', () => {
    const { container } = render(<Pagination {...DEFAULT_PROPS} pagesLength={0} />);
    expect(queryByDataTest(container, 'table-pagination:pagination-arrow-left')).toBe(null);
  });

  it('should call previousPage after click to left arrow with canPreviousPage is equal true', () => {
    const { container } = render(<Pagination {...DEFAULT_PROPS} canPreviousPage />);
    fireEvent.click(getByDataTest(container, 'table-pagination:pagination-arrow-left'));
    expect(previousPage).toBeCalledTimes(1);
  });

  it('should not call previousPage after click to left arrow with canPreviousPage is equal false', () => {
    const { container } = render(<Pagination {...DEFAULT_PROPS} canPreviousPage={false} />);
    fireEvent.click(getByDataTest(container, 'table-pagination:pagination-arrow-left'));
    expect(previousPage).toBeCalledTimes(0);
  });

  it('should call nextPage after click to left arrow with canNextPage is equal true', () => {
    const { container } = render(<Pagination {...DEFAULT_PROPS} canNextPage />);
    fireEvent.click(getByDataTest(container, 'table-pagination:pagination-arrow-right'));
    expect(nextPage).toBeCalledTimes(1);
  });

  it('should not call nextPage after click to left arrow with canNextPage is equal false', () => {
    const { container } = render(<Pagination {...DEFAULT_PROPS} canNextPage={false} />);
    fireEvent.click(getByDataTest(container, 'table-pagination:pagination-arrow-right'));
    expect(nextPage).toBeCalledTimes(0);
  });

  it('should not render information about displaying rows if rowsCount less then 25', () => {
    const { container } = render(<Pagination {...DEFAULT_PROPS} rowsCount={24} />);
    expect(queryByDataTest(container, 'table:displaying-results-count')).toBe(null);
  });

  it('should call setPageSize after select page in dropdown', () => {
    const { container } = render(<Pagination {...DEFAULT_PROPS} />);
    fireEvent.click(getByDataTest(container, 'table-pagination:select-rows-dropdown'));
    fireEvent.click(getAllByDataTest(container, 'table-pagination:select-rows-dropdown:item')[0]);
    expect(setPageSize).toBeCalledTimes(1);
    expect(setPageSize.mock.calls[0][0]).toBe(25);
  });

  it('should render pagination without ellipsis', () => {
    const { container } = render(<Pagination {...DEFAULT_PROPS} pagesLength={MAX_PAGES_WITH_ELLIPSIS_COUNT - 1} />);
    expect(queryByDataTest(container, 'table-pagination:dots')).toBe(null);
  });

  it('should render pagination with ellipsis', () => {
    const { container } = render(<Pagination {...DEFAULT_PROPS} pagesLength={MAX_PAGES_WITH_ELLIPSIS_COUNT} />);
    expect(getByDataTest(container, 'table-pagination:dots')).toBeInTheDocument();
  });

  it('should call gotoPage after select page via pagination elemnt', () => {
    const { container } = render(<Pagination {...DEFAULT_PROPS} />);
    fireEvent.click(getAllByDataTest(container, 'pagination:element')[1]);
    expect(goToPage).toBeCalledTimes(1);
    expect(goToPage.mock.calls[0][0]).toBe(2);
  });

  it('should close/open tooltip after click to dots', () => {
    const { container } = render(<Pagination {...DEFAULT_PROPS} />);
    fireEvent.click(getByText(container, '...'));
    expect(getByText(container, 'Go to')).toBeInTheDocument();
    fireEvent.click(getByText(container, '...'));
    expect(queryByText(container, 'Go to')).toBeNull();
  });

  it('should call gotoPage after select page in tooltip', () => {
    const { container } = render(<Pagination {...DEFAULT_PROPS} />);
    fireEvent.click(getByText(container, '...'));
    expect(getByText(container, 'Go to')).toBeInTheDocument();
    fireEvent.change(getByDataTest(container, 'pagination:tooltip:input'), { target: { value: 2 } });
    fireEvent.submit(getByDataTest(container, 'pagination:tooltip:form'));
    expect(goToPage).toBeCalledTimes(1);
    expect(goToPage.mock.calls[0][0]).toBe(2);
  });
});
