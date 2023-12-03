import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LeaderboardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Max Credits" source="max_credits" />
        <TextInput label="Name" source="name" />
        <TextInput label="TimeSurvived" source="timeSurvived" />
      </SimpleForm>
    </Create>
  );
};
