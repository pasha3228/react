import React from "react";
import { User } from "../../components/User/User";
import { useSelector } from "react-redux";
import { selectUserById } from "../../store/modules/collections/users/selectors";

export const UserContainer = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));

  if (!user) {
    return null;
  }

  const { name } = user;

  return <User userName={name} />;
};
