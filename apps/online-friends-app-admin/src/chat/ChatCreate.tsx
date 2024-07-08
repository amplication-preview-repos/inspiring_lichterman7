import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ChatCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="sender" source="sender" />
        <TextInput label="receiver" source="receiver" />
      </SimpleForm>
    </Create>
  );
};
