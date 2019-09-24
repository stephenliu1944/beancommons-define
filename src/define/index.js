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
    var global = {};

    if (!options) {
        return global;
    }

    for (let key in options) {
        if (options.hasOwnProperty(key)) {
            let value = options[key];
            global[key] = enabled ? handleValue(value) : false;
        }
    }

    return global;
}