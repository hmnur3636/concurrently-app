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
        { text: 'Read Note Again', nextId: 1 },
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
    { text: 'Investigate the Chains', nextId: 2 },
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
    { text: 'Investigate the Bones', nextId: 3 },
    { text: 'Leave The Room', nextId: 4 }
]
},

{
  id: 4,
  text: 'You arrive in a brightly lit room. The high wall in front of you is decorated only by a single window. A torch is hung on the wall still burning bright. You could take that with you and it would help you follow the path should it go dark. You see an old chest the lock is so warn you can easily open it. It might be worth looking at what is inside. Chests always have good loot after all. You see a lever that you could pull, but it might set off a trap or it could open your path to freedom. ',
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
  text: '*NOTE TEXT HERE*',
  image: 'https://drive.google.com/uc?export=view&id=1flTub35yMfrU7nFv20LZOsp17tFubXgd', 
  choices: [
    { text: 'Open The Chest', nextId: 8 },
    { text: 'Pull the Lever', nextId: 9 },
    { text: 'Grab The Torch', nextId: 7 },
    { text: 'What Does This Note Say Again?', nextId: 6 },
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
    { text: 'Grab At The Torch Again', nextId: 7 },
    { text: 'What Does This Note Say?', nextId: 6 },
    { text: 'I Think This Is The Wrong Way, Let Me Head Back', nextId: 5 },
]
},

{
id: 8,
text: 'You slowly lift the lid, a familiar tune playing in your mind. But as you peer inside you see there is only a peice of paper, It reads *Inventory System Missing.* You close the chest wondering what the heck that was.',
image: 'https://drive.google.com/uc?export=view&id=1flTub35yMfrU7nFv20LZOsp17tFubXgd', 
choices: [
  { text: 'Open The Chest Again', nextId: 8 },
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
    text: 'You duck under the portcullis and the points of it poke you wanting to hurt you. For a second you think the dungeon might be trying to kill you, but that is silly magic does not exist and neither do dungeons that are alive. You walk out on the other side as the portcullis shuts behind you, your eyes adjusting in the light as the brightness overwhelms you. It feels smothering and you want to flee, but you get used to it as your eyes adjust. To your right a stairway leads up while a stairway going down is on the left. Which path will you choose?',
    image: 'https://drive.google.com/uc?export=view&id=1qUZv3VSWv0SzrgTJtDGCoDo7BnVYG4qL', 
    choices: [
      { text: 'Go left', nextId: 25 },
      { text: 'Go Right', nextId: 12 },
      { text: 'Let me read This Note Real Quick', nextId: 11 },
  ]
  },

  {
    id: 11,
    text: '*Note Text Here*',
    image: 'https://drive.google.com/uc?export=view&id=1qUZv3VSWv0SzrgTJtDGCoDo7BnVYG4qL', 
    choices: [
      { text: 'Go left', nextId: 25 },
      { text: 'Go Right', nextId: 12 },
      { text: 'Let Me Read This Note One More Time', nextId: 11 },
  ]
  },

  {
    id: 12,
    text: 'You walk down the right path and the floor beneath you gets steeper. This must be the way out you think hopefully, but you cant be entirely sure. You arrive in a small room with some bones of animals from outside. You see a small bone on the ground that is decently sharp. It could be a good weapon or lock pick you think, might be a useful thing to have. You see a shiny stone on the ground that could make a good tool for distraction later you think. On the wall just bare cobblestones you notice a bright picture frame with another note inside it. You could read the note as it is strange. The note gleams in the light with new fresh paper and the black ink glistens with the note. Reading the note might be a good idea, but you just don’t feel like that is a good option. What will you do?',
    image: 'https://drive.google.com/uc?export=view&id=1QqH_5y6-4wuno5pyfbvC5glhuzHS6iVz', 
    choices: [
      { text: 'Keep Going', nextId: 16 },
      { text: 'Grab the Bone', nextId: 15 },
      { text: 'Check the Note in the Picture Frame', nextId: 13 },
  ]
  },

  {
    id: 13,
    text: 'Inside the strangely intact picture frame you make out the writing on the note."Why did you go down the right path? After all I told you really! You probably never read the other notes did you? Well it is fine you are reading this so I still have a chance to show you the right way. I am an explorer who got trapped in here by going down the path you are on right now. I could not turn left once I went down this path, so please don’t make my mistake. I impart this knowledge to you, intrepid adventurer, so you may be free and get to see the sun and sky again."',
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
      { text: 'Go left', nextId: 25 },
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
    text: 'You follow along the path climbing higher and higher. It feels like you are getting out of the dungeon but it could still be a trap. You come to a bare room with some rubble on the ground. An old chain on the floor broken, but you might be able to use it. You see another note on the wall just like in the room before. You see a skull on the ground probably from another adventure who did not make it. Some bones are on top of the framed note which is still new and fresh just like all the other ones. You could read it, but you feel like you are close to escaping. The note could contain some valuable information though. What will you do?',
    image: 'https://drive.google.com/uc?export=view&id=1Nh59SrU7T9KT5OkjCeseBRD6Ld-d_ael', 
    choices: [
      { text: 'Check the Note', nextId: 17 },
      { text: 'Keep On Climbing', nextId: 19 },
      { text: 'Go Back', nextId: 18}
  ]
  },

  {
    id: 17,
    text: 'The note is scrawled in messy handwriting, almost like it was written in a hurry. "You are way too close now. Your doom lies before you in fact in the next room. You should have gone left. That was your only way out of this place. You made the same mistake I did and you will sadly soon be joining me. I am only telling you this for your benefit so you can escape too. Please head my warnings but if you insist on going this way I will not stop you. I will remind you, you have chose poorly and I can not express my disappointment. Why did you not listen to me? I was trying to help you, to guide you, to help you succeed where I failed. Fine I guess it does not matter as you have free will, but you should have followed my advice. CERTAIN DOOM AWAITS YOU. DO NOT CONTINUE DOWN THIS PATH!!! "',
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
    text: 'You walk into the hallway of the next room. A hall awaits you. You climb up a steep slope for what feels like eternity and then you see cool blue light shining through the top of the hole. Just a little bit more and you are there! You made it out! You see a book below you and you decide to read it. It tells you that the dungeon is cursed and it will trap anyone who sails too close to it. The only way to subdue the curse is to stay in the duenon and sacrifice yourself. That does not matter to you as you are glad to feel the fresh air. You see your wrecked ship scattered across the shore. There is enough that you could repair it with time and eventually sail back home. A few days later you sail away on your repaired boat and make it home. The End. ',
    image: 'https://drive.google.com/uc?export=view&id=1C8kuFy1OEiXIxCfWc3xoNYTM-ZzE2aOD', 
    choices: [
      { text: 'Continue', nextId: 20}
  ]
  },

  {
    id: 20,
    text: 'Thank you For Playing Our Game! Hopefully You Did Better Than We Did On Our Grade On This Project.',
    image: 'https://drive.google.com/uc?export=view&id=13TKTA7XXmHDSG6B7J5Rwy7_Y_oc4Kmwx', 
    choices: [
      { text: 'Play Again?', nextId: 0}
  ]
  },

  ];

