export const getId = () => {
    const saveId = localStorage.getItem("donationId");
    if (saveId) {
        return JSON.parse(saveId);
    }
    return []
};

export const saveIds = (id) => {
    const saveIds = getId();
    if (saveIds) {
        return "Alredy Added"
    }
    else {
        saveIds.push(id);
        localStorage.setItem("donationId", JSON.stringify(saveIds))
    }
    return undefined
} 
