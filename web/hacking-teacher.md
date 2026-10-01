A guy talk to me in kisscord. Your teacher is called: Yuko Hauksson

using Lynx to found any information.

`Lecturer at "Kohler, Lubowitz and Kuhic University"`

we found a IP address: `106.91.131.200`

installing net_tree.py in hackdb.

with this script we can found every computer logged in the same network.

using `whois` and one by one we can found the target's computer.

PORT	STATE	SERVICE	VERSION	DESTINATION
21	CLOSE	ftp		192.168.1.4
22	OPEN	ssh	OpenSSH 5.18.78	192.168.1.4
443	CLOSE	https		192.168.1.4
8080	CLOSE	http		192.168.1.4

using a `metasploit` like a `msfconsole` we found a exploit for the ssh service.

set RHOST 117.227.112.214
set RPORT 22
set Version 5.18.78

enter in computer using `explorer` and download the `full-exam.docx`