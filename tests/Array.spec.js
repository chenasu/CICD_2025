import { expect } from "chai";


describe("Array", ()=>{

    describe("sorting array works", ()=>{
        it("Should sort array", ()=>{
            var names = ["Dani", "Moshe", "Adam"];
            expect(names.sort()).to.be.eql(["Adam", "Dani", "Moshe"])
        })
    })

})