import {
  FooterPattern,
  FooterLogo
} from '../../../utils/allImgs'

import '../Footer.scss'

import IcoName from '../../../data/data-layout/Footer/data-IcoName.json'

const FooterPages = ({ ClassSpanTitle = "" }) => {
  var date = new Date()
  var year = date.getFullYear();
  return (

    <footer
      className="footer-area bg-img">
      <div className="footer-area p-4"
        style={{
          background: "radial-gradient(#00000087, transparent)"
        }}>
        <div className="container"         >
          <div className="row ">
            <div className="col-12 text-center">
              <div className="footer-copywrite-info">
                <div className="copywrite_text fadeInUp" data-wow-delay="0.2s">
                  <div className="footer-logo">
                    <a href="#"><img src={FooterLogo} alt="logo" /> </a>
                  </div>
                  <p>© {year} Copyright: PythonCoin</p>
                </div>
                <div className="footer-social-info fadeInUp" data-wow-delay="0.4s">
                  {IcoName && IcoName.map((item, key) => (
                    <a key={key} href="/"><i className={item.IcoName} aria-hidden="true" /></a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}

export default FooterPages