import styles from "./styles.module.css";
import classnames from "classnames";
import { useNavigate } from "../../hook/useNavigate";

export const Link = ({ to, children, className }) => {
  const navigate = useNavigate();

  const onClick = (event) => {
    event.preventDefault();

    navigate(to);
  };

  return (
    <a
      href={to}
      onClick={onClick}
      className={classnames(styles.root, className)}
    >
      {children}
    </a>
  );
};
