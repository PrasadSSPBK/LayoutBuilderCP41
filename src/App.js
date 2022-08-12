import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'
import ConfigurationContext from './context/ConfigurationContext'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}
  //   onToggleShowContent: () => {},
  //   onToggleShowLeftNavbar: () => {},
  //   onToggleShowRightNavbar: () => {},

  onToggleShowContent = isCheckedContent => {
    if (!isCheckedContent) {
      this.setState({
        showContent: false,
      })
    } else {
      this.setState({
        showContent: true,
      })
    }
  }

  onToggleShowLeftNavbar = isCheckedContent => {
    if (!isCheckedContent) {
      this.setState({
        showLeftNavbar: false,
      })
    } else {
      this.setState({
        showLeftNavbar: true,
      })
    }
  }

  onToggleShowRightNavbar = isCheckedContent => {
    if (!isCheckedContent) {
      this.setState({
        showRightNavbar: false,
      })
    } else {
      this.setState({
        showRightNavbar: true,
      })
    }
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <div>
        <ConfigurationContext.Provider
          value={{
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent: this.onToggleShowContent,
            onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
            onToggleShowRightNavbar: this.onToggleShowRightNavbar,
          }}
        >
          <ConfigurationController />
          <Layout />
        </ConfigurationContext.Provider>
      </div>
    )
  }
}

export default App
