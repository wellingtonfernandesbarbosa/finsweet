import { Link, useLocation } from "react-router-dom";

interface MyLinkProps {
  label: string;
  to: string;
  icon?: string;
  iconActive?: string;
}

export const MyLink = ({ route }: { route: MyLinkProps }) => {
  const location = useLocation();

  const isActive =
    route.to === "/" // Se for a rota inicial
      ? location.pathname === "/" // Verifica se a rota atual é exatamente "/"
      : location.pathname.startsWith(route.to); // Caso contrário, verifica se começa com a rota

  const Icon = isActive ? route.iconActive : route.icon;
  const textStyle = isActive ? { color: "var(--primary-color)" } : undefined;

  return (
    <Link to={route.to} style={textStyle}>
      {Icon && <img src={Icon} alt={route.label} />}
      {route.label}
    </Link>
  );
};
