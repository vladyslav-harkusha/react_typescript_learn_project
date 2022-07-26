import { Card, CardVariant } from "./components/Card";
import { EventsExample } from "./components/EventsExample";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { UsersPage } from "./components/UsersPage";
import { TodosPage } from "./components/TodosPage";
import { UserItemPage } from "./components/UserItemPage";
import { UserTodoPage } from "./components/UserTodoPage";

export const App = () => {
  return (
    <BrowserRouter>
        <div style={{display: "flex", gap: "15px", marginBottom: "20px"}}>
          <NavLink to="/events">Примеры ивентов</NavLink>
          <NavLink to="/users">Список пользователей</NavLink>
          <NavLink to="/todos">Список дел</NavLink>
        </div>

        <Card
          variant={CardVariant.outlined}
          width="200px"
          height="100px"
        >
          <button>Кнопка</button>
          <p>TypeScript with React Learning</p>
        </Card>

        <Routes>
          <Route path="/events" element={<EventsExample />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserItemPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/todos/:id" element={<UserTodoPage />} />
        </Routes>
    </BrowserRouter>
  )
};
