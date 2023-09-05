const items = ["Bitmain Antminer", "Canaan Avalon", "Innosilicon"];

const DropdownMenu = () => {
  return (
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="123"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Каталог
      </a>
      <ul class="dropdown-menu">
        {items.map((item, i) => (
          <li key={i}>
            <a class="dropdown-item" href="123">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default DropdownMenu;
