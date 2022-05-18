import css from './Button.module.css';

const Button = ({ children }: { children: React.ReactNode }) => {
  return <button className={css.button}>{children}</button>;
};

export default Button;
