function setDataLocalStorage(itemName, itemData) {
    localStorage.setItem(itemName, itemData);
};

function getDataLocalStorage(itemName) {
    localStorage.getItem(itemName);
};

export {setDataLocalStorage, getDataLocalStorage};