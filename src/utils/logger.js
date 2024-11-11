function formatMessage(colorCode, label, ...args) {
    const msg = args.join(" ");
    console.log(`\x1b[${colorCode}m${label}\x1b[0m ${msg}`);
}

function backend(...args) {
    formatMessage(35, "[1v1-lol]", ...args);  
}

function xmpp(...args) {
    formatMessage(33, "[1v1-lol - XMPP]", ...args);  
}

function database(...args) {
    formatMessage(32, "[DATABASE]", ...args);  
}

module.exports = {
    formatMessage,
    backend,
    xmpp,
    database
}