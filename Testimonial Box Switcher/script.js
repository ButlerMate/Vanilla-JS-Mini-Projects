const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const job = document.querySelector('.role');
const progressBar = document.querySelector('.progress-bar')

const testimonials = [
    {
        name: 'John Clark',
        role: 'Navy Seal',
        photo: 'https://randomuser.me/api/portraits/men/32.jpg',
        text: `What the fuck did you just fucking say about me, you little bitch? I'll
        have you know I graduated top of my class in the Navy Seals, and I've
        been involved in numerous secret raids on Al-Quaeda, and I have over 300
        confirmed kills. I am trained in gorilla warfare and I'm the top sniper
        in the entire US armed forces. You are nothing to me but just another
        target. I will wipe you the fuck out with precision the likes of which
        has never been seen before on this Earth, mark my fucking words. You
        think you can get away with saying that shit to me over the Internet?
        Think again, fucker. As we speak I am contacting my secret network of
        spies across the USA and your IP is being traced right now so you better
        prepare for the storm, maggot. The storm that wipes out the pathetic
        little thing you call your life. You're fucking dead, kid. I can be
        anywhere, anytime, and I can kill you in over seven hundred ways, and
        that's just with my bare hands. Not only am I extensively trained in
        unarmed combat, but I have access to the entire arsenal of the United
        States Marine Corps and I will use it to its full extent to wipe your
        miserable ass off the face of the continent, you little shit. If only
        you could have known what unholy retribution your little "clever"
        comment was about to bring down upon you, maybe you would have held your
        fucking tongue. But you couldn't, you didn't, and now you're paying the
        price, you goddamn idiot. I will shit fury all over you and you will
        drown in it. You're fucking dead, kiddo.`
    },
    {
        name: 'Darth Sidious',
        role: 'Emperor',
        photo: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Emperor_RotJ.png',
        text: `Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not.
        It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life…
        He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did.
        Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.`
    },
    {
        name: 'Rick Sanchez',
        role: 'Good Guy',
        photo: 'https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png',
        text: `👆👀👆👀👆👀👆👀👆👀 waaay up tHere 👆 moRTY ✔ im gonna need 👆 🌱 u to put these seeds 🌱👆🌱waaaay 👆up inside🌱🌱 ur✔butthOle✔✔🍑mo-EURGH-rty 🌱👆👆👆wa𝖺𝖠AY up there 👆 morty 🌱 way up 👆 into your butthole (chorus: ᵇᵘᵗᵗʰᵒˡᵉ) mMMMMᎷМ🍑 O0ОଠＯଠOooᵒᵒᵒᵒRR𝖱ᵣᵣTTY𝖸𝖸YY 👆🌱👆 🍑 👀👀 👀 👆 👆✔ waaay up there`
    },
    {
        name: 'ɥʇᴉɯS ʇuᴉɐɹǝפ',
        role: 'ɹǝʎoɾuƎ ǝᴉ┴',
        photo: 'https://media.istockphoto.com/photos/businessman-is-hanging-upside-down-having-stress-picture-id172323110?s=612x612',
        text: `˙ʇı ןןɐɔ noʎ ɹǝʌǝʇɐɥʍ ɹo ,ɐʇǝq, pǝɹǝpısuoɔ buıǝq ɟo ʞɔıs ɯ,ı ˙ʇı ʇnoqɐ ʎɹɔ oʇ ǝɯ oʇ ʞןɐʇ ʎןuo puɐ ‘ʇıɥs ǝʞıן ɯǝɥʇ ʇɐǝɹʇ oɥʍ sʎnb bɐqǝɥɔnop ɹǝʇɟɐ ob sʎɐʍןɐ sןɹıb ǝsǝɥʇ puǝ ǝɥʇ uı ˙ʎpɐן,ɯ ɹoɟ buıɥʇʎuɐ op pןnoʍ puɐ ‘qoظ ǝɔıu ɐ ʞɹoʍ ‘ʎnb ǝɔıu ɐ ɯ,ı ˙ǝuoz puǝıɹɟ ǝɥʇ uı ʇnd buıǝq sʎɐʍןɐ ı ɯɐ ʎɥʍ`
    },
]

let idx = 1 //set to 1 because the first entry is in the html, could remove it :(:):(:):(:)

function updateTestimonial() {
    const {name, role, photo, text} = testimonials[idx]
    console.log(role)
    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    job.innerHTML = role
    idx++

    if (idx > testimonials.length - 1){
        idx = 0
    }
}

progressBar.addEventListener('animationiteration', () => {
    updateTestimonial()
})