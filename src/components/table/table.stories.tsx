import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import {
  Button, Checkbox, Inputs, LinkButton,
} from '../forms';

import { Icons } from '../icon';
import { Popover } from '../popover';
import { Skeleton } from '../skeleton';
import { Stub } from '../stub';
import { Cells } from './cells';
import { DefaultColumnFilter } from './filters';

import { Table } from './table';

export default {
  component: Table,
  title: 'Components/table',
};

const Template = (args: any) =>
  (
    <BrowserRouter>
      <Table
        {...args}
        isLoading={false}
        data={Array.from({ length: 60 }, (_, i) => ({
          id: `[engine:junit-jupiter]/[class:api.standalone.StandaloneApiTest]/[method:junit5IgnoredTest()]:AUTO-${i}`,
          type: 'AUTO',
          name: `[engine:junit-jupiter]/[class:api.standalone.StandaloneApiTest]/[method:junit5IgnoredTest()]-${i}`,
          coverage: 50,
        }))}
        initialRowsCount={22}
      />
    </BrowserRouter>
  );
export const BuildsTable = Template.bind({});

// @ts-ignore
BuildsTable.args = {
  stub: <Stub icon={<Icons.Class width={96} height={96} />} title="Tests table" message="Not Found" />,
  withSearch: true,
  isDefaulToggleSortBy: true,
  placeholder: 'Search packages by name',
  renderHeader: (currentCount: number, totalCount: number) => (
    <div tw="flex justify-between text-monochrome-default text-14 leading-24 pb-3">
      <div tw="uppercase font-bold">{`Current (${currentCount})`}</div>
      <div>{`Displaying ${currentCount} of ${totalCount}`}</div>
    </div>
  ),
  columns: [
    {
      Header: 'Name',
      accessor: 'name',
      textAlign: 'left',
      filterable: true,
      isCustomCell: true,
      width: '100%',
      Cell: ({ value = '', state }: any) => (value ? (
        <Cells.Compound
          cellName={value}
          cellAdditionalInfo="foo-bar"
          icon={<Icons.Function />}
        >
          <Cells.Highlight text={value} searchWords={state.filters.map((filter: {value: string}) => filter.value)} />
        </Cells.Compound>
      ) : <Skeleton withIcon withSubLine />),
    },
    {
      Header: 'Type',
      accessor: 'type',
      textAlign: 'left',
      width: '100%',
      Cell: ({ value = '' }: any) => (value ? (
        <Cells.Compound
          cellName={value}
          icon={<Icons.Class />}
        >
          {value}
        </Cells.Compound>
      ) : <Skeleton withIcon withSubLine />),
      filterable: true,
      Filter: (props) => {
        console.log(props);
        return (
          <Popover>
            {({ isOpen, setIsOpen }) => (
              <>
                <ColumnFilterIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                {isOpen && (
                  <div tw="absolute right-0 shadow h-[333px] w-97 font-weight[400] bg-monochrome-white ">
                    <div tw="px-4 py-[6px]">
                      <DefaultColumnFilter {...props} />
                    </div>
                    <ScrollContainer>
                      {Array.from({ length: 40 }, (_, k) => (
                        <label tw="flex items-center gap-x-2 pl-4 hover:(bg-monochrome-default bg-opacity-10)">
                          <Checkbox key={k} tw="text-blue-default" />
                          <span tw="leading-28 text-14 text-ellipsis">
                            {`Build-99999999999999999999999999999999999999999999999999999999:${k}`}
                          </span>
                        </label>
                      ))}
                    </ScrollContainer>
                    <div tw="flex items-center justify-between h-12 px-4 border-t border-monochrome-medium-tint">
                      <div tw="text-monochrome-default text-12 leading-20">1 of 12 selected</div>
                      <div tw="flex gap-x-4">
                        <LinkButton>Reset Applied Filters</LinkButton>
                        <Button primary size="small">Apply</Button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </Popover>
        );
      },
    },
    {
      Header: 'Coverage, %',
      accessor: 'coverage',
      textAlign: 'left',
      width: '100%',
      Cell: ({ value = '' }: any) => (value
        ? <Cells.Coverage value={value} />
        : <Skeleton />),
    },
  ],
};

const ColumnFilterIcon = styled(Icons.Filter)`
  ${tw`cursor-pointer hover:text-blue-medium-tint`}
  ${({ isOpen }: { isOpen: boolean}) => isOpen && tw`text-blue-default`}
`;

const ScrollContainer = styled.div`

  ${tw`space-y-1 h-56 overflow-y-auto`};
  ::-webkit-scrollbar {
    ${tw`w-4 rounded`}
  }

  ::-webkit-scrollbar-track {
    ${tw`bg-transparent rounded`}
  }

  ::-webkit-scrollbar-thumb {
    ${tw`bg-monochrome-dark-tint border-[6px] border-solid rounded-full border-monochrome-white hover:bg-blue-medium-tint`}
  }
`;
