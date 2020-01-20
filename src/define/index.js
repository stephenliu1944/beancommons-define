function handleValue(value = '') {
    if (typeof value === 'string') {
        value = value.trim();
    }

    if (value === 'true' || value === 'false') {
        value = JSON.parse(value);
    }

    return JSON.stringify(value);
}

export default function define(options = {}, enabled = true) {
    var variables = {};

    if (!options) {
        return variables;
    }

    for (let key in options) {
        if (options.hasOwnProperty(key)) {
            let value = options[key];
            variables[key] = enabled ? handleValue(value) : false;
        }
    }

    return variables;
}