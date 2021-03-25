Feature: Add Todos
    Scenario: Adding reminders
        Given Visit "http://webdriveruniversity.com/To-Do-List/index.html"
        When Add todos
            | Have medicine |
            | Call client   |
            | Meditate      |
        Then Added 3 elements



# Scenario: Add numbers
#   Given I start with 0
#   When I add the following numbers:
#     | 1 |
#     | 2 |
#     | 3 |
#     | 4 |
#   Then I end up with 10

#         When('I add the following numbers:', function (table) {
#   answer = table.raw()
#     .map(row => row[0])
#     .map(v => parseInt(v))
#     .reduce((current, next) => current + next, answer);
# });