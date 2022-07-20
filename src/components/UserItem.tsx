import { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
  user: IUser;
}

export const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div style={{ padding: 15, border: '1px solid gray', margin: '10px 0' }}>
      {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
    </div>
  )
}
