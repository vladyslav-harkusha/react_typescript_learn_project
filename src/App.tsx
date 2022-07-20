import { Card, CardVariant } from "./components/Card";
import { UserList } from "./components/UserList";
import { IUser } from "./types/types";

export const App = () => {
  const users: IUser[] = [
    {id: 1, name: 'Vladys', email: 'fiii@gmail.com', address: {city: 'Sumy', street: 'Zalyvna', zipcode: '56687'}},
    {id: 2, name: 'Kulo', email: 'hsdfgee@gmail.com', address: {city: 'Pskov', street: 'Desantnikov', zipcode: '66687'}},
  ];

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
