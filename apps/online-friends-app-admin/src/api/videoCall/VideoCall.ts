export type VideoCall = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  callStartedAt: Date | null;
  callEndedAt: Date | null;
  caller: string | null;
  receiver: string | null;
};
