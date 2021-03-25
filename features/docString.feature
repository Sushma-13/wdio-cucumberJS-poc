Feature: Checking Header
    Scenario: Webdriver io should have black lives matters as heading
        Given Visit "https://webdriver.io/docs/selectors.html"
        Then The heading should have
            """
            BLACK LIVES MATTER
            """