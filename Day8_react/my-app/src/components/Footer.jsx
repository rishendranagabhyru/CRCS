function Footer({ setPage }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <h3>SkillHub Learning Platform</h3>
      <p>© {currentYear} All Rights Reserved. Empowering developers worldwide.</p>


    </footer>
  );
}

export default Footer;
