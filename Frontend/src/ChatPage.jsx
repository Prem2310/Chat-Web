import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={"66c35424-0053-4d2f-970c-c3ac3a606284"}
        username={props.user.username}
        secret={props.user.secret} 
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;