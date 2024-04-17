import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

function ProfileButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-6 w-6">
          <AvatarImage src="/img/shadcn.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="cursor-pointer">
          Profile
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="cursor-pointer">
          Billing
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="cursor-pointer">
          Subscription
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="cursor-pointer">
          Log Out
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProfileButton;
