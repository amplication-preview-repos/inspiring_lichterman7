export type VideoCallUpdateInput = {
  callStartedAt?: Date | null;
  callEndedAt?: Date | null;
  caller?: string | null;
  receiver?: string | null;
};
