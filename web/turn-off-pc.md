the neighbor call to turn off a pc because she needs to study.

first, she send a name of him.

Laxmi Endo

you can find your IP in lynx.

`2.55.145.195`

trying to search any door open through `nmap`

ssh is open. we will use hydra.

`hydra -T 2.55.145.195:22 -P /home/Yagasaki/downloads/wordlist.lst`

guest:theend.

connect by ssh.

`ssh -h guest@2.55.145.195 -p 22`

we find a folders like `etc`, `home`, `logs` and `lib`, everything is empty, expect `etc`

there has a file. `sys.log` and using `cat` you find this `guest:a77224c90dc6867f603a3afd92767598`

i use john to decrypt but that is the password of computer.

nothing more to do.

execute `shutdown` command.