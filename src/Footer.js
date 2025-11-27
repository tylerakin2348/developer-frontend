import "./assets/css/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        Built in Louisville, Kentucky.
        <br />
        © {new Date().getFullYear()} Tyler Akin. All Rights Reserved.
        <br />
        a{" "}
        <a className="footer-link" href="https://tylerakin.com">
          tylerakin.com
        </a>{" "}
        site.
      </div>
    </footer>
  );
}

export default Footer;
