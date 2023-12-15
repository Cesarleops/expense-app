import { typesOfExpense } from "../../lib/mock-data";
import { CategoryCard } from "../../expenses/ui/categories";
import { Balance } from "../../users/ui/balance";
import { Plan } from "../../expenses/ui/plan";
import { ExpenseCard } from "../../expenses/ui/expense-card";
export default function AppHome() {
  return (
    <main className="flex min-h-screen flex-col ">
      <section className="flex flex-col gap-8 ">
        <div className="w-screen pt-5 flex items-center justify-center">
          <Balance />
        </div>
        <div className="flex gap-4 pl-5 px-5 justify-center items-center  overflow-scroll">
          {typesOfExpense.map((expense) => (
            <CategoryCard key={expense.name} name={expense.name} />
          ))}
        </div>
        <div className="px-5">
          <h4 className="text-lg">Planes de ahorro</h4>
          <div className="flex ">
            <Plan />
          </div>
        </div>
        <div className="px-5">
          <h4 className="text-lg">Pagos recientes</h4>
          <div className="flex flex-col gap-3">
            <ExpenseCard />
          </div>
        </div>
      </section>
    </main>
  );
}
