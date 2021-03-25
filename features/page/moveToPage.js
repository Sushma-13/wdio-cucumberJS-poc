class ActionPage {
    get backgroundColor() { return '#93CB5A' };
    get doubleClickDiv() { return $('#double-click'); }
    css(property) { return this.doubleClickDiv.getCssProperty(property).parsed.hex.toUpperCase(); }
    moveTo(x, y) {
        browser.moveTo(this.doubleClickDiv, x, y);
    }

    doubleClick() {
        browser.doubleClick('#double-click');
    }

}

module.exports = new ActionPage();