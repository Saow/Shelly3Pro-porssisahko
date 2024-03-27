# Shelly 3 Pro - Script Responsive to Exchange Electricity Price

This script is intended for use with the Shelly 3 Pro device. The script utilizes Shelly's internal API to check the price of exchange electricity and adjusts the Shelly's relays accordingly.

## Operation

1. The script uses the spot-hinta.fi API to check the price of exchange electricity.
2. It checks the price of exchange electricity and reacts to it by regulating the Shelly's relays.
3. For example, if the electricity price is low, the script can activate all of the Shelly's relays.

## Installation and Usage

1. Download the script and save it to the environment or device managed by Shelly.
2. Configure the necessary settings, such as the URL of the exchange electricity API and the information required to control the relays.
3. Execute the script by running it within the Shelly environment.

## Note
- Be cautious when modifying the script and ensure that you understand its operation before using it.

## Authors

- [Aaron Kairavuo](https://www.github.com/Arskakoo)
- [Samuel Nummela](https://www.github.com/Saow)
