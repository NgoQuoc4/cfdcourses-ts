import HeaderAuth from "./HeaderAuth";
import HeaderHamburger from "./HeaderHamburger";
import HeaderLogo from "./HeaderLogo";

const Headers = () => {
  return (
    <header className="header --bgwhite">
      <div className="container-fluid">
        <HeaderHamburger />
        <HeaderLogo />
        <HeaderAuth />
      </div>
    </header>
  );
};

export default Headers;
