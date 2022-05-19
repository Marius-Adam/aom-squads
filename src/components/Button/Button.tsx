import css from './Button.module.css';

interface IButton {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled }: IButton) => {
  return (
    <button disabled={disabled} onClick={onClick} className={css.button}>
      {children}
    </button>
  );
};

export default Button;
