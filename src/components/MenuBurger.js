import { StyleSheet, css } from "aphrodite";
import { Link } from "react-router-dom";

class MenuBurger extends Component {
  render() {
    return (
      <div className={css(styles.menuResponsive)}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registry">Registry</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/feed">Feed</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  menuResponsive: {
    textAlign: "right"
  }
});
export default MenuBurger;
