import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { GROUP_TITLE_FIELD } from "../group/GroupTitle";

export const GroupChatShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="message" source="message" />
        <TextField label="timestamp" source="timestamp" />
        <TextField label="sender" source="sender" />
        <ReferenceField label="group" source="group.id" reference="Group">
          <TextField source={GROUP_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
