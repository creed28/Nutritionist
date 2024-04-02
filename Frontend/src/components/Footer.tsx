const Footer = () => {
  return (
    <footer className="text-center text-sm py-8 bg-[#bee9b0]" id="main-footer">
      &copy; {new Date().getFullYear()} Created by 
      <span className="font-Pacifico"> Hristo Zagorliev</span>. 
      All Rights Reserved.
    </footer>
  );
}

export default Footer;
