const image = document.querySelector("#myImage");
const text = document.querySelector("h2");

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");

const loading = document.querySelector("h1");

buttonOne.addEventListener("click", thepast);
buttonTwo.addEventListener("click", thepresent)

function thepast(){
    image.setAttribute("src", "https://images.pexels.com/photos/18012386/pexels-photo-18012386.jpeg?auto=compress&cs=tinysrgb&w=800");
    text.innerHTML = "Do you know how to handle a sword/saber?";
    buttonOne.innerHTML = "I'm a skilled warrior";
    buttonTwo.innerHTML = "I can only cut tomatoes";
    loading.innerHTML = "Generating your universe... answer the question below for now";

    buttonOne.addEventListener("click", warrior);
    buttonTwo.addEventListener("click", nowarrior);
}

function nowarrior(){
    image.setAttribute("src", "images/revolver.jpg");
    text.innerHTML = "And how are you with the accuracy of old revolvers?";
    buttonOne.innerHTML = "Just give me the bullets and I'll show you!";
    buttonTwo.innerHTML = "I'm afraid the rebound won't work in my favor."; 
    loading.innerHTML = "Generating your universe... answer the question below for now";
    buttonOne.addEventListener("click", peaky); 
    buttonTwo.addEventListener("click", noshooting);
}

function noshooting(){
    image.setAttribute("src", "images/royal.jpg");
    text.innerHTML = "Royal gossip, racy meetings and balls? Can you live in such a reality?";
    buttonOne.innerHTML = "I've always dreamed of showing my curtsy"; 
    buttonTwo.innerHTML = "It's not that at all…"; 
    loading.innerHTML = "Generating your universe... answer the question below for now";
    buttonOne.addEventListener("click", kingdom);
    buttonTwo.addEventListener("click", mummy);
}


function kingdom(){
    image.setAttribute("src", "images/kingdom.jpg");
    text.innerHTML = "You are a mysterious artist with a dangerous secret, arrive in London and involve the Bridgertons in a dangerous intrigue, where her paintings become the key to revealing state secrets.";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
    loading.innerHTML = 'Congratulations! 🏰 You have been moved to the American streaming historical drama series "Bridgertons".';
}


function mummy(){
    image.setAttribute("src", "images/mummy.jpg");
    text.innerHTML = "You are an Archaeologist and find an amulet that awakens a new mummy that threatens the world. Will you be able to team up with the heroes of past films to stop her?";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
    loading.innerHTML = 'Congratulations! 🏜️ You have been moved to the American action adventure film "The Mummy".';
}

function warrior(){
    image.setAttribute("src", "images/drog.jpg");
    text.innerHTML = "Mystical creatures have invaded the world. The living dead, dragons, can you stand up for yourself?";
    buttonOne.innerHTML = "I'll make soup out of them!"; 
    buttonTwo.innerHTML = "I'm afraid to end up in the soup!"; 
    loading.innerHTML = "Generating your universe... answer the question below for now";
    buttonOne.addEventListener("click", soup);
    buttonTwo.addEventListener("click", cuttomato);
}


function cuttomato(){
    image.setAttribute("src", "images/revolver.jpg");
    text.innerHTML = "And how are you with the accuracy of old revolvers?";
    buttonOne.innerHTML = "Just give me the bullets and I'll show you!";
    buttonTwo.innerHTML = "I'm afraid the rebound won't work in my favor."; 
    loading.innerHTML = "Generating your universe... answer the question below for now";
    buttonOne.addEventListener("click", revolver); 
    buttonTwo.addEventListener("click", viking);
}


function viking(){
    image.setAttribute("src", "images/viking.jpg");
    text.innerHTML = "You must join Ragnar Lodbrok, help him find a new place to raid and prevent betrayal in his team.";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
    loading.innerHTML = 'Congratulations! 🪓 You have been moved to the Canadian-Irish feature series "Vikings".';
}

function revolver(){
    image.setAttribute("src", "https://images.pexels.com/photos/1054391/pexels-photo-1054391.jpeg?auto=compress&cs=tinysrgb&w=800");
    text.innerHTML = "Are you seasick on the waves?";
    buttonOne.innerHTML = "I'm a real pirate, I don't give a fuck"; 
    buttonTwo.innerHTML = "I'd rather stay on land…"; 
    loading.innerHTML = "Generating your universe... answer the question below for now";
    buttonOne.style ="display:block";
    buttonTwo.style ="display:block";
    buttonOne.addEventListener("click", pirates);
    buttonTwo.addEventListener("click", peaky);
}

