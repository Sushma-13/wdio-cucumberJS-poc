const { Given, When, Then } = require('cucumber');
const assert = require('assert');

Given('I have visited the Google homepage', function () {
    browser.url('https://www.google.com');
});

When('I search for {string}', (query) => {
    const elem = browser.$('[name="q"]');
    elem.setValue(query);
    // browser.setValue('*[name="q"]', query);
    browser.keys('\uE007');
    // browser.keys(['Enter']);
    // browser.pause(3000);
});

Then('the page title should start with {string}', function (query) {
    const title = browser.getTitle();
    let found = false;
    if(title.toLowerCase().includes(query.toLowerCase())){
        found = true;
    }
    assert.ok(found);
});