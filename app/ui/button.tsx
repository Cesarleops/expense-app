"use client";
export interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: any;
  text?: string | undefined;
  shape?: "primary" | "secondary" | "outline";
  wide?: "short" | "large";
  className?: string;
}
export const Button = ({ text, icon, className }: Props) => {
  console.log(icon);
  return (
    <button className={className}>
      {text}
      {icon}
    </button>
  );
};
