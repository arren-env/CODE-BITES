const parseFormData = (targetForm) => {
    const formData = new FormData(targetForm);
    const data = {};
    for (let [key, value] of formData.entries()) {
        const isFile = value instanceof File;

        if (isFile) {
            if (value.name.trim()!=="") {
                data[key] = value;
            }
        } else {
            const trimmedValue = value.trim();
            if (trimmedValue === "true" || trimmedValue === "false") {
                data[key] = (trimmedValue === "true");
            } else if (trimmedValue !== "") {
                data[key] = trimmedValue;
            }
        }

    }
    return data;
};

export { parseFormData };