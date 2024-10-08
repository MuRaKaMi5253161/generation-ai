"use client";

import React from "react";
import BotAvater from "./BotAvater";
import {
  Ellipsis,
  FileImage,
  FileOutput,
  FileSearch2,
  MessageCircle,
  Speech,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Sidebar = () => {
  const pathname = usePathname();

  const routes = [
    {
      label: "Conversation",
      href: "/conversation",
      color: "text-violet-500",
      Icon: MessageCircle,
    },
    {
      label: "Image Generation",
      href: "/image_generation",
      color: "text-blue-500",
      Icon: FileImage,
    },
    {
      label: "Text to Speech",
      href: "/text_to_speech",
      color: "text-red-500",
      Icon: FileOutput,
    },
    {
      label: "Speech to Text",
      href: "/speech_to_text",
      color: "text-green-500",
      Icon: Speech,
    },
    {
      label: "Image Analysis",
      href: "/image_analysis",
      color: "text-orange-500",
      Icon: FileSearch2,
    },
  ];

  return (
    <div className="space-y-4 bg-gray-900 text-white p-3 h-full flex-col">
      <Link href="/" className="flex items-center">
        <div className="mr-3 pl-1">
          <BotAvater />
        </div>
        <div className="font-bold text-xl">AI Chat App</div>
      </Link>

      <div className="space-y-1">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "block p-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition rounded-lg",
              // startWith:(route.href)で始まる場合はtrueを返す
              pathname.startsWith(route.href) && "bg-white/10"
            )}
          >
            <div className="flex items-center">
              <route.Icon className={cn("h-5 w-5 mr-3", route.color)} />
              <p>{route.label}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-1 flex-col overflow-hidden space-y-1">
        <h2 className="text-xs font-medium px-2 py-4">ChatRoom</h2>
        <div className="overflow-auto">
          <Link
            href={"#"}
            // key={route.href}
            className={cn(
              "block p-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition rounded-lg"
              // startWith:(route.href)で始まる場合はtrueを返す
              // pathname.startsWith(route.href) && "bg-white/10"
            )}
          >
            <div className="flex items-center justify-between">
              <p className="font-medium truncate">message</p>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Ellipsis size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>削除</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Link>
          <Link
            href={"#"}
            // key={route.href}
            className={cn(
              "block p-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition rounded-lg"
              // startWith:(route.href)で始まる場合はtrueを返す
              // pathname.startsWith(route.href) && "bg-white/10"
            )}
          >
            <div className="flex items-center justify-between">
              <p className="font-medium truncate">message</p>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Ellipsis size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>削除</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Link>
          <Link
            href={"#"}
            // key={route.href}
            className={cn(
              "block p-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition rounded-lg"
              // startWith:(route.href)で始まる場合はtrueを返す
              // pathname.startsWith(route.href) && "bg-white/10"
            )}
          >
            <div className="flex items-center justify-between">
              <p className="font-medium truncate">message</p>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Ellipsis size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>削除</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Link>
          <Link
            href={"#"}
            // key={route.href}
            className={cn(
              "block p-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition rounded-lg"
              // startWith:(route.href)で始まる場合はtrueを返す
              // pathname.startsWith(route.href) && "bg-white/10"
            )}
          >
            <div className="flex items-center justify-between">
              <p className="font-medium truncate">message</p>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Ellipsis size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>削除</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Link>
          <Link
            href={"#"}
            // key={route.href}
            className={cn(
              "block p-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition rounded-lg"
              // startWith:(route.href)で始まる場合はtrueを返す
              // pathname.startsWith(route.href) && "bg-white/10"
            )}
          >
            <div className="flex items-center justify-between">
              <p className="font-medium truncate">message</p>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Ellipsis size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>削除</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Link>
          <Link
            href={"#"}
            // key={route.href}
            className={cn(
              "block p-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition rounded-lg"
              // startWith:(route.href)で始まる場合はtrueを返す
              // pathname.startsWith(route.href) && "bg-white/10"
            )}
          >
            <div className="flex items-center justify-between">
              <p className="font-medium truncate">message</p>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Ellipsis size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>削除</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Link>
          <Link
            href={"#"}
            // key={route.href}
            className={cn(
              "block p-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition rounded-lg"
              // startWith:(route.href)で始まる場合はtrueを返す
              // pathname.startsWith(route.href) && "bg-white/10"
            )}
          >
            <div className="flex items-center justify-between">
              <p className="font-medium truncate">message</p>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Ellipsis size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>削除</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Link>
          <Link
            href={"#"}
            // key={route.href}
            className={cn(
              "block p-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition rounded-lg"
              // startWith:(route.href)で始まる場合はtrueを返す
              // pathname.startsWith(route.href) && "bg-white/10"
            )}
          >
            <div className="flex items-center justify-between">
              <p className="font-medium truncate">message</p>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Ellipsis size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>削除</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
