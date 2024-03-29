import LogoImg from "../assets/logo.webp";

const Logo = () => {
  return (
    <a href="/" title="Home">
      <h1 className="flex items-center gap-x-2" >
        <img src={LogoImg} alt="logo" className="w-[40px]" />
        <p className="font-Pacifico text-[1.4rem]">Nutritionist</p>
      </h1>
    </a>
  );
}

export default Logo;
