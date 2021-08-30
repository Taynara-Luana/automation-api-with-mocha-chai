var chai = require("chai"),
expect = chai.expect
var request = require("request")
var urlBase = "https://viacep.com.br/ws/"

module.exports = {
    consultingCepReturnSucess(urlVerification, statusCodeGet, done){
        request.get({
            url:`${urlBase}${urlVerification}`
        }, function(error, response, body){
            expect(response.statusCode).to.equal(statusCodeGet)
            done()
        })
    },

    consultingCepReturnError(urlVerification, statusCodeGet, done){
        request.get({
            url:`${urlBase}${urlVerification}`
        }, function(error, response, body){
            expect(response.statusCode).to.equal(statusCodeGet)
            done()
        })
    }
}