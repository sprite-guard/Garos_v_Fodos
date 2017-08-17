// test tracery here before deploying
// https://npm.runkit.com/tracery-grammar
// deploys to
// http://cheapbotsdonequick.com/source/garos_v_fodos

// test lengths
// .............................................
// Can our hero survive the onslaught?
// ......................................................................
// I am going to defeat you like the worthless weakling that you are!

// NB move names are too bland
// NB only named moves should crush

var tracery = require('tracery-grammar');

var grammar = tracery.createGrammar(
// only this bit of JSON gets pushed to CBDQ
{
    "test": [
        "<p>#[insult_type:#insultType#]insultRiposte#</p><p>#silence1#, #silence2#.</p><p>#fodosPowerUp#</p><p>#garosPowerUp#</p><p>#fodosAttack#</p><p>#garosUnscathed#</p><p>#[moveUsed:#fodosMove#]fodosAttacksGaros#</p><p>#garosAttack#</p><p>#garosCrush#</p><p>#garosRise#</p><p>#fodosRopes#</p>"
    ],

    "origin": [
        "#fodosPowerUp# #fodosAttack# #garosUnscathed#",
        "#garosAttack# #garosInsult#",
        "#[moveUsed:#fodosMove#]fodosAttacksGaros# #garosAttack#",
        "#fodosAttack# #garosUnscathed# #garosAttack#",
        "#[insult_type:#insultType#]insultRiposte#",
        "#fodosAttack# #garosCrush# #garosRise#",
        "#garosAttack# #fodosCrush# #fodosRopes#",
        "#silence1#, #silence2#.",
        "#fodosPowerUp# #fodosAttack# #garosCrush#",
        "#garosPowerUp# #fodosRopes# #garosAttack#"
    ],
    
    "fodosRopes": [
      "#ohNo#! Fodos #hasNoChance#.",
      "#ohNo#! Fodos #onTheRopes#.",
      "Fodos #hasNoChanceLong#!",
      "Fodos #onTheRopesLong#.",
      "#isThisTheEnd.capitalize#?"
    ],
    
    "isThisTheEnd": [
      "is this the end",
      "is this the end of Fodos",
      "is this the end of our hero",
      "can Fodos survive the onslaught",
      "can our hero survive the onslaught",
      "could this be the end"
    ],
    
    "ohNo": [
      "Oh no",
      "Oh dear",
      "Deary me",
      "Heaven help us"
    ],
    
    "hasNoChance": [
      "has no chance to win",
      "has no chance",
      "hasn't got a chance",
      "doesn't have a chance"
    ],
    
    "hasNoChanceLong": [
      "#hasNoChance#",
      "has no chance of winning",
      "doesn't have a prayer",
      "hasn't got a snowball's chance in hell"
    ],
    
    "onTheRopes": [
      "is on the ropes",
      "is really struggling",
      "is fading",
      "isn't strong enough",
      "can't keep up"
    ],
    
    "onTheRopesLong": [
      "#onTheRopes#",
      "can't keep up with him",
      "isn't strong enough to win",
      "might not be strong enough",
      "seems like he's outmatched"
    ],
    
    "fodosCrush": [
      "Fodos is #slammedInto# a #cliff#.",
      "Fodos #makesCraterIn# a #cliff#!",
      "Fodos is #slammedInto# #theGround#.",
      "Fodos #makesCraterIn# #theGround#!"
    ],
    
    "garosRise": [
      "Garos #rises# again!",
      "Somehow, Garos #isUntouched#.",
      "Garos #rises#, still #unhurt#."
    ],
    
    "isUntouched": [
      "is untouched",
      "is unharmed",
      "is uninjured",
      "shows no sign of harm",
      "is none the worse for wear"
    ],
    
    "rises": [
      "rises",
      "rises up",
      "gets up",
      "stands up"
    ],
    
    "garosCrush": [
      "Garos is #slammedInto# a #cliff#.",
      "Garos #makesCraterIn# a #cliff#!",
      "Garos is #slammedInto# #theGround#.",
      "Garos #makesCraterIn# #theGround#!"
    ],
    
    "theGround": [
      "the ground",
      "the dirt",
      "the earth",
      "the rocks"
    ],
    
    "makesCraterIn": [
      "makes a crater in",
      "leaves a crater in",
      "blasts a crater into",
      "slams into"
    ],
    
    "slammedInto": [
      "slammed into",
      "sent flying into",
      "crushed against"
    ],
    
    "cliff": [
      "cliff",
      "rock",
      "cliff face",
      "mountainside"
    ],
    
    "garosAttack": [
      "Garos #unleashes# #garosMove.a#!",
      "Garos #unleashes# his #garosMove#!",
      "#[player:Garos]attacks#!",
      "#[player:Garos]attacks#!",
      "#[player:Garos]attacks#!",
      "#[player:Garos]attacks#!",
      "#[player:Garos]attacks#!",
      "#[player:Garos]attacks#!"
    ],
    
    "garosMove": [
      "#energy# #wave#",
      "#energy# #kick#",
      "#wave# of #energy#"
    ],
    
    "wave": [
      "wave",
      "crush",
      "blast"
    ],
    
    "kick": [
      "kick",
      "roundhouse",
      "jumping kick"
    ],
    
    "fodosAttacksGaros": [
      "#fodosAttackStored# #garosUnscathedStored#"
    ],
    
    "garosUnscathed": [
      "Garos is #unhurt#.",
      "Garos is #unhurt# by the #attack#.",
      "The #attack# #hadNoEffectOn# Garos.",
      "The #attack# #wasFruitless#."
    ],
    
    "garosUnscathedStored": [
      "Garos is #unhurt# by the #moveUsed#.",
      "The #moveUsed# #hadNoEffectOn# Garos.",
      "The #moveUsed# #wasFruitless#."
    ],
    
    "attack": [
      "attack",
      "move"
    ],
    
    "wasFruitless": [
      "didn't do anything",
      "did nothing",
      "had no effect",
      "was fruitless"
    ],
    
    "hadNoEffectOn": [
      "had no effect on",
      "#didNot# #touch#",
      "#didNot# even #touch#"
    ],
    
    "didNot": [
      "didn't",
      "did not",
      "couldn't"
    ],
    
    "touch": [
      "touch",
      "scratch",
      "hurt",
      "harm",
      "bruise",
      "strike",
      "hit"
    ],
    
    "unhurt": [
      "unhurt",
      "unharmed",
      "not even scratched",
      "not even bruised"
    ],
    
    "fodosAttack": [
        "Fodos #unleashes# his #fodosMove#!",
        "Fodos #unleashes# #fodosMove.a#!",
        "#[player:Fodos]attacks#!",
        "Fodos #strikesWith# #fodosMove.a#!",
        "#[player:Fodos]attacks#!",
        "#[player:Fodos]attacks#!",
        "#[player:Fodos]attacks#!",
        "#[player:Fodos]attacks#!"
    ],
    
    "fodosAttackStored": [
        "Fodos #unleashes# his #moveUsed#!",
        "Fodos #unleashes# #moveUsed.a#!",
        "Fodos #strikesWith# #moveUsed.a#!"
    ],
    
    "strikesWith": [
      "strikes with",
      "attacks with",
      "hits with",
      "dashes in with",
      "jumps in with"
    ],
    
    "attacks": [
        "#player# #attackVerb#"
    ],
    
    "attackVerb": [
        "attacks",
        "strikes",
        "strikes with a flurry of blows",
        "starts attacking",
        "throws a series of quick punches"
    ],
    
    "unleashes": [
        "unleashes",
        "launches",
        "releases",
        "fires off",
        "throws out"
    ],
    
    "fodosMove": [
        "#energy# #stream#",
        "#punch# of #energy#"
    ],
    
    "punch": [
        "punch",
        "fist",
        "hand"
    ],
    
    "energy": [
        "energy",
        "power",
        "chi",
        "force",
        "spirit",
        "light"
    ],
    
    "stream": [
        "stream",
        "beam",
        "current",
        "blast"
    ],
    
    "garosPowerUp": [
        "Garos #powersUp#!",
        "Garos #growl.s# and #beginsTo# #charge#.",
        "Garos #beginsTo# #growl# and #charge#!",
        "#[player:Garos]gatherEnergy#"
    ],
    
    "growl": [
        "growl",
        "grunt",
        "shout",
        "scream",
        "yell"
    ],
    
    "charge": [
        "charge an attack",
        "power up",
        "ready an attack",
        "gather energy"
    ],
    
    "beginsTo": [
        "starts to",
        "begins to"
    ],
    
    "fodosPowerUp": [
        "Fodos #powersUp#.",
        "Fodos begins to #powerUp#!",
        "Fodos is #poweringUp#!",
        "Fodos begins #poweringUp#.",
        "#[player:Fodos]gatherEnergy#"
    ],
    
    "powersUp": [
        "powers up",
        "gathers energy",
        "gathers his energy",
        "powers up for an attack",
        "gathers energy for an attack"
    ],
    
    "powerUp": [
        "power up",
        "power up for an attack",
        "gather energy",
        "gather his energy"
    ],
    
    "poweringUp": [
        "powering up",
        "powering up an attack",
        "powering up for an attack",
        "charging a powerful attack",
        "gathering energy"
    ],
    
    "gatherEnergy": [
        "The #air# around #player# begins to #glow#.",
        "All around #player# the #air# begins to #glow#.",
        "Energy begins to flow into #player#."
    ],
    
    "air": [
        "air",
        "sand",
        "dirt",
        "dust"
    ],
    
    "glow": [
        "glow",
        "hum",
        "sparkle",
        "ripple",
        "shimmer",
        "swirl"
    ],
    
    "silence1": [
        "#briefly.capitalize# #allIsQuiet#",
        "#allIsQuiet.capitalize#",
        "#allIsQuiet.capitalize# #briefly#"
    ],
    
    "silence2": [
        "#allIsQuiet#",
        "the #mountains# and #valleys# #areStill#",
        "#among# #mountains# #only# #quietness#",
        "#among# #trees1# and #trees2# #only# #quietness#",
        "#animals# #tremble#"
    ],
    
    "mountains": [
       "mountains",
       "hills",
       "rocky crags",
       "cliffs"
    ],
    
    "valleys": [
        "valleys",
        "canyons",
        "glens",
        "gullies",
        "rivers"
    ],
    
    "among": [
        "among the",
        "in the",
        "through",
        "among"
    ],
    
    "trees1": [
        "birches",
        "aspens",
        "elms",
        "willows",
        "alders",
        "hollies"
    ],
    
    "trees2": [
        "pines",
        "cedars",
        "firs",
        "yews"
    ],
    
    "animals": [
        "deer",
        "foxes",
        "wolves",
        "birds",
        "mice",
        "rabbits"
    ],
    
    "tremble": [
        "tremble",
        "quiver",
        "are still",
        "#wait# #fearfully#"
    ],
    
    "wait": [
        "wait",
        "watch",
        "look on"
    ],
    
    "fearfully": [
        "with fear",
        "with bated breath",
        "nervously",
        "fearfully"
    ],
    
    "briefly": [
        "for a moment",
        "for a brief moment",
        "for a little while",
        "for a while",
        "for some time"
    ],
    
    "allIsQuiet": [
        "#environment# #isStill#",
        "#environment# #isSilent#",
        "#environments# #areStill#",
        "#environments# #areSilent#",
        "#only# #quietness#"
    ],
    
    "isStill": [
        "is still",
        "is calm",
        "does not move"
    ],
    
    "isSilent": [
        "is silent",
        "is noiseless",
        "is quiet"
    ],
    
    "areStill": [
        "are still",
        "do not move",
        "are calm",
        "slumber"
    ],
    
    "areSilent": [
        "are silent",
        "are quiet"
    ],
    
    "environment": [
        "the air",
        "the wind",
        "the earth",
        "the battlefield"
    ],
    
    "environments": [
        "the mountains",
        "the rocks",
        "the warriors",
        "crags and canyons"
    ], 
    
    "only": [
        "there is only",
        "there is nothing but",
        "there is little besides"
    ],
    
    "quietness": [
        "silence",
        "quiet",
        "stillness",
        "a gentle breeze"
    ],
    
    "insultRiposte": [
        "#garosInsult# #fodosRiposte#"
    ],
    
    "fodosRiposte": [
        "Fodos #replies#, \"#riposte#\""
    ],
    
    "replies": [
        "answers",
        "replies",
        "retorts",
        "barks back",
        "#says#"
    ],
    
    "riposte": [
        "You're the only #insult_type# one here.",
        "I'm not #insult_type#, you're #insult_type#!",
        "#maybe# #insult_type#, but #wontLose#!",
        "#sayWhat#, #wontLose#!"
    ],
    
    "sayWhat": [
        "Say what you like",
        "You say that",
        "Talk all you want",
        "Say what you will",
        "You talk big",
        "Enough talk"
    ],
    
    "maybe": [
        "Maybe I am",
        "I may be",
        "Maybe I'm",
        "I might be"
    ],
    
    "wontLose": [
        "I won't let you #beatMe#",
        "You can't #beatMe#",
        "I won't lose to you",
        "no way will you #beatMe#",
        "#defeatYou#"
    ],
    
    "garosInsult": [
        "Garos #says#, \"#insult#\"",
    ],
    
    "says": [
        "says",
        "shouts",
        "yells",
        "growls"
    ],
    
    "insult": [
        "#youAre# #insult_type#.",
        "#insult_type.capitalize#! #defeatMe#",
        "#youAre# #insult_type#, #defeatYou#.",
        "#insult_type# #badNoun#!",
        "#insult_type# #badNoun#! #die#!",
        "#defeatYou.capitalize# like the #insult_type# #badNoun# that you are."
    ],
    
    "youAre": [
        "You are",
        "You are so",
        "You're",
        "Hah, you're"
    ],
    
    "insultType": [
        "pathetic",
        "stupid",
        "foolish",
        "pitiful",
        "worthless"
    ],
    
    "defeatMe": [
        "You #cannot# #beatMe#"
    ],
    
    "cannot": [
        "can not",
        "can't",
        "will not",
        "won't",
        "will never",
        "won't ever",
        "can never",
        "shall not",
        "aren't able to"
    ],
    
    "beatMe": [
        "defeat me",
        "win",
        "beat me",
        "win this time"
    ],
    
    "defeatYou": [
        "I #will# #beatYou#"
    ],
    
    "will": [
        "will",
        "will soon",
        "am going to",
        "am about to"
    ],
    
    "beatYou": [
        "crush you",
        "defeat you",
        "kill you"
    ],
    
    "badNoun": [
        "weakling",
        "insect",
        "buffoon"
    ],
    
    "die": [
        "Die",
        "Now you die",
        "You are dead",
        "You will die",
        "Time to die",
        "It's time for you to die",
        "You are already dead"
    ]
    
}    
);

grammar.addModifiers(tracery.baseEngModifiers); 

(function() { return (grammar.flatten('#origin#')); })()