export function nameValidator(text) {
    const errors = [];

    const _text = text.trim();

    if (_text.length === 0) errors.push("name can't be blank");

    if (_text.length < 3 || _text.length > 100)
        errors.push("name has to be between 3-100 characters long");

    return errors;
}

export function urlValidator(url, applications) {
    const errors = [];

    const _url = url.trim();

    if (_url.length === 0) errors.push("url can't be blank");

    // Unique urls..
    if (applications.find(({ url }) => url === `${_url}.my.sweetcloud.se`))
        errors.push("url has to be unique");

    return errors;
}
