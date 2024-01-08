/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeAll(()=>{
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "UTF-8");

    document.open();
    document.write(fileContents);
    document.close();

});

describe("DOM test", ()=>{
    test("expects p content to change", ()=>{
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});