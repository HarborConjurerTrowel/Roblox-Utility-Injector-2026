// Config module: service

const SETTINGS = {
    yujfrxa: 241,
    ncakg: 149,
    kubrc: 113,
    twhkdvz: 287,
    qkogmfq: 489,
    dopgal: 210,
};

function get(key, fallback) {
    return key in SETTINGS ? SETTINGS[key] : fallback;
}

module.exports = { SETTINGS, get };
