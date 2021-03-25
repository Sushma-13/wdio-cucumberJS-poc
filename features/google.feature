Feature: A feature to check on visiting the Google Search website
  Scenario: Visiting the homepage of Google.com
    Given I have visited the Google homepage
    When I search for "Cheese!"
    Then the page title should start with "cheese"