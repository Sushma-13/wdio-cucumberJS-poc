Feature: Multiple and

    @formSubmit
    Scenario: Sending message
        Given Visit "http://automationpractice.com/index.php?controller=contact"
        When I Enter Subject Heading as "Customer service"
        * I Enter Email address
        * I Enter Order reference
        Then I press Send button
        But I get "The message cannot be blank."