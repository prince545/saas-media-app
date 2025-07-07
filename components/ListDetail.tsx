import * as React from "react";

import { User } from "../interfaces";

type ListDetailProps = {
  item: User;
};

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div className="card bg-base-100 shadow p-8 flex flex-col items-center">
    <div className="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-3xl mb-4">
      {getInitials(user.name)}
    </div>
    <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
    <p className="text-gray-500 dark:text-gray-400">User ID: {user.id}</p>
  </div>
);

export default ListDetail;
