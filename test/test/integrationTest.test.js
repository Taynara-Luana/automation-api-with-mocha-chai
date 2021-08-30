var chai = require("chai"),
    expect = chai.expect

var consultingCepService = require("../testService/consultingCepService")

describe("#Mapping Test Cases to a Requirement: Consulting CEP with return error and sucess.", function () {
    this.timeout(10000);

    context('Test Cases returning Sucess.', () => {
        it('When to informed a valid CEP, then the CEP will be listed.', function (done) {
            consultingCepService.consultingCepReturnSucess('87240000/json', 200, done)
        });
    });

    context('Test Cases returning Error.', () => {
        it('When to informed a invalid CEP, then the CEP will not be listed. Returning a Code Status = 400.', function (done) {
            consultingCepService.consultingCepReturnError('87240--000/json', 400, done)
        });

        it('When to informed a invalid format on field CEP, then the CEP will not be listed. Returning a Code Status = 400.', function(done){
            consultingCepService.consultingCepReturnError('string/json', 400, done)
        });

        it('when to informed a null value to field CEP, then the CEP will not be listed. Returning a Code Status = 400.', function(done){
            consultingCepService.consultingCepReturnError('/json', 400, done)
        });
    });
});