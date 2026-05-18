import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/test")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
      });
  }, []);

  return (
    <div className="container">
      <h1>Data User</h1>

      {user ? (
        <div className="card">
          <h2>{user.nama}</h2>
          <p>Email: {user.email}</p>
          <p>Kelas: {user.kelas}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;