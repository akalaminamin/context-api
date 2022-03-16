import "./App.css";
import PostsList from "./components/PostsList/PostsList";
import UserList from "./components/UserList/UserList";
import Providers from "./store";

function App() {
  return (
    <div className="App">
      {/* <h1>In the name of Allah</h1> */}
      <Providers>
        <UserList />
        <PostsList />
      </Providers>
    </div>
  );
}

export default App;
