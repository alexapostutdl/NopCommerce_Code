Feature: User is shopping

Background: Open main page
    Given User opens the main page 
    And User logs in

@shopping
Scenario: User adds items to cart
    When User acceses the Desktop category
    When User adds 1 item to cart
    When User opens and asserts items in cart
    When User increases the quantity & updates the cart
    Then User checks out
    # And User asserts the order was sent