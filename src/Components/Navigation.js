const Navigation = () => {
    return (
      <div>
        <nav className="nav-class">
          <div className="nav-icon">
            <img
              src="/images/campus-icon.png"
              alt="logo"
              className="nav-icon-img"
            />
          </div>
          <ul className="nav-ul-class">
            <li>
              <a href="home.com">Menu</a>
            </li>
            <li>
              <a href="home.com">Location</a>
            </li>
            <li>
              <a href="home.com">About</a>
            </li>
            <li>
              <a href="home.com">Contact</a>
            </li>
          </ul>
          <button>login</button>
        </nav>
      </div>
    );
  }
  export default Navigation;
  