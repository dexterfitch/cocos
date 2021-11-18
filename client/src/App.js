import { useState } from "react";
import Login from './Login';

function App() {
  const [user, setUser] = useState("");

  function handleSubmit(e) {
    fetch("/logout", {
      method: "DELETE"
    }).then(() => {
        setUser();
    });
  }

  return (
    <div className="App">
      <p>This is the App Component</p>
      <Login setUser={setUser} />
      <button onClick={handleSubmit}>Logout</button>
    </div>
  );
}

export default App;
