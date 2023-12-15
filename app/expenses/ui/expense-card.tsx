import Link from "next/link";

interface Props {
  name: string;
  location: string;
  price: number;
  date: string;
}
export const ExpenseCard = () => {
  return (
    <article className="flex justify-between items-center">
      <Link href={"/detail"}>
        <div className="flex gap-3">
          <p>Icono</p>
          <div className="flex flex-col gap-2">
            <p>Internet</p>
            <p>Donde me lo gaste</p>
          </div>
        </div>
        <aside className="flex flex-col gap-2 ">
          <p>-550</p>
          <p>Cuando</p>
        </aside>
      </Link>
    </article>
  );
};
