import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { GroupTitle } from "../group/GroupTitle";

export const GroupCallCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="callStartedAt" source="callStartedAt" />
        <DateTimeInput label="callEndedAt" source="callEndedAt" />
        <ReferenceInput source="group.id" reference="Group" label="group">
          <SelectInput optionText={GroupTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
