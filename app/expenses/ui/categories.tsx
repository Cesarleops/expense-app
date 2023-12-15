import Link from "next/link";

export const CategoryCard = ({ name }: Pick<Expense, "name">) => {
  return (
    <Link href={name}>
      <article className="h-20 w-20 flex justify-center items-center border-2 border-[#f7f7f8] shadow-sm rounded-lg">
        <h3 className="text-sm">{name}</h3>
      </article>
    </Link>
  );
};
