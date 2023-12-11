export const scenarios = [
    {
      id: 0,
      text: 'You wake up at the gates of a dungeon. The last thing you remember is that you were sailing when suddenly a dangerous storm occurred. The storm tore apart your ship and everything went black. Looking around the dungeon entrance you see a note left on the floor in front of you. You see some chains, bones, and weapons on the walls. There is also a door that is open and light floods out from it. Going through the door seems to be your only way forward as going out leads to the beach you arrived on. What do you want to do?',
      image: 'https://drive.google.com/uc?export=view&id=1bDdoLrKDvqQ8q3-mUG8ke1UQgH88D0FO', 
      choices: [
        { text: 'Read Note', nextId: 1 },
        { text: 'Investigate the Chains', nextId: 2 },
        { text: 'Investigate the Bones', nextId: 3 },
        { text: 'Leave The Room', nextId: 4 }
      ]
    },

    {
      id: 1,
      text: 'You pick up the note off of the floor. Despite it seeming to have been in the dungeon for a while the paper is still crisp and fresh and ink still glistens in the light. Something feels off not just about the note being new, but also the dungeon itself. You feel a sense of dread but you decide to see what the note has to say anyways. The note reads “If it is freedom you seek then heed well my warnings. The left is filled with peril and it will fail you. Follow the right in the light and you will not fail. Stay on the right with the light and do not follow the darkness to the left.”',
      image: 'https://drive.google.com/uc?export=view&id=1bDdoLrKDvqQ8q3-mUG8ke1UQgH88D0FO', 
      choices: [
        { text: 'Investigate the Chains', nextId: 2 },
        { text: 'Investigate the Bones', nextId: 3 },
        { text: 'Leave The Room', nextId: 4 }
  ]
 },

 {
  id: 2,
  text: 'The chains are old and worn. A large iron ball attached so that the imprisioned will not be light on thier feet, these shackles have definitely seen use.',
  image: 'https://drive.google.com/uc?export=view&id=1bDdoLrKDvqQ8q3-mUG8ke1UQgH88D0FO', 
  choices: [
    { text: 'Read Note', nextId: 1 },
    { text: 'Investigate the Bones', nextId: 3 },
    { text: 'Leave The Room', nextId: 4 }
]
},

{
  id: 3,
  text: 'The bones are old and brittle, you are clearly not the first to be here. A large portion of the skull is caved in, another prisoner with a careless foot? Or the cause of Death?',
  image: 'https://drive.google.com/uc?export=view&id=1bDdoLrKDvqQ8q3-mUG8ke1UQgH88D0FO', 
  choices: [
    { text: 'Read Note', nextId: 1 },
    { text: 'Investigate the Chains', nextId: 2 },
    { text: 'Leave The Room', nextId: 4 }
]
},

{
  id: 4,
  text: 'You arrive in a brightly lit room. The high wall in front of you is decorated only by a single window. A torch is hung on the wall still burning bright. You could take that with you and it would help you follow the path should it go dark. You see an old chest. The lock is so worn you can easily open it. It might be worth looking at what is inside. Chests always have good loot after all. You see a lever that you could pull, but it might set off a trap, or it could open your path to freedom.',
  image: 'https://drive.google.com/uc?export=view&id=1flTub35yMfrU7nFv20LZOsp17tFubXgd', 
  choices: [
    { text: 'Open The Chest', nextId: 8 },
    { text: 'Pull the Lever', nextId: 9 },
    { text: 'Grab The Torch', nextId: 7 },
    { text: 'What Does This Note Say?', nextId: 6 },
    { text: 'I Think This Is The Wrong Way, Let Me Head Back', nextId: 5 },
]
},

{
  id: 5,
  text: 'Something Is not right, You have to be missing something, you turn back.',
  image: 'https://drive.google.com/uc?export=view&id=1bDdoLrKDvqQ8q3-mUG8ke1UQgH88D0FO', 
  choices: [
    { text: 'Read Note', nextId: 1 },
    { text: 'Investigate the Chains', nextId: 2 },
    { text: 'Investigate the Bones', nextId: 3 },
    { text: 'Leave The Room', nextId: 4 }
  ]
},

{
  id: 6,
  text: 'You pull the note from its hiding place behind the rock and read it "I sure hope you are not reading this note. That would be awkward."',
  image: 'https://drive.google.com/uc?export=view&id=1flTub35yMfrU7nFv20LZOsp17tFubXgd', 
  choices: [
    { text: 'Open The Chest', nextId: 8 },
    { text: 'Pull the Lever', nextId: 9 },
    { text: 'Grab The Torch', nextId: 7 },
    { text: 'I Think This Is The Wrong Way, Let Me Head Back', nextId: 5 },
]
},

{
  id: 7,
  text: 'You reach up to grab the torch, the flame flickers and dance and burns your hand, almost like the torch is trying to stop you from taking it. You decide it is not worth it',
  image: 'https://drive.google.com/uc?export=view&id=1flTub35yMfrU7nFv20LZOsp17tFubXgd', 
  choices: [
    { text: 'Open The Chest', nextId: 8 },
    { text: 'Pull the Lever', nextId: 9 },
    { text: 'What Does This Note Say?', nextId: 6 },
    { text: 'I Think This Is The Wrong Way, Let Me Head Back', nextId: 5 },
]
},

{
id: 8,
text: 'You slowly lift the lid, a familiar tune playing in your mind. But as you peer inside you see there is only a peice of paper, It reads *Inventory System Missing.* You close the chest wondering what the heck that was.',
image: 'https://drive.google.com/uc?export=view&id=1flTub35yMfrU7nFv20LZOsp17tFubXgd', 
choices: [
  { text: 'Pull The Lever', nextId: 9 },
  { text: 'Grab The Torch', nextId: 7 },
  { text: 'What Does This Note Say?', nextId: 6 },
  { text: 'I Think This Is The Wrong Way, Let Me Head Back', nextId: 5 },
]
},


{
  id: 9,
  text: 'The rusty leaver creaks as you pull it, to your right the lifts open, but already seems to be closing. What Do you Do?',
  image: 'https://drive.google.com/uc?export=view&id=1flTub35yMfrU7nFv20LZOsp17tFubXgd', 
  choices: [
    { text: 'Open The Chest', nextId: 8 },
    { text: 'Through The Gateway', nextId: 10 },
    { text: 'Grab The Torch', nextId: 7 },
    { text: 'What Does This Note Say?', nextId: 6 },
    { text: 'I Think This Is The Wrong Way, Let Me Head Back', nextId: 5 },
  ]
  },

  {
    id: 10,
    text: 'You duck under the portcullis and its points dig into your skin, as if the dungeon itself wants to hurt you. For a second you think the dungeon might be trying to kill you, but that is silly –  magic does not exist and neither do dungeons that are alive. You walk out on the other side, your eyes adjusting in the light as the brightness overwhelms you. It feels smothering and you want to flee, but you get used to it as your eyes adjust. To your right a stairway leads up, while a stairway going down is on the left. You also see a note just like in the first room and it is brand new even though this dungeon is very old. Which path will you choose?',
    image: 'https://drive.google.com/uc?export=view&id=1qUZv3VSWv0SzrgTJtDGCoDo7BnVYG4qL', 
    choices: [
      { text: 'Go left', nextId: 21 },
      { text: 'Go Right', nextId: 12 },
      { text: 'Let me read This Note Real Quick', nextId: 11 },
  ]
  },

  {
    id: 11,
    text: 'Ok you might not have read the first note, but if you did, great! I hope you liked my poem, and if you did not fully get it, just go left. I am a previous explorer who went right and got trapped in the dungeon for eternity. Trust me, you want to go left, not right. I want to help you, but you have to heed my advice. Do not make the same mistake I did so you can be free. I want to help you get out, and reading my notes will be your key to getting out. I hope you will trust me, but it is up to you.',
    image: 'https://drive.google.com/uc?export=view&id=1qUZv3VSWv0SzrgTJtDGCoDo7BnVYG4qL', 
    choices: [
      { text: 'Go left', nextId: 21 },
      { text: 'Go Right', nextId: 12 },

  ]
  },

  {
    id: 12,
    text: 'You walk down the right path, and the floor beneath you gets steeper. This must be the way out, you think hopefully, but you can not be entirely sure. You arrive in a small room with some bones of animals from outside. You see a small bone on the ground that is decently sharp. It could be a good weapon or lock pick, you think. It might be a useful thing to have. You see a shiny stone on the ground that could make a good tool for distraction later, you think. On the wall, made up of bare cobblestones, you notice a bright picture frame with another note inside it. You could read the note, as it is strange. The note gleams in the light with new fresh paper and the black ink glistens with the note. Reading the note might be a good idea, but you just do not feel like that is a good option. What will you do?',
    image: 'https://drive.google.com/uc?export=view&id=1QqH_5y6-4wuno5pyfbvC5glhuzHS6iVz', 
    choices: [
      { text: 'Keep Going', nextId: 16 },
      { text: 'Grab the Bone', nextId: 15 },
      { text: 'Check the Note in the Picture Frame', nextId: 13 },
  ]
  },

  {
    id: 13,
    text: 'Inside the strangely intact picture frame you make out the writing on the note."Why did you go down the right path? After all I told you, really? You probably never read the other notes did you? Well it is fine; you are reading this, so I still have a chance to show you the right way. I am an explorer who got trapped in here by going down the path you are on right now. I could not turn left once I went down this path, so please don’t make my mistake. I impart this knowledge to you, intrepid adventurer, so you may be free and get to see the sun and sky again."',
    image: 'https://drive.google.com/uc?export=view&id=1QqH_5y6-4wuno5pyfbvC5glhuzHS6iVz', 
    choices: [
      { text: 'Keep Going', nextId: 16 },
      { text: 'Grab the Bone', nextId: 15 },
      { text: 'Listen To The Note And Head Back', nextId: 14 },
  ]
  },

  {
    id: 14,
    text: 'You decide to listen to the note, after all, whoever left it probably knows better than you.',
    image: 'https://drive.google.com/uc?export=view&id=1qUZv3VSWv0SzrgTJtDGCoDo7BnVYG4qL', 
    choices: [
      { text: 'Go left', nextId: 21 },
      { text: 'Go Right', nextId: 12 },
      { text: 'Let me read This Note Real Quick', nextId: 11 },
  ]
  },

  {
    id: 15,
    text: 'You reach down to grab the sharp bone. As you do your hand phases through the object. You decide that its probably a hallucination from dehydration',
    image: 'https://drive.google.com/uc?export=view&id=1QqH_5y6-4wuno5pyfbvC5glhuzHS6iVz', 
    choices: [
      { text: 'Keep Going', nextId: 16 },
      { text: 'Let me read This Note Real Quick', nextId: 13 },
  ]
  },

  {
    id: 16,
    text: 'You follow along the path climbing higher and higher. It feels like you are getting out of the dungeon but it could still be a trap. You come to a bare room with some rubble on the ground. There is an old broken chain on the floor, but you might be able to use it. You see another note on the wall just like in the room before. You see a skull on the ground, probably from another adventurer who did not make it. Some bones are on top of the framed note which is still new and fresh just like all the other ones. You could read it, but you feel like you are close to escaping. The note could contain some valuable information though. What will you do?',
    image: 'https://drive.google.com/uc?export=view&id=1Nh59SrU7T9KT5OkjCeseBRD6Ld-d_ael', 
    choices: [
      { text: 'Check the Note', nextId: 17 },
      { text: 'Keep On Climbing', nextId: 19 },
      { text: 'Go Back', nextId: 18}
  ]
  },

  {
    id: 17,
    text: 'The note is scrawled in messy handwriting, almost like it was written in a hurry. "You are way too close now. Your doom lies before you, in fact, in the next room. You should have gone left. That was your only way out of this place. You made the same mistake I did and you will sadly soon be joining me. I am only telling you this for your benefit so you can escape too. Please heed my warnings, but if you insist on going this way I will not stop you. I will remind you you have chosen poorly, and I can not express my disappointment. Why did you not listen to me? I was trying to help you, to guide you, to help you succeed where I failed. Fine, I guess it does not matter as you have free will, but you should have followed my advice. CERTAIN DOOM AWAITS YOU. DO NOT CONTINUE DOWN THIS PATH!!! "',
    image: 'https://drive.google.com/uc?export=view&id=1Nh59SrU7T9KT5OkjCeseBRD6Ld-d_ael', 
    choices: [
      { text: 'Keep On Climbing', nextId: 19 },
      { text: ' Listen To The Note, Go Back', nextId: 18}
  ]
  },

  {
    id: 18,
    text: 'You finally listen to the notes, you turn around and head back where you came from.',
    image: 'https://drive.google.com/uc?export=view&id=1QqH_5y6-4wuno5pyfbvC5glhuzHS6iVz', 
    choices: [
      { text: 'Keep On Climbing', nextId: 16 },
      { text: 'Keep Going Back', nextId: 14}
  ]
  },

  {
    id: 19,
    text: 'You walk into the hallway of the next room. A hall awaits you. You climb up a steep slope for what feels like eternity and then you see cool blue light shining through the top of the hole. Just a little bit more and you are there! But a large iron gate lies between you and what looks to be freedom. A lever sits next to the gate and a note rests inside of a picture frame that seems to have been smashed in a rage.',
    image: 'https://drive.google.com/uc?export=view&id=168VSr2TVDqZKQYRfYUlk87SLGgdLohBx', 
    choices: [
      { text: 'Pull The Lever', nextId: 32},
      { text: 'Read The Note', nextId: 33},
      { text: 'Go Back', nextId: 18}
  ]
  },

  {
    id: 20,
    text: 'Thank you For Playing Our Game! Hopefully You Did Better Than We Did On Our Grade On This Project.',
    image: 'https://drive.google.com/uc?export=view&id=1WcguS0Eddd1cuQZo0YvjNOcYKxRyaSHu', 
    choices: [
      { text: 'Play Again?', nextId: 0}
  ]
  },

  {
    id: 21,
    text: 'You enter a well-lit dining hall with a nice roaring fire in the hearth. It is an ornate room with a high ceiling and a glittering chandelier. The chairs are rich dark mahogany and the table is a dark spruce rimmed with gold. The plates and glasses are a sparkling crystal. A feast with all kinds of delectable foods is on the table, simmering and steaming in the light. Meats, vegetables, and every kind of food is there, a pure delight for the eyes. It all looks very appetizing, and eating might be a good idea to strengthen yourself for the journey. You see an exit from the room that you could use to escape, but another thing piques your interest. You see a bookshelf curiously filled with many copies of the same purple book. You pull one off the shelf and you read the cover in bright gold embossed letters: “The cursed isle and dungeon.” It might be prudent to read more, or you could just go on and not care about the book. What will you do?',
    image: 'https://drive.google.com/uc?export=view&id=1DISfFNpxTbi2ApknU9Qr8jXzWb_COchh', /*ROOM 7 HERE*/
    choices: [
      { text: 'Eat The Food', nextId: 22 },
      { text: 'Read More', nextId: 23 },
      { text: 'Move On To The Next Room', nextId: 24 },
  ]
  },

  {
    id: 22,
    text: 'You take a piece of food off the table, and take a bite. As it enters your mouth the pristine scruptious looking food turns into dust in your mouth, leaving you with a bad taste in your mouth and an empty stomach.',
    image: 'https://drive.google.com/uc?export=view&id=1DISfFNpxTbi2ApknU9Qr8jXzWb_COchh',
    choices: [
      { text: 'Read More', nextId: 23 },
      { text: 'Move On To The Next Room', nextId: 24 },
  ]
  },

  {
    id: 23,
    text: 'You crack open one of the books on the shelf and flip through it. On every single page it reads, "Bro its a curse, that is all you need to know. ',
    image: 'https://drive.google.com/uc?export=view&id=1DISfFNpxTbi2ApknU9Qr8jXzWb_COchh', /*ROOM 7 HERE*/
    choices: [
      { text: 'Eat The food', nextId: 22 },
      { text: 'Move On To The Next Room', nextId: 24 },
  ]
  },

  {
    id: 24,
    text: 'The hall dips down and you find yourself in a bare and dark room. The ceiling is low and the walls compress the space making you feel claustrophobic. The walls are windowless and the only light is behind you. Your shadow looms large in the light spilling from the door. An decrepit old spear is leaning up against the wall, barely holding onto its own existence. A small table with a note similar to the first is on the right. The note is also as fresh as the very first one at the start of the dungeon, but the dungeon is much older than that, or so it appears. Lying next to the note is a tattered and worn thread that might be useful to you. You also see the same purple book but it is filled with many more pages that might give you more backstory. What do you do?',
    image: 'https://drive.google.com/uc?export=view&id=1GLF4QuxAp2Ayl9iKINJKrsgHMwXrGOQ-', /*ROOM 8 HERE*/
    choices: [
      { text: 'Read The Note', nextId: 25 },
      { text: 'Read The Book', nextId: 26 },
      { text: 'Move On To The Next Room', nextId: 28 },
      { text: 'Go Back To the Last Room.', nextId: 27 },
  ]
  },

  {
    id: 25,
    text: 'Good, you actually followed my advice. You would be surprised at how many people do not even read these things. Anyway, I will be your personal guide to get you out of here. It just feels so nice to have someone finally listen to me. No one ever does; all they do is pick a path. No one ever bothers to read these notes or follow my guidance of just going left. Speaking of that: that is what I want you to do, just keep going forward. An exit is very close to you, just hang on a little longer and you will be out in no time, I promise.',
    image: 'https://drive.google.com/uc?export=view&id=1GLF4QuxAp2Ayl9iKINJKrsgHMwXrGOQ-', /*ROOM 8 HERE*/
    choices: [
      { text: 'Read The Book', nextId: 26 },
      { text: 'Move On To The Next Room', nextId: 28 },
      { text: 'Go Back To the Last Room.', nextId: 27 },
  ]
  },

  {
    id: 26,
    text: 'You open the book and you see a table of contents. It reads “Part 1: the curse of the island, Part two: an adventures guide to the dungeon, Part three: The voice of the dungeon, and so on.” The book goes on and stops at part 100:, but you see a small TLDR chapter at the bottom. You might have missed it had you not been paying attention and you decide to read it rather than the 100 parts. It reads “The dungeon is cursed and the voice of the dungeon wants it that way. It has paced the answers on this path so you must fail to attain the truth. The only way to stop this curse is to sacrifice yourself and stay in this dungeon. If you do, you will be trapped, but no one will have to suffer from this. The choice is yours, friend. I only want to help you.” ',
    image: 'https://drive.google.com/uc?export=view&id=1GLF4QuxAp2Ayl9iKINJKrsgHMwXrGOQ-', /*ROOM 8 HERE*/
    choices: [
      { text: 'Read The Note', nextId: 25 },
      { text: 'Move On To The Next Room', nextId: 28 },
      { text: 'Go Back To the Last Room.', nextId: 27 },
  ]
  },

  {
    id: 27,
    text: 'You return back to the last room, the food still gleams on the table, but the doorway back to the rest of the dungeon is block by the heavy iron door. ',
    image: 'https://drive.google.com/uc?export=view&id=1DISfFNpxTbi2ApknU9Qr8jXzWb_COchh', /*ROOM 7 HERE*/
    choices: [
      { text: 'Eat The Food', nextId: 22 },
      { text: 'Read More', nextId: 23 },
      { text: 'Move On To The Next Room', nextId: 24 },
  ]
  },

  {
    id: 28,
    text: 'You walk into a very dark and dim room. The only light comes from a red gem gleaming in the center of the room. The room has cobblestone walls with strange runes carved into them. Looking down you see a ritual circle that probably involves the red crystal. You could touch it and take it. You are the only one in the dungeon and perhaps it will give you the power to escape. You see the same purple book lying open to a page filled with instructions to conduct the ritual. You could do it if you want and see what happens, but everything feels wrong. No dungeon you have seen or read about has this kind of creepy crystal and ritual room in it. Beside the book there is another note exactly like the prior two. You could read it and see what it tells you to do. You could also walk around all of it and proceed on to the next room. What will you choose now?',
    image: 'https://drive.google.com/uc?export=view&id=1eVvBJRI6VhAnGqAhfyr70n_gUhPEY0bT', /*ROOM 9 HERE*/
    choices: [
      { text: 'Read the Note', nextId: 29 },
      { text: 'Move on', nextId: 31 },
  ]
  },

  {
    id: 29,
    text: 'Wow, you really fell for this? Or were you planning to sacrifice yourself? Just how many times have you been through here? Oh well, it does not matter anyway as you are trapped now. Go on ahead into the next room. You will really know that you are trapped then. At least I have someone else to read these things. I hope you enjoy this curse. I haven’t had a companion in a long time. Maybe you can help me make these more convincing for the next person so they can be trapped with us. That sounds great and you don’t have much of a choice aside from wandering the dungeon so you really should help me. Anyway, enjoy being stuck here, have fun!',
    image: 'https://drive.google.com/uc?export=view&id=1eVvBJRI6VhAnGqAhfyr70n_gUhPEY0bT', /*ROOM 9 HERE*/
    choices: [
      { text: 'Touch The Crystal', nextId: 30 },
      { text: 'Move on', nextId: 31 },
  ]
  },

  {
    id: 30,
    text: 'You reject the note, it can not be true, you are not stuck here. You will take the power of the crystal and escape. Your finger touches the bright crystal and a red light fills your vision. A small pile of soot falls to the ground, all that is left of you. The End.',
    image: 'https://drive.google.com/uc?export=view&id=1F_nsExqTY_j8C27c1J_aM2O1abXnQh9n', /*ROOM 10 HERE*/
    choices: [
      { text: 'Continue', nextId: 20 },
  ]
  },

  {
    id: 31,
    text: 'You are now trapped in the dungeon. This room is a simple dead end. It is so unremarkable that it feels like it should be forgotten. It is so boring your mind is about to explode with boredom. The only way is back, but you can see through a small window that the right path has been blocked off. You will never get out. There is no escape from this. Your final days will be spent rotting in the dungeon until you become one of the skeletons lining the walls in the prior rooms. Things could have been different though. What if you had chosen a different path, perhaps picked up a different item in one of the rooms? You might have had a chance or you might have always been doomed to fail. We all only get one chance, after all, no one can restart the game, or can you?',
    image: 'https://drive.google.com/uc?export=view&id=1F_nsExqTY_j8C27c1J_aM2O1abXnQh9n', /*ROOM 10 HERE*/
    choices: [
      { text: 'Continue', nextId: 20 },
  ]
  },

  {
    id: 32,
    text: ' The large iron gate creaks open, the metal screeching from lack of use. The opening lays in front of you, and you hesitate. This is your last chance, should you listen to the notes? Should you try to find out what is going on here? You take a breath and make your choice.',
    image: 'https://drive.google.com/uc?export=view&id=168VSr2TVDqZKQYRfYUlk87SLGgdLohBx', 
    choices: [
      { text: 'Leave The Dungeon', nextId: 34},
      { text: 'Turn Around', nextId: 18}
  ]
  },

  {
    id: 33,
    text: '"Fine, I guess it does not matter as you have free will, but you should have followed my advice. CERTAIN DOOM AWAITS YOU. DO NOT CONTINUE DOWN THIS PATH!!! "',
    image: 'https://drive.google.com/uc?export=view&id=168VSr2TVDqZKQYRfYUlk87SLGgdLohBx', 
    choices: [
      { text: 'Pull The Lever', nextId: 32},
      { text: 'Go Back', nextId: 18}
  ]
  },

  {
    id: 34,
    text: 'You made it out! The large iron gate slams shut behind you, sealing the dungeon and everything inside. You see a book below you and you decide to read it. It tells you that the dungeon is cursed and it will trap anyone who sails too close to it. The only way to subdue the curse is to stay in the dungeon and sacrifice yourself. That does not matter to you, as you are glad to feel the fresh air. ',
    image: 'https://drive.google.com/uc?export=view&id=1W_ZbQLoFkaVYdz_GWyrvoUnHWuSgpwWW', 
    choices: [
      { text: 'Continue', nextId: 35},
  ]
  },

  {
    id: 35,
    text: 'You see your wrecked ship scattered across the shore. There is enough that you could repair it with time and eventually sail back home. A few days later you sail away on your repaired boat and make it home. The End.',
    image: 'https://drive.google.com/uc?export=view&id=1HRHlyYGa2BscYcs_XXHInSETnsPTrHtC', 
    choices: [
      { text: 'Continue', nextId: 20},
  ]
  },

  ];

