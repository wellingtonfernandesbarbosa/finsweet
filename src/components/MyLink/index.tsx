import { Link, useLocation } from "react-router-dom";

interface MyLinkProps {
  label: string;
  to: string;
  icon?: string;
  iconActive?: string;
}

export const MyLink = ({ route }: { route: MyLinkProps }) => {
  const location = useLocation();
  const isActive = location.pathname === route.to;

  const Icon = isActive ? route.iconActive : route.icon;
  const textStyle = isActive ? { color: "var(--primary-color)" } : undefined;

  return (
    <Link to={route.to} style={textStyle}>
      {Icon && <img src={Icon} alt={route.label} />}
      {route.label}
    </Link>
  );
};
