import classNames from "../../lib/classNames";
import style from "./index.module.scss";

const data = Array.from({ length: 3 }, (_, i) => ({
  title: `Col ${i}`,
  items: Array.from({ length: 4 }, (_, j) => `Col ${i} item ${j}`),
}));

const Footer = () => {
  return (
    <footer className={classNames(style.footer, "row")}>
      <div className={classNames(style.footer__logo, "col align-self-start")}>
        LOGO
      </div>
      {data.map((col, i) => (
        <div key={i} className="col-12 col-sm-6 col-md-3">
          <h3 className="h3">{col.title}</h3>
          <ul className="list-unstyled">
            {col.items.map((item, i) => (
              <li key={i} className="nav-item">
                <a href="123" className="nav-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
