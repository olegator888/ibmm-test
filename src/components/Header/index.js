import DropdownMenu from "./components/DropdownMenu";

const navItems = ["О компании", "890123456789"];

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="123">
          IBMM
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map((item, i) => (
              <li class="nav-item" key={i}>
                <a class="nav-link" aria-current="page" href="123">
                  {item}
                </a>
              </li>
            ))}
            <DropdownMenu />
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Найти товары"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Поиск
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
