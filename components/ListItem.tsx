import React from "react";
import Link from "next/link";

import { User } from "../interfaces";

type Props = {
  data: User;
};

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

const ListItem = ({ data }: Props) => (
  <Link href={`/users/${data.id}`} className="flex items-center gap-4 p-2 rounded hover:bg-base-200 transition-colors">
    <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
      {getInitials(data.name)}
    </div>
    <div>
      <div className="font-semibold text-lg">{data.name}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400">ID: {data.id}</div>
    </div>
  </Link>
);

export default ListItem;
