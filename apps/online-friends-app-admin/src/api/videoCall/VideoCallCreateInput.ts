export type VideoCallCreateInput = {
  callStartedAt?: Date | null;
  callEndedAt?: Date | null;
  caller?: string | null;
  receiver?: string | null;
};
