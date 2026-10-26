Feature: To test for invalid credentials

@regression
Scenario Outline: I will login will invalid credentials
Given i am on the login page
When i will enter "<username>" and "<passwd>" and login
Then i should see the "<expected>" error message on the application.
Examples:
 |username|passwd|expected|
 |standard_user|1234356|Username and password do not match any use|
 |standard_user||Password is required|