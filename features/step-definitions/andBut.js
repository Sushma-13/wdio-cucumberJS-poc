const { Given, When, Then } = require('cucumber');
const assert = require('assert');

When('I Enter Subject Heading as {string}', (option) => {
   const dd= browser.$('#id_contact');
   dd.selectByVisibleText(option);
});

When('I Enter Email address', () => {
    browser.$('#email').setValue("abc@gmail.com");
});

When('I Enter Order reference', () => {
    browser.$('#id_order').setValue("12345");
});

Then('I press Send button', () => {
    browser.$('#submitMessage').click();
});

Then('I get {string}', (message) => {
    const mess=browser.$('#center_column div.alert ol li').getText();
    // console.log(mess);
    assert.strictEqual(message, mess);
});