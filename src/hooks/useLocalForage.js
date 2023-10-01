import { useState, useEffect } from 'react';
import localforage from 'localforage';

/**
 * A custom hook to use localForage in React components
 * @function useLocalForage
 * @param {String} key - The key to use when storing the value in localForage
 * @param {String, Array, Object} initialValue - The initial value to store in localForage
 * @returns {Array} - An array containing the value, a setter function, and a loading boolean
 */
function useLocalForage(key, initialValue = null) {
  // State to hold the current value
  const [value, setValue] = useState(initialValue);
  // State to handle loading state
  const [loading, setLoading] = useState(true);

  /**
   * A function to set a new value in localForage
   * @function setStoredValue
   * @param {String, Array, Object} newValue - The value to store in localForage
   */
  const setStoredValue = async (newValue) => {
    try {
      await localforage.setItem(key, newValue);
      setValue(newValue);
    } catch (error) {
      console.error(
        `Error setting item with key "${key}" to localForage`,
        error
      );
    }
  };

  // Load the initial value from localForage when the component mounts
  useEffect(() => {
    const load = async () => {
      try {
        const storedValue = await localforage.getItem(key);
        if (storedValue == null) {
          setStoredValue(initialValue);
          //   setValue(initialValue);
        } else {
          setValue(storedValue);
        }
      } catch (error) {
        console.error(
          `Error getting item with key "${key}" from localForage`,
          error
        );
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [key, initialValue]);

  return [value, setStoredValue, loading];
}

export default useLocalForage;
