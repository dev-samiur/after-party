import CssBaseline from '@material-ui/core/CssBaseline'
import { Nav } from './components/shared/nav-bar'
import { WebinarJoin } from './views/WebinarJoin'

function App() {
  return (
      <div className="App">
        <CssBaseline />
        <Nav />
        <WebinarJoin/>
      </div>
  );
}

export default App;
