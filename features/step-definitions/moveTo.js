const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const ActionPage = require('../page/moveToPage');

When('I press the button 2 times', () => {
    // const elem = browser.$('#double-click');
    ActionPage.doubleClickDiv.waitForVisible();
    ActionPage.moveTo(1, 1);
    ActionPage.doubleClick();
});

Then('The color changes to green', () => {
    // const elem = browser.$('#double-click');
    // const backgroundColor = '#93CB5A';
    // var color = elem.getCssProperty('background-color');
    assert.strictEqual(ActionPage.css('background-color'), ActionPage.backgroundColor);
});