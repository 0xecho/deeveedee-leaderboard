import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LeaderboardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Max Credits" source="max_credits" />
        <TextInput label="Name" source="name" />
        <TextInput label="TimeSurvived" source="timeSurvived" />
      </SimpleForm>
    </Edit>
  );
};
