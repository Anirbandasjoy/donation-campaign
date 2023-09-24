export const getIds = () => {
    const saveId = localStorage.getItem("donationId");
    if (saveId) {
        return JSON.parse(saveId);
    }
    return []
};

export const saveIds = (id) => {
    const saveIds = getIds();
    const exsis = saveIds.find((saveId) => saveId === id)
    if (exsis) {
        return "Alredy Added"
    }
    else {
        saveIds.push(id);
        localStorage.setItem("donationId", JSON.stringify(saveIds))
    }
    return undefined
} 
