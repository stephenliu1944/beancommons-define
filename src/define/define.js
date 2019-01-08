export function define(options, prefix = '', suffix = '') {
    var global = {};

    if (!options) {
        return global;
    }

    for (let key in options) {
        if (options.hasOwnProperty(key)) {
            global[prefix + key + suffix] = JSON.stringify(options[key]);
        }
    }

    return global;
}