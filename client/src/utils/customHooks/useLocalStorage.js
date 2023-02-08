import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  if (
    typeof initialValue !== "string" &&
    Object.keys(initialValue).length !== 0
  ) {
    for (const key in initialValue) {
      window.sessionStorage.setItem(initialValue[key], JSON.stringify(key));
    }
  }
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error.message);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
