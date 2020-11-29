import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";
import CssBaseline from '@material-ui/core/CssBaseline'
import Nav from './components/shared/nav-bar/Nav'
import { WebinarJoin } from './views/WebinarJoin'
import { Attendents } from './views/Attendents'
import { Chat } from './views/Chat'
import { Webinars } from './views/Webinars'
import { UpcomingWebinar } from './views/UpcomingWebinar'
import { PlannedAttendees } from './views/PlannedAttendees'
import { UserProfile } from './views/UserProfile'
import { MyProfile } from './views/MyProfile'
import { Groups } from './views/Groups'
import { GroupDetails } from './views/GroupDetails'
import { AddGroup } from './views/AddGroup'
import { AddEvent } from './views/AddEvent'
import { EventsStats } from './views/EventsStats'
import { Search } from './views/Search'
import { Login } from './views/Login'
import { Signup } from './views/Signup'

function App() {

  const history = createBrowserHistory()

  return (
    <BrowserRouter>
      <div className="App">
        <CssBaseline />
        {
          ( history.location.pathname !== '/login' && history.location.pathname !== '/signup' ) ?
          <Nav/> : null 
        }
        <Switch>
          <Route path="/" component={WebinarJoin} exact />
          <Route path="/attendents" component={Attendents} />
          <Route path="/chats" component={Chat} />
          <Route path="/webinars" component={Webinars} />
          <Route path="/upcoming-webinar" component={UpcomingWebinar} />
          <Route path="/planned-attendees" component={PlannedAttendees} />
          <Route path="/user-profile" component={UserProfile} />
          <Route path="/my-profile" component={MyProfile} />
          <Route path="/groups" component={Groups} />
          <Route path="/group" render={() => (
                <GroupDetails isAdmin={false} />
          )} />
          <Route path="/group-admin" render={() => (
                <GroupDetails isAdmin={true} />
          )} />
          <Route path="/add-group" component={AddGroup} />
          <Route path="/add-event" component={AddEvent} />
          <Route path="/events-stats" component={EventsStats} />
          <Route path="/search" component={Search} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
