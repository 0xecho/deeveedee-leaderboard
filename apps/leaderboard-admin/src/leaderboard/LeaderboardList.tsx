import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LeaderboardList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Leaderboards"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Max Credits" source="max_credits" />
        <TextField label="Name" source="name" />
        <TextField label="TimeSurvived" source="timeSurvived" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
