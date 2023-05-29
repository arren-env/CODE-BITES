const parseFormData = (targetForm) => {
    const formData = new FormData(targetForm);
    const data = {};
    for (let [key, value] of formData.entries()) {
        if (value.trim() !== "") {
            if (value.toLowerCase() === "true") {
                data[key] = true;
            } else if (value.toLowerCase() === "false") {
                data[key] = false;
            } else {
                data[key] = value;
            }
        }
    }
    return data;
};

export { parseFormData };