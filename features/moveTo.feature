Feature: Checking mouse move
    Scenario: Clicking button
        Given Visit "http://webdriveruniversity.com/Actions/index.html"
        When I press the button 2 times
        Then The color changes to green