import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BotAvater = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src="/ai_logo.svg" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default BotAvater;
