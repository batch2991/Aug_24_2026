Feature: I want to test login functionality

@smoke @regression
Scenario: i will login with valid credentials
Given i am on the login page
When  i will enter valid userid and valid pwd and click login
Then i should be navigated to dashboard page

