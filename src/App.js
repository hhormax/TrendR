import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import MyProfileContainer from "./components/Profile/MyProfile/MyProfileContainer";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if(!this.props.initialized){
      return <Preloader />;
    }
    return(
      <BrowserRouter>
          <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
              <div class="app-wrapper-content">       
              <React.Suspense fallback={<div><Preloader /></div>}>                     
                <Routes>
                  <Route path="/login/*" element={<Login />}/>
                  <Route path="/myProfile/*" element={<MyProfileContainer/>}/>
                  <Route path="/profile/:userID/*" element={<ProfileContainer/>}/>
                  <Route path="/messages/*" element={<DialogsContainer/>}/>
                  <Route path="/news/*" element={<News />}/>
                  <Route path="/music/*" element={<Music />}/>
                  <Route path="/users/*" element={<UsersContainer />}/>
                  <Route path="/settings/*" element={<Settings />}/>
                  <Route path="/friends/*" element={<Friends />}/>
                </Routes>
              </React.Suspense>               
              </div>         
          </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);

//export default compose(connect(mapStateToProps, {initializeApp}), withRouter(App))(App);