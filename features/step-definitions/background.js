const { Given, When, Then } = require('cucumber');
const assert = require('assert');

let pass;
Given('password is {string}', (password) => {
    pass = password;
});

When('user enters {string}', (username) => {
    browser.$('#user-name').setValue(username);
    browser.$('#password').setValue(pass);
    browser.keys('Enter');

});

Then('navigates to {string}', (currUrl) => {
    const loginUrl = browser.getUrl();
    assert.strictEqual(loginUrl, currUrl);
    // Things to remember: the test execution will continue untill the page loads compeletly
});

Then('get an error {string}', (errorMsg) => {
    const err = browser.$('[data-test="error"]').getText();
    assert.strictEqual(err, errorMsg);
});