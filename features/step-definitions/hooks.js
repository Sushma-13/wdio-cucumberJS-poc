const { Before, After } = require('cucumber');

Before(() => console.log("Before Executed"));

After('@docStr', () => console.log("After Executed"));