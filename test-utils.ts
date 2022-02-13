import { queryHelpers, buildQueries } from '@testing-library/react';

// The queryAllByAttribute is a shortcut for attribute-based matchers
// You can also use document.querySelector or a combination of existing
// testing library utilities to find matching nodes for your query
const queryAllByDataTest = (...args) =>
  queryHelpers.queryAllByAttribute('data-test', ...args);

const getMultipleError = (c, dataTestValue) =>
  `Found multiple elements with the data-test attribute of: ${dataTestValue}`;
const getMissingError = (c, dataTestValue) =>
  `Unable to find an element with the data-test attribute of: ${dataTestValue}`;

const [
  queryByDataTest,
  getAllByDataTest,
  getByDataTest,




  findAllByDataTest,



  findByDataTest,
] = buildQueries(queryAllByDataTest, getMultipleError, getMissingError);

export {
  queryByDataTest,
  queryAllByDataTest,
  getByDataTest,
  getAllByDataTest,
  findAllByDataTest,
  findByDataTest,
};
