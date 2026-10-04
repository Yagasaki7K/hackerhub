const subdomains = [
    "incomplete-handover.thebluetable.com",
    "cheap-someplace.thebluetable.com",
    "dead-gift.thebluetable.com",
    "descriptive-lox.thebluetable.com",
    "gleaming-charm.thebluetable.com",
    "compassionate-government.thebluetable.com",
    "shy-bakeware.thebluetable.com",
    "crm.thebluetable.com",
    "thebluetable.com"
];

// async function getSubdomain() {
//     for (let i = 0; i < subdomains.length; i++) {
//         await Shell.Process.exec(`subfinder -d ${subdomains[i]}`);
//     }
// }

async function getSubdomain() {
    for (let i = 0; i < subdomains.length; i++) {
        await Shell.Process.exec(`nuclei -h ./${subdomains[i]}.txt`);
    }
}

getSubdomain()
