import React from 'react';

const Header = () => {
  return (
    <header id="header" className="tra-menu navbar-light white-scroll">
      <div className="header-wrapper">
        <div className="wsmobileheader clearfix">
          <span className="smllogo">
            <img src="/assets/img/logo.svg" alt="mobile-logo" />
          </span>
          <a id="wsnavtoggle" className="wsanimated-arrow">
            <span></span>
          </a>
        </div>
        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp">
            <div className="desktoplogo">
              <a href="index.php" className="logo-black">
                <img
                  className="light-theme-img"
                  src="/assets/img/logo.svg"
                  alt="logo"
                />
              </a>
            </div>
            <div className="desktoplogo">
              <a href="index.php" className="logo-white">
                <img src="/assets/img/logo-white.svg" alt="logo" />
              </a>
            </div>
            <nav className="wsmenu clearfix">
              <ul className="wsmenu-list nav-theme">
                <li className="nl-simple">
                  <a href="index.php" className="h-link active">
                    Start
                  </a>
                </li>
                <li className="nl-simple">
                  <a href="comparison.php" className="h-link ">
                    Vergleich
                  </a>
                </li>
                {/* <li><a href="services.php" class="h-link">Produkte <span class="wsarrow"></span></a>
                  <ul class="sub-menu">
                      <li><a href="service-detail.php">Planners</a></li>
                      <li><a href="service-detail.php">Managers</a></li>
                      <li><a href="service-detail.php">Suppliers</a></li>
                      <li><a href="service-detail.php">Comparison</a></li>
                      <li><a href="service-detail.php">Suppliers</a></li>
                  </ul>
              </li> */}
                <li className="nl-simple">
                  <a href="about.php" className="h-link ">
                    Über uns
                  </a>
                </li>
                <li className="nl-simple">
                  <a href="contact.php" className="h-link ">
                    Kontakt
                  </a>
                </li>
                <li className="nl-simple">
                  <a
                    href="login.php"
                    className="btn r-04 btn--theme hover--tra-white last-link"
                  >
                    Anmeldung
                  </a>
                </li>
                <li className="language">
                  <select name="lang" id="lang" className="form-control">
                    <option value="en">EN</option>
                    <option value="de">DE</option>
                    <option value="it">IT</option>
                    <option value="fr">FR</option>
                  </select>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
