import * as React from "react";
import ListItem from "./ListItem";
import { User } from "../interfaces";

type Props = {
  items: User[];
};

const List = ({ items }: Props) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {items.map((item) => (
      <li key={item.id} className="card bg-base-100 shadow p-4">
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
