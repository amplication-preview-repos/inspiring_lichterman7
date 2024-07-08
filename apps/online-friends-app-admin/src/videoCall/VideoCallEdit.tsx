import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const VideoCallEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="callStartedAt" source="callStartedAt" />
        <DateTimeInput label="callEndedAt" source="callEndedAt" />
        <TextInput label="caller" source="caller" />
        <TextInput label="receiver" source="receiver" />
      </SimpleForm>
    </Edit>
  );
};
