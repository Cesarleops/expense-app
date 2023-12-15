import { Create } from "../../assets/icons/createIcon";
import { expenses } from "../../lib/mock-data";
import { ExpenseCard } from "../../expenses/ui/expense-card";

const ExpensesByCategory = () => {
  return (
    <div>
      <h1>Transactions</h1>
      <header className="flex ">
        <input placeholder="Busca " />
        <Create />
      </header>
      <p>Hoy</p>
      <div className="flex flex-col gap-4">
        {expenses.map((expense) => (
          <ExpenseCard
            key={expense.name}
            name={expense.name}
            price={expense.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpensesByCategory;
