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
export default async function initializeUserStores() {
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
