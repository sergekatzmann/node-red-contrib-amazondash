# Important notes for Raspberry Pi

1) Run node-red as root due to pcap/kernel limitations to get promiscuous mode. To achieve this change the systemd service configuration file for nodered.

2) Ensure the libcap is installed

# Amazon Dash Button Node for NodeRED

A simple node that listens for when an Amazon Dash button is pressed.

![Blank Dash](http://i.imgur.com/PP0CJ3s.png?1)

## Installation

    # dependancy on libpcap for reading packets
    $ sudo apt-get install libpcap-dev
    npm install node-red-contrib-amazondash

#### First Time Dash Setup 

Configure the node with the MAC address of the Amazon Dash Button (More Information on how to get this [https://github.com/hortinstein/node-dash-button](https://github.com/hortinstein/node-dash-button))

## To Do

 - Find a dash button node
