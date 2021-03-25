# It is used when we have same given statements for multiple scenarios.
# It is used above the scenarios, so that it can be used b/w multiple scenarios

Feature: Login

    Background:
        Given Visit "https://www.saucedemo.com/"
        And password is "secret_sauce"

    Scenario: A locked user
        When user enters "locked_out_user"
        Then get an error "Epic sadface: Sorry, this user has been locked out."

    Scenario: A valid user
        When user enters "standard_user"
        Then navigates to "https://www.saucedemo.com/inventory.html"

