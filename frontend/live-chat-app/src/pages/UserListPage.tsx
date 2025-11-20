import { useEffect, useState } from "react";

export default function UserListPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((r) => r.json())
      .then(setUsers);
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-4">Felhasználók</h1>

      {users.map((u: any) => (
        <div key={u.id} className="flex justify-between border p-3 mb-2">
          <div>{u.username}</div>
          <button
            className="bg-green-600 text-white px-4 py-1 rounded"
            onClick={() => (window.location.href = `/chat/${u.id}`)}
          >
            Üzenet küldése
          </button>
        </div>
      ))}
    </div>
  );
}
