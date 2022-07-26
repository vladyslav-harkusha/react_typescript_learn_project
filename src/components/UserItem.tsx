import { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

export const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)} style={{ padding: 15, border: '1px solid gray', margin: '10px 0', cursor: "pointer" }}>
      {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
    </div>
  )
}
