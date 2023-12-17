import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navWrapper">
      <img
        src="https://img.freepik.com/premium-vector/logo-lorem-ipsum-slogan-design-art-template_642953-198.jpg"
        width="200px"
        height="200px"
      ></img>
      <section className="searchSection">
        <input
          className="searchBar"
          type="text"
          id="searchInput"
          placeholder="🔍 Search films..."
        />
      </section>
      <div className="buttonLogin">
        <a href="/">Login</a>
      </div>
      <div className="buttonSign">
        <a href="/">Sign in</a>
      </div>
    </nav>
  );
};

export default Navbar;
