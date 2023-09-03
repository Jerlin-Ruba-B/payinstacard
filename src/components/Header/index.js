import {AiFillHome, AiOutlineMenu} from 'react-icons/ai'
import Popup from 'reactjs-popup'
import './index.css'

const Header = () => (
  <>
    <div className="header_container">
      <ul className="header_tabs_container">
        <li className="header_tabs">Home</li>
        <li className="header_tabs">About</li>
        <li className="header_tabs">Schedulers</li>
        <li className="header_tabs">Membership</li>
        <li className="header_tabs">Pricing</li>
      </ul>
      <ul className="header_tabs_container_mobile_view">
        <li className="header_tabs_mobile_view">
          <AiFillHome size="30" />
        </li>
        <li className="header_tabs_mobile_view">About</li>
        <li className="header_tabs_mobile_view">
          <Popup
            trigger={
              <button type="button" className="threeDot">
                <AiOutlineMenu size="30" />
              </button>
            }
            position="bottom left"
          >
            <div className="popup-container">
              <button type="button" className="popup-btn">
                Schedulers
              </button>
              <button type="button" className="popup-btn">
                Membership
              </button>
              <button type="button" className="popup-btn">
                Pricing
              </button>
              <button type="button" className="popup-btn">
                offers
              </button>
              <button type="button" className="popup-btn">
                courses
              </button>
            </div>
          </Popup>
        </li>
      </ul>
      <div className="offer_course_container">
        <button className="offer_btn" type="button">
          Offers
        </button>
        <button className="course_btn" type="button">
          Courses
        </button>
      </div>
    </div>
  </>
)

export default Header
