Feature: Register to NopCommerce Store

    @registration
    Scenario: User registers
        Given User opens the main page
        When User fills in the registration fields
        Then User successfully reigisters