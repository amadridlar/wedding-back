Feature: Administration actions

  As a backend user
  I want to manage guest data
  So that get full controll of guest list

  @Definition
  Scenario Outline: Add a new guest
    Given new guest
      | Name     | <name>     |
      | Lastname | <lastname> |
      | Menu     | <menu>     |
      | Bus      | <bus>      |
    When I add the guest
    Then the guest is storaged correctly
      | Name   | Lastname   | Menu   | Bus   |
      | <name> | <lastname> | <menu> | <bus> |

    Examples:
      | name  | lastname | menu | bus   |
      | Johny | Reland   | 1    | true  |
      | Johny |          | 2    | false |

  Scenario: Remove a guest
    Given a guest already storaged
    When I remove the guest
    Then the guest is removed correctly

  Scenario Outline: Modify guest information
    Given a guest already storaged
    When I modify some guest data
      | Name     | <name>     |
      | Lastname | <lastname> |
      | Menu     | <menu>     |
      | Bus      | <bus>      |
    Then the new data modified is storaged correctly
      | Name     | <name>     |
      | Lastname | <lastname> |
      | Menu     | <menu>     |
      | Bus      | <bus>      |

    Examples:
      | name  | lastname | menu | bus  |
      | Johny | Jeremy   | 1    | true |

  Scenario: Add a guest already storaged
    Given a guest already storaged
    When I add the guest
    Then application informs me that the user is already storaged
    And the guest is not storaged

  Scenario: Trying to remove a guest who is not storaged
    Given a guest not storaged
    When I remove the guest
    Then the application informs that the guest does not exist

  Scenario: Trying to modify a guest who is not storaged
    Given a guest not storaged
    When I modify some guest data
      | Name     | <name>     |
      | Lastname | <lastname> |
      | Menu     | <menu>     |
      | Bus      | <bus>      |
    Then the application informs that the user does not exist
