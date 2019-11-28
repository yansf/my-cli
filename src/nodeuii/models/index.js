const safeRequest = require("../utils/safeRequest");

class Index {
    getData(url,options){
        const safeFetch = new safeRequest(url,options);
        return safeFetch.fetch();
    }
}

module.exports = Index;