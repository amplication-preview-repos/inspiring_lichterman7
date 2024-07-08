import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { GroupTitle } from "../group/GroupTitle";

export const GroupChatEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="sender" source="sender" />
        <ReferenceInput source="group.id" reference="Group" label="group">
          <SelectInput optionText={GroupTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
