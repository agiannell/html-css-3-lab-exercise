import {Component} from 'react';
import './reset.css';
import './App.css';
import logo from './img/navbar-logo.svg'
import menu from './img/menu-lines.svg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      dropdownView: false
    }
  }

  toggleDropdown = () => {
    this.setState({dropdownView: !this.state.dropdownView})
  }
  
  render() {
    const {dropdownView} = this.state
    const {toggleDropdown} = this;
    return (
      <section className="App">
        <header>
          <div className='header-container'>
            <img src={logo} alt='nav logo' />
            <nav className='desktop-menu'>
              <span>SERVICES</span>
              <span>PORTFOLIO</span>
              <span>ABOUT</span>
              <span>TEAM</span>
              <span>CONTACT</span>
            </nav>
            <div className='menu-button' onClick={toggleDropdown}>MENU
              <img src={menu} alt='hamburger menu' />
            </div>
          </div>
          {dropdownView
            ? (
              <div className='dropdown'>
                <div className='mobile-menu'>
                  <span>SERVICES</span>
                  <span>PORTFOLIO</span>
                  <span>ABOUT</span>
                  <span>TEAM</span>
                  <span>CONTACT</span>
                </div>
              </div>
            )
            : null}
        </header>
        <section className='section-1'>
          <div className='sec-1-container'>
            <h1>Welcome To Our Studio!</h1>
            <h2>IT'S NICE TO MEET YOU</h2>
            <button>TELL ME MORE</button>
          </div>
        </section>
      </section>
    )
  }
}

export default App;
