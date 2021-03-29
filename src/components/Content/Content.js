import styles from "./Content.module.css";

import { Route } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import UsersContainer from "../Users/UsersContainer";

const Content = () => {
  return (
    <div className={styles.content}>
      <Sidebar />
      <Route path="/profile" render={() => <Profile></Profile>} />
      <Route path="/messages" render={() => <Dialogs></Dialogs>} />
      <Route path="/users" render={() => <UsersContainer></UsersContainer>} />
    </div>
  );
};

export default Content;