function peaky(){
    image.setAttribute("src", "images/peaky.jpg");
    text.innerHTML = "Your task is to infiltrate the Shelby gang, gain their trust and help Tommy prevent an attempt on his life, which is being prepared by an unknown enemy. But be careful: every step you take is monitored, and betrayal is punishable by death";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
    loading.innerHTML = 'Congratulations! 🪒 You have been moved to the British crime drama series "Peaky Blinders".';
}

//mission pirates
function pirates(){
    image.setAttribute("src", "images/pirate.jpg");
    text.innerHTML = `You are Elizabeth's younger brother, secretly going in search of the legendary "Key of Atlantis", which is able to control the seas. Which will you choose to help Jack Sparrow find the artifact or deliver it to the treacherous Brackett, who promises to free your family?`;
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
    loading.innerHTML = 'Congratulations! 🏴‍☠️ You have been moved to the American series of adventure films "Pirates of the Caribbean".';

}

function soup(){
    image.setAttribute("src", "images/ho_or_game.jpg");
    text.innerHTML = "To find yourself in a world where courage and strategy determine the future, or in a world where friendship and bravery lead to great discoveries?";
    buttonOne.innerHTML = "The first option sounds like a plan"; 
    buttonTwo.innerHTML = "The second option sounds like a plan"; 
    loading.innerHTML = "Generating your universe... answer the question below for now";
    buttonOne.addEventListener("click", gameofthrone);
    buttonTwo.addEventListener("click", hobbit);
}


function gameofthrone(){
    image.setAttribute("src", "images/khalisy.jpg");
    text.innerHTML = "You are a strategist and a mercenary helping House Targaryen.Your task is to find and destroy Daenerys Targaryen's conspirators in order to ensure her return and the restoration of the dynasty. This path is thorny, can you handle it?";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
    loading.innerHTML = 'Congratulations! ⚔️ You have been moved to the American fantasy drama television series "Game of Thrones".';
}


function hobbit(){
    image.setAttribute("src", "images/hobbit.jpg");
    text.innerHTML = "You are the older brother of Bilbo Baggins, now you have to go with him and 13 dwarves on a dangerous journey to the edge of the world to help the dwarves regain their home. Will you be able to fulfill your promise and return to the Bag End?";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
    loading.innerHTML = 'Congratulations! ⛰️ You have been moved to the American adventure film "The Hobbit".';
}


function thepresent(){
    image.setAttribute("src", "https://images.pexels.com/photos/7299592/pexels-photo-7299592.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load");
    text.innerHTML = "Are you familiar with firearms? Do you know how to handle it?";
    buttonOne.innerHTML = "I'm a natural shooter";
    buttonTwo.innerHTML = "I don't even know what a clip is.";
    loading.innerHTML = "Generating your universe... answer the question below for now";
    buttonOne.addEventListener("click", agent);
    buttonTwo.addEventListener("click", noweapon);
}


function agent(){
    image.setAttribute("src", "images/agent.jpg");
    text.innerHTML = "Secret intelligence services operate from the shadows. How do you like the prospect of becoming one of them?";
    buttonOne.innerHTML = "Yes, that's what the doctor ordered";
    buttonTwo.innerHTML = "Leave it to others"; 
    loading.innerHTML = "Generating your universe... answer the question below for now";
    buttonOne.addEventListener("click", bondjames);
    buttonTwo.addEventListener("click", evil);
}


function bondjames(){
    image.setAttribute("src", "images/bond.jpg");
    text.innerHTML = `You've become James Bond's new partner. Now half the planet is jealous of you. \n You have to save 7 major powers from destruction by terrorists led by a traitor to the British service. \n Can you handle it?`;
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
    loading.innerHTML = 'Congratulations! 💣 You have been moved to the British film "Agent 007"';
}

