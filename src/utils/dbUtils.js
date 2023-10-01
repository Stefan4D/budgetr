import localforage from 'localforage';

// Key used to store user list in localForage
const usersKey = 'users';

// Array to store user-specific localForage instances
const userStores = [];

/**
 * Initialize user stores from the stored user list
 * @function initializeUserStores
 * @returns {Promise<Array>} users
 */
export async function initializeUserStores() {
  try {
    const users = (await localforage.getItem(usersKey)) || [];

    users.forEach((username) => {
      const userStore = localforage.createInstance({
        name: `datastore_${username}`,
      });
      userStores.push({ username, db: userStore });
    });

    return users; // Return the user list for setting it to state
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize user stores:', error);
    return []; // Return an empty array in case of an error
  }
}

/**
 * Add a user to the user list and create a localForage instance for them
 * @function addUser
 * @param {string} username
 * @returns {Promise<void>}
 * @throws {Error} if the user already exists
 * @throws {Error} if the user list could not be updated
 */
export async function addUser(username) {
  try {
    const users = (await localforage.getItem(usersKey)) || [];

    if (users.includes(username)) {
      throw new Error('User already exists');
    }

    users.push(username);
    await localforage.setItem(usersKey, users);

    const userStore = localforage.createInstance({
      name: `datastore_${username}`,
    });
    userStores.push({ username, db: userStore });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to add user:', error);
    throw error;
  }
}
