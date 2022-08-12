import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      const onChangeContent = event => {
        const isCheckedContent = event.target.checked

        onToggleShowContent(isCheckedContent)
      }

      const onChangeLeftNavbar = event => {
        const isCheckedLeft = event.target.checked
        onToggleShowLeftNavbar(isCheckedLeft)
      }

      const onChangeRightNavbar = event => {
        const isCheckedRight = event.target.checked
        onToggleShowRightNavbar(isCheckedRight)
      }

      return (
        <div className="container">
          <h1 className="head">Layout</h1>
          <div className="input">
            <input
              type="checkbox"
              className="inputCheck"
              id="content"
              onChange={onChangeContent}
              checked={showContent}
              value={showContent}
            />
            <label className="label" htmlFor="content">
              Content
            </label>
          </div>
          <div className="input">
            <input
              type="checkbox"
              className="inputCheck"
              id="left"
              onChange={onChangeLeftNavbar}
              checked={showLeftNavbar}
              value={showLeftNavbar}
            />
            <label className="label" htmlFor="left">
              Left Navbar
            </label>
          </div>
          <div className="input">
            <input
              type="checkbox"
              className="inputCheck"
              id="right"
              onChange={onChangeRightNavbar}
              checked={showRightNavbar}
              value={showRightNavbar}
            />
            <label className="label" htmlFor="right">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
