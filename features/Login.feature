Feature: Login
  @Smoke
  Scenario Outline: Successful Login1

    Given User launches OrangeHRM application
    When User enters username "<username>"
    And User enters password "<password>"
    And User clicks on Login button
    Then User should be navigated to Dashboard page
    Examples:
      | username | password |
      | Admin    | admin123 |