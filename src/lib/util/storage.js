export const getStorageItem = (key, defaultValue) => {
  try {
    const storageItem = localStorage.getItem(key);
    return storageItem ? JSON.parse(storageItem) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
};

export const setStorageItem = (key, value) => {
  try {
    return localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
};

export const removeStorageItem = key => {
  try {
    localStorage.removeItem(key);
  } catch (e) {}
};
