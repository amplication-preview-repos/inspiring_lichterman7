import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { GroupTitle } from "../group/GroupTitle";

export const GroupCallEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="callStartedAt" source="callStartedAt" />
        <DateTimeInput label="callEndedAt" source="callEndedAt" />
        <ReferenceInput source="group.id" reference="Group" label="group">
          <SelectInput optionText={GroupTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
