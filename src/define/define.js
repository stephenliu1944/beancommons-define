export function define(options, prefix = '__', suffix = '__') {
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