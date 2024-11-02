import { Button, ButtonProps } from "@mui/material";

interface IButtonProps extends ButtonProps {
  children?: React.ReactNode;
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
  className?: string;
}

const ButtonComponent: React.FC<IButtonProps> = ({ children, ...props }) => {
  const { variant = "outlined", size = "large" } = props;

  return (
    <Button
      className={`general-button ${props.className ? props.className : ""}`}
      variant={variant}
      size={size}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
