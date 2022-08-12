import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="bodyContainer">
          {showContent ? (
            <div className="firstContainer">
              <h1 className="head">Left Navbar Menu</h1>
              <ul className="ul">
                <li className="li">item 1</li>
                <li className="li">item 2</li>
                <li className="li">item 3</li>
                <li className="li">item 4</li>
              </ul>
            </div>
          ) : null}
          {showLeftNavbar ? (
            <div className="secondContainer">
              <h1 className="head">Content</h1>
              <p>
                Lorem ipsum dolor sitamet,consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="firstContainer">
              <h1 className="head">Right Navbar Menu</h1>
              <div className="box">
                <p>Ad 1</p>
              </div>
              <div className="box">
                <p>Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
