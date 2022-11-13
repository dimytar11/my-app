import "./Header.scss";
import MenuComponent from "./../components/MenuComponent";

export default function Header() {
  return (
    <div div className="header">
      <h1 className="title">Football world</h1>
      <MenuComponent />
    </div>
  );
}
