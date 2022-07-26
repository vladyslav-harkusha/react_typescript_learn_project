import { FC, useEffect, useState } from 'react';
import { IUser } from "../types/types";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

export const UserItemPage:FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);

      setUser(response.data);
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <button onClick={() => navigate('/users')}>Back</button>

      <h2>This is a page of user {user?.name}</h2>
      <div>{user?.email}</div>
      <div>{user?.address.city} {user?.address.street}</div>
    </div>
  )
}
