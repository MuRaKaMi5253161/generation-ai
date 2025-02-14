import { Timestamp } from "firebase/firestore";

export interface TextMessage {
  id: string;
  content: string;
  type: string;
  created_at: Timestamp;
  sender: "user" | "assistant";
}

export interface chatRoom {
  id: string;
  type: string;
  first_message: string;
  user_id: string;
  last_updated: Timestamp;
}
