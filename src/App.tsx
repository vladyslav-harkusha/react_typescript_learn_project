import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardVariant } from "./components/Card";
import { UserList } from "./components/UserList";
import { IUser } from "./types/types";

export const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');

      setUsers(response.data);
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <Card 
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>Кнопка</button>
        <p>Vladys</p>
      </Card>

      <UserList users={users} />
    </div>
  )
};
