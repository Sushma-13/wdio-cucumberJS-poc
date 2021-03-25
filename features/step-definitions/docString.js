const { Given, When, Then } = require('cucumber');
const assert = require('assert');

Then('The heading should have', (heading) => {
    const head = browser.$('.blacklivesmatter h3');
    assert.strictEqual(head.getText(), heading);
});