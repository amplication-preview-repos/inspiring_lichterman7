import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { GroupMemberTitle } from "../groupMember/GroupMemberTitle";
import { GroupChatTitle } from "../groupChat/GroupChatTitle";
import { GroupCallTitle } from "../groupCall/GroupCallTitle";

export const GroupCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="createdBy" source="createdBy" />
        <ReferenceArrayInput
          source="groupMembers"
          reference="GroupMember"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GroupMemberTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="groupChats"
          reference="GroupChat"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GroupChatTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="groupCalls"
          reference="GroupCall"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GroupCallTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
