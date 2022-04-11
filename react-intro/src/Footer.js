const Footer = (props) => {
  const date = new Date();
  return (
    <footer>
      <p>
        &copy; <strong>REACT </strong> {date.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
