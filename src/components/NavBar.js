function NavBar() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      backgroundColor: "#1e1e2f",
      color: "white"

    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    menu: {
      display: "flex",
      listStyle: "none",
      gap: "20px",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "16px",
    },
  };

  return (
    <nav style={styles.container}>
      <div style={styles.logo}>MyMovie</div>
      <ul style={styles.menu}>
        <li><a href="/" style={styles.link}>Home</a></li>
        <li><a href="/movies" style={styles.link}>Movies</a></li>
        <li><a href="/about" style={styles.link}>About</a></li>
      </ul>
    </nav>
  );
}
export default NavBar;
