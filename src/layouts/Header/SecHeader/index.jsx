import { NavLink } from "react-router-dom";

const SecHeader = ({Logo , dropdownItem , MenuInfo}) => {

  return (
      <nav className="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
        <div className="container">
          {/* Brand */}
        <a className="navbar-brand"
          style={{
            width: '5%',
            height: "5%"
          }}
          href="/"><span><img src={Logo} alt="logo" /></span></a>
        <button className="navbar-toggler" type="button"
          data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse ml-auto" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
              {MenuInfo && MenuInfo.map((item , key) => (
                <li className="nav-item" key={key}>
                  <a className="nav-link" href={item.path}>{item.nameLink}</a>
                </li>
              ))}
            <li className="lh-55px">
              <a
                target={'_blank'}
                href={process.env.REACT_APP_SWAP}
                class="btn pushablenew ml-3 mt-2">
                <span class="frontnew">
                  Buy Token
                </span>
              </a>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default SecHeader;