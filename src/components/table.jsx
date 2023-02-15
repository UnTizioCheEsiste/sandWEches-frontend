import { Table, NextUIProvider, Container } from "@nextui-org/react";
import "../App.css";

const Tab = ({ rows, columns, width, rowsPerPage }) => {
  return (
    <NextUIProvider>
      <Container css={{ width: width }}>
        <Table
          lined
          bordered
          selectionMode="single"
          style={{ background: "white" }}
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column key={column.key}>{column.label}</Table.Column>
            )}
          </Table.Header>
          <Table.Body items={rows}>
            {(item) => (
              <Table.Row key={item.id} allowsSorting>
                {(key) => <Table.Cell>{item[key]}</Table.Cell>}
              </Table.Row>
            )}
          </Table.Body>
          <Table.Pagination
            shadow
            noMargin
            align="center"
            rowsPerPage={rowsPerPage}
          />
        </Table>
      </Container>
    </NextUIProvider>
  );
};

export default Tab;
