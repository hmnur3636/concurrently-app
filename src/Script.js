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
  text: 'The rusty leaver creaks as you pull it, to your right the gateway swings wide, but already seems to be closing. What Do you Do?',
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
    text: 'You duck under the portcullis and the points of it poke you wanting to hurt you. For a second you think the dungeon might be trying to kill you, but that is silly magic does not exist and neither do dungeons that are alive. You walk out on the other side, your eyes adjusting in the light as the brightness overwhelms you. It feels smothering and you want to flee, but you get used to it as your eyes adjust. To your right a stairway leads up while a stairway going down is on the left. Which path will you choose?',
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
    text: '*Note Text Here*',
    image: 'https://drive.google.com/uc?export=view&id=1QqH_5y6-4wuno5pyfbvC5glhuzHS6iVz', 
    choices: [
      { text: 'Go left', nextId: 25 },
      { text: 'Go Right', nextId: 12 },
      { text: 'Let Me Read This Note One More Time', nextId: 11 },
  ]
  },

  ];

