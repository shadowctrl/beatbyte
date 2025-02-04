import { NextPage } from "next";
import "./button.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button: NextPage<Props> = ({ children, className, ...props }) => {
  return (
    <button className={`globalButton ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
