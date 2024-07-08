import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VideoCallList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"VideoCalls"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="callStartedAt" source="callStartedAt" />
        <TextField label="callEndedAt" source="callEndedAt" />
        <TextField label="caller" source="caller" />
        <TextField label="receiver" source="receiver" />
      </Datagrid>
    </List>
  );
};
