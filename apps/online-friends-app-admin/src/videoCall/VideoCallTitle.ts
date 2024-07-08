import { VideoCall as TVideoCall } from "../api/videoCall/VideoCall";

export const VIDEOCALL_TITLE_FIELD = "caller";

export const VideoCallTitle = (record: TVideoCall): string => {
  return record.caller?.toString() || String(record.id);
};
