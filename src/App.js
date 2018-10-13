import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="content">
          <header className="header">
            <div className="container container--flex">
              <a href="#" className="logo">The Site</a>
              <button type="button" className="button button--nav">&#9776;</button>
              <div className="navbox">
                <ul className="nav nav--secondary">
                  <li className="nav__item"><a href="#">menu link</a></li>
                  <li className="nav__item"><a href="#">menu link</a></li>
                  <li className="nav__item"><a href="#">menu link</a></li>
                </ul>
                <nav>
                  <ul className="nav nav--main">
                    <li className="nav__item nav__item--top">
                      <a href="#">menu link</a>
                      <ul className="nav nav--sub">
                        <li className="nav__item"><a href="#">Integer eget mauris</a></li>
                        <li className="nav__item"><a href="#">Pulvinar consectetur</a></li>
                        <li className="nav__item"><a href="#">Oget mauris praesent</a></li>
                        <li className="nav__item"><a href="#">Interdum justo</a></li>
                        <li className="nav__item"><a href="#">Nec neque fringilla </a></li>
                      </ul>
                    </li>
                    <li className="nav__item nav__item--top">
                      <a href="#">menu link</a>
                      <ul className="nav nav--sub">
                        <li className="nav__item"><a href="#">Integer eget mauris</a></li>
                        <li className="nav__item"><a href="#">Pulvinar consectetur</a></li>
                        <li className="nav__item"><a href="#">Oget mauris praesent</a></li>
                        <li className="nav__item"><a href="#">Interdum justo</a></li>
                        <li className="nav__item"><a href="#">Nec neque fringilla </a></li>
                      </ul>
                    </li>
                    <li className="nav__item nav__item--top"><a href="#">menu link</a></li>
                    <li className="nav__item nav__item--top">
                      <a href="#">menu link</a>
                      <ul className="nav nav--sub">
                        <li className="nav__item"><a href="#">Integer eget mauris</a></li>
                        <li className="nav__item"><a href="#">Pulvinar consectetur</a></li>
                        <li className="nav__item"><a href="#">Oget mauris praesent</a></li>
                        <li className="nav__item"><a href="#">Interdum justo</a></li>
                        <li className="nav__item"><a href="#">Nec neque fringilla </a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="overlay">
                <button type="button" className="button button--close">&times;</button>
              </div>
            </div>
          </header>
          <main>
            <div className="container container--main">
              <div className="main">
                <article className="box">
                  <h1>Aenean ac diam nec neque fringilla</h1>
                  <p>Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis ligula at varius.</p>
                  <p>Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis ligula at varius.</p>
                  <p>Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis ligula at varius.</p>
                  <p>Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis ligula at varius.</p>
                  <p>Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis ligula at varius.</p>
                </article>
                <div className="related-content">
                  <div className="box">
                    <p>Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis ligula at varius. Dorce pila meracone.</p>
                  </div>
                  <aside className="box">
                    <h2>Aenean ac diam nec neque</h2>
                    <ul className="nav nav--list">
                      <li className="nav__item"><a href="#">Integer eget mauris et urna</a></li>
                      <li className="nav__item"><a href="#">Pulvinar consectetur hendrerit</a></li>
                      <li className="nav__item"><a href="#">Oget mauris praesent</a></li>
                    </ul>
                  </aside>
                </div>
              </div>
              <article className="sidebar">
                <h2 className="article-header">Aenean ac diam nec neque fringilla</h2>
                <p>Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis ligula at varius.</p>
                <form className="form">
                  <div className="form__row">
                    <label htmlFor="name">First name*:</label>
                    <input type="text" id="name" className="field" placeholder="Enter your name" />
                  </div>
                  <div className="form__row">
                    <label htmlFor="lastname">Last name*:</label>
                    <input type="text" id="lastname" className="field" placeholder="Enter your last name"  />
                  </div>
                  <div className="form__row">
                    <label htmlFor="message">Message*:</label>
                    <textarea id="message" className="field field--large"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="button button--cta">Submit</button>
                  </div>
                </form>
              </article>
            </div>
            <div className="container">
              <div className="box box--dark">
                <p>Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis ligula at varius.</p>
                <p>Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis ligula at varius.</p>
                <p>Integer eget mauris et urna pulvinar consectetur hendrerit eget mauris. Praesent a interdum justo. Aenean ac diam nec neque fringilla cursus. Donec iaculis tortor in nunc vehicula rutrum. Integer malesuada mollis ligula at varius.</p>
              </div>
            </div>
          </main>
          <footer className="footer">
            <div className="container">
              <ul className="nav nav--footerlinks">
                <li className="nav__item"><a href="#">menu link</a></li>
                <li className="nav__item"><a href="#">menu link</a></li>
                <li className="nav__item"><a href="#">menu link</a></li>
                <li className="nav__item"><a href="#">menu link</a></li>
                <li className="nav__item"><a href="#">menu link</a></li>
                <li className="nav__item"><a href="#">menu link</a></li>
              </ul>
              <div className="footer__info">
                <p>
                  Nullam mattis luctus dolor, sed gravida tellus volutpat vel. Maecenas mollis augue sed tortor molestie ornare. Proin dapibus dictum eros ut adipiscing. Nullam ultrices dolor ut tristique sollicitudin. Integer scelerisque urna est, sit amet aliquet sapien accumsan quis. Nullam luctus semper vulputate. Nulla egestas urna nec tellus ultrices elementum. Proin dapibus dictum eros ut adipiscing. Nullam ultrices dolor ut tristique sollicitudin. Integer scelerisque
                </p>
                <a href="#" className="logo logo--secondary">
                  The Site
                </a>
              </div>
            </div>
            <button type="button" className="button button--totop">Back to top</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
