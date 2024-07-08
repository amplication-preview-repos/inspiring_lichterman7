import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const VideoCallCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="callStartedAt" source="callStartedAt" />
        <DateTimeInput label="callEndedAt" source="callEndedAt" />
        <TextInput label="caller" source="caller" />
        <TextInput label="receiver" source="receiver" />
      </SimpleForm>
    </Create>
  );
};
