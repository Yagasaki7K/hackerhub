const subdomains = [
    "bcc.com",
    "insignificant-descent.bcc.com",
    "same-costume.bcc.com",
    "careless-programme.bcc.com",
    "warped-corporation.bcc.com",
    "intrepid-cruelty.bcc.com",
    "dismal-disposer.bcc.com",
    "torn-invite.bcc.com",
    "busy-barge.bcc.com",
    "pertinent-seagull.bcc.com",
    "stupendous-silk.bcc.com",
    "orange-fishery.bcc.com",
    "thin-bathhouse.bcc.com",
    "wasteful-configuration.bcc.com",
    "acclaimed-mentor.bcc.com",
    "valuable-equal.bcc.com",
    "granular-object.bcc.com",
    "definite-scrap.bcc.com",
    "improbable-tennis.bcc.com",
    "lonely-massage.bcc.com",
    "ajar-birdcage.bcc.com",
    "wide-eyed-adult.bcc.com",
    "woeful-formation.bcc.com",
    "precious-importance.bcc.com",
    "great-optimal.bcc.com",
    "exhausted-parade.bcc.com",
    "rotten-lashes.bcc.com",
    "impressionable-onset.bcc.com",
    "fine-switchboard.bcc.com",
    "failing-cellar.bcc.com",
    "ajar-foodstuffs.bcc.com",
    "bulky-fencing.bcc.com",
    "tall-vibration.bcc.com",
    "blank-gray.bcc.com",
    "humiliating-tuba.bcc.com",
    "general-puppet.bcc.com",
    "forsaken-disappointment.bcc.com",
    "quick-duffel.bcc.com",
    "fat-complication.bcc.com",
    "confused-seagull.bcc.com",
    "weekly-confusion.bcc.com",
    "energetic-yogurt.bcc.com",
    "wide-swanling.bcc.com",
    "remorseful-license.bcc.com",
    "experienced-hunt.bcc.com",
    "nice-pleasure.bcc.com",
    "thorough-heating.bcc.com",
    "quintessential-accountability.bcc.com",
    "weekly-digit.bcc.com",
    "cumbersome-disappointment.bcc.com",
    "messy-deduction.bcc.com",
    "svelte-alert.bcc.com",
    "pertinent-tusk.bcc.com",
    "unlucky-cross-contamination.bcc.com",
    "cautious-joy.bcc.com",
    "glum-jazz.bcc.com",
    "digital-forage.bcc.com",
    "ethical-molasses.bcc.com",
    "favorable-cutlet.bcc.com",
    "pricey-following.bcc.com",
    "kosher-muscat.bcc.com",
    "gullible-conversation.bcc.com",
    "authorized-cake.bcc.com",
    "pleasing-minion.bcc.com",
    "acclaimed-parsnip.bcc.com",
    "webbed-order.bcc.com"
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
