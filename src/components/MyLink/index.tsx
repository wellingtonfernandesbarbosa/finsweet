import { Link, useLocation } from "react-router-dom";

interface MyLinkProps {
  label: string;
  to: string;
  icon?: string;
  iconActive?: string;
}

export const MyLink = ({ route }: { route: MyLinkProps }) => {

  let page = useLocation().pathname;
  page = page.replace("/", "");
  const Label = route.label === "Home" ? "" : route.label.replace(" ", "").toLowerCase();

  let Icon = route.icon;
  let textStyle = undefined;


  if (page === Label) {
    Icon = route.iconActive;
    textStyle = {
      color: "var(--primary-color)",
    };
  }
    return (
      <Link to={route.to} style={textStyle}>
        {Icon && <img src={Icon} alt={route.label} />}
        {route.label}
      </Link>
    );
};
