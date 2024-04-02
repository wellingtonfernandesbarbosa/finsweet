import { Link } from "react-router-dom";

interface MyLinkProps {
  label: string;
  to: string;
  icon?: string;
  iconAlt?: string;
}

export const MyLink = ({ route }: { route: MyLinkProps }) => {

  return (
    <Link to={route.to}>
      {route.icon && <img src={route.icon} alt={route.iconAlt} />}
      {route.label}
    </Link>
  );
};