function evil(){
    image.setAttribute("src", "images/antagonist.jpg");
    text.innerHTML = "Are grandiose villainous plans to destroy world powers close to you? Would you be able to become the main antagonist?";
    buttonOne.innerHTML = "I'm a real evil, just give me a reason";
    buttonTwo.innerHTML = "It's a little too much…";
    loading.innerHTML = "Generating your universe... answer the question below for now";
    buttonOne.addEventListener("click", holmes);
    buttonTwo.addEventListener("click", supernatural);

}

function holmes(){
    image.setAttribute("src", "images/jim.jpg");
    text.innerHTML = "You became Jim Moriarty's partner. Your main task is to enslave the world, but can you outsmart the famous detective?";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
    loading.innerHTML = 'Congratulations! 🔎 You have been moved to the British TV series "Sherlock Holmes".';

}


function noweapon(){
    image.setAttribute("src", "images/hous.jpg");
    text.innerHTML = "Maybe you like a measured family life with its secrets and adventures?";
    buttonOne.innerHTML = "Boredom, switch over!";
    buttonTwo.innerHTML = "Yes, it's always more exciting than it seems!"; 
    loading.innerHTML = "Generating your universe... answer the question below for now";
    buttonOne.addEventListener("click", superhero);
    buttonTwo.addEventListener("click", houswives);
}


function houswives(){
    image.setAttribute("src", "images/housw.jpg");
    text.innerHTML = "You moved to Wisteria Lane and became the desperate housewives' new neighbor. Will you be able to make friends with them and play poker on Thursdays? Or will secrets and secrets become between you?";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
    loading.innerHTML = 'Congratulations! 🍎 You have been moved to the American TV series "Desperate Housewives".';
}

function superhero(){
    image.setAttribute("src", "images/magic.jpg");
    text.innerHTML = "A world where people have magic. Have you been able to use this skill for good purposes?";
    buttonOne.innerHTML = "It's too primitive.";
    buttonTwo.innerHTML = "God, this is my dream!"; 
    loading.innerHTML = "Generating your universe... answer the question below for now";
    buttonOne.addEventListener("click", supernatural);
    buttonTwo.addEventListener("click", potter);
}

function potter(){
    image.setAttribute("src", "images/potter.jpg");
    text.innerHTML = "You are the new magic teacher at Hogwarts. Will you be able to become a true friend to your students and protect the school from the great evil?";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
    loading.innerHTML = 'Congratulations! 🪄 You have been moved to the to the British fantasy film series "Harry Potter".';

}

function supernatural(){
    image.setAttribute("src", "images/vampire.jpg");
    text.innerHTML = "Representatives of evil spirits have flooded the planet, they are literally everywhere. Are you ready to join them?";
    buttonOne.innerHTML = "Such an alternative reality beckons me.";
    buttonTwo.innerHTML = "Is there something close to real life?"; 
    buttonOne.style ="display:block";
    buttonTwo.style ="display:block";
    loading.innerHTML = "Generating your universe... answer the question below for now";
    buttonOne.addEventListener("click", vampire);
    buttonTwo.addEventListener("click", doctor);
}


function vampire(){
    image.setAttribute("src", "images/salvatore.jpg");
    image.style = "width: 700px"
    text.innerHTML = "You have become the lost sister of the Salvatore brothers. You have impeccable genes.Your strength and ambitions flow like a river, your brothers will find you, but will you be able to trust them?";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
    loading.innerHTML = 'Congratulations! 🩸 You have been moved to the American TV series "The Vampire Diaries"';
}

function doctor(){
    image.setAttribute("src", "images/doctor.jpg");
    text.innerHTML = "You are a new intern at Princeton-Plainsboro Hospital. Will you be able to prove yourself in the medical field so that Dr. House will notice you? Try to save people's lives without harming your reputation…";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
    loading.innerHTML = 'Congratulations! 🩻 You have been moved to the American TV series "Dr. House".';

}
gsap.to(".writeTimeMachine", {
    text: "Time Machine",
    duration: 2,
    repeat: 0,
    repeatDelay: .7,
})

gsap.to(".image-container", { 
    duration: 6,
    repeat: 0,
    opacity: 1,
    ease: "power2.out"
});


    let buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            gsap.to("body", { backgroundColor: "#1D1616", duration: 2});
        });

        button.addEventListener("mouseleave", () => {
            gsap.to("body", { backgroundColor: "#7D0A0A", duration: 2 });
        });
    });




