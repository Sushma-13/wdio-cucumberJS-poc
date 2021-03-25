const { Given, When, Then } = require('cucumber');
const assert = require('assert');

Given('Visit {string}', (url) => {
    browser.url(url);
});

When('Add todos', (todos) => {
    const input = browser.$('#container').$('input');
    // const li = browser.$('#container').$('ul').$$('li');
    todos.raw().forEach((todo) => {
        input.setValue(todo[0]);
        browser.keys('\uE007');
        browser.pause(2000);
    });

});

Then('Added {int} elements', (count) => {
    const li = browser.$('#container').$('ul').$$('li');
    let i=0;
    li.forEach(element => {
        i++;
    });
    assert.strictEqual(i-3, count);
});