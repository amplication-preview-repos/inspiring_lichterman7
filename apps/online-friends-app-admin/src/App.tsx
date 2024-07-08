import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ChatList } from "./chat/ChatList";
import { ChatCreate } from "./chat/ChatCreate";
import { ChatEdit } from "./chat/ChatEdit";
import { ChatShow } from "./chat/ChatShow";
import { FriendList } from "./friend/FriendList";
import { FriendCreate } from "./friend/FriendCreate";
import { FriendEdit } from "./friend/FriendEdit";
import { FriendShow } from "./friend/FriendShow";
import { VideoCallList } from "./videoCall/VideoCallList";
import { VideoCallCreate } from "./videoCall/VideoCallCreate";
import { VideoCallEdit } from "./videoCall/VideoCallEdit";
import { VideoCallShow } from "./videoCall/VideoCallShow";
import { GroupCallList } from "./groupCall/GroupCallList";
import { GroupCallCreate } from "./groupCall/GroupCallCreate";
import { GroupCallEdit } from "./groupCall/GroupCallEdit";
import { GroupCallShow } from "./groupCall/GroupCallShow";
import { GroupList } from "./group/GroupList";
import { GroupCreate } from "./group/GroupCreate";
import { GroupEdit } from "./group/GroupEdit";
import { GroupShow } from "./group/GroupShow";
import { GroupChatList } from "./groupChat/GroupChatList";
import { GroupChatCreate } from "./groupChat/GroupChatCreate";
import { GroupChatEdit } from "./groupChat/GroupChatEdit";
import { GroupChatShow } from "./groupChat/GroupChatShow";
import { GroupMemberList } from "./groupMember/GroupMemberList";
import { GroupMemberCreate } from "./groupMember/GroupMemberCreate";
import { GroupMemberEdit } from "./groupMember/GroupMemberEdit";
import { GroupMemberShow } from "./groupMember/GroupMemberShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"OnlineFriendsApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Chat"
          list={ChatList}
          edit={ChatEdit}
          create={ChatCreate}
          show={ChatShow}
        />
        <Resource
          name="Friend"
          list={FriendList}
          edit={FriendEdit}
          create={FriendCreate}
          show={FriendShow}
        />
        <Resource
          name="VideoCall"
          list={VideoCallList}
          edit={VideoCallEdit}
          create={VideoCallCreate}
          show={VideoCallShow}
        />
        <Resource
          name="GroupCall"
          list={GroupCallList}
          edit={GroupCallEdit}
          create={GroupCallCreate}
          show={GroupCallShow}
        />
        <Resource
          name="Group"
          list={GroupList}
          edit={GroupEdit}
          create={GroupCreate}
          show={GroupShow}
        />
        <Resource
          name="GroupChat"
          list={GroupChatList}
          edit={GroupChatEdit}
          create={GroupChatCreate}
          show={GroupChatShow}
        />
        <Resource
          name="GroupMember"
          list={GroupMemberList}
          edit={GroupMemberEdit}
          create={GroupMemberCreate}
          show={GroupMemberShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
