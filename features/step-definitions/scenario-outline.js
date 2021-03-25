const { Given, When, Then } = require('cucumber');
const assert = require('assert');

let user, pass;
Given('User navigates to facebook', () => {
    console.log("Navigation Successful");
});

When('I enter Username as {string} and Password as {int}', (username, password) => {
    user = username, pass = password;
    console.log(user, pass);
});

Then('login should be successful', () => {
    assert.strictEqual(user, user);
});