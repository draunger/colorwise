const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
        <img src="logo.png" alt="" />
       <ul className='items'>
       <ul>
  <a
    href="/"
    style={{
      color: "#E31B54",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "18px",
      padding: "5px 10px",
      borderRadius: "5px",
      backgroundColor: "#E31B54",
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      transition: "transform 0.3s ease, background-color 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#FEE2E2";
      e.target.style.transform = "scale(1.05)";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "#fff";
      e.target.style.transform = "scale(1)";
    }}
  >
    Home
  </a>
</ul>

        <ul>Explore</ul>
        <ul>Color Analysis</ul>
        <ul>Curations</ul>
        <ul>Find the Fit </ul>
        <ul>MarketPlace</ul>
       </ul>
      </nav>
    </div>
  )
}

export default Navbar
