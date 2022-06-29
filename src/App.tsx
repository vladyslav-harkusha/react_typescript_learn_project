import { Card, CardVariant } from "./components/Card";

export const App = () => {
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
    </div>
  )
};
