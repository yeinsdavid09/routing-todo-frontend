import { useEffect, useState } from "react";

export function useLocalStorage(keyword, initialValue) {
  //#region ----------------------------------- Variables ---------------------------------

  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //#endregion

  //#region --------------------------------- Hooks ---------------------------------

  useEffect(() => {
    setTimeout(() => {
      const storageItem = localStorage.getItem(keyword);
      const parsedItem = storageItem ? JSON.parse(storageItem) : initialValue;
      setItem(parsedItem);
      setLoading(false);
    }, 1000);
  }, [keyword, initialValue]);

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  function saveItem(value) {
    setItem(value);
    localStorage.setItem(keyword, JSON.stringify(value));
  }

  function getItem() {
    const storageItem = localStorage.getItem(keyword);
    return storageItem ? JSON.parse(storageItem) : null;
  }

  function removeItem() {
    localStorage.removeItem(keyword);
  }

  //#endregion

  //#region --------------------------------- Return ---------------------------------

  return {
    item,
    saveItem,
    getItem,
    removeItem,
    loading,
    setLoading,
    error,
    setError,
  };

  //#endregion
}
