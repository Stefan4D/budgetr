// refactor this to be a custom hook
import { useState, useEffect } from 'react';
import initializeUserStores from '../utils/dbUtils';

export default function TestComponent() {
  // Array to store user-specific localForage instances
  const [userStores, setUserStores] = useState([]);
  const [activeDB, setActiveDB] = useState(null);

  // Initialize user stores from the stored user list
  useEffect(() => {
    const registeredUsers = initializeUserStores();
    setUserStores(registeredUsers);

    // Test case to select a user and retrieve a value from their localForage instance
    const usernameToFind = 'Alice';
    const loggedInUser = userStores.find(
      (userStore) => userStore.username === usernameToFind
    );
    const userDB = loggedInUser ? loggedInUser.db : null;

    setActiveDB(userDB);

    activeDB
      .getItem('db')
      .then((value) => {
        // Do something with the value
        // set React state to the value retrieved
      })
      .catch((err) => {
        // This code runs if there were any errors
        console.log(err);
      });
  }, []);
}
