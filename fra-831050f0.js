"use strict";
const DATA = [{"id":"1","n":"Emrakul, the Exigent Doom","r":"m","c":"","ci":"","v":10.0,"t":"Legendary Creature — Eldrazi","f":[{"n":"Emrakul, the Exigent Doom","m":"{10}","t":"Legendary Creature — Eldrazi","o":"When you cast this spell, untap all lands you control.\nFlying, trample\nWard—Sacrifice three permanents.\n{3}, Exile this card from your hand: Target land gains \"{T}: Add {C}{C}\" until this card is cast from exile. You may cast this card for as long as it remains exiled.","p":"12","d":"12","l":null}],"pm":"C","wm":""},{"id":"2","n":"Academic Ascent","r":"c","c":"W","ci":"W","v":2.0,"t":"Instant","f":[{"n":"Academic Ascent","m":"{1}{W}","t":"Instant","o":"Target creature gets +2/+2 and gains flying until end of turn.\nEmpower Jace 2. (Put two loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"3","n":"Blossom-Blessed Angel // Seed Suture","r":"c","c":"W","ci":"GW","v":4.0,"t":"Creature — Angel Cleric // Sorcery","f":[{"n":"Blossom-Blessed Angel","m":"{3}{W}","t":"Creature — Angel Cleric","o":"Flying, vigilance\nThis creature enters prepared. (While it's prepared, you may cast a copy of its spell. Doing so unprepares it.)","p":"2","d":"4","l":null},{"n":"Seed Suture","m":"{G/W}","t":"Sorcery","o":"Put a +1/+1 counter on target creature. You gain 1 life.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"4","n":"Campus Crier","r":"c","c":"W","ci":"W","v":2.0,"t":"Creature — Human Advisor","f":[{"n":"Campus Crier","m":"{1}{W}","t":"Creature — Human Advisor","o":"{1}, Exile this card from your graveyard: Empower Jace 2. (Put two loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")","p":"3","d":"1","l":null}],"pm":"","wm":""},{"id":"5","n":"Enlightened Confidant","r":"m","c":"W","ci":"W","v":2.0,"t":"Creature — Kor Cleric","f":[{"n":"Enlightened Confidant","m":"{1}{W}","t":"Creature — Kor Cleric","o":"Lifelink\nAt the beginning of your end step, if you gained life this turn, surveil 1. If you put a card with mana value less than or equal to the amount of life you gained this turn into your graveyard this way, put that card into your hand.","p":"2","d":"1","l":null}],"pm":"","wm":""},{"id":"6","n":"Fateshaper Aspirant","r":"c","c":"W","ci":"W","v":5.0,"t":"Creature — Rhino Cleric","f":[{"n":"Fateshaper Aspirant","m":"{4}{W}","t":"Creature — Rhino Cleric","o":"When this creature enters, choose one —\n• Return target legendary card from your graveyard to your hand.\n• Put a +1/+1 counter on target creature. It gains vigilance and indestructible until end of turn. (Damage and effects that say \"destroy\" don't destroy it.)","p":"3","d":"4","l":null}],"pm":"","wm":""},{"id":"7","n":"Flickering Hound","r":"r","c":"W","ci":"W","v":4.0,"t":"Creature — Dog","f":[{"n":"Flickering Hound","m":"{3}{W}","t":"Creature — Dog","o":"Whenever you cast a creature spell, exile up to one other target creature you control, then return that card to the battlefield under its owner's control.","p":"2","d":"2","l":null}],"pm":"","wm":""},{"id":"8","n":"Generous Revival","r":"u","c":"W","ci":"W","v":3.0,"t":"Sorcery","f":[{"n":"Generous Revival","m":"{2}{W}","t":"Sorcery","o":"Return target creature card with mana value 3 or less from your graveyard to the battlefield with an additional +1/+1 counter on it.\nFlashback {4}{W} (You may cast this card from your graveyard for its flashback cost. Then exile it.)","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"9","n":"Germinate Recruits","r":"r","c":"W","ci":"W","v":3.0,"t":"Instant","f":[{"n":"Germinate Recruits","m":"{2}{W}","t":"Instant","o":"Create X 2/2 colorless Wizard Soldier creature tokens named Cadet, where X is the amount of life you gained this turn.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"10","n":"Graft Surgeon","r":"c","c":"W","ci":"W","v":3.0,"t":"Creature — Human Cleric","f":[{"n":"Graft Surgeon","m":"{2}{W}","t":"Creature — Human Cleric","o":"This creature enters with a +1/+1 counter on it.\nWhen this creature dies, put its counters on up to one target creature you control.","p":"2","d":"2","l":null}],"pm":"","wm":""},{"id":"11","n":"Guiding Hydra","r":"r","c":"W","ci":"W","v":1.0,"t":"Creature — Hydra Horror","f":[{"n":"Guiding Hydra","m":"{X}{W}","t":"Creature — Hydra Horror","o":"This creature enters with X +1/+1 counters on it.\nAt the beginning of combat on your turn, you may remove a +1/+1 counter from this creature. If you do, put a +1/+1 counter on each other creature you control.","p":"1","d":"0","l":null}],"pm":"","wm":""},{"id":"12","n":"Hexhaven Battalion","r":"c","c":"W","ci":"W","v":6.0,"t":"Sorcery","f":[{"n":"Hexhaven Battalion","m":"{4}{W}{W}","t":"Sorcery","o":"Create three 2/2 colorless Wizard Soldier creature tokens named Cadet. Empower Jace 2. (Put two loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")\nBasic landcycling {2} ({2}, Discard this card: Search your library for a basic land card, reveal it, put it into your hand, then shuffle.)","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"13","n":"Kindred Judgment","r":"r","c":"W","ci":"W","v":7.0,"t":"Sorcery","f":[{"n":"Kindred Judgment","m":"{5}{W}{W}","t":"Sorcery","o":"Choose a creature type. Destroy all creatures that aren't of the chosen type.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"14","n":"Loyal Tutor","r":"r","c":"W","ci":"W","v":1.0,"t":"Instant","f":[{"n":"Loyal Tutor","m":"{W}","t":"Instant","o":"Search your library for a planeswalker card, reveal it, then shuffle and put that card on top.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"15","n":"Memory Trap","r":"c","c":"W","ci":"W","v":3.0,"t":"Enchantment","f":[{"n":"Memory Trap","m":"{2}{W}","t":"Enchantment","o":"When this enchantment enters, exile target nonland permanent an opponent controls until this enchantment leaves the battlefield.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"16","n":"Predictive Preparations","r":"c","c":"W","ci":"W","v":2.0,"t":"Sorcery","f":[{"n":"Predictive Preparations","m":"{1}{W}","t":"Sorcery","o":"Put a +1/+1 counter on each of one or two target creatures.\nFlashback {3}{W} (You may cast this card from your graveyard for its flashback cost. Then exile it.)","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"17","n":"Prophesied End","r":"u","c":"W","ci":"W","v":2.0,"t":"Instant","f":[{"n":"Prophesied End","m":"{1}{W}","t":"Instant","o":"Destroy target creature. If it wasn't attacking, its controller draws a card.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"18","n":"Refute Destiny","r":"u","c":"W","ci":"W","v":2.0,"t":"Sorcery","f":[{"n":"Refute Destiny","m":"{1}{W}","t":"Sorcery","o":"Exile target creature or planeswalker that's green or blue. Surveil 1. (Look at the top card of your library. You may put it into your graveyard.)","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"19","n":"Repurposed Enforcer","r":"r","c":"W","ci":"W","v":2.0,"t":"Creature — Human Soldier","f":[{"n":"Repurposed Enforcer","m":"{1}{W}","t":"Creature — Human Soldier","o":"Whenever this creature attacks, empower Jace X, where X is the number of creatures you control. (Put that many loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")","p":"3","d":"2","l":null}],"pm":"","wm":""},{"id":"20","n":"Return to the Light Realms","r":"m","c":"W","ci":"W","v":9.0,"t":"Sorcery","f":[{"n":"Return to the Light Realms","m":"{7}{W}{W}","t":"Sorcery","o":"Return all nonland permanent cards from your graveyard to the battlefield.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"21","n":"Shatterwing Pegasus","r":"c","c":"W","ci":"W","v":3.0,"t":"Creature — Pegasus","f":[{"n":"Shatterwing Pegasus","m":"{2}{W}","t":"Creature — Pegasus","o":"Flying\n{4}{W}: Creatures you control get +1/+1 until end of turn.","p":"2","d":"3","l":null}],"pm":"","wm":""},{"id":"22","n":"Surgical Precision","r":"c","c":"W","ci":"W","v":2.0,"t":"Sorcery","f":[{"n":"Surgical Precision","m":"{1}{W}","t":"Sorcery","o":"Choose one —\n• Destroy target creature with toughness 4 or greater. You gain 1 life.\n• You draw a card and gain 2 life.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"23","n":"Unflinching Hortimancer","r":"c","c":"W","ci":"W","v":2.0,"t":"Creature — Human Cleric","f":[{"n":"Unflinching Hortimancer","m":"{1}{W}","t":"Creature — Human Cleric","o":"Ward {1} (Whenever this creature becomes the target of a spell or ability an opponent controls, counter it unless that player pays {1}.)\nWhenever you gain life, put a +1/+1 counter on this creature.","p":"2","d":"1","l":null}],"pm":"","wm":""},{"id":"24","n":"Your Fate Ends Here","r":"u","c":"W","ci":"W","v":3.0,"t":"Instant","f":[{"n":"Your Fate Ends Here","m":"{2}{W}","t":"Instant","o":"Destroy target creature or planeswalker with mana value 3 or greater. Surveil 1. (Look at the top card of your library. You may put it into your graveyard.)","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"25","n":"Countersculpt","r":"u","c":"U","ci":"U","v":2.0,"t":"Instant","f":[{"n":"Countersculpt","m":"{U}{U}","t":"Instant","o":"As an additional cost to cast this spell, behold a Jace or pay {1}. (To behold a Jace, choose a Jace you control or reveal a Jace card from your hand.)\nCounter target spell. Empower Jace 1. (Put a loyalty counter on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"26","n":"Cruel Calculations","r":"r","c":"U","ci":"U","v":3.0,"t":"Sorcery","f":[{"n":"Cruel Calculations","m":"{2}{U}","t":"Sorcery","o":"Draw X cards, where X is the number of cards that were put into target player's graveyard from their library this turn.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"27","n":"Cryotheory Adept","r":"c","c":"U","ci":"U","v":2.0,"t":"Creature — Human Wizard","f":[{"n":"Cryotheory Adept","m":"{1}{U}","t":"Creature — Human Wizard","o":"Prowess (Whenever you cast a noncreature spell, this creature gets +1/+1 until end of turn.)\n{3}{U}, Exile this card from your graveyard: Tap target creature and put a stun counter on it. Activate only as a sorcery. (If a permanent with a stun counter would become untapped, remove one from it instead.)","p":"2","d":"1","l":null}],"pm":"","wm":""},{"id":"28","n":"Diviner of Victory // Unwind History","r":"r","c":"U","ci":"U","v":1.0,"t":"Creature — Dwarf Wizard // Sorcery","f":[{"n":"Diviner of Victory","m":"{U}","t":"Creature — Dwarf Wizard","o":"This creature enters prepared. (While it's prepared, you may cast a copy of its spell. Doing so unprepares it.)\nWhenever you scry or surveil, this creature gets +1/+1 until end of turn.","p":"1","d":"1","l":null},{"n":"Unwind History","m":"{1}{U}","t":"Sorcery","o":"Return target creature an opponent controls with mana value 3 or less to its owner's hand. Surveil 1.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"29","n":"Divining Duelist","r":"c","c":"U","ci":"U","v":3.0,"t":"Creature — Merfolk Wizard","f":[{"n":"Divining Duelist","m":"{2}{U}","t":"Creature — Merfolk Wizard","o":"Flash\nWhen this creature enters, choose one —\n• Tap target creature.\n• Untap target creature.\n• Draw a card, then discard a card.","p":"3","d":"2","l":null}],"pm":"","wm":""},{"id":"30","n":"Icy Reception","r":"c","c":"U","ci":"U","v":2.0,"t":"Instant","f":[{"n":"Icy Reception","m":"{1}{U}","t":"Instant","o":"Choose one —\n• Counter target creature or legendary spell unless its controller pays {3}.\n• Target creature gets -5/-0 until end of turn.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"31","n":"Infinite Coursework","r":"c","c":"U","ci":"U","v":3.0,"t":"Enchantment — Aura","f":[{"n":"Infinite Coursework","m":"{2}{U}","t":"Enchantment — Aura","o":"Enchant creature\nWhen this Aura enters, tap enchanted creature. It becomes unprepared.\nEnchanted creature loses all abilities and doesn't untap during its controller's untap step.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"32","n":"Jace's Machinations","r":"r","c":"U","ci":"U","v":3.0,"t":"Instant","f":[{"n":"Jace's Machinations","m":"{2}{U}","t":"Instant","o":"Until end of turn, you may activate loyalty abilities of Jace planeswalkers you control on any player's turn any time you could cast an instant.\nEmpower Jace 8. (Put eight loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"33","n":"Mindseeker Oculus","r":"c","c":"U","ci":"U","v":3.0,"t":"Creature — Homunculus","f":[{"n":"Mindseeker Oculus","m":"{2}{U}","t":"Creature — Homunculus","o":"When this creature enters, empower Jace 4. (Put four loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")","p":"2","d":"1","l":null}],"pm":"","wm":""},{"id":"34","n":"Perfected Theory","r":"u","c":"U","ci":"U","v":1.0,"t":"Instant","f":[{"n":"Perfected Theory","m":"{U}","t":"Instant","o":"Choose one —\n• Target creature has base power and toughness 1/1 until end of turn.\n• Target creature has base power and toughness 4/5 until end of turn.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"35","n":"Plan for All Outcomes","r":"u","c":"U","ci":"U","v":4.0,"t":"Enchantment","f":[{"n":"Plan for All Outcomes","m":"{3}{U}","t":"Enchantment","o":"When this enchantment enters, the owner of up to one other target nonland permanent puts it on their choice of the top or bottom of their library.\nWhenever you cast your first noncreature spell each turn, empower Jace 1. (Put a loyalty counter on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"36","n":"Precise Redaction","r":"u","c":"U","ci":"U","v":2.0,"t":"Instant","f":[{"n":"Precise Redaction","m":"{1}{U}","t":"Instant","o":"Counter target white or black spell.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"37","n":"Protege's Awakening","r":"c","c":"U","ci":"U","v":4.0,"t":"Sorcery","f":[{"n":"Protege's Awakening","m":"{3}{U}","t":"Sorcery","o":"Empower Jace 6. (Put six loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")\nDraw a card.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"38","n":"Seasoned Cryomancer","r":"m","c":"U","ci":"U","v":3.0,"t":"Creature — Human Wizard","f":[{"n":"Seasoned Cryomancer","m":"{1}{U}{U}","t":"Creature — Human Wizard","o":"When this creature enters, draw two cards, then discard two cards. When you discard one or more nonland cards this way, tap up to that many target creatures and put a stun counter on each of them.\n{3}{U}{U}, Exile this card from your graveyard: Draw two cards.","p":"2","d":"2","l":null}],"pm":"","wm":""},{"id":"39","n":"Semester Foreseer // Peer Review","r":"c","c":"U","ci":"UW","v":4.0,"t":"Creature — Human Wizard // Sorcery","f":[{"n":"Semester Foreseer","m":"{3}{U}","t":"Creature — Human Wizard","o":"This creature enters prepared. (While it's prepared, you may cast a copy of its spell. Doing so unprepares it.)\nWhen this creature enters, surveil 1.","p":"3","d":"4","l":null},{"n":"Peer Review","m":"{2}{W/U}","t":"Sorcery","o":"Create a 2/2 colorless Wizard Soldier creature token named Cadet. Surveil 1.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"40","n":"Sphinx of False Conclusions","r":"r","c":"U","ci":"U","v":4.0,"t":"Creature — Sphinx Illusion","f":[{"n":"Sphinx of False Conclusions","m":"{2}{U}{U}","t":"Creature — Sphinx Illusion","o":"Flash\nFlying\nWhenever this creature attacks, draw a card, then discard a card.\nWhen this creature dies, if it isn't a token, create a token that's a copy of it.","p":"4","d":"2","l":null}],"pm":"","wm":""},{"id":"41","n":"Sphinx's Approach","r":"c","c":"U","ci":"U","v":3.0,"t":"Instant","f":[{"n":"Sphinx's Approach","m":"{1}{U}{U}","t":"Instant","o":"Draw two cards. Then you may exile this spell and four cards named Sphinx's Approach from your graveyard. If you do, search your library for a Sphinx creature card, put it onto the battlefield, then shuffle.\nA deck can have any number of cards named Sphinx's Approach.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"42","n":"Surveillance Phantasm","r":"c","c":"U","ci":"U","v":2.0,"t":"Creature — Bird Illusion","f":[{"n":"Surveillance Phantasm","m":"{1}{U}","t":"Creature — Bird Illusion","o":"Defender, flying, vigilance\nAs long as you've scried or surveilled this turn, this creature can attack as though it didn't have defender.\n{3}{U}: Surveil 1. (Look at the top card of your library. You may put it into your graveyard.)","p":"2","d":"3","l":null}],"pm":"","wm":""},{"id":"43","n":"The Theorist, Jace Beleren","r":"m","c":"U","ci":"U","v":4.0,"t":"Legendary Planeswalker — Jace","f":[{"n":"The Theorist, Jace Beleren","m":"{2}{U}{U}","t":"Legendary Planeswalker — Jace","o":"At the beginning of each opponent's draw step, you draw a card.\n+1: Create a 1/1 blue Illusion creature token.\n−2: For each opponent, return up to one target artifact or creature that player controls to its owner's hand.\n−6: Draw three cards. Then put X +1/+1 counters on each creature you control, where X is the number of cards in your hand.","p":null,"d":null,"l":"3"}],"pm":"","wm":""},{"id":"44","n":"Theorist's Proxy","r":"r","c":"U","ci":"U","v":2.0,"t":"Creature — Illusion","f":[{"n":"Theorist's Proxy","m":"{1}{U}","t":"Creature — Illusion","o":"Flash\nWhen this creature enters, empower Jace 3. (Put three loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")\n{U}, Sacrifice this creature: The next spell you cast this turn can't be countered.","p":"0","d":"3","l":null}],"pm":"","wm":""},{"id":"45","n":"Undulating Witness","r":"c","c":"U","ci":"U","v":5.0,"t":"Creature — Serpent","f":[{"n":"Undulating Witness","m":"{4}{U}","t":"Creature — Serpent","o":"Flying\n{2}: This creature gets +1/-1 until end of turn.\nBasic landcycling {2} ({2}, Discard this card: Search your library for a basic land card, reveal it, put it into your hand, then shuffle.)","p":"3","d":"5","l":null}],"pm":"","wm":""},{"id":"46","n":"Unsummon","r":"c","c":"U","ci":"U","v":1.0,"t":"Instant","f":[{"n":"Unsummon","m":"{U}","t":"Instant","o":"Return target creature to its owner's hand.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"47","n":"Variable Chaser // Arc of Fortune","r":"r","c":"U","ci":"U","v":3.0,"t":"Creature — Human Wizard // Sorcery","f":[{"n":"Variable Chaser","m":"{2}{U}","t":"Creature — Human Wizard","o":"Flying, prowess\nThis creature enters prepared. (While it's prepared, you may cast a copy of its spell. Doing so unprepares it.)","p":"2","d":"3","l":null},{"n":"Arc of Fortune","m":"{2}{U}","t":"Sorcery","o":"Each player may discard their hand and draw seven cards.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"48","n":"Apex Witchstalker","r":"c","c":"B","ci":"B","v":6.0,"t":"Creature — Wolf","f":[{"n":"Apex Witchstalker","m":"{4}{B}{B}","t":"Creature — Wolf","o":"Menace (This creature can't be blocked except by two or more creatures.)\nWhen this creature enters or dies, you gain 2 life.\nBasic landcycling {2} ({2}, Discard this card: Search your library for a basic land card, reveal it, put it into your hand, then shuffle.)","p":"6","d":"4","l":null}],"pm":"","wm":""},{"id":"49","n":"Bloodline Recollector // Ancestral Craving","r":"m","c":"B","ci":"B","v":2.0,"t":"Creature — Vampire Warlock // Instant","f":[{"n":"Bloodline Recollector","m":"{1}{B}","t":"Creature — Vampire Warlock","o":"At the beginning of each end step, if three or more creatures died this turn, this creature becomes prepared. (While it's prepared, you may cast a copy of its spell. Doing so unprepares it.)","p":"2","d":"2","l":null},{"n":"Ancestral Craving","m":"{B}","t":"Instant","o":"Target player draws three cards and loses 3 life.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"50","n":"Break Under Pressure","r":"u","c":"B","ci":"B","v":3.0,"t":"Instant","f":[{"n":"Break Under Pressure","m":"{2}{B}","t":"Instant","o":"Target opponent sacrifices a creature or planeswalker with the greatest mana value among creatures and planeswalkers they control. You gain 2 life.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"51","n":"Cast Away Doubt","r":"c","c":"B","ci":"B","v":3.0,"t":"Sorcery","f":[{"n":"Cast Away Doubt","m":"{2}{B}","t":"Sorcery","o":"Draw two cards. Cast Away Doubt deals 2 damage to each player.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"52","n":"Dark Matter Manipulator","r":"r","c":"B","ci":"B","v":1.0,"t":"Creature — Human Warlock","f":[{"n":"Dark Matter Manipulator","m":"{B}","t":"Creature — Human Warlock","o":"When this creature enters, mill three cards.\nThis creature gets +2/+0 for every seven cards in your graveyard.","p":"1","d":"2","l":null}],"pm":"","wm":""},{"id":"53","n":"Darklight Phoenix","r":"m","c":"B","ci":"B","v":4.0,"t":"Creature — Phoenix","f":[{"n":"Darklight Phoenix","m":"{3}{B}","t":"Creature — Phoenix","o":"Flying, haste\nAt the beginning of combat on your turn, if two or more creatures died this turn, return this card from your graveyard to the battlefield.","p":"3","d":"2","l":null}],"pm":"","wm":""},{"id":"54","n":"Extended Absence","r":"c","c":"B","ci":"B","v":4.0,"t":"Instant","f":[{"n":"Extended Absence","m":"{3}{B}","t":"Instant","o":"Exile target creature or planeswalker. Extended Absence deals 1 damage to each opponent and you gain 1 life.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"55","n":"Extrapolate the Impossible","r":"r","c":"B","ci":"B","v":2.0,"t":"Sorcery","f":[{"n":"Extrapolate the Impossible","m":"{1}{B}","t":"Sorcery","o":"You may reveal exactly two cards you own with different names from outside the game. An opponent chooses one of them. You put that card into your hand.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"56","n":"Last Gasp","r":"c","c":"B","ci":"B","v":2.0,"t":"Instant","f":[{"n":"Last Gasp","m":"{1}{B}","t":"Instant","o":"Target creature gets -3/-3 until end of turn.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"57","n":"Lich's Relic","r":"r","c":"B","ci":"B","v":1.0,"t":"Artifact — Equipment","f":[{"n":"Lich's Relic","m":"{B}","t":"Artifact — Equipment","o":"When this Equipment enters, you may pay {2}. When you do, for each opponent, destroy up to one target creature or planeswalker that player controls.\nEquipped creature gets +2/+1.\nEquip {2}","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"58","n":"Multiply by Zero","r":"u","c":"B","ci":"B","v":2.0,"t":"Instant","f":[{"n":"Multiply by Zero","m":"{1}{B}","t":"Instant","o":"Target creature has base power and toughness 0/0 until end of turn.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"59","n":"Overwrite the Multiverse","r":"m","c":"B","ci":"B","v":6.0,"t":"Sorcery","f":[{"n":"Overwrite the Multiverse","m":"{4}{B}{B}","t":"Sorcery","o":"Exile all creatures. Empower Jace X, where X is the number of creatures exiled this way. (Put that many loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"60","n":"Rampart Hunter","r":"c","c":"B","ci":"B","v":4.0,"t":"Creature — Horror","f":[{"n":"Rampart Hunter","m":"{3}{B}","t":"Creature — Horror","o":"Deathtouch\nWhen this creature enters, target creature gets +2/+2 and gains deathtouch until end of turn.","p":"3","d":"3","l":null}],"pm":"","wm":""},{"id":"61","n":"Rank Rat","r":"c","c":"B","ci":"B","v":2.0,"t":"Creature — Zombie Rat","f":[{"n":"Rank Rat","m":"{1}{B}","t":"Creature — Zombie Rat","o":"When this creature enters, each opponent discards a card.","p":"1","d":"1","l":null}],"pm":"","wm":""},{"id":"62","n":"Rewrite Regrets","r":"u","c":"B","ci":"B","v":4.0,"t":"Sorcery","f":[{"n":"Rewrite Regrets","m":"{3}{B}","t":"Sorcery","o":"Return target creature or planeswalker card with mana value 6 or less from your graveyard to the battlefield.\nEmpower Jace 2. (Put two loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"63","n":"Rise of the Deathbringer","r":"r","c":"B","ci":"B","v":5.0,"t":"Instant","f":[{"n":"Rise of the Deathbringer","m":"{4}{B}","t":"Instant","o":"Choose one —\n• Draw cards equal to the greatest power among creatures you control. You lose life equal to the number of cards drawn this way.\n• All creatures get -3/-3 until end of turn.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"64","n":"Sanctum Lurker","r":"r","c":"B","ci":"B","v":3.0,"t":"Creature — Horror","f":[{"n":"Sanctum Lurker","m":"{2}{B}","t":"Creature — Horror","o":"When this creature enters, empower Jace 1.\nPlaneswalkers you control aren't put into their owners' graveyards for having 0 loyalty.\nPlaneswalkers you control have \"[+2]: This planeswalker deals 1 damage to each opponent and you gain 1 life.\"","p":"3","d":"2","l":null}],"pm":"","wm":""},{"id":"65","n":"Screeching Soulbreaker","r":"c","c":"B","ci":"B","v":3.0,"t":"Creature — Siren Bard","f":[{"n":"Screeching Soulbreaker","m":"{2}{B}","t":"Creature — Siren Bard","o":"Flying\nWhenever this creature attacks, it deals 1 damage to each opponent and you gain 1 life.","p":"1","d":"4","l":null}],"pm":"","wm":""},{"id":"66","n":"Silence the Echo","r":"c","c":"B","ci":"B","v":2.0,"t":"Sorcery","f":[{"n":"Silence the Echo","m":"{1}{B}","t":"Sorcery","o":"As an additional cost to cast this spell, sacrifice a creature or planeswalker or pay {3}.\nDestroy target creature or planeswalker.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"67","n":"Solve for Disappointment","r":"c","c":"B","ci":"B","v":2.0,"t":"Sorcery","f":[{"n":"Solve for Disappointment","m":"{1}{B}","t":"Sorcery","o":"Target opponent reveals their hand. You choose a nonland permanent card from it. That player discards that card.\nEmpower Jace 1. (Put a loyalty counter on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"68","n":"Terminal Criticism","r":"u","c":"B","ci":"B","v":2.0,"t":"Instant","f":[{"n":"Terminal Criticism","m":"{1}{B}","t":"Instant","o":"Destroy target creature or planeswalker that's blue or red. You gain 1 life.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"69","n":"Theoretical Necromancer","r":"c","c":"B","ci":"B","v":3.0,"t":"Creature — Vampire Warlock","f":[{"n":"Theoretical Necromancer","m":"{2}{B}","t":"Creature — Vampire Warlock","o":"{3}{B}, Exile this card from your graveyard: Return another target creature card from your graveyard to your hand.","p":"4","d":"1","l":null}],"pm":"","wm":""},{"id":"70","n":"Void Extrapolator // Omit Variables","r":"c","c":"B","ci":"BU","v":2.0,"t":"Creature — Aetherborn Warlock // Sorcery","f":[{"n":"Void Extrapolator","m":"{1}{B}","t":"Creature — Aetherborn Warlock","o":"This creature enters prepared. (While it's prepared, you may cast a copy of its spell. Doing so unprepares it.)\nThreshold — This creature gets +1/+1 as long as there are seven or more cards in your graveyard.","p":"2","d":"2","l":null},{"n":"Omit Variables","m":"{U/B}","t":"Sorcery","o":"Mill three cards. (Put the top three cards of your library into your graveyard.)","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"71","n":"Vraska's Final Mercy","r":"r","c":"B","ci":"B","v":2.0,"t":"Sorcery","f":[{"n":"Vraska's Final Mercy","m":"{B}{B}","t":"Sorcery","o":"Choose one —\n• You lose 2 life. Destroy target creature or planeswalker.\n• You lose 2 life. Empower Jace 6. (Put six loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"72","n":"Ajani's Anguish","r":"r","c":"R","ci":"R","v":1.0,"t":"Enchantment","f":[{"n":"Ajani's Anguish","m":"{X}{R}","t":"Enchantment","o":"When this enchantment enters, it deals X damage to any target.\nCreatures you control have trample.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"73","n":"Artifist Acumen","r":"c","c":"R","ci":"R","v":1.0,"t":"Sorcery","f":[{"n":"Artifist Acumen","m":"{R}","t":"Sorcery","o":"Creatures you control gain first strike until end of turn.\nDraw a card.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"74","n":"Awaken the Inferno","r":"c","c":"R","ci":"R","v":5.0,"t":"Sorcery","f":[{"n":"Awaken the Inferno","m":"{4}{R}","t":"Sorcery","o":"Awaken the Inferno deals 6 damage to target creature or planeswalker an opponent controls. Put a +1/+1 counter on up to one target creature you control.\nBasic landcycling {2} ({2}, Discard this card: Search your library for a basic land card, reveal it, put it into your hand, then shuffle.)","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"75","n":"Blazing Crescendo","r":"c","c":"R","ci":"R","v":2.0,"t":"Instant","f":[{"n":"Blazing Crescendo","m":"{1}{R}","t":"Instant","o":"Target creature gets +3/+1 until end of turn.\nExile the top card of your library. Until the end of your next turn, you may play that card.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"76","n":"Chandra's Emberling","r":"c","c":"R","ci":"R","v":3.0,"t":"Creature — Gremlin Elemental","f":[{"n":"Chandra's Emberling","m":"{2}{R}","t":"Creature — Gremlin Elemental","o":"Haste\nWhenever you cast a noncreature spell, put a +1/+1 counter on this creature.","p":"2","d":"2","l":null}],"pm":"","wm":""},{"id":"77","n":"Command the Stage","r":"u","c":"R","ci":"R","v":3.0,"t":"Sorcery","f":[{"n":"Command the Stage","m":"{2}{R}","t":"Sorcery","o":"Create a 2/2 colorless Wizard Soldier creature token named Cadet, then put a +1/+1 counter on each other Wizard token you control.\nAt the beginning of each upkeep, if an opponent was dealt noncombat damage last turn, return this card from your graveyard to your hand.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"78","n":"Craterclaw Colossus","r":"m","c":"R","ci":"R","v":7.0,"t":"Artifact Creature — Beast Construct","f":[{"n":"Craterclaw Colossus","m":"{4}{R}{R}{R}","t":"Artifact Creature — Beast Construct","o":"Haste\nWhen this creature enters, creatures you control gain trample and get +X/+0 until end of turn, where X is the number of artifacts you control.","p":"5","d":"5","l":null}],"pm":"","wm":""},{"id":"79","n":"Curse-Marred Demon","r":"r","c":"R","ci":"R","v":4.0,"t":"Creature — Demon","f":[{"n":"Curse-Marred Demon","m":"{2}{R}{R}","t":"Creature — Demon","o":"Flying, trample\nWhen this creature enters, search your library for a card, put it into your hand, shuffle, then discard a card at random.","p":"4","d":"4","l":null}],"pm":"","wm":""},{"id":"80","n":"Draconic Visitor","r":"r","c":"R","ci":"R","v":5.0,"t":"Creature — Dragon","f":[{"n":"Draconic Visitor","m":"{3}{R}{R}","t":"Creature — Dragon","o":"Flying\nIf one or more artifact tokens would be created under your control, that many 5/5 red Dragon creature tokens with flying are created instead.","p":"5","d":"5","l":null}],"pm":"","wm":""},{"id":"81","n":"Eardrum Rattler","r":"c","c":"R","ci":"R","v":2.0,"t":"Creature — Human Bard","f":[{"n":"Eardrum Rattler","m":"{1}{R}","t":"Creature — Human Bard","o":"{1}, {T}: Another target creature you control with power 2 or less can't be blocked this turn.","p":"2","d":"2","l":null}],"pm":"","wm":""},{"id":"82","n":"Essence Burn","r":"u","c":"R","ci":"R","v":2.0,"t":"Instant","f":[{"n":"Essence Burn","m":"{1}{R}","t":"Instant","o":"Essence Burn deals 5 damage to target black or green creature or planeswalker. If that permanent would die this turn, exile it instead.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"83","n":"Face Yourself","r":"r","c":"R","ci":"R","v":7.0,"t":"Sorcery","f":[{"n":"Face Yourself","m":"{5}{R}{R}","t":"Sorcery","o":"For each creature target player controls, create a token that's a copy of that creature, except it has haste and \"At the beginning of the end step, if you don't control a planeswalker, sacrifice this creature.\"","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"84","n":"Fulminous Forte","r":"u","c":"R","ci":"R","v":3.0,"t":"Instant","f":[{"n":"Fulminous Forte","m":"{2}{R}","t":"Instant","o":"Choose one —\n• Fulminous Forte deals 1 damage to each creature and planeswalker your opponents control.\n• Fulminous Forte deals 5 damage to target creature or planeswalker.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"85","n":"Hallway Heckler // Vicious Verse","r":"c","c":"R","ci":"BR","v":3.0,"t":"Creature — Elemental Sorcerer // Sorcery","f":[{"n":"Hallway Heckler","m":"{2}{R}","t":"Creature — Elemental Sorcerer","o":"This creature enters prepared. (While it's prepared, you may cast a copy of its spell. Doing so unprepares it.)\n{T}, Discard a card: Draw a card.","p":"2","d":"3","l":null},{"n":"Vicious Verse","m":"{B/R}","t":"Sorcery","o":"Vicious Verse deals 1 damage to target opponent.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"86","n":"Heartstring Puller","r":"c","c":"R","ci":"R","v":4.0,"t":"Creature — Elf Sorcerer","f":[{"n":"Heartstring Puller","m":"{3}{R}","t":"Creature — Elf Sorcerer","o":"Trample\nWhen this creature enters, create a 2/2 colorless Wizard Soldier creature token named Cadet.","p":"3","d":"1","l":null}],"pm":"","wm":""},{"id":"87","n":"Identity Echo","r":"r","c":"R","ci":"R","v":3.0,"t":"Enchantment","f":[{"n":"Identity Echo","m":"{2}{R}","t":"Enchantment","o":"{3}{R}: Exile target creature or planeswalker you control. Reveal cards from the top of your library until you reveal a creature or planeswalker card. Put that card onto the battlefield and the rest on the bottom of your library in a random order. Activate only as a sorcery.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"88","n":"Master of Barbs","r":"r","c":"R","ci":"R","v":2.0,"t":"Creature — Lizard Bard","f":[{"n":"Master of Barbs","m":"{1}{R}","t":"Creature — Lizard Bard","o":"Menace\nWhenever one or more opponents are dealt noncombat damage, creatures you control get +1/+0 until end of turn.","p":"2","d":"1","l":null}],"pm":"","wm":""},{"id":"89","n":"No Admittance","r":"c","c":"R","ci":"R","v":2.0,"t":"Sorcery","f":[{"n":"No Admittance","m":"{1}{R}","t":"Sorcery","o":"No Admittance deals 3 damage to any target.\nEmpower Jace 1. (Put a loyalty counter on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"90","n":"Pompous Battlemage // Improvised Act","r":"r","c":"R","ci":"R","v":1.0,"t":"Creature — Goblin Sorcerer // Sorcery","f":[{"n":"Pompous Battlemage","m":"{R}","t":"Creature — Goblin Sorcerer","o":"Prowess\nThis creature enters prepared. (While it's prepared, you may cast a copy of its spell. Doing so unprepares it.)","p":"1","d":"1","l":null},{"n":"Improvised Act","m":"{R}","t":"Sorcery","o":"You may discard a card. If you do, draw a card.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"91","n":"Pyre Rhymer // Molten Tide","r":"r","c":"R","ci":"R","v":3.0,"t":"Creature — Elemental Sorcerer // Instant","f":[{"n":"Pyre Rhymer","m":"{1}{R}{R}","t":"Creature — Elemental Sorcerer","o":"Prowess\nThis creature enters prepared. (While it's prepared, you may cast a copy of its spell. Doing so unprepares it.)","p":"3","d":"3","l":null},{"n":"Molten Tide","m":"{R}","t":"Instant","o":"Until end of turn, whenever you tap a Mountain for mana, add an additional {R}.","p":null,"d":null,"l":null}],"pm":"R","wm":""},{"id":"92","n":"Skilled Battlecarver","r":"c","c":"R","ci":"R","v":2.0,"t":"Creature — Human Warrior","f":[{"n":"Skilled Battlecarver","m":"{1}{R}","t":"Creature — Human Warrior","o":"During your turn, this creature has first strike.\n{1}{R}: This creature gets +1/+0 until end of turn.","p":"2","d":"1","l":null}],"pm":"","wm":""},{"id":"93","n":"Stingcaster Mage","r":"m","c":"R","ci":"R","v":2.0,"t":"Creature — Human Wizard","f":[{"n":"Stingcaster Mage","m":"{1}{R}","t":"Creature — Human Wizard","o":"Haste\nWhen this creature enters, target instant or sorcery card in your graveyard gains flashback until end of turn. The flashback cost is equal to its mana cost. (You may cast that card from your graveyard for its flashback cost. Then exile it.)","p":"2","d":"1","l":null}],"pm":"","wm":""},{"id":"94","n":"Tether Technician","r":"c","c":"R","ci":"R","v":5.0,"t":"Creature — Minotaur Artificer","f":[{"n":"Tether Technician","m":"{4}{R}","t":"Creature — Minotaur Artificer","o":"Reach\nWhen this creature enters, you may discard a card. When you do, this creature deals 2 damage to any target.","p":"4","d":"5","l":null}],"pm":"","wm":""},{"id":"95","n":"Violent Echoes","r":"u","c":"R","ci":"R","v":4.0,"t":"Instant","f":[{"n":"Violent Echoes","m":"{2}{R}{R}","t":"Instant","o":"Violent Echoes deals 6 damage to target creature or planeswalker. If excess damage was dealt to that permanent this way, empower Jace X, where X is that excess damage. (Put that many loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"96","n":"Wrath of the Bloodmane","r":"c","c":"R","ci":"R","v":3.0,"t":"Instant","f":[{"n":"Wrath of the Bloodmane","m":"{2}{R}","t":"Instant","o":"This spell costs {1} less to cast if you control a legendary creature.\nWrath of the Bloodmane deals 4 damage to target creature or planeswalker.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"97","n":"Arcane Amphisbaena","r":"c","c":"G","ci":"G","v":2.0,"t":"Creature — Snake","f":[{"n":"Arcane Amphisbaena","m":"{1}{G}","t":"Creature — Snake","o":"Deathtouch\nWhen this creature enters, empower Jace 2. (Put two loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")","p":"1","d":"1","l":null}],"pm":"","wm":""},{"id":"98","n":"Bestial Incursion","r":"c","c":"G","ci":"G","v":4.0,"t":"Sorcery","f":[{"n":"Bestial Incursion","m":"{3}{G}","t":"Sorcery","o":"Create a 4/4 green Beast creature token with trample.\nFlashback {5}{G} (You may cast this card from your graveyard for its flashback cost. Then exile it.)","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"99","n":"Budding Insurgent","r":"c","c":"G","ci":"G","v":3.0,"t":"Creature — Dryad Scout","f":[{"n":"Budding Insurgent","m":"{2}{G}","t":"Creature — Dryad Scout","o":"Vigilance\nSacrifice this creature: Destroy target artifact or enchantment. If that permanent was a legendary enchantment, draw a card. Activate only as a sorcery.","p":"3","d":"3","l":null}],"pm":"","wm":""},{"id":"100","n":"Carnivorous Cultivator // Enroot","r":"r","c":"G","ci":"G","v":2.0,"t":"Creature — Elf Warlock // Sorcery","f":[{"n":"Carnivorous Cultivator","m":"{1}{G}","t":"Creature — Elf Warlock","o":"Deathtouch\nThis creature enters prepared.\nWhenever this creature deals combat damage to a player, return target land card from your graveyard to your hand.","p":"2","d":"3","l":null},{"n":"Enroot","m":"{G}","t":"Sorcery","o":"Search your library for a land card, put it into your graveyard, then shuffle.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"101","n":"Compel Brutality","r":"c","c":"G","ci":"G","v":2.0,"t":"Instant","f":[{"n":"Compel Brutality","m":"{1}{G}","t":"Instant","o":"Choose one —\n• Target creature you control deals damage equal to its power to target creature or planeswalker an opponent controls.\n• Target planeswalker you control deals damage equal to its loyalty to target creature or planeswalker an opponent controls.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"102","n":"Flourishing Grapple","r":"u","c":"G","ci":"G","v":1.0,"t":"Instant","f":[{"n":"Flourishing Grapple","m":"{G}","t":"Instant","o":"Target creature or planeswalker an opponent controls that's red or white loses all abilities until end of turn. Target creature you control deals damage equal to its power to that permanent.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"103","n":"Gardenize","r":"r","c":"G","ci":"G","v":3.0,"t":"Enchantment","f":[{"n":"Gardenize","m":"{1}{G}{G}","t":"Enchantment","o":"Whenever a creature you control dies, put a charge counter on this enchantment.\nAt the beginning of your first main phase, add {G} for each charge counter on this enchantment.","p":null,"d":null,"l":null}],"pm":"G","wm":""},{"id":"104","n":"Greenhouse Propagator","r":"c","c":"G","ci":"G","v":3.0,"t":"Creature — Cat Druid","f":[{"n":"Greenhouse Propagator","m":"{2}{G}","t":"Creature — Cat Druid","o":"Whenever another creature you control enters, you gain 1 life.\n{T}: Add {G}.","p":"2","d":"3","l":null}],"pm":"G","wm":""},{"id":"105","n":"Heartwood Crafter // Soul Tether","r":"u","c":"G","ci":"GR","v":1.0,"t":"Creature — Elf Artificer // Sorcery","f":[{"n":"Heartwood Crafter","m":"{G}","t":"Creature — Elf Artificer","o":"This creature enters prepared. (While it's prepared, you may cast a copy of its spell. Doing so unprepares it.)\n{T}: Add {C}. This mana can't be spent to cast spells from your hand.","p":"1","d":"1","l":null},{"n":"Soul Tether","m":"{2}{R/G}","t":"Sorcery","o":"Create a Heartwood token. (It's a red and green artifact with \"{T}: Add {R} or {G}.\")","p":null,"d":null,"l":null}],"pm":"C","wm":""},{"id":"106","n":"Hexhaven Invigorator","r":"m","c":"G","ci":"G","v":4.0,"t":"Creature — Chimera Horror","f":[{"n":"Hexhaven Invigorator","m":"{G}{G}{G}{G}","t":"Creature — Chimera Horror","o":"Vigilance\nWhenever this creature is dealt damage, you may search your library for up to that many land cards, put them onto the battlefield tapped, then shuffle.","p":"6","d":"6","l":null}],"pm":"","wm":""},{"id":"107","n":"Hungering Puppetbeast","r":"r","c":"G","ci":"G","v":5.0,"t":"Artifact Creature — Beast Construct","f":[{"n":"Hungering Puppetbeast","m":"{3}{G}{G}","t":"Artifact Creature — Beast Construct","o":"When this creature enters, create a Heartwood token. (It's a red and green artifact with \"{T}: Add {R} or {G}.\")\n{1}, Sacrifice another artifact: Put a +1/+1 counter on this creature. It gains your choice of trample, hexproof, or haste until end of turn.","p":"5","d":"5","l":null}],"pm":"GR","wm":""},{"id":"108","n":"Hunter's Axe","r":"u","c":"G","ci":"G","v":1.0,"t":"Artifact — Equipment","f":[{"n":"Hunter's Axe","m":"{G}","t":"Artifact — Equipment","o":"Equipped creature gets +2/+0 and has \"Whenever this creature attacks, it gains your choice of trample or deathtouch until end of turn.\"\nEquip {2} ({2}: Attach to target creature you control. Equip only as a sorcery.)","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"109","n":"Inspired Tethermage","r":"c","c":"G","ci":"G","v":3.0,"t":"Creature — Elf Warrior","f":[{"n":"Inspired Tethermage","m":"{2}{G}","t":"Creature — Elf Warrior","o":"Whenever you put one or more loyalty counters on a planeswalker, put a +1/+1 counter on this creature.\n{6}: Empower Jace 2. (Put two loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")","p":"3","d":"2","l":null}],"pm":"","wm":""},{"id":"110","n":"Omnipresence","r":"m","c":"G","ci":"G","v":8.0,"t":"Enchantment","f":[{"n":"Omnipresence","m":"{5}{G}{G}{G}","t":"Enchantment","o":"You may cast spells with mana value less than or equal to the number of creatures you control from your hand without paying their mana costs.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"111","n":"Puppet Crafting","r":"r","c":"G","ci":"G","v":2.0,"t":"Enchantment — Aura","f":[{"n":"Puppet Crafting","m":"{1}{G}","t":"Enchantment — Aura","o":"Enchant artifact or non-Aura enchantment\nEnchanted permanent is a Construct creature with base power and toughness 5/5 in addition to its other types.\n{4}{G}: Return this card from your graveyard to your hand.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"112","n":"Restore with Empathy","r":"u","c":"G","ci":"G","v":3.0,"t":"Instant","f":[{"n":"Restore with Empathy","m":"{2}{G}","t":"Instant","o":"Return target permanent card from your graveyard to your hand. You gain 4 life.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"113","n":"Simulacrum Shaper","r":"r","c":"G","ci":"G","v":3.0,"t":"Creature — Elf Druid","f":[{"n":"Simulacrum Shaper","m":"{1}{G}{G}","t":"Creature — Elf Druid","o":"When this creature enters, you may search your library for a basic land card, put that card onto the battlefield tapped, then shuffle.\nWhen this creature dies, draw a card.","p":"2","d":"2","l":null}],"pm":"","wm":""},{"id":"114","n":"Something Worth Saving","r":"c","c":"G","ci":"G","v":2.0,"t":"Instant","f":[{"n":"Something Worth Saving","m":"{1}{G}","t":"Instant","o":"Mill four cards. You may put a permanent card from among them into your hand. You gain 1 life. (To mill four cards, put the top four cards of your library into your graveyard.)","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"115","n":"Sureshot Sower","r":"c","c":"G","ci":"G","v":2.0,"t":"Creature — Human Archer","f":[{"n":"Sureshot Sower","m":"{1}{G}","t":"Creature — Human Archer","o":"Reach\n{3}{G}, Discard this card: Destroy target creature with flying.","p":"3","d":"1","l":null}],"pm":"","wm":""},{"id":"116","n":"Tarmogoyf","r":"m","c":"G","ci":"G","v":2.0,"t":"Creature — Lhurgoyf","f":[{"n":"Tarmogoyf","m":"{1}{G}","t":"Creature — Lhurgoyf","o":"Tarmogoyf's power is equal to the number of card types among cards in all graveyards and its toughness is equal to that number plus 1.","p":"*","d":"1+*","l":null}],"pm":"","wm":""},{"id":"117","n":"Tethermage's Advantage","r":"c","c":"G","ci":"G","v":1.0,"t":"Instant","f":[{"n":"Tethermage's Advantage","m":"{G}","t":"Instant","o":"Target creature gets +2/+2 and gains reach until end of turn. Untap it.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"118","n":"Verdant Kraken","r":"r","c":"G","ci":"G","v":7.0,"t":"Creature — Plant Kraken","f":[{"n":"Verdant Kraken","m":"{4}{G}{G}{G}","t":"Creature — Plant Kraken","o":"At the beginning of each player's upkeep, you create a 3/3 green Forest Tentacle land creature token. (It has \"{T}: Add {G}.\" It's affected by summoning sickness until your next turn.)","p":"6","d":"6","l":null}],"pm":"G","wm":""},{"id":"119","n":"Vinelasher Adept","r":"c","c":"G","ci":"G","v":6.0,"t":"Creature — Rhino Soldier","f":[{"n":"Vinelasher Adept","m":"{4}{G}{G}","t":"Creature — Rhino Soldier","o":"Reach\nWhen this creature enters, put three +1/+1 counters on target creature.\nBasic landcycling {2} ({2}, Discard this card: Search your library for a basic land card, reveal it, put it into your hand, then shuffle.)","p":"2","d":"4","l":null}],"pm":"","wm":""},{"id":"120","n":"Wrecking Gecko","r":"c","c":"G","ci":"G","v":5.0,"t":"Artifact Creature — Lizard Construct","f":[{"n":"Wrecking Gecko","m":"{4}{G}","t":"Artifact Creature — Lizard Construct","o":"Ward {2} (Whenever this creature becomes the target of a spell or ability an opponent controls, counter it unless that player pays {2}.)\n{6}{G}{G}: This creature gets +4/+4 and gains trample until end of turn.","p":"5","d":"5","l":null}],"pm":"","wm":""},{"id":"121","n":"Aerid Konstrari","r":"m","c":"GR","ci":"GR","v":4.0,"t":"Legendary Creature — Elder Sphinx","f":[{"n":"Aerid Konstrari","m":"{1}{R}{G}{G}","t":"Legendary Creature — Elder Sphinx","o":"Flying\nWhen Aerid Konstrari enters or dies, create a Heartwood token. (It's a red and green artifact with \"{T}: Add {R} or {G}.\")\n{6}: Create a Heartwood token. Then Aerid Konstrari gets +X/+0 until end of turn, where X is the number of artifacts you control.","p":"5","d":"4","l":null}],"pm":"GR","wm":""},{"id":"122","n":"Avatar of Burgeoning Echoes","r":"m","c":"GU","ci":"GU","v":2.0,"t":"Creature — Avatar","f":[{"n":"Avatar of Burgeoning Echoes","m":"{G}{U}","t":"Creature — Avatar","o":"Landfall — Whenever a land you control enters, empower Jace 2. (Put two loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")\nPlaneswalkers you control have \"[−10]: Put a +1/+1 counter on target creature for each land you control.\"","p":"2","d":"3","l":null}],"pm":"","wm":""},{"id":"123","n":"Blessed Ghoul","r":"c","c":"BW","ci":"BW","v":1.0,"t":"Creature — Zombie Cleric","f":[{"n":"Blessed Ghoul","m":"{W/B}","t":"Creature — Zombie Cleric","o":"Lifelink\n{2}{W/B}: Return this card from your graveyard to your hand.","p":"1","d":"1","l":null}],"pm":"","wm":""},{"id":"124","n":"Bloombrute","r":"u","c":"GW","ci":"GW","v":4.0,"t":"Creature — Plant Elemental","f":[{"n":"Bloombrute","m":"{2}{G}{W}","t":"Creature — Plant Elemental","o":"Whenever you gain life, draw a card. This ability triggers only once each turn.\n{4}{G}{W}: Target creature gains trample and lifelink until end of turn.","p":"4","d":"4","l":null}],"pm":"","wm":""},{"id":"125","n":"Charge the Sanctum","r":"c","c":"RW","ci":"RW","v":3.0,"t":"Instant","f":[{"n":"Charge the Sanctum","m":"{2}{R/W}","t":"Instant","o":"Choose one —\n• Creatures you control get +2/+0 until end of turn.\n• Target creature gets +2/+0 and gains first strike until end of turn. Put a +1/+1 counter on it.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"126","n":"Clash of Elements","r":"u","c":"RU","ci":"RU","v":3.0,"t":"Instant","f":[{"n":"Clash of Elements","m":"{1}{U}{R}","t":"Instant","o":"Choose target nonland permanent. Its owner may put it on top of their library. If they do, Clash of Elements deals 2 damage to them. If they didn't put the card on top of their library, they put it on the bottom.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"127","n":"Craftwork Crusher","r":"u","c":"GR","ci":"GR","v":7.0,"t":"Artifact Creature — Boar Construct","f":[{"n":"Craftwork Crusher","m":"{3}{R}{R}{G}{G}","t":"Artifact Creature — Boar Construct","o":"Trample\nWhen this creature enters, choose two —\n• This creature deals 4 damage to target creature or planeswalker.\n• Create a 2/2 colorless Wizard Soldier creature token named Cadet.\n• Draw a card.","p":"7","d":"5","l":null}],"pm":"","wm":""},{"id":"128","n":"Denzilore Fatehold","r":"m","c":"UW","ci":"UW","v":4.0,"t":"Legendary Creature — Elder Sphinx","f":[{"n":"Denzilore Fatehold","m":"{1}{W}{U}{U}","t":"Legendary Creature — Elder Sphinx","o":"Flash\nFlying\nWhenever you scry or surveil, put a +1/+1 counter on each creature you control.","p":"3","d":"4","l":null}],"pm":"","wm":""},{"id":"129","n":"Desperate Futurescribe","r":"u","c":"UW","ci":"UW","v":4.0,"t":"Creature — Kor Scout","f":[{"n":"Desperate Futurescribe","m":"{2}{W}{U}","t":"Creature — Kor Scout","o":"Flying\nAt the beginning of combat on your turn, another target creature you control gets +1/+1 until end of turn. If you've scried or surveilled this turn, put a +1/+1 counter on that creature instead.","p":"3","d":"4","l":null}],"pm":"","wm":""},{"id":"130","n":"Emergency Phytomedic // Seed Suture","r":"c","c":"GW","ci":"GW","v":1.0,"t":"Creature — Dryad Cleric // Sorcery","f":[{"n":"Emergency Phytomedic","m":"{G/W}","t":"Creature — Dryad Cleric","o":"This creature enters prepared. (While it's prepared, you may cast a copy of its spell. Doing so unprepares it.)","p":"1","d":"1","l":null},{"n":"Seed Suture","m":"{G/W}","t":"Sorcery","o":"Put a +1/+1 counter on target creature. You gain 1 life.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"131","n":"Entrust the Spark","r":"r","c":"GU","ci":"GU","v":5.0,"t":"Sorcery","f":[{"n":"Entrust the Spark","m":"{3}{G}{U}","t":"Sorcery","o":"You may sacrifice a planeswalker. If you do, search your library for a planeswalker card, put it onto the battlefield, then shuffle.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"132","n":"Fatehold Charm","r":"u","c":"UW","ci":"UW","v":2.0,"t":"Instant","f":[{"n":"Fatehold Charm","m":"{W}{U}","t":"Instant","o":"Choose one —\n• Draw a card. Empower Jace 2.\n• Return target spell or creature to its owner's hand.\n• Creatures you control get +1/+2 until end of turn.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"133","n":"Fatehold Chronologist // Peer Review","r":"c","c":"UW","ci":"UW","v":2.0,"t":"Creature — Bird Wizard // Sorcery","f":[{"n":"Fatehold Chronologist","m":"{1}{W/U}","t":"Creature — Bird Wizard","o":"Flying\nThis creature enters prepared. (While it's prepared, you may cast a copy of its spell. Doing so unprepares it.)","p":"1","d":"2","l":null},{"n":"Peer Review","m":"{2}{W/U}","t":"Sorcery","o":"Create a 2/2 colorless Wizard Soldier creature token named Cadet. Surveil 1.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"134","n":"Ferocity of the Hunt","r":"c","c":"BG","ci":"BG","v":2.0,"t":"Enchantment — Aura","f":[{"n":"Ferocity of the Hunt","m":"{1}{B/G}","t":"Enchantment — Aura","o":"Flash\nEnchant creature\nEnchanted creature gets +1/+0 and has deathtouch.\nWhen enchanted creature dies, return that card to the battlefield tapped under its owner's control.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"135","n":"Frostbite Pyromental","r":"r","c":"RU","ci":"RU","v":3.0,"t":"Creature — Elemental","f":[{"n":"Frostbite Pyromental","m":"{U}{R}{R}","t":"Creature — Elemental","o":"Trample, haste\nWhenever this creature deals combat damage to a player, draw two cards.\nAt the beginning of the end step, sacrifice this creature.","p":"4","d":"4","l":null}],"pm":"","wm":""},{"id":"136","n":"Grim Repriser","r":"u","c":"BR","ci":"BR","v":2.0,"t":"Creature — Zombie Bard","f":[{"n":"Grim Repriser","m":"{B}{R}","t":"Creature — Zombie Bard","o":"Prowess (Whenever you cast a noncreature spell, this creature gets +1/+1 until end of turn.)\n{B}{R}: Return this card from your graveyard to the battlefield with a finality counter on it. Activate only if an opponent has been dealt noncombat damage this turn. (If a creature with a finality counter on it would die, exile it instead.)","p":"2","d":"2","l":null}],"pm":"","wm":""},{"id":"137","n":"Ingris Stingerquill","r":"m","c":"BR","ci":"BR","v":3.0,"t":"Legendary Creature — Elder Sphinx","f":[{"n":"Ingris Stingerquill","m":"{B}{R}{R}","t":"Legendary Creature — Elder Sphinx","o":"Flying\nWhenever a creature you control attacks, that creature deals 1 damage to each opponent.\n{4}: Create a 2/2 colorless Wizard Soldier creature token named Cadet. Then creatures you control gain haste until end of turn.","p":"1","d":"4","l":null}],"pm":"","wm":""},{"id":"138","n":"Konstrari Charm","r":"u","c":"GR","ci":"GR","v":2.0,"t":"Instant","f":[{"n":"Konstrari Charm","m":"{R}{G}","t":"Instant","o":"Choose one —\n• Konstrari Charm deals 6 damage to target creature with flying.\n• Put two +1/+1 counters on target creature. It gains trample until end of turn.\n• Add {C}{C}{C}.","p":null,"d":null,"l":null}],"pm":"C","wm":""},{"id":"139","n":"Konstrari Improviser // Soul Tether","r":"c","c":"GR","ci":"GR","v":2.0,"t":"Creature — Human Artificer // Sorcery","f":[{"n":"Konstrari Improviser","m":"{1}{R/G}","t":"Creature — Human Artificer","o":"This creature enters prepared. (While it's prepared, you may cast a copy of its spell. Doing so unprepares it.)","p":"2","d":"2","l":null},{"n":"Soul Tether","m":"{2}{R/G}","t":"Sorcery","o":"Create a Heartwood token. (It's a red and green artifact with \"{T}: Add {R} or {G}.\")","p":null,"d":null,"l":null}],"pm":"GR","wm":""},{"id":"140","n":"Kwia Vigorbloom","r":"m","c":"GW","ci":"GW","v":6.0,"t":"Legendary Creature — Elder Sphinx","f":[{"n":"Kwia Vigorbloom","m":"{3}{G}{W}{W}","t":"Legendary Creature — Elder Sphinx","o":"Flying, vigilance, lifelink, ward {2}\nWhenever you gain life, create a colorless artifact token named Lotus with \"{T}, Sacrifice this token: Add three mana of any one color.\" This ability triggers only once each turn.","p":"6","d":"6","l":null}],"pm":"BGRUW","wm":""},{"id":"141","n":"Mind Meanderer","r":"u","c":"GU","ci":"GU","v":6.0,"t":"Creature — Bird Fish Illusion","f":[{"n":"Mind Meanderer","m":"{3}{G}{U}{U}","t":"Creature — Bird Fish Illusion","o":"Flying\nThis creature has vigilance as long as you control a Jace planeswalker.\nWhen this creature enters, it fights up to one target creature an opponent controls. (Each deals damage equal to its power to the other.)","p":"4","d":"4","l":null}],"pm":"","wm":""},{"id":"142","n":"Null Summoner","r":"r","c":"BU","ci":"BU","v":4.0,"t":"Creature — Human Warlock","f":[{"n":"Null Summoner","m":"{2}{U}{B}","t":"Creature — Human Warlock","o":"When this creature enters, if you cast it, target opponent reveals their hand. You choose a nonland card from it. Exile that card.\nThreshold — As long as there are seven or more cards in your graveyard, you may cast the exiled card, and mana of any type can be spent to cast that spell.","p":"4","d":"2","l":null}],"pm":"","wm":""},{"id":"143","n":"Paradox Shaper // Omit Variables","r":"u","c":"BU","ci":"BU","v":2.0,"t":"Creature — Octopus Wizard // Sorcery","f":[{"n":"Paradox Shaper","m":"{1}{U/B}","t":"Creature — Octopus Wizard","o":"At the beginning of your upkeep, if this creature isn't prepared, it becomes prepared.\n{2}: Put target card from your graveyard on the bottom of your library.","p":"1","d":"3","l":null},{"n":"Omit Variables","m":"{U/B}","t":"Sorcery","o":"Mill three cards. (Put the top three cards of your library into your graveyard.)","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"144","n":"Primal Witchstalker","r":"u","c":"BG","ci":"BG","v":3.0,"t":"Creature — Wolf","f":[{"n":"Primal Witchstalker","m":"{1}{B}{G}","t":"Creature — Wolf","o":"Menace (This creature can't be blocked except by two or more creatures.)\nWhen this creature enters, mill four cards. When you do, return target land card from your graveyard to the battlefield tapped. (To mill four cards, put the top four cards of your library into your graveyard.)","p":"2","d":"1","l":null}],"pm":"","wm":""},{"id":"145","n":"Proctor of Potential","r":"r","c":"UW","ci":"UW","v":2.0,"t":"Creature — Human Cleric","f":[{"n":"Proctor of Potential","m":"{W}{U}","t":"Creature — Human Cleric","o":"Whenever this creature or another creature you control enters, surveil 1. (Look at the top card of your library. You may put it into your graveyard.)\n{W}{U}: Return this card from your graveyard to the battlefield with a finality counter on it. Activate only if you've scried or surveilled this turn. (If a creature with a finality counter on it would die, exile it instead.)","p":"3","d":"1","l":null}],"pm":"","wm":""},{"id":"146","n":"Prudent Fateseer // Peer Review","r":"u","c":"UW","ci":"UW","v":3.0,"t":"Creature — Dwarf Wizard // Sorcery","f":[{"n":"Prudent Fateseer","m":"{1}{W/U}{W/U}","t":"Creature — Dwarf Wizard","o":"This creature enters prepared.\nWhenever you scry or surveil, creatures you control get +1/+0 until end of turn. This ability triggers only once each turn.","p":"1","d":"4","l":null},{"n":"Peer Review","m":"{2}{W/U}","t":"Sorcery","o":"Create a 2/2 colorless Wizard Soldier creature token named Cadet. Surveil 1.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"147","n":"Recursive Recruitment","r":"u","c":"BU","ci":"BU","v":4.0,"t":"Sorcery","f":[{"n":"Recursive Recruitment","m":"{2}{U}{B}","t":"Sorcery","o":"Create two 2/2 colorless Wizard Soldier creature tokens named Cadet. If this spell was cast from a graveyard, put a +1/+1 counter on each of them for every three cards in your graveyard.\nFlashback {6}{U}{B} (You may cast this card from your graveyard for its flashback cost. Then exile it.)","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"148","n":"Solarium Sentry","r":"r","c":"GW","ci":"GW","v":2.0,"t":"Creature — Cat Soldier","f":[{"n":"Solarium Sentry","m":"{G}{W}","t":"Creature — Cat Soldier","o":"Whenever an opponent casts a spell with mana value 2 or less, you gain 2 life.","p":"3","d":"3","l":null}],"pm":"","wm":""},{"id":"149","n":"Solitary Cell","r":"r","c":"RW","ci":"RW","v":2.0,"t":"Artifact","f":[{"n":"Solitary Cell","m":"{R}{W}","t":"Artifact","o":"When this artifact enters, exile target nonland permanent an opponent controls with mana value 3 or less until this artifact leaves the battlefield.\n{1}, {T}, Discard a legendary card: Draw a card.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"150","n":"Stingerquill Charm","r":"u","c":"BR","ci":"BR","v":2.0,"t":"Instant","f":[{"n":"Stingerquill Charm","m":"{B}{R}","t":"Instant","o":"Choose one —\n• Stingerquill Charm deals 3 damage to any target.\n• Target creature gains first strike and deathtouch until end of turn.\n• Create a 2/2 colorless Wizard Soldier creature token named Cadet. It gains haste until end of turn.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"151","n":"Stingerquill Voxmancer // Vicious Verse","r":"u","c":"BR","ci":"BR","v":1.0,"t":"Creature — Goblin Sorcerer // Sorcery","f":[{"n":"Stingerquill Voxmancer","m":"{B/R}","t":"Creature — Goblin Sorcerer","o":"At the beginning of your upkeep, if this creature isn't prepared, it becomes prepared. (While it's prepared, you may cast a copy of its spell. Doing so unprepares it.)","p":"1","d":"2","l":null},{"n":"Vicious Verse","m":"{B/R}","t":"Sorcery","o":"Vicious Verse deals 1 damage to target opponent.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"152","n":"Stinging Vitriol","r":"r","c":"BR","ci":"BR","v":2.0,"t":"Sorcery","f":[{"n":"Stinging Vitriol","m":"{B}{R}","t":"Sorcery","o":"Stinging Vitriol deals 2 damage to target opponent. That player reveals their hand. You choose a nonland card from it. They discard that card.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"153","n":"Tam's Resistance","r":"c","c":"GU","ci":"GU","v":2.0,"t":"Sorcery","f":[{"n":"Tam's Resistance","m":"{1}{G/U}","t":"Sorcery","o":"Put a +1/+1 counter on up to one target creature. It gains vigilance until end of turn.\nEmpower Jace 4. (Put four loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"154","n":"Tenured Tethermage","r":"r","c":"GR","ci":"GR","v":3.0,"t":"Creature — Human Artificer","f":[{"n":"Tenured Tethermage","m":"{1}{R}{G}","t":"Creature — Human Artificer","o":"When this creature enters, you may sacrifice a land. If you do, create two tapped Heartwood tokens. (They're red and green artifacts with \"{T}: Add {R} or {G}.\")\nTap two untapped artifacts you control: Put two +1/+1 counters on this creature.","p":"1","d":"1","l":null}],"pm":"GR","wm":""},{"id":"155","n":"Theorix Charm","r":"u","c":"BU","ci":"BU","v":2.0,"t":"Instant","f":[{"n":"Theorix Charm","m":"{U}{B}","t":"Instant","o":"Choose one —\n• Counter target noncreature spell unless its controller pays {2}.\n• Target creature gets -2/-2 until end of turn.\n• Mill three cards, then draw a card. (To mill three cards, put the top three cards of your library into your graveyard.)","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"156","n":"Theorix Metamage // Omit Variables","r":"c","c":"BU","ci":"BU","v":3.0,"t":"Creature — Shade Wizard // Sorcery","f":[{"n":"Theorix Metamage","m":"{2}{U/B}","t":"Creature — Shade Wizard","o":"This creature enters prepared. (While it's prepared, you may cast a copy of its spell. Doing so unprepares it.)\nThreshold — This creature gets +1/+0 and has flying as long as there are seven or more cards in your graveyard.","p":"2","d":"3","l":null},{"n":"Omit Variables","m":"{U/B}","t":"Sorcery","o":"Mill three cards. (Put the top three cards of your library into your graveyard.)","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"157","n":"Twinned Vision","r":"c","c":"RU","ci":"RU","v":2.0,"t":"Instant","f":[{"n":"Twinned Vision","m":"{1}{U/R}","t":"Instant","o":"Draw a card. If this spell wasn't cast from your hand, draw two cards instead.\nFlashback—{1}{U/R}{U/R}, Discard a card. (You may cast this card from your graveyard for its flashback cost. Then exile it.)","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"158","n":"Twisted Fates","r":"u","c":"BW","ci":"BW","v":5.0,"t":"Sorcery","f":[{"n":"Twisted Fates","m":"{2}{W}{W}{B}","t":"Sorcery","o":"Destroy target nonland permanent. Put a +1/+1 counter on each creature target player controls.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"159","n":"Uldaros Theorix","r":"m","c":"BU","ci":"BU","v":6.0,"t":"Legendary Creature — Elder Sphinx","f":[{"n":"Uldaros Theorix","m":"{3}{U}{B}{B}","t":"Legendary Creature — Elder Sphinx","o":"Flying\nWhen Uldaros Theorix enters, if you cast him, exile up to one target nonland card of each card type from your graveyard. Copy those cards. You may cast any number of spells with total mana value 6 or less from among the copies without paying their mana costs. (Permanent spells cast this way become tokens.)","p":"5","d":"5","l":null}],"pm":"","wm":""},{"id":"160","n":"Vigorbloom Charm","r":"u","c":"GW","ci":"GW","v":2.0,"t":"Instant","f":[{"n":"Vigorbloom Charm","m":"{G}{W}","t":"Instant","o":"Choose one —\n• Target permanent you control gains hexproof and indestructible until end of turn.\n• You draw a card and gain 3 life.\n• Put a +1/+1 counter on target creature you control. Then it fights target creature an opponent controls. (Each deals damage equal to its power to the other.)","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"161","n":"Vigorbloom Vanguard // Seed Suture","r":"u","c":"GW","ci":"GW","v":2.0,"t":"Creature — Troll Druid // Sorcery","f":[{"n":"Vigorbloom Vanguard","m":"{1}{G/W}","t":"Creature — Troll Druid","o":"This creature enters prepared. (While it's prepared, you may cast a copy of its spell. Doing so unprepares it.)\nEach creature you control with a +1/+1 counter on it has vigilance.","p":"2","d":"2","l":null},{"n":"Seed Suture","m":"{G/W}","t":"Sorcery","o":"Put a +1/+1 counter on target creature. You gain 1 life.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"162","n":"Vindictive Triumph","r":"r","c":"BW","ci":"BW","v":3.0,"t":"Instant","f":[{"n":"Vindictive Triumph","m":"{W}{B}{B}","t":"Instant","o":"Exile target creature or planeswalker. If that permanent's mana value was 3 or less, return it to the battlefield tapped under your control. Exile it at the beginning of the next end step.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"163","n":"Warrior's Blades","r":"u","c":"RW","ci":"RW","v":4.0,"t":"Artifact — Equipment","f":[{"n":"Warrior's Blades","m":"{2}{R}{W}","t":"Artifact — Equipment","o":"When this Equipment enters, it deals 3 damage to any target and you gain 3 life.\nEquipped creature gets +2/+1.\nEquip {3}. This ability costs {1} less to activate for each +1/+1 counter on the creature it targets.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"164","n":"Whiplash Wordsmith // Vicious Verse","r":"c","c":"BR","ci":"BR","v":4.0,"t":"Creature — Vampire Sorcerer // Sorcery","f":[{"n":"Whiplash Wordsmith","m":"{3}{B/R}","t":"Creature — Vampire Sorcerer","o":"This creature enters prepared. (While it's prepared, you may cast a copy of its spell. Doing so unprepares it.)\nAs long as an opponent was dealt noncombat damage this turn, this creature has flying and haste.","p":"3","d":"3","l":null},{"n":"Vicious Verse","m":"{B/R}","t":"Sorcery","o":"Vicious Verse deals 1 damage to target opponent.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"165","n":"Woodwork Prodigy // Soul Tether","r":"u","c":"GR","ci":"GR","v":3.0,"t":"Creature — Cat Druid // Sorcery","f":[{"n":"Woodwork Prodigy","m":"{2}{R/G}","t":"Creature — Cat Druid","o":"At the beginning of your upkeep, if this creature isn't prepared, it becomes prepared. (While it's prepared, you may cast a copy of its spell. Doing so unprepares it.)","p":"3","d":"3","l":null},{"n":"Soul Tether","m":"{2}{R/G}","t":"Sorcery","o":"Create a Heartwood token. (It's a red and green artifact with \"{T}: Add {R} or {G}.\")","p":null,"d":null,"l":null}],"pm":"GR","wm":""},{"id":"166","n":"Afterthought Sentry","r":"c","c":"","ci":"","v":2.0,"t":"Artifact Creature — Gargoyle","f":[{"n":"Afterthought Sentry","m":"{2}","t":"Artifact Creature — Gargoyle","o":"{2}: This creature gains flying until end of turn.\nWhenever this creature attacks, exile up to one target card from a graveyard.","p":"2","d":"2","l":null}],"pm":"","wm":""},{"id":"167","n":"Archive Arbiter","r":"u","c":"","ci":"","v":6.0,"t":"Artifact Creature — Sphinx","f":[{"n":"Archive Arbiter","m":"{6}","t":"Artifact Creature — Sphinx","o":"Flying\nWhen this creature enters, choose one —\n• Destroy target noncreature, nonland permanent.\n• You gain 4 life.","p":"4","d":"4","l":null}],"pm":"","wm":""},{"id":"168","n":"Codie, Ravenous Codex","r":"r","c":"","ci":"BGRUW","v":3.0,"t":"Legendary Artifact Creature — Book Construct","f":[{"n":"Codie, Ravenous Codex","m":"{3}","t":"Legendary Artifact Creature — Book Construct","o":"Whenever you cast a prepared spell, copy it. You may choose new targets for the copy.\n{W}{U}{B}{R}{G}, {T}: Each creature you control becomes prepared. (Only creatures with prepare spells can become prepared.)","p":"1","d":"4","l":null}],"pm":"","wm":"echoverse"},{"id":"169","n":"The Echoverse Fulcrum","r":"m","c":"","ci":"","v":2.0,"t":"Legendary Artifact","f":[{"n":"The Echoverse Fulcrum","m":"{2}","t":"Legendary Artifact","o":"When The Echoverse Fulcrum enters, draw a card, then discard a card.\n{5}, {T}, Exile The Echoverse Fulcrum: Destroy all creatures. Activate only as a sorcery.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"170","n":"Eye of Jace","r":"u","c":"","ci":"","v":1.0,"t":"Artifact","f":[{"n":"Eye of Jace","m":"{1}","t":"Artifact","o":"At the beginning of your upkeep, surveil 1. Then if there are seven or more cards in your graveyard, sacrifice this artifact, it deals 2 damage to each opponent, and you gain 2 life. (To surveil 1, look at the top card of your library. You may put it into your graveyard.)","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"171","n":"Keeper of the Quiet Hour","r":"c","c":"","ci":"","v":3.0,"t":"Artifact Creature — Chimera","f":[{"n":"Keeper of the Quiet Hour","m":"{3}","t":"Artifact Creature — Chimera","o":"When this creature enters, empower Jace 2. (Put two loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")","p":"3","d":"2","l":null}],"pm":"","wm":""},{"id":"172","n":"Living Library","r":"c","c":"","ci":"","v":2.0,"t":"Artifact Creature — Book Illusion","f":[{"n":"Living Library","m":"{2}","t":"Artifact Creature — Book Illusion","o":"{6}, Sacrifice this creature: Choose target creature or planeswalker an opponent controls. Its owner shuffles it into their library.","p":"0","d":"4","l":null}],"pm":"","wm":""},{"id":"173","n":"Medic's Kitesail","r":"c","c":"","ci":"","v":2.0,"t":"Artifact — Equipment","f":[{"n":"Medic's Kitesail","m":"{2}","t":"Artifact — Equipment","o":"Equipped creature gets +1/+0 and has flying and \"Whenever this creature attacks, you gain 1 life.\"\nEquip {2} ({2}: Attach to target creature you control. Equip only as a sorcery.)","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"174","n":"Murmuring Volume","r":"c","c":"","ci":"","v":3.0,"t":"Artifact — Book","f":[{"n":"Murmuring Volume","m":"{3}","t":"Artifact — Book","o":"{T}: Add one mana of any color.\n{2}, {T}, Discard a card: Draw a card.","p":null,"d":null,"l":null}],"pm":"BGRUW","wm":""},{"id":"175","n":"Dedicated Commons","r":"c","c":"","ci":"RW","v":0.0,"t":"Land","f":[{"n":"Dedicated Commons","m":"","t":"Land","o":"This land enters tapped unless you control a planeswalker.\n{T}: Add {R} or {W}.","p":null,"d":null,"l":null}],"pm":"RW","wm":""},{"id":"176","n":"Deserted Beach","r":"r","c":"","ci":"UW","v":0.0,"t":"Land","f":[{"n":"Deserted Beach","m":"","t":"Land","o":"This land enters tapped unless you control two or more other lands.\n{T}: Add {W} or {U}.","p":null,"d":null,"l":null}],"pm":"UW","wm":""},{"id":"177","n":"Fatehold Annex","r":"c","c":"","ci":"UW","v":0.0,"t":"Land","f":[{"n":"Fatehold Annex","m":"","t":"Land","o":"This land enters tapped unless you control a planeswalker.\n{T}: Add {W} or {U}.","p":null,"d":null,"l":null}],"pm":"UW","wm":""},{"id":"178","n":"Formidable Commons","r":"c","c":"","ci":"BG","v":0.0,"t":"Land","f":[{"n":"Formidable Commons","m":"","t":"Land","o":"This land enters tapped unless you control a planeswalker.\n{T}: Add {B} or {G}.","p":null,"d":null,"l":null}],"pm":"BG","wm":""},{"id":"179","n":"Hall of Echoes","r":"r","c":"","ci":"","v":0.0,"t":"Land","f":[{"n":"Hall of Echoes","m":"","t":"Land","o":"{T}: Add {C}.\n{5}: This land becomes a copy of target creature you control until end of turn. The \"legend rule\" doesn't apply to permanents you control this turn.","p":null,"d":null,"l":null}],"pm":"C","wm":""},{"id":"180","n":"Haunted Ridge","r":"r","c":"","ci":"BR","v":0.0,"t":"Land","f":[{"n":"Haunted Ridge","m":"","t":"Land","o":"This land enters tapped unless you control two or more other lands.\n{T}: Add {B} or {R}.","p":null,"d":null,"l":null}],"pm":"BR","wm":""},{"id":"181","n":"Hexhaven Dueling Arena","r":"u","c":"","ci":"","v":0.0,"t":"Land","f":[{"n":"Hexhaven Dueling Arena","m":"","t":"Land","o":"{T}: Add {C}.\n{2}, {T}: Target creature that attacked this turn becomes prepared. Activate only as a sorcery. (Only creatures with prepare spells can become prepared.)\n{4}, {T}: Target creature becomes prepared.","p":null,"d":null,"l":null}],"pm":"C","wm":""},{"id":"182","n":"Innovative Commons","r":"c","c":"","ci":"RU","v":0.0,"t":"Land","f":[{"n":"Innovative Commons","m":"","t":"Land","o":"This land enters tapped unless you control a planeswalker.\n{T}: Add {U} or {R}.","p":null,"d":null,"l":null}],"pm":"RU","wm":""},{"id":"183","n":"Konstrari Annex","r":"c","c":"","ci":"GR","v":0.0,"t":"Land","f":[{"n":"Konstrari Annex","m":"","t":"Land","o":"This land enters tapped unless you control a planeswalker.\n{T}: Add {R} or {G}.","p":null,"d":null,"l":null}],"pm":"GR","wm":""},{"id":"184","n":"Meticulous Commons","r":"c","c":"","ci":"BW","v":0.0,"t":"Land","f":[{"n":"Meticulous Commons","m":"","t":"Land","o":"This land enters tapped unless you control a planeswalker.\n{T}: Add {W} or {B}.","p":null,"d":null,"l":null}],"pm":"BW","wm":""},{"id":"185","n":"Overgrown Farmland","r":"r","c":"","ci":"GW","v":0.0,"t":"Land","f":[{"n":"Overgrown Farmland","m":"","t":"Land","o":"This land enters tapped unless you control two or more other lands.\n{T}: Add {G} or {W}.","p":null,"d":null,"l":null}],"pm":"GW","wm":""},{"id":"186","n":"Rockfall Vale","r":"r","c":"","ci":"GR","v":0.0,"t":"Land","f":[{"n":"Rockfall Vale","m":"","t":"Land","o":"This land enters tapped unless you control two or more other lands.\n{T}: Add {R} or {G}.","p":null,"d":null,"l":null}],"pm":"GR","wm":""},{"id":"187","n":"Roiling Canopy","r":"r","c":"","ci":"G","v":0.0,"t":"Land","f":[{"n":"Roiling Canopy","m":"","t":"Land","o":"This land enters tapped.\nWhenever a Forest you control enters, if you control at least five other Forests, target creature you control gets +3/+3 until end of turn.\n{T}: Add {G}.","p":null,"d":null,"l":null}],"pm":"G","wm":""},{"id":"188","n":"Room of Refuge","r":"c","c":"","ci":"","v":0.0,"t":"Land","f":[{"n":"Room of Refuge","m":"","t":"Land","o":"This land enters tapped. As it enters, choose a color.\n{T}: Add one mana of the chosen color.\n{5}, {T}, Sacrifice this land: Put two +1/+1 counters on target creature. Activate only as a sorcery.","p":null,"d":null,"l":null}],"pm":"BGRUW","wm":""},{"id":"189","n":"Shipwreck Marsh","r":"r","c":"","ci":"BU","v":0.0,"t":"Land","f":[{"n":"Shipwreck Marsh","m":"","t":"Land","o":"This land enters tapped unless you control two or more other lands.\n{T}: Add {U} or {B}.","p":null,"d":null,"l":null}],"pm":"BU","wm":""},{"id":"190","n":"Stingerquill Annex","r":"c","c":"","ci":"BR","v":0.0,"t":"Land","f":[{"n":"Stingerquill Annex","m":"","t":"Land","o":"This land enters tapped unless you control a planeswalker.\n{T}: Add {B} or {R}.","p":null,"d":null,"l":null}],"pm":"BR","wm":""},{"id":"191","n":"Theorist's Sanctum","r":"r","c":"","ci":"U","v":0.0,"t":"Land — Island","f":[{"n":"Theorist's Sanctum","m":"","t":"Land — Island","o":"({T}: Add {U}.)\nAs this land enters, you may behold a Jace. If you don't, this land enters tapped. (To behold a Jace, choose a Jace you control or reveal a Jace card from your hand.)\n{2}{U}, {T}: Empower Jace 2.","p":null,"d":null,"l":null}],"pm":"U","wm":""},{"id":"192","n":"Theorix Annex","r":"c","c":"","ci":"BU","v":0.0,"t":"Land","f":[{"n":"Theorix Annex","m":"","t":"Land","o":"This land enters tapped unless you control a planeswalker.\n{T}: Add {U} or {B}.","p":null,"d":null,"l":null}],"pm":"BU","wm":""},{"id":"193","n":"Transformative Commons","r":"c","c":"","ci":"GU","v":0.0,"t":"Land","f":[{"n":"Transformative Commons","m":"","t":"Land","o":"This land enters tapped unless you control a planeswalker.\n{T}: Add {G} or {U}.","p":null,"d":null,"l":null}],"pm":"GU","wm":""},{"id":"194","n":"Vigorbloom Annex","r":"c","c":"","ci":"GW","v":0.0,"t":"Land","f":[{"n":"Vigorbloom Annex","m":"","t":"Land","o":"This land enters tapped unless you control a planeswalker.\n{T}: Add {G} or {W}.","p":null,"d":null,"l":null}],"pm":"GW","wm":""},{"id":"195","n":"Ajani Resolute","r":"m","c":"W","ci":"W","v":2.0,"t":"Legendary Planeswalker — Ajani","f":[{"n":"Ajani Resolute","m":"{1}{W}","t":"Legendary Planeswalker — Ajani","o":"Whenever you gain life, put a loyalty counter on Ajani.\n0: You gain 1 life.\n−4: Create a 2/2 white Cat Soldier creature token named Ajani's Pridemate with \"Whenever you gain life, put a +1/+1 counter on this token.\"\n−10: You get an emblem with \"Creatures you control get +2/+2.\"","p":null,"d":null,"l":"2"}],"pm":"","wm":""},{"id":"196","n":"Danitha, Sword of Hope","r":"u","c":"W","ci":"W","v":3.0,"t":"Legendary Creature — Human Knight","f":[{"n":"Danitha, Sword of Hope","m":"{2}{W}","t":"Legendary Creature — Human Knight","o":"First strike\nWhenever you cast an Equipment spell or a spell that targets a creature you control, draw a card. This ability triggers only once each turn.","p":"2","d":"2","l":null}],"pm":"","wm":""},{"id":"197","n":"Ghalta the Immovable","r":"u","c":"W","ci":"W","v":9.0,"t":"Legendary Creature — Elder Dinosaur","f":[{"n":"Ghalta the Immovable","m":"{8}{W}","t":"Legendary Creature — Elder Dinosaur","o":"This spell costs {X} less to cast, where X is the greatest toughness among creatures you control.\nCreatures you control can attack as though they didn't have defender.\nEach creature you control with toughness greater than its power assigns combat damage equal to its toughness rather than its power.","p":"0","d":"7","l":null}],"pm":"","wm":"echoverse"},{"id":"198","n":"Gideon's Memorial","r":"r","c":"W","ci":"W","v":2.0,"t":"Legendary Artifact","f":[{"n":"Gideon's Memorial","m":"{1}{W}","t":"Legendary Artifact","o":"Creature tokens you control get +1/+0 and have vigilance.\n{T}: Add one mana of any color. Spend this mana only to cast a planeswalker spell.\n{1}{W}, Discard this card: It deals 4 damage to target attacking or blocking creature.","p":null,"d":null,"l":null}],"pm":"BGRUW","wm":""},{"id":"199","n":"Koth of the Homestead","r":"u","c":"W","ci":"W","v":3.0,"t":"Legendary Creature — Human Citizen","f":[{"n":"Koth of the Homestead","m":"{2}{W}","t":"Legendary Creature — Human Citizen","o":"Landfall — Whenever a land you control enters, you gain 1 life.\nWhenever a Plains you control enters, put a +1/+1 counter on target creature.","p":"2","d":"3","l":null}],"pm":"","wm":"echoverse"},{"id":"200","n":"Liliana the Faultless","r":"r","c":"W","ci":"W","v":1.0,"t":"Legendary Creature — Human Cleric","f":[{"n":"Liliana the Faultless","m":"{W}","t":"Legendary Creature — Human Cleric","o":"Whenever another creature or planeswalker you control enters, you gain 1 life.\n{1}, {T}, Discard a card: Another target creature or planeswalker you control gains hexproof until end of turn.","p":"1","d":"1","l":null}],"pm":"","wm":"echoverse"},{"id":"201","n":"Lyra, Archangel of Dawn","r":"r","c":"W","ci":"W","v":3.0,"t":"Legendary Creature — Angel Knight","f":[{"n":"Lyra, Archangel of Dawn","m":"{2}{W}","t":"Legendary Creature — Angel Knight","o":"Flying\nWhenever you gain life, put a +1/+1 counter on each Angel you control.","p":"3","d":"3","l":null}],"pm":"","wm":""},{"id":"202","n":"Rescue Girl, First Responder","r":"u","c":"W","ci":"W","v":3.0,"t":"Legendary Creature — Human Cleric","f":[{"n":"Rescue Girl, First Responder","m":"{2}{W}","t":"Legendary Creature — Human Cleric","o":"Flying\n{T}: Return another target permanent you control to its owner's hand. Activate only during your turn.","p":"1","d":"3","l":null}],"pm":"","wm":"echoverse"},{"id":"203","n":"Saheeli, Consul of Oversight","r":"u","c":"W","ci":"W","v":5.0,"t":"Legendary Creature — Human Advisor","f":[{"n":"Saheeli, Consul of Oversight","m":"{3}{W}{W}","t":"Legendary Creature — Human Advisor","o":"Flying\nWhenever you scry or surveil, create a 1/1 colorless Thopter artifact creature token with flying. This ability triggers only once each turn.","p":"4","d":"4","l":null}],"pm":"","wm":"echoverse"},{"id":"204","n":"Teyo, Lightshield Expert","r":"u","c":"W","ci":"W","v":2.0,"t":"Legendary Creature — Human Cleric","f":[{"n":"Teyo, Lightshield Expert","m":"{1}{W}","t":"Legendary Creature — Human Cleric","o":"Flash\nWhen Teyo enters, target permanent you control gains hexproof until end of turn. Put a +1/+1 counter on it if it's a creature. Put a loyalty counter on it if it's a planeswalker. (It can't be the target of spells or abilities your opponents control.)","p":"1","d":"1","l":null}],"pm":"","wm":"desparked"},{"id":"205","n":"Thalia, the Survivor","r":"u","c":"W","ci":"W","v":4.0,"t":"Legendary Creature — Human Soldier","f":[{"n":"Thalia, the Survivor","m":"{3}{W}","t":"Legendary Creature — Human Soldier","o":"Lifelink\nNoncreature spells your opponents cast cost {1} more to cast.","p":"3","d":"4","l":null}],"pm":"","wm":""},{"id":"206","n":"Tomik, Orzhov Lawmage","r":"u","c":"W","ci":"W","v":2.0,"t":"Legendary Creature — Human Advisor","f":[{"n":"Tomik, Orzhov Lawmage","m":"{1}{W}","t":"Legendary Creature — Human Advisor","o":"Flying\nPlaneswalkers you control have \"No more than one creature can attack this planeswalker each combat.\"\n{T}: Target creature with a +1/+1 counter on it gains flying until end of turn.","p":"2","d":"1","l":null}],"pm":"","wm":""},{"id":"207","n":"Way of the Healer","r":"u","c":"W","ci":"W","v":4.0,"t":"Legendary Enchantment","f":[{"n":"Way of the Healer","m":"{3}{W}","t":"Legendary Enchantment","o":"When Way of the Healer enters, empower Jace 5. (Put five loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")\nPlaneswalkers you control have \"[−2]: Create a 2/2 colorless Wizard Soldier creature token named Cadet. Surveil 1.\"","p":null,"d":null,"l":null}],"pm":"","wm":"echoverse"},{"id":"208","n":"Way of the Mentor","r":"u","c":"W","ci":"W","v":3.0,"t":"Legendary Enchantment","f":[{"n":"Way of the Mentor","m":"{2}{W}","t":"Legendary Enchantment","o":"When Way of the Mentor enters, empower Jace 5. (Put five loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")\nWhenever you gain life, put a loyalty counter on each planeswalker you control.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"209","n":"Yoshimaru, Beloved Companion","r":"u","c":"W","ci":"W","v":3.0,"t":"Legendary Creature — Dog","f":[{"n":"Yoshimaru, Beloved Companion","m":"{2}{W}","t":"Legendary Creature — Dog","o":"If one or more +1/+1 counters would be put on a creature you control, that many plus one +1/+1 counters are put on it instead.\n{6}: Put a +1/+1 counter on target legendary creature.","p":"2","d":"2","l":null}],"pm":"","wm":""},{"id":"210","n":"Yuriko, Blade of the Mighty","r":"u","c":"W","ci":"W","v":4.0,"t":"Legendary Creature — Human Samurai","f":[{"n":"Yuriko, Blade of the Mighty","m":"{3}{W}","t":"Legendary Creature — Human Samurai","o":"During combat, players can't cast spells or activate abilities that aren't mana abilities.\nWhenever a creature you control attacks a player alone, it gains double strike until end of turn.","p":"2","d":"3","l":null}],"pm":"","wm":"echoverse"},{"id":"211","n":"Arni, Humble Scribe","r":"u","c":"U","ci":"U","v":3.0,"t":"Legendary Creature — Human Wizard","f":[{"n":"Arni, Humble Scribe","m":"{2}{U}","t":"Legendary Creature — Human Wizard","o":"Whenever another nontoken creature you control enters, untap Arni.\n{T}: Draw a card, then discard a card.","p":"3","d":"2","l":null}],"pm":"","wm":"echoverse"},{"id":"212","n":"Chandra, Chill of Compliance","r":"m","c":"U","ci":"U","v":3.0,"t":"Legendary Planeswalker — Chandra","f":[{"n":"Chandra, Chill of Compliance","m":"{1}{U}{U}","t":"Legendary Planeswalker — Chandra","o":"+1: Surveil 1. If you put a noncreature, nonland card into your graveyard this way, put that card into your hand.\n+1: Add {U}. Spend this mana only to cast a noncreature spell.\n−X: Tap target artifact or creature. Put X stun counters on it.\n−6: You get an emblem with \"Whenever you cast a spell, draw a card.\"","p":null,"d":null,"l":"3"}],"pm":"U","wm":"echoverse"},{"id":"213","n":"Fblthp, Impossibly Lost","r":"u","c":"U","ci":"U","v":2.0,"t":"Legendary Creature — Homunculus","f":[{"n":"Fblthp, Impossibly Lost","m":"{1}{U}","t":"Legendary Creature — Homunculus","o":"When one or more of your opponents are dealt combat damage during your turn, draw two cards. If your library has no cards in it, you win the game. Fblthp's owner shuffles him into their library. (If you draw from an empty library this way, you still win the game.)","p":"1","d":"1","l":null}],"pm":"","wm":""},{"id":"214","n":"Geist of Saint Thalia","r":"u","c":"U","ci":"U","v":2.0,"t":"Legendary Creature — Spirit Cleric","f":[{"n":"Geist of Saint Thalia","m":"{1}{U}","t":"Legendary Creature — Spirit Cleric","o":"Flying\nNoncreature spells you cast cost {1} less to cast.","p":"1","d":"2","l":null}],"pm":"","wm":"echoverse"},{"id":"215","n":"Hapatra, the Desert Frost","r":"u","c":"U","ci":"U","v":4.0,"t":"Legendary Creature — Human Wizard","f":[{"n":"Hapatra, the Desert Frost","m":"{3}{U}","t":"Legendary Creature — Human Wizard","o":"When Hapatra enters, for each opponent, tap up to one target creature that player controls. Put a stun counter on each of those creatures. (If a permanent with a stun counter would become untapped, remove one from it instead.)\n{2}{U}: Untap target creature.","p":"4","d":"3","l":null}],"pm":"","wm":"echoverse"},{"id":"216","n":"Jace, Reality Sculptor","r":"r","c":"U","ci":"U","v":5.0,"t":"Legendary Planeswalker — Jace","f":[{"n":"Jace, Reality Sculptor","m":"{3}{U}{U}","t":"Legendary Planeswalker — Jace","o":"+1: Empower Jace X, where X is the number of Islands you control.\n−3: Until your next turn, whenever a creature attacks you or a planeswalker you control, it gets -5/-0 until end of turn.\n0: Exile all but the bottom card of each opponent's library. Activate only if there are twenty-five or more loyalty counters among Jaces you control.","p":null,"d":null,"l":"5"}],"pm":"","wm":""},{"id":"217","n":"Lyra, Tolarian Archangel","r":"r","c":"U","ci":"U","v":3.0,"t":"Legendary Creature — Angel Wizard","f":[{"n":"Lyra, Tolarian Archangel","m":"{1}{U}{U}","t":"Legendary Creature — Angel Wizard","o":"Flying\nAt the beginning of each end step, if you've drawn three or more cards this turn, create a 3/3 blue Angel creature token with flying.\n{3}{U}{U}: Until end of turn, whenever Lyra deals combat damage to a player, draw two cards.","p":"3","d":"3","l":null}],"pm":"","wm":"echoverse"},{"id":"218","n":"Proft, Consulting Detective","r":"u","c":"U","ci":"U","v":2.0,"t":"Legendary Creature — Human Detective","f":[{"n":"Proft, Consulting Detective","m":"{1}{U}","t":"Legendary Creature — Human Detective","o":"Whenever you scry or surveil, you may pay {2}. If you do, put a +1/+1 counter on Proft and draw a card. (Draw after you scry or surveil.)","p":"2","d":"2","l":null}],"pm":"","wm":""},{"id":"219","n":"Ruric Thar, Biomagus","r":"u","c":"U","ci":"U","v":6.0,"t":"Legendary Creature — Ogre Crab Wizard","f":[{"n":"Ruric Thar, Biomagus","m":"{4}{U}{U}","t":"Legendary Creature — Ogre Crab Wizard","o":"Flying\nProwess, prowess (Whenever you cast a noncreature spell, this creature gets +1/+1 until end of turn twice.)\nWhenever Ruric Thar becomes the target of a spell or ability an opponent controls, draw a card.","p":"4","d":"6","l":null}],"pm":"","wm":"echoverse"},{"id":"220","n":"Samut, Tyrant of Naktamun","r":"r","c":"U","ci":"U","v":2.0,"t":"Legendary Creature — Human Wizard","f":[{"n":"Samut, Tyrant of Naktamun","m":"{1}{U}","t":"Legendary Creature — Human Wizard","o":"Instant and sorcery spells you control have split second. (As long as a spell with split second is on the stack, players can't cast spells or activate abilities that aren't mana abilities.)","p":"2","d":"1","l":null}],"pm":"","wm":"echoverse"},{"id":"221","n":"Tetsuko Umezawa, Fugitive","r":"u","c":"U","ci":"U","v":2.0,"t":"Legendary Creature — Human Rogue","f":[{"n":"Tetsuko Umezawa, Fugitive","m":"{1}{U}","t":"Legendary Creature — Human Rogue","o":"Creatures you control with power or toughness 1 or less can't be blocked.","p":"1","d":"3","l":null}],"pm":"","wm":""},{"id":"222","n":"Traxos, Academy Guardian","r":"u","c":"U","ci":"U","v":4.0,"t":"Legendary Artifact Creature — Dragon Construct","f":[{"n":"Traxos, Academy Guardian","m":"{3}{U}","t":"Legendary Artifact Creature — Dragon Construct","o":"This spell costs {2} less to cast if you've cast a noncreature spell this turn.\nFlying, vigilance\nProwess (Whenever you cast a noncreature spell, this creature gets +1/+1 until end of turn.)","p":"1","d":"5","l":null}],"pm":"","wm":"echoverse"},{"id":"223","n":"Way of the Cryomancer","r":"u","c":"U","ci":"U","v":3.0,"t":"Legendary Enchantment","f":[{"n":"Way of the Cryomancer","m":"{2}{U}","t":"Legendary Enchantment","o":"When Way of the Cryomancer enters, empower Jace 5. (Put five loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")\nPlaneswalkers you control have \"[−3]: When you next cast an instant or sorcery spell this turn, copy that spell. You may choose new targets for the copy.\"","p":null,"d":null,"l":null}],"pm":"","wm":"echoverse"},{"id":"224","n":"Way of the Mind Sculptor","r":"u","c":"U","ci":"U","v":5.0,"t":"Legendary Enchantment","f":[{"n":"Way of the Mind Sculptor","m":"{4}{U}","t":"Legendary Enchantment","o":"When Way of the Mind Sculptor enters, empower Jace 5. (Put five loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")\nWhenever you activate a loyalty ability, if you removed two or more loyalty counters to activate it, draw a card.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"225","n":"Yargle, Goliath of Otaria","r":"u","c":"U","ci":"U","v":5.0,"t":"Legendary Creature — Frog Spirit","f":[{"n":"Yargle, Goliath of Otaria","m":"{4}{U}","t":"Legendary Creature — Frog Spirit","o":"","p":"3","d":"9","l":null}],"pm":"","wm":"echoverse"},{"id":"226","n":"Yuriko, Hope from the Shadows","r":"u","c":"U","ci":"U","v":1.0,"t":"Legendary Creature — Human Ninja","f":[{"n":"Yuriko, Hope from the Shadows","m":"{U}","t":"Legendary Creature — Human Ninja","o":"Flash\nWhen Yuriko enters, choose one —\n• Target creature gets -X/-0 until end of turn, where X is the number of cards in your graveyard.\n• Surveil 2. (Look at the top two cards of your library, then put any number of them into your graveyard and the rest on top of your library in any order.)","p":"1","d":"1","l":null}],"pm":"","wm":""},{"id":"227","n":"Danitha, Spear of Agony","r":"u","c":"B","ci":"B","v":3.0,"t":"Legendary Creature — Human Knight","f":[{"n":"Danitha, Spear of Agony","m":"{2}{B}","t":"Legendary Creature — Human Knight","o":"First strike\nWhenever you cast a spell that targets an opponent or a creature an opponent controls, put a +1/+1 counter on Danitha.","p":"2","d":"2","l":null}],"pm":"","wm":"echoverse"},{"id":"228","n":"Gallia, Tragic Host","r":"u","c":"B","ci":"B","v":2.0,"t":"Legendary Creature — Zombie Satyr","f":[{"n":"Gallia, Tragic Host","m":"{1}{B}","t":"Legendary Creature — Zombie Satyr","o":"Menace (This creature can't be blocked except by two or more creatures.)\n{4}{B}, Exile another creature card from your graveyard: Return this card from your graveyard to the battlefield tapped with a +1/+1 counter on her.","p":"2","d":"1","l":null}],"pm":"","wm":"echoverse"},{"id":"229","n":"Garruk, Veiled Butcher","r":"m","c":"B","ci":"B","v":5.0,"t":"Legendary Planeswalker — Garruk","f":[{"n":"Garruk, Veiled Butcher","m":"{3}{B}{B}","t":"Legendary Planeswalker — Garruk","o":"If a creature an opponent controls would die, exile it instead.\n+2: Up to one target creature gets -4/-1 until your next turn.\n−2: Each player sacrifices a creature of their choice. If you sacrificed a creature this way, create a 4/4 green Beast creature token with trample.\n−3: Each opponent discards two cards. For each opponent who didn't discard two nonland cards this way, you draw a card.","p":null,"d":null,"l":"5"}],"pm":"","wm":"echoverse"},{"id":"230","n":"Gideon the Oathless","r":"r","c":"B","ci":"B","v":3.0,"t":"Legendary Creature — Human Mercenary","f":[{"n":"Gideon the Oathless","m":"{2}{B}","t":"Legendary Creature — Human Mercenary","o":"Ward—Discard a card.\nWhenever a creature an opponent controls enters, Gideon deals 1 damage to that player.\nWhenever an opponent activates a loyalty ability, Gideon deals 1 damage to that player.","p":"3","d":"3","l":null}],"pm":"","wm":"echoverse"},{"id":"231","n":"Liliana the Repentant","r":"r","c":"B","ci":"B","v":2.0,"t":"Legendary Creature — Human Warlock","f":[{"n":"Liliana the Repentant","m":"{1}{B}","t":"Legendary Creature — Human Warlock","o":"Whenever another creature or planeswalker you control enters, mill two cards.\nExhaust — {5}{B}: Return target creature or planeswalker card from your graveyard to the battlefield. Put a +1/+1 counter on Liliana. Activate only as a sorcery. (Activate each exhaust ability only once.)","p":"2","d":"2","l":null}],"pm":"","wm":"desparked"},{"id":"232","n":"Loot, the Anomaly","r":"u","c":"B","ci":"B","v":3.0,"t":"Legendary Creature — Beast Horror","f":[{"n":"Loot, the Anomaly","m":"{2}{B}","t":"Legendary Creature — Beast Horror","o":"If Loot's power is negative, he assigns combat damage as though his power were positive.\nThreshold — Sacrifice another creature or planeswalker: Loot gets -2/-0 until end of turn. Activate only if there are seven or more cards in your graveyard.","p":"-2","d":"4","l":null}],"pm":"","wm":"echoverse"},{"id":"233","n":"Mabel, Bitter Recluse","r":"u","c":"B","ci":"B","v":1.0,"t":"Legendary Creature — Mouse Warlock","f":[{"n":"Mabel, Bitter Recluse","m":"{B}","t":"Legendary Creature — Mouse Warlock","o":"Deathtouch\nWhen Mabel enters, remove up to three counters from another target creature or planeswalker.","p":"1","d":"1","l":null}],"pm":"","wm":"echoverse"},{"id":"234","n":"Massacre Girl, Most Wanted","r":"u","c":"B","ci":"B","v":5.0,"t":"Legendary Creature — Human Assassin","f":[{"n":"Massacre Girl, Most Wanted","m":"{4}{B}","t":"Legendary Creature — Human Assassin","o":"Whenever another creature or planeswalker you control dies, Massacre Girl deals 1 damage to target opponent and you gain 1 life.\nWhenever an opponent is dealt noncombat damage, put a +1/+1 counter on Massacre Girl.","p":"4","d":"4","l":null}],"pm":"","wm":""},{"id":"235","n":"Proft, Sinister Mastermind","r":"u","c":"B","ci":"B","v":3.0,"t":"Legendary Creature — Human Rogue","f":[{"n":"Proft, Sinister Mastermind","m":"{2}{B}","t":"Legendary Creature — Human Rogue","o":"Threshold — You can't cast this spell unless there are seven or more cards in your graveyard.\nMenace\n{B}, Discard this card: Target creature gets -3/-1 until end of turn.","p":"5","d":"5","l":null}],"pm":"","wm":"echoverse"},{"id":"236","n":"Teyo, Diamondblade Mage","r":"u","c":"B","ci":"B","v":4.0,"t":"Legendary Creature — Human Warlock","f":[{"n":"Teyo, Diamondblade Mage","m":"{3}{B}","t":"Legendary Creature — Human Warlock","o":"Flash\nWhen Teyo enters, target permanent you control gains deathtouch until end of turn. Put a +1/+1 counter on it if it's a creature. Put a loyalty counter on it if it's a planeswalker.","p":"3","d":"1","l":null}],"pm":"","wm":"echoverse"},{"id":"237","n":"Tinybones, Pocket Nuisance","r":"u","c":"B","ci":"B","v":3.0,"t":"Legendary Creature — Skeleton Rogue","f":[{"n":"Tinybones, Pocket Nuisance","m":"{2}{B}","t":"Legendary Creature — Skeleton Rogue","o":"When Tinybones enters, each opponent discards a card.\nWhenever a player discards one or more cards, Tinybones deals 1 damage to each opponent.","p":"2","d":"1","l":null}],"pm":"","wm":""},{"id":"238","n":"Way of the Deathbringer","r":"u","c":"B","ci":"B","v":3.0,"t":"Legendary Enchantment","f":[{"n":"Way of the Deathbringer","m":"{2}{B}","t":"Legendary Enchantment","o":"When Way of the Deathbringer enters, empower Jace 5. (Put five loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")\nPlaneswalkers you control have \"[−2]: You may sacrifice a creature. If you do, create a 4/4 green Beast creature token with trample.\"","p":null,"d":null,"l":null}],"pm":"","wm":"echoverse"},{"id":"239","n":"Way of the Necromancer","r":"u","c":"B","ci":"B","v":2.0,"t":"Legendary Enchantment","f":[{"n":"Way of the Necromancer","m":"{1}{B}","t":"Legendary Enchantment","o":"When Way of the Necromancer enters, empower Jace 2. (Put two loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")\nWhenever a creature you control dies, put a loyalty counter on each planeswalker you control.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"240","n":"Winter, Tormented Loner","r":"u","c":"B","ci":"B","v":3.0,"t":"Legendary Creature — Human Warlock","f":[{"n":"Winter, Tormented Loner","m":"{2}{B}","t":"Legendary Creature — Human Warlock","o":"When Winter enters, you may sacrifice a creature or planeswalker. When you do, each opponent sacrifices a creature of their choice.\nWinter gets +1/+0 for each creature and planeswalker card in your graveyard.","p":"0","d":"3","l":null}],"pm":"","wm":""},{"id":"241","n":"Yargle, Glutton of Urborg","r":"u","c":"B","ci":"B","v":5.0,"t":"Legendary Creature — Frog Spirit","f":[{"n":"Yargle, Glutton of Urborg","m":"{4}{B}","t":"Legendary Creature — Frog Spirit","o":"","p":"9","d":"3","l":null}],"pm":"","wm":""},{"id":"242","n":"Ajani Unrelenting","r":"m","c":"R","ci":"R","v":6.0,"t":"Legendary Planeswalker — Ajani","f":[{"n":"Ajani Unrelenting","m":"{4}{R}{R}","t":"Legendary Planeswalker — Ajani","o":"Whenever you activate a loyalty ability, create a 2/2 colorless Wizard Soldier creature token named Cadet.\n+1: Creatures you control get +1/+0 and gain haste until end of turn.\n−2: Discard your hand, then draw a card for each creature you control.\n−3: Ajani deals 4 damage to each creature except for tokens you control.","p":null,"d":null,"l":"5"}],"pm":"","wm":"echoverse"},{"id":"243","n":"Arni, Renowned Champion","r":"u","c":"R","ci":"R","v":4.0,"t":"Legendary Creature — Human Berserker","f":[{"n":"Arni, Renowned Champion","m":"{3}{R}","t":"Legendary Creature — Human Berserker","o":"Trample\nWhenever another creature you control enters, Arni gets +X/+0 until end of turn, where X is that creature's power.","p":"1","d":"5","l":null}],"pm":"","wm":""},{"id":"244","n":"Chandra, Torch of Defiance","r":"m","c":"R","ci":"R","v":4.0,"t":"Legendary Planeswalker — Chandra","f":[{"n":"Chandra, Torch of Defiance","m":"{2}{R}{R}","t":"Legendary Planeswalker — Chandra","o":"+1: Exile the top card of your library. You may cast that card. If you don't, Chandra deals 2 damage to each opponent.\n+1: Add {R}{R}.\n−3: Chandra deals 4 damage to target creature.\n−7: You get an emblem with \"Whenever you cast a spell, this emblem deals 5 damage to any target.\"","p":null,"d":null,"l":"4"}],"pm":"R","wm":""},{"id":"245","n":"Gallia, the Merrymaker","r":"u","c":"R","ci":"R","v":2.0,"t":"Legendary Creature — Satyr","f":[{"n":"Gallia, the Merrymaker","m":"{1}{R}","t":"Legendary Creature — Satyr","o":"Haste\nEach other creature you control with a +1/+1 counter on it has haste.\n{1}{R}, {T}: Put a +1/+1 counter on target creature that entered this turn.","p":"2","d":"1","l":null}],"pm":"","wm":""},{"id":"246","n":"Jiang Yanggu, Alone","r":"u","c":"R","ci":"R","v":5.0,"t":"Legendary Creature — Human Berserker","f":[{"n":"Jiang Yanggu, Alone","m":"{4}{R}","t":"Legendary Creature — Human Berserker","o":"Menace (This creature can't be blocked except by two or more creatures.)\nWhenever a creature you control attacks a player alone, discard a card, then draw a card. Then put a +1/+1 counter on that creature for each card you've discarded this turn.","p":"4","d":"4","l":null}],"pm":"","wm":"echoverse"},{"id":"247","n":"Kiora of Fire and Ashes","r":"u","c":"R","ci":"R","v":6.0,"t":"Legendary Creature — Merfolk Noble","f":[{"n":"Kiora of Fire and Ashes","m":"{4}{R}{R}","t":"Legendary Creature — Merfolk Noble","o":"When Kiora enters, create a 5/5 red Dragon creature token with flying.\n{8}: Create a 5/5 red Dragon creature token with flying.","p":"2","d":"2","l":null}],"pm":"","wm":"echoverse"},{"id":"248","n":"Koth, the Geomancer","r":"u","c":"R","ci":"R","v":3.0,"t":"Legendary Creature — Human Warrior","f":[{"n":"Koth, the Geomancer","m":"{2}{R}","t":"Legendary Creature — Human Warrior","o":"Reach\nLandfall — Whenever a land you control enters, Koth deals 1 damage to each opponent. If that land is a Mountain, add {R}.","p":"3","d":"2","l":null}],"pm":"R","wm":"desparked"},{"id":"249","n":"Marwyn, the Clearcutter","r":"u","c":"R","ci":"R","v":1.0,"t":"Legendary Creature — Elf Warrior","f":[{"n":"Marwyn, the Clearcutter","m":"{R}","t":"Legendary Creature — Elf Warrior","o":"{2}, {T}, Sacrifice an artifact or land: Draw a card.","p":"2","d":"1","l":null}],"pm":"","wm":"echoverse"},{"id":"250","n":"Pia, Determined Rebuilder","r":"u","c":"R","ci":"R","v":3.0,"t":"Legendary Creature — Human Artificer","f":[{"n":"Pia, Determined Rebuilder","m":"{2}{R}","t":"Legendary Creature — Human Artificer","o":"When Pia enters, create a 1/1 colorless Thopter artifact creature token with flying.\n{5}{R}: Target creature gets +X/+0 until end of turn, where X is the number of artifacts you control.","p":"2","d":"2","l":null}],"pm":"","wm":""},{"id":"251","n":"Samut, Hazoret's Champion","r":"r","c":"R","ci":"R","v":2.0,"t":"Legendary Creature — Human Warrior Cleric","f":[{"n":"Samut, Hazoret's Champion","m":"{1}{R}","t":"Legendary Creature — Human Warrior Cleric","o":"Creatures you control have haste.","p":"2","d":"2","l":null}],"pm":"","wm":""},{"id":"252","n":"Tetsuko Umezawa, Pursuer","r":"u","c":"R","ci":"R","v":4.0,"t":"Legendary Creature — Human Mercenary","f":[{"n":"Tetsuko Umezawa, Pursuer","m":"{3}{R}","t":"Legendary Creature — Human Mercenary","o":"Double strike\nProwess (Whenever you cast a noncreature spell, this creature gets +1/+1 until end of turn.)\nWhenever a creature an opponent controls with power or toughness 1 or less blocks, Tetsuko Umezawa deals 1 damage to that creature's controller.","p":"2","d":"4","l":null}],"pm":"","wm":"echoverse"},{"id":"253","n":"Tomik, Izzet Sparkmage","r":"u","c":"R","ci":"R","v":2.0,"t":"Legendary Creature — Human Wizard","f":[{"n":"Tomik, Izzet Sparkmage","m":"{1}{R}","t":"Legendary Creature — Human Wizard","o":"Prowess (Whenever you cast a noncreature spell, this creature gets +1/+1 until end of turn.)\nIf a source you control would deal noncombat damage to an opponent or a permanent an opponent controls, it deals that much damage plus 1 instead.","p":"1","d":"2","l":null}],"pm":"","wm":"echoverse"},{"id":"254","n":"Way of the Pyromancer","r":"u","c":"R","ci":"R","v":2.0,"t":"Legendary Enchantment","f":[{"n":"Way of the Pyromancer","m":"{1}{R}","t":"Legendary Enchantment","o":"When Way of the Pyromancer enters, empower Jace 2. (Put two loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")\nPlaneswalkers you control have \"[+1]: Add {R}.\"","p":null,"d":null,"l":null}],"pm":"R","wm":""},{"id":"255","n":"Way of the Warlord","r":"u","c":"R","ci":"R","v":3.0,"t":"Legendary Enchantment","f":[{"n":"Way of the Warlord","m":"{2}{R}","t":"Legendary Enchantment","o":"When Way of the Warlord enters, empower Jace 5. (Put five loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")\nPlaneswalkers you control have \"[−4]: This planeswalker deals 2 damage to up to one target creature or planeswalker and 2 damage to target player.\"","p":null,"d":null,"l":null}],"pm":"","wm":"echoverse"},{"id":"256","n":"Winter, Team Player","r":"u","c":"R","ci":"R","v":5.0,"t":"Legendary Creature — Human Warrior","f":[{"n":"Winter, Team Player","m":"{4}{R}","t":"Legendary Creature — Human Warrior","o":"Convoke (Your creatures can help cast this spell. Each creature you tap while casting this spell pays for {1} or one mana of that creature's color.)\nWhenever you cast a noncreature spell, creatures you control get +1/+0 until end of turn.","p":"3","d":"3","l":null}],"pm":"","wm":"echoverse"},{"id":"257","n":"Edgar, Moonlit Sovereign","r":"u","c":"G","ci":"G","v":5.0,"t":"Legendary Creature — Werewolf Noble","f":[{"n":"Edgar, Moonlit Sovereign","m":"{3}{G}{G}","t":"Legendary Creature — Werewolf Noble","o":"Flash\nAt the beginning of your end step, if you didn't cast a spell this turn, put two +1/+1 counters on Edgar.\n{4}{G}: Put a +1/+1 counter on each creature you control with a +1/+1 counter on it.","p":"4","d":"4","l":null}],"pm":"","wm":"echoverse"},{"id":"258","n":"Fblthp, Knows the Way","r":"u","c":"G","ci":"G","v":2.0,"t":"Legendary Creature — Homunculus Scout","f":[{"n":"Fblthp, Knows the Way","m":"{X}{G}{G}","t":"Legendary Creature — Homunculus Scout","o":"Domain — Fblthp's power is equal to the number of basic land types among lands you control.\nWhen Fblthp enters, search your library for up to X basic land cards with different names, reveal them, put them into your hand, then shuffle.","p":"*","d":"2","l":null}],"pm":"","wm":"echoverse"},{"id":"259","n":"Garruk, Curse Breaker","r":"m","c":"G","ci":"G","v":5.0,"t":"Legendary Planeswalker — Garruk","f":[{"n":"Garruk, Curse Breaker","m":"{3}{G}{G}","t":"Legendary Planeswalker — Garruk","o":"Whenever a creature you control with power 4 or greater enters, draw a card.\n+2: Untap up to two target lands.\n−3: Create a 4/4 green Beast creature token with trample.\n−4: Until your next turn, whenever one or more creatures attack one of your opponents, those creatures get +2/+2 and gain trample until end of turn.","p":null,"d":null,"l":"5"}],"pm":"","wm":""},{"id":"260","n":"Ghalta the Unstoppable","r":"u","c":"G","ci":"G","v":9.0,"t":"Legendary Creature — Elder Dinosaur","f":[{"n":"Ghalta the Unstoppable","m":"{8}{G}","t":"Legendary Creature — Elder Dinosaur","o":"This spell costs {X} less to cast, where X is the greatest power among creatures you control.\nTrample\nOther creatures you control have trample.","p":"8","d":"8","l":null}],"pm":"","wm":""},{"id":"261","n":"Jiang Yanggu, Never Alone","r":"u","c":"G","ci":"G","v":4.0,"t":"Legendary Creature — Human Druid","f":[{"n":"Jiang Yanggu, Never Alone","m":"{3}{G}","t":"Legendary Creature — Human Druid","o":"When Jiang Yanggu enters, create Mowu, a legendary 3/3 green Dog creature token.\nAt the beginning of your end step, untap all tokens you control.","p":"2","d":"2","l":null}],"pm":"","wm":"desparked"},{"id":"262","n":"Loot, the Nexus","r":"u","c":"G","ci":"G","v":3.0,"t":"Legendary Creature — Beast Noble","f":[{"n":"Loot, the Nexus","m":"{2}{G}","t":"Legendary Creature — Beast Noble","o":"{T}: Choose a color. Add one mana of that color for each different power among creatures you control.","p":"2","d":"1","l":null}],"pm":"BGRUW","wm":""},{"id":"263","n":"Marwyn, the Preserver","r":"u","c":"G","ci":"G","v":2.0,"t":"Legendary Creature — Elf Druid","f":[{"n":"Marwyn, the Preserver","m":"{1}{G}","t":"Legendary Creature — Elf Druid","o":"Lands you control have hexproof. (They can't be the targets of spells or abilities your opponents control.)\n{2}: Return target land card from your graveyard to your hand.","p":"3","d":"2","l":null}],"pm":"","wm":""},{"id":"264","n":"Pia, Aether Ascetic","r":"u","c":"G","ci":"G","v":3.0,"t":"Legendary Creature — Human Druid","f":[{"n":"Pia, Aether Ascetic","m":"{2}{G}","t":"Legendary Creature — Human Druid","o":"When Pia enters, you may discard a card. If you do, search your library for an enchantment card, reveal it, put it into your hand, then shuffle.","p":"2","d":"2","l":null}],"pm":"","wm":"echoverse"},{"id":"265","n":"Ruric Thar, Magecrusher","r":"u","c":"G","ci":"G","v":7.0,"t":"Legendary Creature — Ogre Warrior","f":[{"n":"Ruric Thar, Magecrusher","m":"{5}{G}{G}","t":"Legendary Creature — Ogre Warrior","o":"This spell can't be countered.\nReach, vigilance, trample\nRuric Thar has hexproof as long as they haven't dealt combat damage yet. (They can't be the target of spells or abilities your opponents control.)","p":"7","d":"7","l":null}],"pm":"","wm":""},{"id":"266","n":"Titanbones, Towering Heart","r":"u","c":"G","ci":"G","v":4.0,"t":"Legendary Creature — Skeleton Druid","f":[{"n":"Titanbones, Towering Heart","m":"{3}{G}","t":"Legendary Creature — Skeleton Druid","o":"Reach\nWhenever you gain life, put two +1/+1 counters on Titanbones.\nWhen you discard this card, you gain 3 life.","p":"4","d":"3","l":null}],"pm":"","wm":"echoverse"},{"id":"267","n":"Way of the Paradox","r":"u","c":"G","ci":"G","v":3.0,"t":"Legendary Enchantment","f":[{"n":"Way of the Paradox","m":"{2}{G}","t":"Legendary Enchantment","o":"When Way of the Paradox enters, empower Jace 5. (Put five loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")\nWhenever you activate a loyalty ability, you gain 1 life. You may play an additional land this turn.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"268","n":"Way of the Wildspeaker","r":"u","c":"G","ci":"G","v":5.0,"t":"Legendary Enchantment","f":[{"n":"Way of the Wildspeaker","m":"{4}{G}","t":"Legendary Enchantment","o":"When Way of the Wildspeaker enters, empower Jace 7. (Put seven loyalty counters on a Jace token you control. If you don't control one, first create a blue Jace planeswalker token with \"[−1]: Surveil 1\" and \"[−3]: Draw a card.\")\nPlaneswalkers you control have \"[−4]: Create a 4/4 green Beast creature token with trample.\"","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"269","n":"Yoshimaru, Scrappy Stray","r":"u","c":"G","ci":"G","v":2.0,"t":"Legendary Creature — Dog","f":[{"n":"Yoshimaru, Scrappy Stray","m":"{1}{G}","t":"Legendary Creature — Dog","o":"When Yoshimaru enters, another target creature you control fights up to one target creature an opponent controls. (Each deals damage equal to its power to the other.)\n{6}: Put a +1/+1 counter on target nonlegendary creature.","p":"1","d":"1","l":null}],"pm":"","wm":"echoverse"},{"id":"270","n":"Edgar, Ancient Bloodlord","r":"u","c":"BW","ci":"BW","v":2.0,"t":"Legendary Creature — Vampire Noble","f":[{"n":"Edgar, Ancient Bloodlord","m":"{W}{B}","t":"Legendary Creature — Vampire Noble","o":"Whenever another creature or planeswalker you control dies, you gain 1 life.\n{2}, Sacrifice another creature or planeswalker: Put a +1/+1 counter on Edgar. He gains menace until end of turn. (He can't be blocked except by two or more creatures.)","p":"2","d":"3","l":null}],"pm":"","wm":""},{"id":"271","n":"Hapatra, the Desert Fang","r":"u","c":"BG","ci":"BG","v":5.0,"t":"Legendary Creature — Human Cleric","f":[{"n":"Hapatra, the Desert Fang","m":"{2}{B}{B}{G}","t":"Legendary Creature — Human Cleric","o":"When Hapatra enters, for each opponent, put X -1/-1 counters on up to one target creature that player controls, where X is the greatest mana value among cards in your graveyard.","p":"3","d":"3","l":null}],"pm":"","wm":""},{"id":"272","n":"Karn, Gilded Guardian","r":"r","c":"BGRUW","ci":"BGRUW","v":10.0,"t":"Legendary Artifact Creature — Golem","f":[{"n":"Karn, Gilded Guardian","m":"{2/W}{2/U}{2/B}{2/R}{2/G}","t":"Legendary Artifact Creature — Golem","o":"Vigilance, trample\nWhen Karn enters, draw a card for each color among other artifacts you control.","p":"5","d":"5","l":null}],"pm":"","wm":"echoverse"},{"id":"273","n":"Kiora of Salt and Sand","r":"u","c":"GU","ci":"GU","v":3.0,"t":"Legendary Creature — Merfolk Noble","f":[{"n":"Kiora of Salt and Sand","m":"{1}{G}{U}","t":"Legendary Creature — Merfolk Noble","o":"Whenever you attack, if you've activated a loyalty ability this turn, untap target attacking creature. It can't be blocked this turn.\nPlaneswalkers you control have \"[−8]: Create an 8/8 blue Leviathan creature token with hexproof.\"","p":"2","d":"4","l":null}],"pm":"","wm":""},{"id":"274","n":"Mabel, Valley Hero","r":"u","c":"RW","ci":"RW","v":3.0,"t":"Legendary Creature — Mouse Soldier","f":[{"n":"Mabel, Valley Hero","m":"{1}{R}{W}","t":"Legendary Creature — Mouse Soldier","o":"Whenever Mabel or another creature you control enters, put a +1/+1 counter on target creature that entered this turn.","p":"1","d":"2","l":null}],"pm":"","wm":""},{"id":"275","n":"Saheeli, Jewel of Avishkar","r":"u","c":"RU","ci":"RU","v":4.0,"t":"Legendary Creature — Human Artificer","f":[{"n":"Saheeli, Jewel of Avishkar","m":"{2}{U}{R}","t":"Legendary Creature — Human Artificer","o":"Thopters you control have haste.\nWhenever you cast a noncreature spell, create a 1/1 colorless Thopter artifact creature token with flying.","p":"2","d":"4","l":null}],"pm":"","wm":""},{"id":"276","n":"Tam, the Possibility","r":"r","c":"GU","ci":"BGRUW","v":3.0,"t":"Legendary Creature — Gorgon Wizard","f":[{"n":"Tam, the Possibility","m":"{1}{G}{U}","t":"Legendary Creature — Gorgon Wizard","o":"Planeswalker spells you cast cost {1} less to cast.\n{W}{U}{B}{R}{G}, {T}: Proliferate X times, where X is the number of planeswalker types among planeswalkers you control. (To proliferate, choose any number of permanents and/or players, then give each another counter of each kind already there.)","p":"2","d":"4","l":null}],"pm":"","wm":""},{"id":"277","n":"Vraska, Soul of Stone","r":"r","c":"RUW","ci":"RUW","v":3.0,"t":"Legendary Creature — Gorgon Wizard","f":[{"n":"Vraska, Soul of Stone","m":"{U}{R}{W}","t":"Legendary Creature — Gorgon Wizard","o":"Artifact creatures you control have vigilance.\nWhenever you cast a noncreature spell, create a 1/1 colorless Sculpture Treasure artifact creature token with \"{T}, Sacrifice this token: Add one mana of any color.\"","p":"3","d":"3","l":null}],"pm":"BGRUW","wm":"echoverse"},{"id":"278","n":"Vraska, the Cutting Glare","r":"r","c":"BG","ci":"BG","v":3.0,"t":"Legendary Creature — Gorgon Assassin","f":[{"n":"Vraska, the Cutting Glare","m":"{B}{B}{G}","t":"Legendary Creature — Gorgon Assassin","o":"Deathtouch\nWhen Vraska enters, if you control six or more lands, destroy target permanent an opponent controls. They create a Treasure token. (It's an artifact with \"{T}, Sacrifice this token: Add one mana of any color.\")","p":"4","d":"4","l":null}],"pm":"BGRUW","wm":""},{"id":"279","n":"Karn, Argent Defender","r":"r","c":"","ci":"","v":2.0,"t":"Legendary Artifact Creature — Golem","f":[{"n":"Karn, Argent Defender","m":"{2}","t":"Legendary Artifact Creature — Golem","o":"Artifacts and creatures entering the battlefield don't cause abilities to trigger.","p":"1","d":"3","l":null}],"pm":"","wm":""},{"id":"280","n":"Traxos, Scourge Eternal","r":"u","c":"","ci":"","v":4.0,"t":"Legendary Artifact Creature — Dragon Construct","f":[{"n":"Traxos, Scourge Eternal","m":"{4}","t":"Legendary Artifact Creature — Dragon Construct","o":"Trample\nTraxos doesn't untap during your untap step.\nWhenever you cast an artifact or creature spell, untap Traxos.","p":"5","d":"4","l":null}],"pm":"","wm":""},{"id":"281","n":"Plains","r":"c","c":"","ci":"W","v":0.0,"t":"Basic Land — Plains","f":[{"n":"Plains","m":"","t":"Basic Land — Plains","o":"({T}: Add {W}.)","p":null,"d":null,"l":null}],"pm":"W","wm":""},{"id":"282","n":"Plains","r":"c","c":"","ci":"W","v":0.0,"t":"Basic Land — Plains","f":[{"n":"Plains","m":"","t":"Basic Land — Plains","o":"({T}: Add {W}.)","p":null,"d":null,"l":null}],"pm":"W","wm":""},{"id":"283","n":"Island","r":"c","c":"","ci":"U","v":0.0,"t":"Basic Land — Island","f":[{"n":"Island","m":"","t":"Basic Land — Island","o":"({T}: Add {U}.)","p":null,"d":null,"l":null}],"pm":"U","wm":""},{"id":"284","n":"Island","r":"c","c":"","ci":"U","v":0.0,"t":"Basic Land — Island","f":[{"n":"Island","m":"","t":"Basic Land — Island","o":"({T}: Add {U}.)","p":null,"d":null,"l":null}],"pm":"U","wm":""},{"id":"285","n":"Swamp","r":"c","c":"","ci":"B","v":0.0,"t":"Basic Land — Swamp","f":[{"n":"Swamp","m":"","t":"Basic Land — Swamp","o":"({T}: Add {B}.)","p":null,"d":null,"l":null}],"pm":"B","wm":""},{"id":"286","n":"Swamp","r":"c","c":"","ci":"B","v":0.0,"t":"Basic Land — Swamp","f":[{"n":"Swamp","m":"","t":"Basic Land — Swamp","o":"({T}: Add {B}.)","p":null,"d":null,"l":null}],"pm":"B","wm":""},{"id":"287","n":"Mountain","r":"c","c":"","ci":"R","v":0.0,"t":"Basic Land — Mountain","f":[{"n":"Mountain","m":"","t":"Basic Land — Mountain","o":"({T}: Add {R}.)","p":null,"d":null,"l":null}],"pm":"R","wm":""},{"id":"288","n":"Mountain","r":"c","c":"","ci":"R","v":0.0,"t":"Basic Land — Mountain","f":[{"n":"Mountain","m":"","t":"Basic Land — Mountain","o":"({T}: Add {R}.)","p":null,"d":null,"l":null}],"pm":"R","wm":""},{"id":"289","n":"Forest","r":"c","c":"","ci":"G","v":0.0,"t":"Basic Land — Forest","f":[{"n":"Forest","m":"","t":"Basic Land — Forest","o":"({T}: Add {G}.)","p":null,"d":null,"l":null}],"pm":"G","wm":""},{"id":"290","n":"Forest","r":"c","c":"","ci":"G","v":0.0,"t":"Basic Land — Forest","f":[{"n":"Forest","m":"","t":"Basic Land — Forest","o":"({T}: Add {G}.)","p":null,"d":null,"l":null}],"pm":"G","wm":""},{"id":"291","b":"195","tr":"be","r":"m","n":"Ajani Resolute"},{"id":"292","b":"198","tr":"be","r":"r","n":"Gideon's Memorial"},{"id":"293","b":"200","tr":"be","r":"r","n":"Liliana the Faultless"},{"id":"294","b":"201","tr":"be","r":"r","n":"Lyra, Archangel of Dawn"},{"id":"295","b":"204","tr":"be","r":"u","n":"Teyo, Lightshield Expert"},{"id":"296","b":"205","tr":"be","r":"u","n":"Thalia, the Survivor"},{"id":"297","b":"212","tr":"be","r":"m","n":"Chandra, Chill of Compliance"},{"id":"298","b":"213","tr":"be","r":"u","n":"Fblthp, Impossibly Lost"},{"id":"299","b":"214","tr":"be","r":"u","n":"Geist of Saint Thalia"},{"id":"300","b":"216","tr":"be","r":"r","n":"Jace, Reality Sculptor"},{"id":"301","b":"217","tr":"be","r":"r","n":"Lyra, Tolarian Archangel"},{"id":"302","b":"220","tr":"be","r":"r","n":"Samut, Tyrant of Naktamun"},{"id":"303","b":"229","tr":"be","r":"m","n":"Garruk, Veiled Butcher"},{"id":"304","b":"230","tr":"be","r":"r","n":"Gideon the Oathless"},{"id":"305","b":"231","tr":"be","r":"r","n":"Liliana the Repentant"},{"id":"306","b":"236","tr":"be","r":"u","n":"Teyo, Diamondblade Mage"},{"id":"307","b":"240","tr":"be","r":"u","n":"Winter, Tormented Loner"},{"id":"308","b":"242","tr":"be","r":"m","n":"Ajani Unrelenting"},{"id":"309","b":"244","tr":"be","r":"m","n":"Chandra, Torch of Defiance"},{"id":"310","b":"249","tr":"be","r":"u","n":"Marwyn, the Clearcutter"},{"id":"311","b":"251","tr":"be","r":"r","n":"Samut, Hazoret's Champion"},{"id":"312","b":"256","tr":"be","r":"u","n":"Winter, Team Player"},{"id":"313","b":"258","tr":"be","r":"u","n":"Fblthp, Knows the Way"},{"id":"314","b":"259","tr":"be","r":"m","n":"Garruk, Curse Breaker"},{"id":"315","b":"263","tr":"be","r":"u","n":"Marwyn, the Preserver"},{"id":"316","b":"272","tr":"be","r":"r","n":"Karn, Gilded Guardian"},{"id":"317","b":"276","tr":"be","r":"r","n":"Tam, the Possibility"},{"id":"318","b":"277","tr":"be","r":"r","n":"Vraska, Soul of Stone"},{"id":"319","b":"278","tr":"be","r":"r","n":"Vraska, the Cutting Glare"},{"id":"320","b":"279","tr":"be","r":"r","n":"Karn, Argent Defender"},{"id":"321","b":"5","tr":"sm","r":"m","n":"Enlightened Confidant"},{"id":"322","b":"13","tr":"sm","r":"r","n":"Kindred Judgment"},{"id":"323","b":"20","tr":"sm","r":"m","n":"Return to the Light Realms"},{"id":"324","b":"38","tr":"sm","r":"m","n":"Seasoned Cryomancer"},{"id":"325","b":"53","tr":"sm","r":"m","n":"Darklight Phoenix"},{"id":"326","b":"63","tr":"sm","r":"r","n":"Rise of the Deathbringer"},{"id":"327","b":"78","tr":"sm","r":"m","n":"Craterclaw Colossus"},{"id":"328","b":"79","tr":"sm","r":"r","n":"Curse-Marred Demon"},{"id":"329","b":"93","tr":"sm","r":"m","n":"Stingcaster Mage"},{"id":"330","b":"106","tr":"sm","r":"m","n":"Hexhaven Invigorator"},{"id":"331","b":"110","tr":"sm","r":"m","n":"Omnipresence"},{"id":"332","b":"113","tr":"sm","r":"r","n":"Simulacrum Shaper"},{"id":"333","b":"135","tr":"sm","r":"r","n":"Frostbite Pyromental"},{"id":"334","b":"9","tr":"ss","r":"r","n":"Germinate Recruits"},{"id":"335","b":"19","tr":"ss","r":"r","n":"Repurposed Enforcer"},{"id":"336","b":"26","tr":"ss","r":"r","n":"Cruel Calculations"},{"id":"337","b":"32","tr":"ss","r":"r","n":"Jace's Machinations"},{"id":"338","b":"40","tr":"ss","r":"r","n":"Sphinx of False Conclusions"},{"id":"339","b":"44","tr":"ss","r":"r","n":"Theorist's Proxy"},{"id":"340","b":"52","tr":"ss","r":"r","n":"Dark Matter Manipulator"},{"id":"341","b":"59","tr":"ss","r":"m","n":"Overwrite the Multiverse"},{"id":"342","b":"64","tr":"ss","r":"r","n":"Sanctum Lurker"},{"id":"343","b":"71","tr":"ss","r":"r","n":"Vraska's Final Mercy"},{"id":"344","b":"88","tr":"ss","r":"r","n":"Master of Barbs"},{"id":"345","b":"103","tr":"ss","r":"r","n":"Gardenize"},{"id":"346","b":"107","tr":"ss","r":"r","n":"Hungering Puppetbeast"},{"id":"347","b":"121","tr":"ss","r":"m","n":"Aerid Konstrari"},{"id":"348","b":"122","tr":"ss","r":"m","n":"Avatar of Burgeoning Echoes"},{"id":"349","b":"128","tr":"ss","r":"m","n":"Denzilore Fatehold"},{"id":"350","b":"131","tr":"ss","r":"r","n":"Entrust the Spark"},{"id":"351","b":"137","tr":"ss","r":"m","n":"Ingris Stingerquill"},{"id":"352","b":"140","tr":"ss","r":"m","n":"Kwia Vigorbloom"},{"id":"353","b":"142","tr":"ss","r":"r","n":"Null Summoner"},{"id":"354","b":"145","tr":"ss","r":"r","n":"Proctor of Potential"},{"id":"355","b":"149","tr":"ss","r":"r","n":"Solitary Cell"},{"id":"356","b":"152","tr":"ss","r":"r","n":"Stinging Vitriol"},{"id":"357","b":"154","tr":"ss","r":"r","n":"Tenured Tethermage"},{"id":"358","b":"159","tr":"ss","r":"m","n":"Uldaros Theorix"},{"id":"359","b":"7","tr":"bt","r":"r","n":"Flickering Hound"},{"id":"360","b":"11","tr":"bt","r":"r","n":"Guiding Hydra"},{"id":"361","b":"18","tr":"bt","r":"u","n":"Refute Destiny"},{"id":"362","b":"36","tr":"bt","r":"u","n":"Precise Redaction"},{"id":"363","b":"43","tr":"bt","r":"m","n":"The Theorist, Jace Beleren"},{"id":"364","b":"55","tr":"bt","r":"r","n":"Extrapolate the Impossible"},{"id":"365","b":"57","tr":"bt","r":"r","n":"Lich's Relic"},{"id":"366","b":"68","tr":"bt","r":"u","n":"Terminal Criticism"},{"id":"367","b":"72","tr":"bt","r":"r","n":"Ajani's Anguish"},{"id":"368","b":"80","tr":"bt","r":"r","n":"Draconic Visitor"},{"id":"369","b":"82","tr":"bt","r":"u","n":"Essence Burn"},{"id":"370","b":"83","tr":"bt","r":"r","n":"Face Yourself"},{"id":"371","b":"87","tr":"bt","r":"r","n":"Identity Echo"},{"id":"372","b":"102","tr":"bt","r":"u","n":"Flourishing Grapple"},{"id":"373","b":"111","tr":"bt","r":"r","n":"Puppet Crafting"},{"id":"374","b":"116","tr":"bt","r":"m","n":"Tarmogoyf"},{"id":"375","b":"118","tr":"bt","r":"r","n":"Verdant Kraken"},{"id":"376","b":"148","tr":"bt","r":"r","n":"Solarium Sentry"},{"id":"377","b":"162","tr":"bt","r":"r","n":"Vindictive Triumph"},{"id":"378","b":"169","tr":"bt","r":"m","n":"The Echoverse Fulcrum"},{"id":"379","b":"179","tr":"bt","r":"r","n":"Hall of Echoes"},{"id":"380","b":"187","tr":"bt","r":"r","n":"Roiling Canopy"},{"id":"381","b":"191","tr":"bt","r":"r","n":"Theorist's Sanctum"},{"id":"382","b":"281","tr":"tw","r":"c","n":"Plains"},{"id":"383","b":"281","tr":"tw","r":"c","n":"Plains"},{"id":"384","b":"281","tr":"tw","r":"c","n":"Plains"},{"id":"385","b":"283","tr":"tw","r":"c","n":"Island"},{"id":"386","b":"283","tr":"tw","r":"c","n":"Island"},{"id":"387","b":"283","tr":"tw","r":"c","n":"Island"},{"id":"388","b":"285","tr":"tw","r":"c","n":"Swamp"},{"id":"389","b":"285","tr":"tw","r":"c","n":"Swamp"},{"id":"390","b":"285","tr":"tw","r":"c","n":"Swamp"},{"id":"391","b":"287","tr":"tw","r":"c","n":"Mountain"},{"id":"392","b":"287","tr":"tw","r":"c","n":"Mountain"},{"id":"393","b":"287","tr":"tw","r":"c","n":"Mountain"},{"id":"394","b":"289","tr":"tw","r":"c","n":"Forest"},{"id":"395","b":"289","tr":"tw","r":"c","n":"Forest"},{"id":"396","b":"289","tr":"tw","r":"c","n":"Forest"},{"id":"397","b":"176","tr":"pv","r":"r","n":"Deserted Beach"},{"id":"398","b":"180","tr":"pv","r":"r","n":"Haunted Ridge"},{"id":"399","b":"185","tr":"pv","r":"r","n":"Overgrown Farmland"},{"id":"400","b":"186","tr":"pv","r":"r","n":"Rockfall Vale"},{"id":"401","b":"189","tr":"pv","r":"r","n":"Shipwreck Marsh"},{"id":"g159","n":"Eye of Ugin","r":"m","c":"","ci":"","v":0.0,"t":"Legendary Land","f":[{"n":"Eye of Ugin","m":"","t":"Legendary Land","o":"Colorless Eldrazi spells you cast cost {2} less to cast.\n{7}, {T}: Search your library for a colorless creature card, reveal it, put it into your hand, then shuffle.","p":null,"d":null,"l":null}],"pm":"","wm":"","sg":1},{"id":"g160","n":"Austere Command","r":"m","c":"W","ci":"W","v":6.0,"t":"Sorcery","f":[{"n":"Austere Command","m":"{4}{W}{W}","t":"Sorcery","o":"Choose two —\n• Destroy all artifacts.\n• Destroy all enchantments.\n• Destroy all creatures with mana value 3 or less.\n• Destroy all creatures with mana value 4 or greater.","p":null,"d":null,"l":null}],"pm":"","wm":"","sg":1},{"id":"g161","n":"Flesh Duplicate","r":"m","c":"U","ci":"U","v":2.0,"t":"Creature — Shapeshifter Rebel","f":[{"n":"Flesh Duplicate","m":"{U}{U}","t":"Creature — Shapeshifter Rebel","o":"You may have this creature enter as a copy of any creature on the battlefield, except it has vanishing 3 if that creature doesn't have vanishing. (A permanent with vanishing 3 enters with three time counters on it. At the beginning of your upkeep, remove a time counter from it. When the last is removed, sacrifice it.)","p":"0","d":"0","l":null}],"pm":"","wm":"","sg":1},{"id":"g162","n":"Consign to Memory","r":"m","c":"U","ci":"U","v":1.0,"t":"Instant","f":[{"n":"Consign to Memory","m":"{U}","t":"Instant","o":"Replicate {1} (When you cast this spell, copy it for each time you paid its replicate cost. You may choose new targets for the copies.)\nCounter target triggered ability or colorless spell.","p":null,"d":null,"l":null}],"pm":"","wm":"","sg":1},{"id":"g163","n":"Sublime Epiphany","r":"m","c":"U","ci":"U","v":6.0,"t":"Instant","f":[{"n":"Sublime Epiphany","m":"{4}{U}{U}","t":"Instant","o":"Choose one or more —\n• Counter target spell.\n• Counter target activated or triggered ability.\n• Return target nonland permanent to its owner's hand.\n• Create a token that's a copy of target creature you control.\n• Target player draws a card.","p":null,"d":null,"l":null}],"pm":"","wm":"","sg":1},{"id":"g164","n":"Consider","r":"m","c":"U","ci":"U","v":1.0,"t":"Instant","f":[{"n":"Consider","m":"{U}","t":"Instant","o":"Surveil 1. (Look at the top card of your library. You may put it into your graveyard.)\nDraw a card.","p":null,"d":null,"l":null}],"pm":"","wm":"","sg":1},{"id":"g165","n":"Necrodominance","r":"m","c":"B","ci":"B","v":3.0,"t":"Legendary Enchantment","f":[{"n":"Necrodominance","m":"{B}{B}{B}","t":"Legendary Enchantment","o":"Skip your draw step.\nAt the beginning of your end step, you may pay any amount of life. If you do, draw that many cards.\nYour maximum hand size is five.\nIf a card or token would be put into your graveyard from anywhere, exile it instead.","p":null,"d":null,"l":null}],"pm":"","wm":"","sg":1},{"id":"g166","n":"Mind Twist","r":"m","c":"B","ci":"B","v":1.0,"t":"Sorcery","f":[{"n":"Mind Twist","m":"{X}{B}","t":"Sorcery","o":"Target player discards X cards at random.","p":null,"d":null,"l":null}],"pm":"","wm":"","sg":1},{"id":"g167","n":"Splinter Twin","r":"m","c":"R","ci":"R","v":4.0,"t":"Enchantment — Aura","f":[{"n":"Splinter Twin","m":"{2}{R}{R}","t":"Enchantment — Aura","o":"Enchant creature\nEnchanted creature has \"{T}: Create a token that's a copy of this creature, except it has haste. Exile that token at the beginning of the next end step.\"","p":null,"d":null,"l":null}],"pm":"","wm":"","sg":1},{"id":"g168","n":"Root Maze","r":"m","c":"G","ci":"G","v":1.0,"t":"Enchantment","f":[{"n":"Root Maze","m":"{G}","t":"Enchantment","o":"Artifacts and lands enter tapped.","p":null,"d":null,"l":null}],"pm":"","wm":"","sg":1},{"id":"t16","n":"Ajani Resolute Emblem","r":"t","c":"","ci":"","v":0.0,"t":"Emblem","f":[{"n":"Ajani Resolute Emblem","m":"","t":"Emblem","o":"Creatures you control get +2/+2.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"t2","n":"Ajani's Pridemate","r":"t","c":"W","ci":"W","v":0.0,"t":"Token Creature — Cat Soldier","f":[{"n":"Ajani's Pridemate","m":"","t":"Token Creature — Cat Soldier","o":"Whenever you gain life, put a +1/+1 counter on Ajani's Pridemate.","p":"2","d":"2","l":null}],"pm":"","wm":""},{"id":"t3","n":"Angel","r":"t","c":"U","ci":"U","v":0.0,"t":"Token Creature — Angel","f":[{"n":"Angel","m":"","t":"Token Creature — Angel","o":"Flying","p":"3","d":"3","l":null}],"pm":"","wm":""},{"id":"t8","n":"Beast","r":"t","c":"G","ci":"G","v":0.0,"t":"Token Creature — Beast","f":[{"n":"Beast","m":"","t":"Token Creature — Beast","o":"Trample","p":"4","d":"4","l":null}],"pm":"","wm":""},{"id":"t1","n":"Cadet","r":"t","c":"","ci":"","v":0.0,"t":"Token Creature — Wizard Soldier","f":[{"n":"Cadet","m":"","t":"Token Creature — Wizard Soldier","o":"","p":"2","d":"2","l":null}],"pm":"","wm":""},{"id":"t17","n":"Chandra, Chill of Compliance Emblem","r":"t","c":"","ci":"","v":0.0,"t":"Emblem","f":[{"n":"Chandra, Chill of Compliance Emblem","m":"","t":"Emblem","o":"Whenever you cast a spell, draw a card.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"t18","n":"Chandra, Torch of Defiance Emblem","r":"t","c":"","ci":"","v":0.0,"t":"Emblem — Chandra","f":[{"n":"Chandra, Torch of Defiance Emblem","m":"","t":"Emblem — Chandra","o":"Whenever you cast a spell, this emblem deals 5 damage to any target.","p":null,"d":null,"l":null}],"pm":"","wm":""},{"id":"t7","n":"Dragon","r":"t","c":"R","ci":"R","v":0.0,"t":"Token Creature — Dragon","f":[{"n":"Dragon","m":"","t":"Token Creature — Dragon","o":"Flying","p":"5","d":"5","l":null}],"pm":"","wm":""},{"id":"t9","n":"Forest Tentacle","r":"t","c":"G","ci":"G","v":0.0,"t":"Token Land Creature — Forest Tentacle","f":[{"n":"Forest Tentacle","m":"","t":"Token Land Creature — Forest Tentacle","o":"(This token has \"{T}: Add {G}.\" It's affected by summoning sickness until your next turn.)","p":"3","d":"3","l":null}],"pm":"G","wm":""},{"id":"t11","n":"Heartwood","r":"t","c":"GR","ci":"GR","v":0.0,"t":"Token Artifact — Heartwood","f":[{"n":"Heartwood","m":"","t":"Token Artifact — Heartwood","o":"{T}: Add {R} or {G}.","p":null,"d":null,"l":null}],"pm":"GR","wm":""},{"id":"t4","n":"Illusion","r":"t","c":"U","ci":"U","v":0.0,"t":"Token Creature — Illusion","f":[{"n":"Illusion","m":"","t":"Token Creature — Illusion","o":"","p":"1","d":"1","l":null}],"pm":"","wm":""},{"id":"t5","n":"Jace","r":"t","c":"U","ci":"U","v":0.0,"t":"Token Planeswalker — Jace","f":[{"n":"Jace","m":"","t":"Token Planeswalker — Jace","o":"−1: Surveil 1. (Look at the top card of your library. You may put that card into your graveyard.)\n−3: Draw a card.","p":null,"d":null,"l":"0"}],"pm":"","wm":""},{"id":"t6","n":"Leviathan","r":"t","c":"U","ci":"U","v":0.0,"t":"Token Creature — Leviathan","f":[{"n":"Leviathan","m":"","t":"Token Creature — Leviathan","o":"Hexproof","p":"8","d":"8","l":null}],"pm":"","wm":""},{"id":"t12","n":"Lotus","r":"t","c":"","ci":"","v":0.0,"t":"Token Artifact","f":[{"n":"Lotus","m":"","t":"Token Artifact","o":"{T}, Sacrifice this token: Add three mana of any one color.","p":null,"d":null,"l":null}],"pm":"BGRUW","wm":""},{"id":"t10","n":"Mowu","r":"t","c":"G","ci":"G","v":0.0,"t":"Token Legendary Creature — Dog","f":[{"n":"Mowu","m":"","t":"Token Legendary Creature — Dog","o":"","p":"3","d":"3","l":null}],"pm":"","wm":""},{"id":"t13","n":"Sculpture Treasure","r":"t","c":"","ci":"","v":0.0,"t":"Token Artifact Creature — Sculpture Treasure","f":[{"n":"Sculpture Treasure","m":"","t":"Token Artifact Creature — Sculpture Treasure","o":"{T}, Sacrifice this token: Add one mana of any color.","p":"1","d":"1","l":null}],"pm":"BGRUW","wm":""},{"id":"t14","n":"Thopter","r":"t","c":"","ci":"","v":0.0,"t":"Token Artifact Creature — Thopter","f":[{"n":"Thopter","m":"","t":"Token Artifact Creature — Thopter","o":"Flying","p":"1","d":"1","l":null}],"pm":"","wm":""},{"id":"t15","n":"Treasure","r":"t","c":"","ci":"","v":0.0,"t":"Token Artifact — Treasure","f":[{"n":"Treasure","m":"","t":"Token Artifact — Treasure","o":"{T}, Sacrifice this token: Add one mana of any color.","p":null,"d":null,"l":null}],"pm":"BGRUW","wm":""}];
const PACKS = ["fra-pack0-462dd882.json", "fra-pack1-9314e53d.json", "fra-pack2-c33a0df4.json", "fra-pack3-348053cc.json"];
const GIH = {"date":"2026-10-19","games":297964,"w":{"1":[52.78,1675],"2":[53.06,4736],"3":[56.29,25343],"4":[56.52,31641],"5":[57.38,2499],"6":[52.68,9977],"7":[47.56,1701],"8":[57.52,11286],"9":[48.22,618],"10":[52.31,8023],"11":[58.38,6859],"12":[58.42,42404],"13":[63.04,7390],"14":[52.94,136],"15":[56.88,36962],"16":[49.22,5183],"17":[56.5,14417],"18":[53.55,1169],"19":[60.34,6637],"20":[49.91,579],"21":[54.36,15609],"22":[58.16,35100],"23":[54.43,20212],"24":[57.49,17985],"25":[60.75,28459],"26":[47.34,414],"27":[53.63,15520],"28":[59.89,8521],"29":[55.81,13027],"30":[58.72,45864],"31":[56.7,41477],"32":[58.3,7772],"33":[60.66,63773],"34":[53.24,3796],"35":[60.25,28289],"36":[45.83,120],"37":[59.22,42732],"38":[59.83,4137],"39":[54.26,24320],"40":[65.38,9488],"41":[56.47,15441],"42":[58.31,51163],"43":[68.55,4449],"44":[58.13,7494],"45":[56.54,43079],"46":[57.96,44551],"47":[58.55,6692],"48":[56.38,39027],"49":[52.41,1492],"50":[60.66,23711],"51":[53.44,9697],"52":[58.18,5065],"53":[54.25,1860],"54":[60.4,50979],"55":[51.92,312],"56":[57.7,42952],"57":[63.19,8922],"58":[59.84,22124],"59":[66.09,4217],"60":[48.14,2719],"61":[55.82,29298],"62":[59.84,21675],"63":[56.73,6344],"64":[62.3,8298],"65":[54.41,14593],"66":[53.66,25139],"67":[53.5,8011],"68":[52.07,941],"69":[55.76,28011],"70":[56.31,21886],"71":[54.46,5441],"72":[56.78,6499],"73":[50.06,3096],"74":[56.93,36716],"75":[51.8,5168],"76":[51.9,10005],"77":[50.16,5431],"78":[58.56,1875],"79":[56.61,5881],"80":[54.68,4909],"81":[49.79,5356],"82":[49.31,505],"83":[54.57,4134],"84":[57.69,19215],"85":[53.03,11931],"86":[55.26,24547],"87":[42.86,147],"88":[54.16,3582],"89":[57.36,39684],"90":[53.08,3180],"91":[51.42,3069],"92":[53.69,20843],"93":[57.21,2496],"94":[52.8,8025],"95":[60.0,20195],"96":[56.75,37268],"97":[56.62,37875],"98":[56.89,35813],"99":[51.71,9146],"100":[60.44,7128],"101":[55.43,34303],"102":[44.95,465],"103":[34.01,197],"104":[55.03,26616],"105":[57.96,17113],"106":[55.08,1338],"107":[61.73,7455],"108":[51.55,3461],"109":[52.46,16509],"110":[52.94,17],"111":[51.94,1238],"112":[55.66,10466],"113":[60.68,6800],"114":[57.44,23033],"115":[54.23,21458],"116":[57.65,2366],"117":[51.63,2549],"118":[59.0,6773],"119":[56.29,33543],"120":[55.27,16218],"121":[64.76,3513],"122":[60.95,3101],"123":[54.66,15195],"124":[58.31,12653],"125":[50.08,3556],"126":[59.24,16697],"127":[62.82,19401],"128":[61.85,3989],"129":[58.45,18223],"130":[54.93,18191],"131":[55.84,77],"132":[58.92,15926],"133":[57.14,44287],"134":[53.02,14237],"135":[52.61,1743],"136":[53.39,7207],"137":[58.67,2202],"138":[56.03,7462],"139":[54.81,31091],"140":[62.69,3101],"141":[57.93,17758],"142":[63.49,9856],"143":[55.78,17051],"144":[60.16,17162],"145":[61.0,6259],"146":[56.71,18599],"147":[61.67,27711],"148":[57.25,3467],"149":[50.6,1915],"150":[56.17,10222],"151":[54.53,10236],"152":[54.41,2632],"153":[57.04,26275],"154":[59.07,5724],"155":[57.15,17756],"156":[55.02,23079],"157":[59.01,43617],"158":[57.8,13604],"159":[69.49,4598],"160":[57.21,11061],"161":[56.99,14858],"162":[55.43,3141],"163":[56.21,10662],"164":[50.32,7560],"165":[53.37,12858],"166":[53.6,7218],"167":[56.23,12255],"168":[45.3,468],"169":[59.16,3597],"170":[49.71,3832],"171":[56.93,28835],"172":[54.38,3987],"173":[54.96,10835],"174":[57.17,27658],"175":[54.13,11217],"176":[56.71,4491],"177":[56.54,17829],"178":[56.78,19753],"179":[53.15,2886],"180":[55.57,4076],"181":[49.18,1883],"182":[56.8,17819],"183":[55.09,16781],"184":[55.35,14095],"185":[53.57,3399],"186":[54.95,4382],"187":[50.66,916],"188":[56.44,48391],"189":[58.31,6474],"190":[54.73,14903],"191":[58.92,8850],"192":[57.02,24707],"193":[56.98,18528],"194":[54.27,13220],"195":[52.61,1804],"196":[52.59,5144],"197":[53.61,3287],"198":[50.72,3105],"199":[55.52,10871],"200":[58.16,4474],"201":[59.97,5504],"202":[53.08,12300],"203":[56.1,12314],"204":[56.57,13057],"205":[55.51,9658],"206":[54.6,12004],"207":[57.83,18559],"208":[50.71,5017],"209":[49.81,7025],"210":[54.42,5913],"211":[55.53,14777],"212":[59.91,4121],"213":[60.78,27524],"214":[57.44,17588],"215":[53.42,9124],"216":[58.63,7296],"217":[61.23,9415],"218":[58.32,23229],"219":[56.23,15935],"220":[46.23,1235],"221":[55.4,12315],"222":[56.23,16093],"223":[53.7,8972],"224":[58.97,23529],"225":[45.78,734],"226":[54.61,8230],"227":[51.01,7802],"228":[55.9,15578],"229":[65.92,4169],"230":[59.95,7469],"231":[56.47,6970],"232":[48.93,1776],"233":[54.9,10959],"234":[50.13,7632],"235":[55.88,13121],"236":[51.76,5562],"237":[56.13,11757],"238":[51.62,5889],"239":[44.81,1560],"240":[54.65,11070],"241":[48.26,317],"242":[74.11,4373],"243":[46.43,2085],"244":[61.13,3306],"245":[52.2,7167],"246":[54.17,6827],"247":[62.07,21846],"248":[52.14,8729],"249":[56.25,10475],"250":[57.73,15834],"251":[56.73,4423],"252":[52.73,7154],"253":[52.53,8753],"254":[52.76,10762],"255":[54.33,10763],"256":[47.43,3194],"257":[50.66,7236],"258":[58.07,19564],"259":[65.41,3813],"260":[54.31,9975],"261":[56.07,15023],"262":[53.2,10534],"263":[55.57,12980],"264":[50.7,3436],"265":[55.57,12518],"266":[52.68,7914],"267":[57.56,11558],"268":[55.33,14984],"269":[54.85,13168],"270":[52.48,4716],"271":[60.24,20793],"272":[52.38,567],"273":[55.16,6322],"274":[50.83,5847],"275":[57.5,16947],"276":[49.32,73],"277":[55.05,2454],"278":[63.45,7841],"279":[46.17,470],"280":[51.92,5285],"281":[54.58,342496],"282":[54.58,342496],"283":[56.59,515706],"284":[56.59,515706],"285":[55.03,397554],"286":[55.03,397554],"287":[54.34,348279],"288":[54.34,348279],"289":[54.32,379163],"290":[54.32,379163],"g159":[0.0,1],"g160":[63.21,723],"g161":[57.44,437],"g162":[55.0,20],"g163":[68.1,1119],"g164":[56.73,624],"g165":[52.38,42],"g166":[63.74,855],"g167":[64.52,527],"g168":[42.86,7]}};
const INCL = {"date":"2026-10-19","pools":10982,"w":{"1":[48.1,605],"2":[8.1,4935],"3":[35.4,4899],"4":[35.1,4929],"5":[56.3,595],"6":[17.7,5075],"7":[26.7,1131],"8":[29.8,2653],"9":[6.9,1146],"10":[15.0,4859],"11":[74.7,1129],"12":[45.0,5022],"13":[44.8,1162],"14":[1.8,1139],"15":[53.5,4889],"16":[10.3,4993],"17":[45.7,2600],"18":[4.5,2629],"19":[59.8,1143],"20":[14.8,583],"21":[20.9,4930],"22":[46.8,4972],"23":[29.7,4861],"24":[52.2,2657],"25":[38.3,2601],"26":[2.8,1109],"27":[20.7,5020],"28":[51.9,1132],"29":[18.7,4961],"30":[38.0,4890],"31":[45.8,4901],"32":[59.4,1165],"33":[51.6,4892],"34":[11.8,2655],"35":[54.4,2636],"36":[0.9,2603],"37":[36.8,4993],"38":[61.7,624],"39":[32.2,4909],"40":[71.3,1152],"41":[7.3,4928],"42":[39.4,4911],"43":[87.6,599],"44":[50.9,1121],"45":[44.7,4916],"46":[36.4,4917],"47":[50.9,1093],"48":[45.6,4794],"49":[40.3,631],"50":[58.0,2636],"51":[18.3,5006],"52":[23.1,1132],"53":[48.5,555],"54":[63.1,4947],"55":[6.0,1165],"56":[55.1,4954],"57":[76.3,1137],"58":[62.3,2653],"59":[74.8,568],"60":[7.6,4981],"61":[34.5,5055],"62":[42.4,2609],"63":[65.9,1066],"64":[74.9,1164],"65":[25.5,4889],"66":[44.1,4926],"67":[18.2,5008],"68":[6.4,2682],"69":[27.4,4910],"70":[15.1,4942],"71":[51.5,1138],"72":[72.0,1134],"73":[5.1,4956],"74":[53.1,4983],"75":[7.6,4938],"76":[18.4,4975],"77":[17.4,2738],"78":[33.1,605],"79":[57.5,1126],"80":[59.6,1118],"81":[10.4,4897],"82":[4.2,2732],"83":[35.8,1189],"84":[55.7,2657],"85":[20.9,4942],"86":[33.7,4963],"87":[2.6,1130],"88":[38.3,1117],"89":[53.9,4892],"90":[31.5,1119],"91":[34.1,1154],"92":[26.0,4909],"93":[61.2,601],"94":[16.3,4829],"95":[50.6,2669],"96":[51.5,4949],"97":[49.3,4957],"98":[46.9,4937],"99":[23.4,5004],"100":[62.1,1102],"101":[47.8,4906],"102":[2.7,2712],"103":[4.1,1144],"104":[44.0,4929],"105":[46.5,2629],"106":[27.3,596],"107":[70.5,1144],"108":[10.9,2604],"109":[25.8,4993],"110":[0.3,589],"111":[12.4,1120],"112":[25.2,2674],"113":[63.2,1138],"114":[17.7,4976],"115":[33.1,4960],"116":[52.7,584],"117":[5.7,4869],"118":[71.6,1157],"119":[44.9,4886],"120":[23.7,4915],"121":[74.8,576],"122":[49.0,567],"123":[28.7,5008],"124":[30.8,2656],"125":[6.1,4849],"126":[21.6,2656],"127":[41.6,2586],"128":[70.1,615],"129":[28.4,2639],"130":[33.9,4944],"131":[1.1,1143],"132":[21.7,2619],"133":[53.7,4930],"134":[30.6,4846],"135":[15.4,1115],"136":[11.1,2632],"137":[51.5,573],"138":[18.3,2669],"139":[53.8,4907],"140":[68.3,562],"141":[26.7,2683],"142":[55.9,1135],"143":[19.2,2696],"144":[21.8,2739],"145":[35.1,1132],"146":[42.1,2580],"147":[36.3,2690],"148":[28.1,1126],"149":[20.0,1133],"150":[22.9,2629],"151":[30.8,2651],"152":[24.2,1104],"153":[32.9,4924],"154":[48.8,1131],"155":[21.6,2639],"156":[16.2,4890],"157":[39.6,4934],"158":[28.6,2682],"159":[74.4,629],"160":[24.9,2589],"161":[58.1,2718],"162":[25.2,1177],"163":[27.4,2711],"164":[14.8,4915],"165":[54.1,2653],"166":[11.6,4867],"167":[45.1,2579],"168":[3.2,1130],"169":[77.1,564],"170":[12.5,2674],"171":[31.2,4942],"172":[5.4,4895],"173":[17.6,4934],"174":[39.3,4911],"175":[26.8,3552],"176":[37.4,1135],"177":[31.1,3547],"178":[36.3,3486],"179":[38.9,1185],"180":[37.3,1149],"181":[7.6,2702],"182":[28.6,3461],"183":[37.6,3517],"184":[29.7,3493],"185":[35.7,1136],"186":[42.0,1156],"187":[9.3,1161],"188":[84.5,4935],"189":[37.2,1134],"190":[32.2,3589],"191":[56.8,1094],"192":[36.1,3538],"193":[26.9,3584],"194":[31.5,3526],"195":[43.5,558],"196":[14.2,2725],"197":[11.3,2643],"198":[32.2,1134],"199":[38.8,2680],"200":[45.5,1127],"201":[60.0,1099],"202":[33.4,2656],"203":[35.1,2656],"204":[39.4,2624],"205":[37.5,2629],"206":[36.4,2720],"207":[47.1,2667],"208":[21.2,2616],"209":[27.4,2660],"210":[22.6,2651],"211":[37.1,2658],"212":[62.8,565],"213":[31.9,2660],"214":[39.7,2693],"215":[32.2,2710],"216":[66.0,1103],"217":[66.3,1085],"218":[47.0,2627],"219":[44.6,2653],"220":[15.0,1165],"221":[26.4,2655],"222":[37.6,2749],"223":[23.6,2684],"224":[49.4,2707],"225":[3.5,2663],"226":[23.5,2688],"227":[29.4,2685],"228":[38.0,2618],"229":[85.4,574],"230":[62.7,1111],"231":[52.2,1139],"232":[7.4,2665],"233":[34.7,2694],"234":[35.7,2628],"235":[33.2,2622],"236":[25.3,2680],"237":[33.5,2679],"238":[21.0,2608],"239":[7.0,2727],"240":[31.5,2681],"241":[2.7,2611],"242":[92.5,576],"243":[10.7,2630],"244":[80.6,594],"245":[25.8,2620],"246":[29.0,2538],"247":[61.3,2713],"248":[31.0,2615],"249":[27.3,2708],"250":[39.6,2715],"251":[45.5,1156],"252":[26.7,2642],"253":[27.0,2738],"254":[39.7,2701],"255":[41.0,2657],"256":[11.2,2668],"257":[35.1,2707],"258":[45.9,2570],"259":[87.6,533],"260":[42.5,2678],"261":[47.0,2601],"262":[41.0,2639],"263":[37.5,2660],"264":[12.1,2644],"265":[44.5,2673],"266":[33.8,2688],"267":[35.2,2697],"268":[54.4,2620],"269":[45.6,2655],"270":[11.1,2736],"271":[31.7,2644],"272":[6.0,1141],"273":[12.7,2655],"274":[15.1,2655],"275":[29.8,2591],"276":[3.2,1100],"277":[14.9,1112],"278":[48.5,1136],"279":[4.6,1147],"280":[25.7,2765],"g159":[0.9,109],"g160":[63.4,123],"g161":[33.0,115],"g162":[0.0,138],"g163":[62.1,124],"g164":[29.0,131],"g165":[4.7,106],"g166":[67.8,118],"g167":[41.1,107],"g168":[0.0,141]}};
const ATA = {"date":"2026-10-19","picks":2374086,"w":{"1":[2.25,920],"2":[11.37,13173],"3":[7.12,13823],"4":[7.56,17937],"5":[2.0,1204],"6":[10.34,13441],"7":[4.99,1717],"8":[6.03,7050],"9":[7.83,1853],"10":[10.51,12196],"11":[1.62,2907],"12":[5.61,20005],"13":[2.98,3404],"14":[9.77,2367],"15":[4.06,16241],"16":[11.06,12442],"17":[3.75,6573],"18":[11.38,6119],"19":[2.0,2905],"20":[6.11,901],"21":[9.76,13927],"22":[5.78,16457],"23":[7.4,12539],"24":[3.58,7939],"25":[4.38,11696],"26":[9.38,2547],"27":[9.9,16541],"28":[2.69,3508],"29":[10.03,15758],"30":[6.89,22308],"31":[5.91,18198],"32":[2.56,3225],"33":[4.03,24782],"34":[9.94,6175],"35":[3.37,11025],"36":[12.19,7178],"37":[6.91,21319],"38":[1.77,1680],"39":[8.65,17184],"40":[1.61,3579],"41":[10.3,19269],"42":[6.37,22361],"43":[1.2,1598],"44":[3.42,3238],"45":[7.42,20035],"46":[7.02,21726],"47":[3.03,2834],"48":[7.28,19556],"49":[3.84,957],"50":[3.39,9939],"51":[10.44,13692],"52":[5.12,3037],"53":[2.62,1100],"54":[3.91,21108],"55":[9.41,2482],"56":[4.57,18935],"57":[1.71,3640],"58":[2.98,9264],"59":[1.66,1726],"60":[11.82,12732],"61":[8.09,17628],"62":[4.75,10328],"63":[2.38,2976],"64":[1.66,3396],"65":[9.24,13021],"66":[7.31,15134],"67":[10.69,14051],"68":[11.44,6339],"69":[9.13,19072],"70":[9.78,18500],"71":[2.68,2546],"72":[1.96,2924],"73":[12.04,13135],"74":[6.33,17657],"75":[11.62,13861],"76":[10.44,11897],"77":[7.8,5389],"78":[3.13,1184],"79":[2.19,2776],"80":[2.02,2514],"81":[11.64,14595],"82":[11.8,6061],"83":[4.83,2758],"84":[3.52,8467],"85":[10.24,13684],"86":[8.35,16984],"87":[9.61,2241],"88":[3.71,2197],"89":[4.2,17744],"90":[5.0,2128],"91":[4.28,1980],"92":[9.16,15863],"93":[2.16,1220],"94":[10.95,13933],"95":[3.33,9041],"96":[5.1,17342],"97":[5.81,17700],"98":[6.56,18613],"99":[10.33,13105],"100":[2.35,3182],"101":[5.87,16947],"102":[12.03,6070],"103":[9.24,1935],"104":[6.14,14122],"105":[4.23,8537],"106":[3.18,832],"107":[1.8,3310],"108":[10.02,5756],"109":[9.41,14613],"110":[8.78,1083],"111":[6.86,2017],"112":[8.16,7600],"113":[1.99,3070],"114":[9.45,19719],"115":[9.21,15961],"116":[2.96,1222],"117":[12.14,13636],"118":[1.76,3002],"119":[7.64,17880],"120":[9.6,15054],"121":[1.67,1581],"122":[2.22,1540],"123":[8.94,13286],"124":[4.67,6770],"125":[11.56,12341],"126":[6.75,9871],"127":[3.68,9599],"128":[1.58,1594],"129":[5.08,8929],"130":[7.93,13272],"131":[10.11,2611],"132":[6.44,8668],"133":[5.83,19221],"134":[8.89,13417],"135":[7.28,2265],"136":[8.61,6910],"137":[2.02,1203],"138":[8.61,6948],"139":[6.03,15914],"140":[1.53,1395],"141":[6.13,10140],"142":[2.4,4021],"143":[7.45,10049],"144":[6.45,10841],"145":[3.22,3193],"146":[5.13,8541],"147":[4.09,12129],"148":[4.18,2257],"149":[6.51,2150],"150":[6.78,6933],"151":[5.94,6185],"152":[5.69,2209],"153":[8.18,17929],"154":[2.71,3043],"155":[6.58,9448],"156":[9.36,18788],"157":[6.86,22297],"158":[6.01,8666],"159":[1.63,1728],"160":[6.25,6791],"161":[4.48,6952],"162":[4.92,2373],"163":[6.16,7420],"164":[10.43,12192],"165":[4.68,6620],"166":[11.19,16480],"167":[7.69,7805],"168":[8.94,2279],"169":[1.74,1485],"170":[9.75,5616],"171":[9.2,20278],"172":[11.93,15191],"173":[10.41,14141],"174":[8.66,19024],"175":[9.68,9807],"176":[6.22,2722],"177":[8.87,10936],"178":[8.92,12127],"179":[6.87,2169],"180":[6.48,2816],"181":[11.56,6238],"182":[9.0,11650],"183":[8.81,10515],"184":[9.46,10815],"185":[6.61,2450],"186":[6.26,2813],"187":[8.61,1985],"188":[7.31,21004],"189":[5.71,3305],"190":[9.19,10818],"191":[3.04,3637],"192":[8.39,13026],"193":[9.01,12216],"194":[9.3,9648],"195":[2.3,916],"196":[8.62,6067],"197":[9.74,5696],"198":[4.98,2083],"199":[4.38,5577],"200":[2.82,2208],"201":[2.61,2455],"202":[5.98,7657],"203":[4.99,6602],"204":[5.34,6664],"205":[5.93,5441],"206":[6.02,6784],"207":[3.54,8750],"208":[7.77,5187],"209":[6.86,4961],"210":[7.32,4855],"211":[6.68,8471],"212":[1.96,1551],"213":[5.18,9966],"214":[5.2,8037],"215":[7.48,6584],"216":[1.81,2977],"217":[1.96,3474],"218":[4.29,9778],"219":[4.7,7247],"220":[7.98,2086],"221":[7.89,8710],"222":[5.69,7915],"223":[7.41,6908],"224":[3.74,10049],"225":[11.48,6674],"226":[8.55,7518],"227":[7.08,5923],"228":[6.45,8545],"229":[1.6,1607],"230":[2.31,3203],"231":[3.31,3186],"232":[10.8,6374],"233":[7.24,6938],"234":[6.73,5297],"235":[6.94,7889],"236":[8.84,6035],"237":[6.63,7138],"238":[7.91,5822],"239":[10.66,5716],"240":[7.04,7065],"241":[12.21,5909],"242":[1.28,1595],"243":[10.44,5341],"244":[1.46,1409],"245":[8.07,5786],"246":[8.64,6390],"247":[2.43,9542],"248":[6.5,5678],"249":[8.1,7581],"250":[5.34,8438],"251":[3.4,2297],"252":[7.22,5295],"253":[6.61,5960],"254":[5.25,6583],"255":[5.36,6373],"256":[10.11,5886],"257":[6.45,5160],"258":[4.65,9702],"259":[1.6,1507],"260":[5.31,5714],"261":[5.07,7902],"262":[6.01,6392],"263":[7.3,7982],"264":[9.89,6324],"265":[5.23,6765],"266":[6.24,5085],"267":[6.02,6755],"268":[3.88,7496],"269":[5.41,6952],"270":[9.27,6267],"271":[4.86,10866],"272":[9.11,2672],"273":[9.1,7266],"274":[8.06,6032],"275":[5.32,8721],"276":[10.05,2438],"277":[6.49,2340],"278":[2.85,3668],"279":[8.99,2084],"280":[9.25,6358],"g159":[8.07,206],"g160":[2.09,304],"g161":[4.75,248],"g162":[10.75,249],"g163":[1.89,408],"g164":[6.58,336],"g165":[7.14,203],"g166":[1.86,352],"g167":[2.76,305],"g168":[10.09,228]}};
/* src/js/00-core.js */
const $=(s,r=document)=>r.querySelector(s);
const BY=Object.fromEntries(DATA.map(c=>[c.id,c]));
const N=c=>c.r==='t'?999:+c.id;
// Chiave nel browser per i dati di un set (Mazzi, Partite, Pool): in FRA «mtg-lab:fra-mazzi-v1». I set non si mescolano,
// perché gli id delle carte sono i numeri di collezione del set.
const setKey=s=>'mtg-lab:'+SET.key+'-'+s;
// Una chiave che prima dei set non lo nominava: in FRA (e nei test senza fogli) resta quella di prima, negli altri set ha il set.
const oldKey=(k,s)=>typeof SET==='undefined'||SET.code==='FRA'?k:setKey(s);
const LS={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const esc=s=>String(s??'').replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const COLORS=['W','U','B','R','G'];
const BASIC_NAME={W:'Plains',U:'Island',B:'Swamp',R:'Mountain',G:'Forest'};
// La terra base di ogni colore che si aggiunge al Mazzo: la prima del set che non è una variante (in FRA 281, 283...).
const BASIC_ID=Object.fromEntries(COLORS.map(k=>[k,DATA.find(c=>!c.b&&c.r!=='t'&&c.n===BASIC_NAME[k]&&/Basic Land/.test(c.t))?.id]));
function toast(t){const el=$('#toast');el.textContent=t;el.hidden=false;clearTimeout(toast._t);toast._t=setTimeout(()=>el.hidden=true,2200)}
function mana(s){return esc(s).replace(/\{([^}]+)\}/g,(m,x)=>{const k=x.replace('/','');const cls=/^[WUBRG]$/.test(x)?x:(x.includes('/')?x[0]:'');return `<span class="ms ${cls}">${/^[WUBRG]$/.test(x)?'':esc(k==='T'?'↷':k)}</span>`})}
const isLand=cid=>/\bLand\b/.test(BY[cid]?.f[0].t||BY[cid]?.t||'');
const isCreatureCid=cid=>/Creature/.test(BY[cid]?.f[0].t||'');
const cmc=cid=>BY[cid]?.v||0;
// Carte del Pool per uid.
const byUid=pool=>Object.fromEntries(pool.map(x=>[x.u,x]));
// Proporzione della carta (63×88 mm) e larghezza delle carte sul campo, dal CSS (--bw); 72 px senza pagina, nei test.
const CARD_H=88/63;
const cardW=()=>typeof document==='undefined'?72:parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--bw'))||72;
const oracle=cid=>(BY[cid]?.f||[]).map(f=>f.o||'').join('\n');
// Sorteggi delle Buste, uguali per ogni set: lo stesso seme dà sempre la stessa sequenza.
function hashStr(s){let h=1779033703^s.length;for(let i=0;i<s.length;i++){h=Math.imul(h^s.charCodeAt(i),3432918353);h=h<<13|h>>>19}return h>>>0}
function mulberry(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const pick=(rng,a)=>a[Math.floor(rng()*a.length)];
function pickD(rng,a,taken){for(let i=0;i<80;i++){const c=pick(rng,a);if(!taken.has(c.id)){taken.add(c.id);return c}}return pick(rng,a)}
function roll(rng,table){const tot=table.reduce((a,t)=>a+t[0],0);let x=rng()*tot;for(const t of table){if((x-=t[0])<0)return t[1]}return table[table.length-1][1]}
const byR=(arr,r)=>arr.filter(c=>c.r===r);
// Una carta nel pool: c = id della carta (regole), v = id della variante (solo immagine).
const asItem=(card,x={})=>card.b?{c:card.b,v:card.id,...x}:{c:card.id,...x};
// Una variante (un trattamento) la cui carta base non è già nella busta.
function pickV(rng,a,taken){for(let i=0;i<80;i++){const c=pick(rng,a);if(!taken.has(c.b)){taken.add(c.b);return c}}return pick(rng,a)}

/* src/js/10-sheets.js */
// Fogli di stampa di Reality Fracture, ricavati dai numeri di collezione Scryfall:
// 1-194 set principale (71 comuni + 10 dual comuni, 43 non comuni, 50 rare, 20 mitiche),
// 195-280 carte eco, 281-290 basi, 291-401 trattamenti alternativi (voci con `b` = id della carta base).
// Il set di questi fogli: il prefisso dei codici dei Kit e delle chiavi salvate nel browser.
// packs: come sono fatte le Buste, per l'Apertura. pairs: i nomi delle 10 coppie di colori (senza, quelli di 21-pairs.js).
const SET={code:'FRA',key:'fra',name:'Reality Fracture',
  packs:"Le buste seguono la collation delle Play Booster vere, con le percentuali ufficiali, e le carte escono nell'ordine in cui stanno nella busta: 6 comuni di tutti e 5 i colori, 2 non comuni, 3 carte «eco» (una coppia e la carta vicina sul foglio), la Special Guest in 1 busta su 55, rara o mitica con i trattamenti Shattered Mirror, Sculptor's Stronghold, Braintwister e Portal view, foil, terra e pedina."};
const isVariant=c=>!!c.b;
const inMain=c=>c.r!=='t'&&!c.sg&&!isVariant(c)&&N(c)<=194;
const DUAL=DATA.filter(c=>inMain(c)&&c.r==='c'&&/Land/.test(c.t)&&/(Commons|Annex)$/.test(c.n));
const dualSet=new Set(DUAL.map(c=>c.id));
const SHEET={};['c','u','r','m'].forEach(r=>SHEET[r]=DATA.filter(c=>inMain(c)&&c.r===r&&!dualSet.has(c.id)));
const ECHO_ALL=DATA.filter(c=>c.r!=='t'&&!isVariant(c)&&!c.sg&&N(c)>=195&&N(c)<=280);
const BASICS=DATA.filter(c=>c.r!=='t'&&!isVariant(c)&&!c.sg&&N(c)>=281&&N(c)<=290);
const GUESTS=DATA.filter(c=>c.sg);
const TOKENS=DATA.filter(c=>c.r==='t');
const TR={be:[],sm:[],ss:[],bt:[],tw:[],pv:[]};DATA.filter(isVariant).forEach(c=>TR[c.tr].push(c));
const TR_NAME={be:'Borderless eco',sm:'Shattered Mirror',ss:"Sculptor's Stronghold",bt:'Braintwister',tw:'Tower',pv:'Portal view'};
// Borderless per carta eco: id base -> varianti
const BE_OF={};TR.be.forEach(v=>(BE_OF[v.b]=BE_OF[v.b]||[]).push(v));

// Coppie eco ("echoed pairs"): 43 coppie di 2 carte della stessa rarità, di solito lo stesso personaggio
// (prima parola del nome). Eccezioni: Thalia/Geist of Saint Thalia e Jace/Tam, confermate dalle illustrazioni
// borderless che uniscono le due carte (296/299, 300/317); Rescue Girl/Massacre Girl e Tinybones/Titanbones
// per esclusione. Il ciclo «Way of the…» segue i planeswalker, con una sola metà echoverse per coppia
// (deduzione dai watermark di Scryfall, nessuna fonte lo elenca).
const ECHO_KEY={'Geist of Saint Thalia':'Thalia','Tam, the Possibility':'Jace','Rescue Girl, First Responder':'Girl','Massacre Girl, Most Wanted':'Girl',
  'Tinybones, Pocket Nuisance':'Bones','Titanbones, Towering Heart':'Bones',
  'Way of the Healer':'Way-Liliana','Way of the Necromancer':'Way-Liliana','Way of the Cryomancer':'Way-Chandra','Way of the Pyromancer':'Way-Chandra',
  'Way of the Deathbringer':'Way-Garruk','Way of the Wildspeaker':'Way-Garruk','Way of the Warlord':'Way-Ajani','Way of the Mentor':'Way-Ajani',
  'Way of the Mind Sculptor':'Way-Jace','Way of the Paradox':'Way-Jace'};
const echoKey=c=>ECHO_KEY[c.n]||c.n.split(/[ ,]/)[0].replace(/'s$/,'');
const ECHO={};
['u','r','m'].forEach(rar=>{
  const g={};ECHO_ALL.filter(c=>c.r===rar).forEach(c=>(g[echoKey(c)]=g[echoKey(c)]||[]).push(c));
  ECHO[rar]={groups:Object.values(g),all:ECHO_ALL.filter(c=>c.r===rar)};
});

/* src/js/11-boosters.js */
// Play Booster di Reality Fracture secondo "Collecting Reality Fracture" (Wizards).
// Dove l'articolo dice "less than 1%" usiamo le cifre del file dell'edizione di Forge,
// che le prende dal fact sheet di mtgscribe.com: sono stime, non una fonte primaria.
const P={
  guest:1/55,                                   // 1 busta su 55: una Special Guest sostituisce una comune
  unc:[[96.2,'u'],[3.8,'bt']],                   // slot non comune
  cu:[[23,'c'],[74,'u'],[3,'bt']],               // slot comune/non comune
  echo:[[88.9,'u'],[6.7,'r'],[1.4,'m'],[1.7,'be-u'],[.94,'be-r'],[.36,'be-m']],         // be-r e be-m: Forge
  rare:[[74.4,'r'],[14.8,'m'],[1,'sm-r'],[.48,'sm-m'],[3.8,'ss-r'],[1,'ss-m'],[3.1,'bt-r'],[.42,'bt-m'],[1,'pv-r']], // sm-m e bt-m: Forge
  // Trattamenti foil, tutti "<1%" nell'articolo: il 2.8% che resta, diviso per rarità come in Forge.
  foil:[[49.5,'c'],[40.5,'u'],[6,'r'],[1.2,'m'],[.841,'be-u'],[.294,'be-r'],[.070,'be-m'],[.593,'bt-u'],[.350,'bt-r'],[.035,'bt-m'],[.420,'ss-r'],[.082,'ss-m'],[.117,'pv-r']],
  land:[[14.6,'basic'],[3.6,'basic-f'],[21.8,'tw'],[5.5,'tw-f'],[43.6,'dual'],[10.9,'dual-f']],
};
// Slot rara/mitica: senza carte eco, con i trattamenti Shattered Mirror, Sculptor's Stronghold, Braintwister e Portal view.
function rareSlot(rng,taken){const rr=roll(rng,P.rare);
  if(rr==='r'||rr==='m')return asItem(pickD(rng,SHEET[rr],taken));
  const [tr,r]=rr.split('-');return asItem(pickV(rng,byR(TR[tr],r),taken))}
// Comuni: come sulla carta, ogni busta prende k carte consecutive da una sequenza di stampa. Wizards dice che le Play Booster
// bilanciano i colori (Rosewater, "What Are Play Boosters?"); chi ha letto carta per carta una scatola di FRA ha trovato i
// 5 colori in tutte le 30 buste, con le prime cinque comuni in rotazione fissa (per esempio W B G U R). La sequenza vera non
// è pubblicata; questa la imita. Una passata fa 12 giri di W B G U R: le caselle di colore tengono le 55 monocolore e 5
// multicolore (una per colore, di un suo colore), e dopo 11 giri una casella libera tiene una delle altre 5 multicolore o
// delle 6 incolori. Due passate con ordini diversi, e con le multicolore che si scambiano i posti. Così ogni comune esce
// con la stessa frequenza, 6 o 7 comuni consecutive hanno sempre i 5 colori e mai più di 2 dello stesso, e non ci sono
// doppioni, perché le due copie di una comune stanno lontane.
const ROT=['W','B','G','U','R'];
const COMMON_SEQ=(()=>{const rng=mulberry(hashStr('FRA-comuni'));
  const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
  const gold=SHEET.c.filter(c=>c.c.length>1),other=SHEET.c.filter(c=>!c.c);
  // Una multicolore per colore, tutte diverse: la prima assegnazione che funziona, provando le carte nell'ordine dato.
  const match=gs=>{const res=[];const go=i=>{if(i===ROT.length)return true;for(const g of gs)if(g.c.includes(ROT[i])&&!res.includes(g)){res[i]=g;if(go(i+1))return true}res.length=i;return false};return go(0)?res:null};
  const pass=inSlot=>{const col=ROT.map((k,i)=>shuf(SHEET.c.filter(c=>c.c===k).concat(inSlot[i]))),free=shuf(gold.filter(g=>!inSlot.includes(g)).concat(other));
    const seq=[];for(let b=0;b<col[0].length;b++){col.forEach(cs=>seq.push(cs[b]));if(b<free.length)seq.push(free[b])}return seq};
  for(let t=0;;t++){const g1=match(shuf(gold)),g2=match(shuf(gold.filter(g=>!g1.includes(g))))||match(shuf(gold));
    const seq=pass(g1).concat(pass(g2)),L=seq.length;
    // Le due copie di ogni comune distano almeno 8 posizioni (le comuni di una busta sono al massimo 7).
    const far=seq.every((c,i)=>{for(let d=1;d<8;d++)if(seq[(i+d)%L]===c)return false;return true});
    if(far||t>200)return seq}})();
function commons(rng,k,taken){const L=COMMON_SEQ.length,s=Math.floor(rng()*L),cs=[];
  for(let j=0;j<k;j++)cs.push(COMMON_SEQ[(s+j)%L]);cs.forEach(c=>taken.add(c.id));return cs}
// Carte eco: sul foglio le due carte di ogni coppia stanno affiancate (1A 1B 2A 2B...) e ogni busta prende tre carte
// consecutive (Mark Rosewater): la coppia intera più la carta vicina di un'altra coppia, dopo (1A 1B 2A) o prima (1B 2A 2B).
// Chi ha aperto le buste lo conferma: sempre una coppia e una carta sola, mai divise, nei due ordini. Il foglio vero non si
// conosce, quindi la coppia e la vicina si pescano con le percentuali per carta dell'articolo. Le borderless sono 15 coppie
// intere e nei video escono raggruppate (coppie borderless, a volte tre carte borderless): accanto a una borderless la vicina
// è borderless una volta su due (Q_BL, stima nostra), e la catena tiene le frequenze per carta dell'articolo.
const Q_BL=.5;
const ECHO_INST=(()=>{const out=[];['u','r','m'].forEach(r=>{const reg=P.echo.find(t=>t[1]===r)[0],bl=P.echo.find(t=>t[1]==='be-'+r)[0];
  const gs=ECHO[r].groups.map(g=>g.slice().sort((x,y)=>N(x)-N(y))),bgs=gs.filter(g=>g.every(c=>BE_OF[c.id]));
  gs.forEach(g=>out.push({w:reg/gs.length,g,key:g[0].id,bl:0,cards:g}));
  bgs.forEach(g=>out.push({w:bl/bgs.length,g,key:g[0].id,bl:1,cards:g.map(c=>BE_OF[c.id][0])}))});return out})();
const BL_SHARE=ECHO_INST.filter(x=>x.bl).reduce((a,x)=>a+x.w,0)/ECHO_INST.reduce((a,x)=>a+x.w,0);
const P_TO_BL=BL_SHARE*(1-Q_BL)/(1-BL_SHARE);
const echoPick=(rng,f)=>roll(rng,ECHO_INST.filter(f).map(x=>[x.w,x]));
function echoBlock(rng,taken){const x=echoPick(rng,()=>true);const bl=rng()<(x.bl?Q_BL:P_TO_BL);const y=echoPick(rng,i=>i.bl===+bl&&i.key!==x.key);
  x.g.concat(y.g).forEach(c=>taken.add(c.id));
  const [a,b]=x.cards.map(c=>asItem(c,{e:1}));return rng()<.5?[a,b,asItem(y.cards[0],{e:1})]:[asItem(y.cards[1],{e:1}),a,b]}
// Le carte escono nell'ordine in cui stanno nella busta, dal davanti. Così le ha trovate chi ha aperto FRA (anche il video
// ufficiale WeeklyMTG): comuni, le due non comuni (la Braintwister per prima), le tre carte eco, la Special Guest se c'è,
// rara, foil, terra e in fondo la pedina. Chi sfoglia trova quindi la rara verso la fine.
function booster(rng){
  const taken=new Set(),out=[];const add=(it,slot)=>{it.s=slot;out.push(it)};
  const guest=rng()<P.guest,cu=roll(rng,P.cu);
  // In 1 busta su 55 una Special Guest prende il posto di una comune; se lo slot comune/non comune dà una comune, è la settima.
  const cs=commons(rng,(guest?5:6)+(cu==='c'?1:0),taken);
  cs.forEach((c,i)=>add(asItem(c),cu==='c'&&i===cs.length-1?'cu':'c'));
  const u=[[roll(rng,P.unc),'u']];if(cu!=='c')u.push([cu,'cu']);
  u.map(([t,sl])=>[t==='bt'?asItem(pickV(rng,byR(TR.bt,'u'),taken)):asItem(pickD(rng,SHEET.u,taken)),sl]).sort((x,y)=>!!y[0].v-!!x[0].v).forEach(([it,sl])=>add(it,sl));
  echoBlock(rng,taken).forEach(it=>add(it,'e'));
  if(guest)add(asItem(pick(rng,GUESTS),{sg:1}),'sg');
  add(rareSlot(rng,taken),'r');
  // La foil viene da un foglio a parte: può ripetere una carta della busta (circa 1 busta su 16).
  const fr=roll(rng,P.foil);
  if(fr==='c')add(asItem(pick(rng,SHEET.c)),'f');
  else if('urm'.includes(fr))add(asItem(pick(rng,SHEET[fr].concat(byR(ECHO_ALL,fr)))),'f');
  else{const [tr,r]=fr.split('-');add(asItem(pick(rng,byR(TR[tr],r))),'f')}
  out[out.length-1].f=1;
  const ld=roll(rng,P.land);const lf=ld.endsWith('-f')?{f:1}:{};const lk=ld.replace('-f','');
  add(asItem(pick(rng,lk==='basic'?BASICS:lk==='tw'?TR.tw:DUAL),lf),'l');
  add({c:pick(rng,TOKENS).id,k:1},'k'); // pedina / segnalini: non entra nel pool
  return out;
}
// Promo del Kit: "1 Traditional foil rare or mythic rare card". Da Lorwyn Eclipsed non ha più il timbro dell'anno, quindi è
// una rara o mitica qualunque del set principale (carte eco comprese), in cornice normale e foil tradizionale. Wizards non
// dà il rapporto: come taw/MTGJSON per i set precedenti, ogni rara pesa 2 e ogni mitica 1 (mitica circa 1 volta su 6).
const PROMO=[...SHEET.r,...byR(ECHO_ALL,'r')].map(c=>[2,c]).concat([...SHEET.m,...byR(ECHO_ALL,'m')].map(c=>[1,c]));

/* src/js/12-draft.js */
// Draft a 8 del set (issue #46): tu al posto 0 e sette Bot. Ognuno apre 3 Buste di Play Booster, con la collation di
// 11-boosters.js e senza la pedina: 14 carte, terra compresa, come le 14 scelte dei dati di 17Lands. La prima e la terza Busta
// passano a sinistra (dal posto i al posto i+1), la seconda a destra. Lo stesso codice (FRAD-… in FRA) dà le stesse 24 Buste, e i Bot
// non tirano a caso: con le stesse scelte tue il draft finisce sempre uguale.
// Lo stato d = {code, rounds: [3][8] Buste da aprire, round, pick, packs: [8] Buste in mano, picks: [8] carte prese, done}.
const DRAFT_PRE=SET.code+'D-',SEATS=8;
const isDraftCode=code=>String(code).toUpperCase().startsWith(DRAFT_PRE);
const newDraftCode=()=>DRAFT_PRE+Math.random().toString(36).slice(2,7).toUpperCase();
function draftNew(code){const rng=mulberry(hashStr(String(code).toUpperCase()));let n=0;
  const rounds=[0,1,2].map(()=>Array.from({length:SEATS},()=>booster(rng).filter(x=>!x.k).map(x=>({...x,u:'d'+(n++)}))));
  return{code,rounds,round:0,pick:0,packs:rounds[0].map(p=>p.slice()),picks:Array.from({length:SEATS},()=>[]),done:false}}
const passDir=round=>round===1?-1:1;
// Una scelta di tutto il tavolo: i posti in chosen ({posto: uid}) prendono la loro carta, gli altri sono Bot; poi le Buste
// passano. Finite le carte si apre la Busta dopo. false, senza cambiare niente, se una carta scelta non è nella Busta del posto.
function draftAdvance(d,chosen){if(d.done)return false;
  for(const s in chosen)if(!d.packs[s]?.some(x=>x.u===chosen[s]))return false;
  for(let s=0;s<SEATS;s++){const p=d.packs[s],x=s in chosen?p.find(y=>y.u===chosen[s]):botChoice(p,d.picks[s]);p.splice(p.indexOf(x),1);d.picks[s].push(x)}
  const dir=passDir(d.round),next=Array(SEATS);d.packs.forEach((p,s)=>next[(s+dir+SEATS)%SEATS]=p);d.packs=next;d.pick++;
  if(!d.packs[0].length){d.round++;d.pick=0;if(d.round>=3){d.done=true;d.packs=[]}else d.packs=d.rounds[d.round].map(p=>p.slice())}
  return true}
// Draft con l'amico (issue #47): due posti umani, estratti dal codice come al negozio, e sei Bot. Non serve una pagina che
// faccia da host: il draft è deterministico, quindi ogni pagina ricalcola tutto il tavolo dalle scelte dei due.
function draftSeats(code){const r=mulberry(hashStr(String(code).toUpperCase()+'·posti')),a=Math.floor(r()*SEATS);let b=Math.floor(r()*(SEATS-1));if(b>=a)b++;return[a,b]}
// Il draft dalle scelte dei due (pa al posto sa, pb al posto sb): si avanza finché tutti e due hanno scelto, e n sono le scelte
// fatte da entrambi. Una scelta che non è nella Busta del suo posto ferma lì.
function draftReplay(code,sa,pa,sb,pb){const d=draftNew(code),m=Math.min(pa.length,pb.length);let n=0;
  while(n<m&&draftAdvance(d,{[sa]:pa[n],[sb]:pb[n]}))n++;return{d,n}}
// Da solo sono al posto 0: prendo la carta u.
function draftPick(d,u){draftAdvance(d,{0:u});return d}
// Il mio Pool dopo il draft (me: il mio posto): le mie scelte, senza le terre base, che si aggiungono con i contatori.
const draftPool=(d,me=d.me||0)=>d.picks[me].filter(x=>!/Basic Land/.test(BY[x.c].t||''));

// I Bot (ADR 0009) prendono la carta con l'ATA più bassa, cioè quella che le persone prendono prima: il valore è 15 meno l'ATA.
// Senza ATA contano la rarità e, se c'è, il GIH WR. Più carte hanno preso, più evitano quelle fuori dai loro due colori
// principali, come chi legge i segnali. A parità vale l'ordine della Busta.
const ATA_=typeof ATA==='undefined'?null:ATA;
const RAR_PTS={m:10,r:8,u:4,c:2};
function pickValue(cid){const a=ATA_?.w[cid];if(a)return 15-a[0];const g=typeof GIH_!=='undefined'&&GIH_?.w[cid];return (RAR_PTS[BY[cid].r]||2)+(g?(g[0]-50)/5:0)}
function botColors(picks){const w={W:0,U:0,B:0,R:0,G:0};
  picks.forEach(x=>{const c=BY[x.c].c||'';if(c&&!isLand(x.c))[...c].forEach(k=>w[k]+=pickValue(x.c)/c.length)});return w}
function botChoice(pack,picks){const w=botColors(picks),top=COLORS.slice().sort((a,b)=>w[b]-w[a]).slice(0,2),commit=Math.min(1,picks.length/6);
  let best=null,bv=-Infinity;
  pack.forEach(x=>{const cols=[...(BY[x.c].c||'')],on=cols.every(k=>top.includes(k)),v=pickValue(x.c)-(on?0:4*commit);if(v>bv){bv=v;best=x}});
  return best}

/* src/js/13-kit.js */
// Kit, Kit di squadra e Pool da lista, uguali per ogni set: il set dà booster() e PROMO (src/js/11-boosters.js per FRA,
// src/sets/<set>/11-boosters.js per gli altri) e il prefisso dei codici, SET.code.
// Promo del Kit: una rara o mitica foil tradizionale, pescata da PROMO.
const promoCard=rng=>({...asItem(roll(rng,PROMO)),f:1,p:1,s:'p'});
function makeKit(seed){
  const rng=mulberry(hashStr(seed));
  const boosters=[];for(let i=0;i<6;i++)boosters.push(booster(rng));
  const promo=promoCard(rng);
  let n=0;const pool=[];
  boosters.forEach((b,bi)=>b.forEach(x=>{x.u='p'+(n++);x.b=bi;if(x.k||/Basic Land/.test(BY[x.c].t))return;pool.push(x)}));
  promo.u='p'+(n++);promo.b=6;pool.push(promo);
  return {seed,boosters,promo,pool};
}
// Kit di squadra del Two-Headed Giant: n = 8 (1 prerelease kit + 2 Play Booster, una promo) o 12 (2 prerelease kit, due promo).
// Ogni prerelease kit sono 6 Buste e la sua promo; con 8 Buste seguono le 2 sfuse. Ogni carta ha un proprietario o:
// 0 (Compagno A) per la prima metà delle Buste, 1 (Compagno B) per la seconda. La promo k va al Compagno k,
// quindi con 8 Buste a chi apre la Busta 1.
function makeTeamKit(seed,n){
  const rng=mulberry(hashStr(seed));const boosters=[],promos=[];
  for(let k=0;k<Math.floor(n/6);k++){for(let i=0;i<6;i++)boosters.push(booster(rng));promos.push(promoCard(rng))}
  while(boosters.length<n)boosters.push(booster(rng));
  let u=0;const pool=[];
  boosters.forEach((b,bi)=>b.forEach(x=>{x.u='p'+(u++);x.b=bi;x.o=bi<n/2?0:1;if(x.k||/Basic Land/.test(BY[x.c].t))return;pool.push(x)}));
  promos.forEach((x,k)=>{x.u='p'+(u++);x.b=n+k;x.o=k;pool.push(x)});
  return {seed,team:n,boosters,promos,pool};
}
// Pool da una lista di carte (issue #30): il codice FRAL- (TRKL- per Star Trek) contiene le carte, due caratteri in base 36 per carta, in ordine
// crescente, così la stessa lista dà lo stesso codice in qualunque ordine sia scritta. Il numero è l'id della carta, quello della
// variante (che porta con sé la carta base) o 1000 più il numero di una Special Guest. Niente Buste e niente promo.
const LIST_PRE=SET.code+'L-';
const isListCode=code=>String(code).toUpperCase().startsWith(LIST_PRE);
const listTok=x=>x.v?+x.v:BY[x.c].sg?1000+ +x.c.slice(1):+x.c;
const tokItem=n=>{const id=n>=1000?'g'+(n-1000):String(n),c=BY[id];if(!c||c.r==='t'||/Basic Land/.test(c.t||''))return null;return c.b?{c:c.b,v:id}:{c:id}};
const listCode=items=>LIST_PRE+items.map(listTok).sort((a,b)=>a-b).map(n=>n.toString(36).toUpperCase().padStart(2,'0')).join('');
function makeListKit(code){const body=String(code).slice(LIST_PRE.length),pool=[];
  for(let i=0;i+1<body.length;i+=2){const x=tokItem(parseInt(body.slice(i,i+2),36));if(x)pool.push({...x,u:'p'+pool.length})}
  return {seed:code,boosters:[],promo:null,pool}}
// Il nome del Kit nei nomi dei Mazzi, dei file e negli avvisi: il codice, o per un Pool da lista un'etichetta corta.
const kitName=code=>isListCode(code)?'LISTA-'+hashStr(String(code).toUpperCase()).toString(36).toUpperCase().padStart(5,'0').slice(-5):code;
// Il codice dice il tipo di Kit: FRA-XXXXX individuale, FRA2-XXXXX di squadra da 8 Buste, FRA2x12-XXXXX da 12, FRAL- da una lista
// (con il prefisso del set: TRK-XXXXX per Star Trek).
const TEAM_RE=new RegExp('^'+SET.code+'2(x12)?-','i');
const kitTeam=code=>{const m=TEAM_RE.exec(code);return m?(m[1]?12:8):0};
const kitFromCode=code=>{if(isListCode(code))return makeListKit(code);const n=kitTeam(code);return n?makeTeamKit(code,n):makeKit(code)};
const newSeed=(team=0)=>SET.code+(team?team===12?'2x12-':'2-':'-')+Math.random().toString(36).slice(2,7).toUpperCase();

/* src/js/20-autobuild.js */
const REMOVAL=/destroy target|exile target|deals? (\d+|X) damage to (target|any|each creature)|target creature gets -|fights? |sacrifices? a creature|deals damage equal/i;
const REMOVAL_BONUS=1.4;
// Il punteggio senza dati: soprattutto la rarità, più le rimozioni riconosciute da REMOVAL.
function score(c){let s={m:4.2,r:3.6,u:2.4,c:1.6}[c.r]||1;if(REMOVAL.test(oracle(c.id)))s+=REMOVAL_BONUS;if(/Creature/.test(c.f[0].t))s+=.35;if(c.v>=7)s-=.9;if(c.v<=1&&!/Creature/.test(c.f[0].t))s-=.3;return s}
// Sotto WR_MIN Partite in mano il GIH WR è poco affidabile: sulla carta è grigio, e autoBuild non lo usa (issue #20).
const WR_MIN=500;
// Il punteggio delle carte per autoBuild (issue #26), con k: quanti punti di GIH WR vale un punto di score().
// gih: id della carta → [GIH WR, Partite in mano], come GIH.w. Senza dati, o senza carte sopra WR_MIN Partite, è score() e k = 1.
// Con i dati è il GIH WR. Per le carte senza dati o sotto WR_MIN Partite è una stima sulla stessa scala: il GIH WR medio delle carte
// affidabili della stessa rarità, più il bonus delle rimozioni convertito con k. k è la pendenza della retta dei minimi quadrati tra
// score() e GIH WR delle carte affidabili, e mai sotto 0.
function cardScorer(gih){
  const ok=gih?Object.entries(gih).filter(([id,[,n]])=>BY[id]&&n>=WR_MIN).map(([id,[w]])=>({r:BY[id].r,x:score(BY[id]),w})):[];
  if(!ok.length)return {s:cid=>score(BY[cid]),k:1};
  const avg=a=>a.reduce((s,v)=>s+v,0)/a.length,mx=avg(ok.map(o=>o.x)),mw=avg(ok.map(o=>o.w));
  const vx=ok.reduce((s,o)=>s+(o.x-mx)**2,0),k=vx?Math.max(0,ok.reduce((s,o)=>s+(o.x-mx)*(o.w-mw),0)/vx):0;
  const byR={};ok.forEach(o=>(byR[o.r]=byR[o.r]||[]).push(o.w));
  return {k,s:cid=>{const d=gih[cid];if(d&&d[1]>=WR_MIN)return d[0];
    return (byR[BY[cid].r]?avg(byR[BY[cid].r]):mw)+(REMOVAL.test(oracle(cid))?REMOVAL_BONUS*k:0)}};
}
function pips(cid){const m=(BY[cid].f[0].m||'').match(/\{[^}]+\}/g)||[];const o={W:0,U:0,B:0,R:0,G:0};m.forEach(x=>COLORS.forEach(k=>{if(x.includes(k))o[k]+=x.includes('/')?.5:1}));return o}
// Il Mazzo automatico: per ogni coppia le 23 carte non terra con il punteggio più alto, con una penalità se sono meno di 23 o se
// hanno meno di 13 creature (convertite con k); poi almeno 14 creature, fino a 3 terre doppie della coppia e le terre base.
// gih come in cardScorer: senza dati il risultato è quello di prima dell'issue #26.
function autoBuild(pool,gih=null){
  const {s,k}=cardScorer(gih);const nonland=pool.filter(x=>!isLand(x.c));let best=null;
  for(let i=0;i<5;i++)for(let j=i+1;j<5;j++){
    const pair=COLORS[i]+COLORS[j];
    const ok=nonland.filter(x=>[...BY[x.c].c].every(k=>pair.includes(k)));
    const sorted=ok.map(x=>({x,s:s(x.c)})).sort((a,b)=>b.s-a.s);
    const top=sorted.slice(0,23);let v=top.reduce((a,b)=>a+b.s,0);
    const cr=top.filter(t=>isCreatureCid(t.x.c)).length;if(cr<13)v-=(13-cr)*.8*k;if(top.length<23)v-=(23-top.length)*3*k;
    if(!best||v>best.v)best={v,pair,sorted};
  }
  let deck=best.sorted.slice(0,23);const rest=best.sorted.slice(23);
  for(let k=0;k<6;k++){const cr=deck.filter(t=>isCreatureCid(t.x.c)).length;if(cr>=14)break;
    const add=rest.find(t=>isCreatureCid(t.x.c));const rm=[...deck].reverse().find(t=>!isCreatureCid(t.x.c));if(!add||!rm)break;
    deck.splice(deck.indexOf(rm),1);deck.push(add);rest.splice(rest.indexOf(add),1)}
  const duals=pool.filter(x=>isLand(x.c)&&BY[x.c].pm.length===2&&[...BY[x.c].pm].every(k=>best.pair.includes(k)));
  const uids=deck.map(t=>t.x.u).concat(duals.slice(0,3).map(x=>x.u));
  const basics=suggestBasics(uids,pool,17-Math.min(3,duals.length));
  return {uids,basics,pair:best.pair};
}
// Fonti colorate per un Mazzo da 40 carte con 17 terre, da Frank Karsten, «How Many Sources Do You Need to Consistently Cast Your Spells?
// A 2022 Update» (TCGplayer, 2/8/2022): https://www.tcgplayer.com/content/article/How-Many-Sources-Do-You-Need-to-Consistently-Cast-Your-Spells-A-2022-Update/dc23a7d2-0a16-4c0b-ad36-586fcca03ad8/
// KARSTEN40[n][g]: n simboli del colore e g mana generico, per esempio C = [1][0], 1CC = [2][1], CCC = [3][0].
// La tabella arriva a 5C, 5CC, 4CCC e 1CCCC: oltre si usa la riga più vicina.
const KARSTEN40={1:[9,9,8,7,6,6],2:[14,12,11,10,9,8],3:[16,14,13,11,10],4:[17,15]};
const karsten=(n,g)=>{const r=KARSTEN40[Math.min(4,n)];return r[Math.min(r.length-1,Math.max(0,g))]};
// Splash: un colore con 3 carte o meno nel Mazzo (la soglia di 17Lands, blog del 5/6/2026), tutte con un solo simbolo di quel colore.
// Karsten non dà una soglia ridotta per lo splash: si usa Drifter, «General Sealed Strategy Guide» (MTG Arena Zone, 2020), «three or four
// sources for 1-2 cards; four is better», e 5 per una carta da 2 mana o meno («Lightning Strike… I would on five»). Mai più della tabella.
// Karsten dice anche che splashando una carta d'oro non prende il +1: 2WU splashato in un Mazzo bianco vale come un 2U.
const SPLASH_MAX=3,SPLASH_SRC=4,SPLASH_EARLY=5;
// Simboli di ogni colore nel costo, per le fonti. cols: i colori del Mazzo. Un ibrido si paga con un colore del Mazzo: conta per quello
// se è uno solo ({W/U} in un Mazzo UB conta U), non conta se sono due (va bene ogni fonte). {2/W} conta W solo se W è del Mazzo.
function costPips(cid,cols){const o={};
  ((BY[cid].f[0].m||'').match(/\{[^}]+\}/g)||[]).forEach(s=>{const p=s.slice(1,-1).split('/'),k=p.filter(x=>COLORS.includes(x)),d=k.filter(x=>cols.has(x));
    const x=!k.length?null:p.length===1?k[0]:k.length===1?(d.length?k[0]:null):d.length===1?d[0]:d.length?null:k[0];
    if(x)o[x]=(o[x]||0)+1});
  return o}
// Le fonti che chiede il Mazzo, colore per colore: il requisito più alto tra le sue carte non terra, e la carta che lo fissa.
// {B:{need:12,card:'123'},G:{need:4,card:'77',splash:true}}; mancano i colori che nessuna carta chiede.
function sourcesNeeded(uids,pool){
  const byU=byUid(pool);const cards=uids.map(u=>byU[u]).filter(x=>x&&!isLand(x.c)).map(x=>x.c);
  const cols=new Set(cards.flatMap(c=>((BY[c].f[0].m||'').match(/\{[WUBRG]\}/g)||[]).map(s=>s[1])));
  const cp=cards.map(c=>[c,costPips(c,cols)]);const used=COLORS.filter(k=>cp.some(([,p])=>p[k]));
  const splash=new Set(used.filter(k=>{const w=cp.filter(([,p])=>p[k]);return w.length<=SPLASH_MAX&&w.every(([,p])=>p[k]===1)}));
  if(splash.size===used.length)splash.clear();
  const r={};
  cp.forEach(([c,p])=>{const ks=Object.keys(p),v=BY[c].v||0,gold=ks.length>1&&!ks.some(k=>splash.has(k));
    ks.forEach(k=>{const t=karsten(p[k],Math.round(v-p[k]));const need=splash.has(k)?Math.min(t,v<=2?SPLASH_EARLY:SPLASH_SRC):t+(gold?1:0);
      if(!r[k]||need>r[k].need)r[k]=splash.has(k)?{need,card:c,splash:true}:{need,card:c}})});
  return r;
}
// La probabilità di avere almeno p fonti di un colore al turno t, in partenza, avendo pescato almeno t terre (il modello di Karsten,
// senza i mulligan: alle soglie di KARSTEN40 dà circa il 90%). n carte nel Mazzo, l terre, s fonti di quel colore.
function curveOdds(s,p,t,l,n){const C=(a,b)=>{if(b<0||b>a)return 0;let r=1;for(let i=1;i<=b;i++)r=r*(a-b+i)/i;return r};
  const seen=Math.min(n,6+t);let ok=0,all=0;
  for(let a=0;a<=Math.min(s,seen);a++)for(let b=0;b<=Math.min(l-s,seen-a);b++){const w=C(s,a)*C(l-s,b)*C(n-l,seen-a-b);if(a+b>=t){all+=w;if(a>=p)ok+=w}}
  return all?ok/all:0}
// Per ogni colore la carta non terra più difficile da lanciare al suo turno con le terre del Mazzo e le basi di basics:
// {B:{card:'123',turn:2,odds:.63}}. Il turno è il valore di mana, con X=1 per le carte con X (Guiding Hydra {X}{W} al turno 2).
const castTurn=c=>Math.max(1,Math.round(BY[c].v||0)+((BY[c].f[0].m||'').match(/\{X\}/g)||[]).length);
function castOdds(uids,pool,basics={}){
  const byU=byUid(pool),cards=uids.map(u=>byU[u]).filter(Boolean),src=landSources(uids,pool,basics);
  const lands=cards.filter(x=>isLand(x.c)).length+COLORS.reduce((a,k)=>a+(basics[k]||0),0),n=cards.length+COLORS.reduce((a,k)=>a+(basics[k]||0),0);
  const spells=cards.filter(x=>!isLand(x.c)).map(x=>x.c);
  const cols=new Set(spells.flatMap(c=>((BY[c].f[0].m||'').match(/\{[WUBRG]\}/g)||[]).map(s=>s[1])));const r={};
  spells.forEach(c=>{const p=costPips(c,cols);Object.keys(p).forEach(k=>{const turn=castTurn(c),odds=curveOdds(src[k],p[k],turn,lands,n);
    if(!r[k]||odds<r[k].odds)r[k]={card:c,turn,odds}})});
  return r}
// Le fonti di ogni colore tra le terre del Mazzo (una doppia conta per entrambi i colori), più le terre base di basics.
function landSources(uids,pool,basics={}){const byU=byUid(pool);const o={};COLORS.forEach(k=>o[k]=basics[k]||0);
  uids.forEach(u=>{const x=byU[u];if(x&&isLand(x.c))COLORS.forEach(k=>{if((BY[x.c].pm||'').includes(k))o[k]++})});
  return o}
// Le terre base: a ogni colore le fonti che chiede meno quelle delle terre non base. Prima gli splash, poi una terra alla volta ai colori
// principali, a quello più lontano dalla sua quota di simboli (metodo D'Hondt): finché qualcuno è sotto il requisito, solo tra quelli.
// Se le terre non bastano per tutti, restano sotto i colori con meno simboli.
function suggestBasics(uids,pool,total){
  const need=sourcesNeeded(uids,pool),have=landSources(uids,pool);const b={W:0,U:0,B:0,R:0,G:0};const act=COLORS.filter(k=>need[k]);
  if(!act.length){b.W=total;return b}
  const byU=byUid(pool);const p={W:0,U:0,B:0,R:0,G:0};
  uids.forEach(u=>{const x=byU[u];if(x&&!isLand(x.c)){const q=pips(x.c);COLORS.forEach(k=>p[k]+=q[k])}});
  const req=k=>need[k].need-have[k];let left=total;
  act.filter(k=>need[k].splash).forEach(k=>{b[k]=Math.min(left,Math.max(0,req(k)));left-=b[k]});
  const main=act.filter(k=>!need[k].splash);
  for(;left>0;left--){const under=main.filter(k=>b[k]<req(k));b[(under.length?under:main).reduce((a,k)=>p[k]/(b[k]+1)>p[a]/(b[a]+1)?k:a)]++}
  return b;
}

/* src/js/21-pairs.js */
// Le 10 coppie di Reality Fracture (docs/research/costruzione-mazzo.md): prima le scuole di Hexhaven, poi i planeswalker.
// Un altro set dà i suoi nomi in SET.pairs, nello stesso ordine.
const PAIRS=(typeof SET!=='undefined'&&SET.pairs||[['WU','Fatehold'],['UB','Theorix'],['BR','Stingerquill'],['RG','Konstrari'],['GW','Vigorbloom'],
  ['WB','Liliana'],['UR','Chandra'],['BG','Garruk'],['RW','Ajani'],['GU','Jace']]).map(([k,n])=>({k,n}));
// Una carta non terra si gioca in una coppia se se ne paga il costo di mana con quei due colori: a un simbolo ibrido basta
// uno dei suoi colori, {2/W} si paga anche con due mana generici e {W/P} con la vita. Senza costo di mana contano i suoi colori.
function castableIn(cid,pair){const sy=(BY[cid].f[0].m||'').match(/\{[^}]+\}/g);
  if(!sy)return [...BY[cid].c].every(k=>pair.includes(k));
  return sy.every(s=>s.slice(1,-1).split('/').some(x=>!COLORS.includes(x)||pair.includes(x)))}
// Una carta sta nella coppia se ci si gioca; una terra se non produce altri colori, o se li produce tutti e cinque.
function inPair(cid,pair){if(!isLand(cid))return castableIn(cid,pair);
  const pm=[...(BY[cid].pm||'')].filter(k=>COLORS.includes(k));return pm.length===5||pm.every(k=>pair.includes(k))}
// I numeri di una coppia, sulle carte non terra del Pool che ci si giocano: quante sono, le creature, le multicolori della
// coppia, la curva (1, 2, 3, 4, 5, 6+; il costo 0 va con l'1 come nelle Pile) e il GIH WR medio delle 23 migliori tra quelle
// che hanno il dato (wr: id della carta → percentuale, issue #20). wr è null senza dati.
function pairStats(pool,pair,wr){const ok=pool.filter(x=>!isLand(x.c)&&castableIn(x.c,pair));
  const curve=[0,0,0,0,0,0];ok.forEach(x=>curve[Math.min(6,Math.max(1,Math.floor(cmc(x.c))))-1]++);
  const top=wr?ok.map(x=>wr[x.c]).filter(Number.isFinite).sort((a,b)=>b-a).slice(0,23):[];
  return {play:ok.length,cre:ok.filter(x=>isCreatureCid(x.c)).length,curve,wr:top.length?top.reduce((a,b)=>a+b,0)/top.length:null,
    multi:ok.filter(x=>BY[x.c].c.length===2&&[...BY[x.c].c].every(k=>pair.includes(k))).length}}
// Una riga per coppia, nell'ordine di PAIRS: nessuna classifica.
const pairTable=(pool,wr)=>PAIRS.map(p=>({...p,...pairStats(pool,p.k,wr)}));

/* src/js/22-query.js */
// Filtro delle carte nella costruzione del Mazzo, con la sintassi di Scryfall: parole libere, chiave:valore, - per negare,
// or, parentesi e virgolette. Due chiavi sono solo nostre: play: (si paga con quei colori, la regola delle coppie) e gih
// (il GIH WR di 17Lands, solo se ci sono i dati). Una parte scritta male si ignora con un avviso e il resto filtra lo stesso.
// Un nodo: {k:'word'|'kv'|'not'|'and'|'or'|'bad', src}; 'bad' è una parte ignorata, che non esclude nessuna carta.
const Q_KEY={name:'name',t:'t',type:'t',o:'o',oracle:'o',c:'c',color:'c',play:'play',mv:'mv',cmc:'mv',manavalue:'mv',
  pow:'pow',power:'pow',tou:'tou',toughness:'tou',r:'r',rarity:'r',is:'is',gih:'gih'};
const Q_COLOR={white:'w',blue:'u',black:'b',red:'r',green:'g',colorless:'c',multicolor:'m'};
const Q_RAR={c:0,common:0,u:1,uncommon:1,r:2,rare:2,m:3,mythic:3};
const Q_IS={multicolor:'multi',multi:'multi',gold:'multi',colorless:'colorless'};
const Q_OPS=['!=','<=','>=',':','=','<','>'];
// Colori nell'ordine WUBRG, maiuscoli: 'rw' → 'WR'.
const qColors=s=>COLORS.filter(k=>s.toUpperCase().includes(k)).join('');
function qCmp(a,op,b){return op==='<'?a<b:op==='<='?a<=b:op==='>'?a>b:op==='>='?a>=b:op==='!='?a!==b:a===b}

// Il valore di una chiave, controllato: {v} se va bene, {err} se no.
function qValue(key,op,raw,wr){const v=raw.toLowerCase(),eq=op===':'||op==='=';
  if(!raw)return{err:'manca il valore'};
  if(key==='name'||key==='t'||key==='o')return eq?{v}:{err:`${key}: vuole «:»`};
  if(key==='mv'||key==='pow'||key==='tou'||key==='gih'){const n=Number(v.replace(',','.'));if(!/^\d+([.,]\d+)?$/.test(v)||!Number.isFinite(n))return{err:'serve un numero'};
    if(key==='gih'&&!wr)return{err:'gih: mancano i dati di 17Lands'};return{v:n}}
  if(key==='r')return Object.hasOwn(Q_RAR,v)?{v:Q_RAR[v]}:{err:'rarità: c, u, r o m'};
  if(key==='is')return !eq?{err:'is: vuole «:»'}:Object.hasOwn(Q_IS,v)?{v:Q_IS[v]}:{err:'is: multicolor o colorless'};
  const w=Q_COLOR[v]||v;if(!/^[wubrgcm]+$/.test(w))return{err:'colori: lettere tra w, u, b, r, g'};
  if(key==='play')return !eq?{err:'play: vuole «:»'}:/[cm]/.test(w)?{err:'play: solo w, u, b, r, g'}:{v:qColors(w)};
  if(/m/.test(w))return w==='m'&&eq?{v:'M'}:{err:'m (multicolore) va da solo, con «:»'};
  return{v:qColors(w)}}

function parseQuery(src,wr){const s=String(src??'');let i=0;const errs=[];
  const ws=()=>{while(i<s.length&&/\s/.test(s[i]))i++};
  const word=w=>new RegExp(`^${w}(?=[\\s()]|$)`,'i').test(s.slice(i));
  const node=(st,o)=>({...o,src:s.slice(st,i).trim()});
  const bad=(st,why)=>{const n=node(st,{k:'bad'});errs.push(`«${n.src}»: ${why}`);return n};
  // Una parola o un valore: tra virgolette (anche non chiuse) o fino a uno spazio o a una parentesi.
  function text(){if(s[i]==='"'){const e=s.indexOf('"',i+1),v=s.slice(i+1,e<0?s.length:e);i=e<0?s.length:e+1;return v}
    const st=i;while(i<s.length&&!/[\s()]/.test(s[i]))i++;return s.slice(st,i)}
  function term(){const st=i,m=/^([a-z]+)(!=|<=|>=|:|=|<|>)/i.exec(s.slice(i));
    if(!m){const v=text();return node(st,{k:'word',v:v.toLowerCase()})}
    i+=m[0].length;const raw=text(),key=Q_KEY[m[1].toLowerCase()],op=m[2];
    if(!key)return bad(st,`chiave «${m[1]}» sconosciuta`);
    const r=qValue(key,op,raw,wr);return r.err?bad(st,r.err):node(st,{k:'kv',key,op:op===':'&&!['c','r'].includes(key)?'=':op,v:r.v})}
  function unary(){const st=i;
    if(s[i]==='-'){i++;if(i>=s.length||/[\s)]/.test(s[i]))return bad(st,'il «-» va attaccato a quello che neghi');const n=unary();return node(st,{k:'not',n})}
    if(s[i]==='('){i++;const n=or_();ws();if(s[i]===')')i++;else errs.push('una parentesi non è chiusa');
      return n?{...n,src:s.slice(st,i).trim()}:bad(st,'parentesi vuote')}
    return term()}
  function and_(){const kids=[];for(;;){ws();if(i>=s.length||s[i]===')'||word('or'))break;if(word('and')){i+=3;continue}kids.push(unary())}
    return kids.length>1?{k:'and',kids,src:kids.map(k=>k.src).join(' ')}:kids[0]||null}
  function or_(){const st=i,kids=[and_()];for(;;){ws();if(!word('or'))break;i+=2;kids.push(and_())}
    const k=kids.filter(Boolean);return k.length>1?node(st,{k:'or',kids:k}):k[0]||null}
  const top=[];for(;;){const n=or_();if(n)top.push(n);ws();if(i>=s.length)break;errs.push('c\'è una parentesi chiusa di troppo');i++}
  return{node:top.length>1?{k:'and',kids:top,src:top.map(k=>k.src).join(' ')}:top[0]||null,errs}}

// La carta cid passa il nodo? Il testo si cerca in tutte le parti della carta (Angel // Seed Suture).
function qMatch(n,cid,wr){if(!n||n.k==='bad')return true;const c=BY[cid],fs=c.f||[];
  const any=(f,v)=>fs.some(x=>(x[f]||'').toLowerCase().includes(v));
  if(n.k==='not')return n.n.k==='bad'||!qMatch(n.n,cid,wr);
  if(n.k==='and')return n.kids.every(k=>qMatch(k,cid,wr));
  if(n.k==='or'){const ok=n.kids.filter(k=>k.k!=='bad');return !ok.length||ok.some(k=>qMatch(k,cid,wr))}
  if(n.k==='word')return c.n.toLowerCase().includes(n.v)||any('n',n.v)||any('t',n.v)||any('o',n.v);
  const {key,op,v}=n;
  if(key==='name')return c.n.toLowerCase().includes(v)||any('n',v);
  if(key==='t')return any('t',v);
  if(key==='o')return any('o',v);
  if(key==='play')return inPair(cid,v);
  if(key==='mv')return qCmp(cmc(cid),op,v);
  if(key==='gih')return wr?.[cid]!=null&&qCmp(wr[cid],op,v);
  if(key==='pow'||key==='tou'){const f=key==='pow'?'p':'d';return fs.some(x=>x[f]!=null&&qCmp(parseFloat(x[f])||0,op,v))}
  if(key==='r')return Object.hasOwn(Q_RAR,c.r)&&qCmp(Q_RAR[c.r],op==':'?'=':op,v);
  const cs=c.c||'';
  if(key==='is')return v==='multi'?cs.length>1:!cs;
  // c: con «:» vuol dire «almeno questi colori»; c:c incolore, c:m multicolore.
  if(v==='M')return cs.length>1;
  const has=[...v].every(k=>cs.includes(k)),within=[...cs].every(k=>v.includes(k));
  if(op===':'&&!v)return !cs;
  return op===':'||op==='>='?has:op==='='?has&&within:op==='!='?!(has&&within):op==='<='?within:op==='<'?within&&cs.length<v.length:has&&cs.length>v.length}

// Il filtro pronto: test(cid) e gli avvisi sulle parti ignorate. Senza niente di scritto passa tutto.
function compileQuery(q,wr){const {node,errs}=parseQuery(q,wr);return{empty:!node,errs,test:cid=>qMatch(node,cid,wr)}}

// I pulsanti rapidi e le coppie scrivono e leggono un pezzo della barra, tra i termini in AND al primo livello, e lasciano
// il resto com'è. Un pezzo è di un pulsante solo nella forma che il pulsante scrive (play:wu, mv=2, (mv=2 or mv=3)…).
const Q_MV={'1':'mv<=1','2':'mv=2','3':'mv=3','4':'mv=4','5':'mv=5','6':'mv>=6'};
function qMvBtn(n){if(n?.k!=='kv'||n.key!=='mv')return null;
  return n.op==='<='&&n.v===1?'1':n.op==='>='&&n.v===6?'6':n.op==='='&&n.v>=2&&n.v<=5&&Number.isInteger(n.v)?String(n.v):null}
function qKind(n){if(!n)return null;
  if(n.k==='kv'&&n.key==='play')return 'play';
  if(n.k==='kv'&&n.key==='is')return n.v;
  if(n.k==='kv'&&n.key==='t'&&n.v==='creature')return 'cre';
  if(n.k==='not'&&n.n.k==='kv'&&n.n.key==='t'&&n.n.v==='creature')return 'noncre';
  if(qMvBtn(n)||(n.k==='or'&&n.kids.every(qMvBtn)))return 'mv';
  return null}
function qTerms(q){const {node}=parseQuery(q,{});if(!node)return[];
  if(node.k==='and')return node.kids;
  return [node.k==='or'&&!/^\(.*\)$/.test(node.src)?{...node,src:`(${node.src})`}:node]}
// Lo stato dei pulsanti dalla barra: colori di play:, costi accesi, creature o no, incolore e multicolore.
function qState(q){const st={play:'',mv:new Set(),cre:null,colorless:false,multi:false};
  qTerms(q).forEach(n=>{const k=qKind(n);if(k==='play')st.play=n.v;else if(k==='mv')(n.k==='or'?n.kids:[n]).forEach(x=>st.mv.add(qMvBtn(x)));
    else if(k==='cre'||k==='noncre')st.cre=k;else if(k)st[k]=true});
  return st}
// Toglie i pezzi del tipo kind e, se c'è, mette src al posto del primo (o in fondo).
function qSet(q,kind,src){const ts=qTerms(q),out=[];let put=false;
  const kinds=kind==='cre'?['cre','noncre']:[kind];
  ts.forEach(n=>{if(!kinds.includes(qKind(n))){out.push(n.src);return}if(src&&!put){out.push(src);put=true}});
  if(src&&!put)out.push(src);return out.join(' ')}
const qPlaySrc=cols=>cols?'play:'+qColors(cols).toLowerCase():'';
const qMvSrc=set=>{const b=Object.keys(Q_MV).filter(k=>set.has(k)).map(k=>Q_MV[k]);return b.length>1?`(${b.join(' or ')})`:b[0]||''};

/* src/js/30-images.js */
const IMG={};let packsLoaded=0;
function b64url(d){const s=atob(d.slice(d.indexOf(',')+1));const a=new Uint8Array(s.length);for(let i=0;i<s.length;i++)a[i]=s.charCodeAt(i);return URL.createObjectURL(new Blob([a],{type:'image/jpeg'}))}
function loadPacks(){
  const chip=$('#imgchip');
  const n=PACKS.length;
  for(const file of PACKS){
    fetch(file).then(r=>{if(!r.ok)throw 0;return r.json()}).then(o=>{
      for(const k in o)IMG[k]=b64url(o[k]);packsLoaded++;
      chip.textContent=packsLoaded<n?`Immagini ${packsLoaded}/${n}`:'Immagini pronte';chip.className='chip'+(packsLoaded===n?' on':'');
      clearTimeout(loadPacks._t);loadPacks._t=setTimeout(renderAll,80);
    }).catch(()=>{chip.textContent='Solo testo';chip.className='chip warn'});
  }
}

/* src/js/31-cards.js */
const CBG={W:'#e9e1c6',U:'#a9c8e6',B:'#b3a9b8',R:'#e6a595',G:'#a8cfa8','':'#cfcad8'};
function faceEl(o,{back=false,foil=false}={}){
  const d=document.createElement('div');d.className='face'+(foil?' foil':'');
  const cid=o.c,img=o.v||o.c;
  if(back||cid==='?'){d.classList.add('back');d.innerHTML='<span></span>';return d}
  if(cid!=='x'&&IMG[img]){const im=document.createElement('img');im.src=IMG[img];im.alt=BY[cid].n;im.draggable=false;d.appendChild(im);return d}
  const c=cid==='x'?{n:o.tn||'Pedina',c:'',f:[{n:o.tn||'Pedina',m:'',t:'Token Creature',o:'',p:(o.pt||'1/1').split('/')[0],d:(o.pt||'1/1').split('/')[1]}]}:BY[cid];
  const f=c.f[0];const col=c.c.length===1?c.c:(c.c.length>1?'':'');
  d.innerHTML=`<div class="tf" style="--cbg:${c.c.length>1?'#dccb8c':CBG[col]||CBG['']}"><div class="tf-h"><span>${esc(f.n)}</span><span>${mana(f.m||'')}</span></div><div class="tf-t">${esc(f.t)}</div><div class="tf-o">${mana(f.o||'')}</div>${f.p!=null?`<div class="tf-pt">${esc(f.p)}/${esc(f.d)}</div>`:f.l!=null?`<div class="tf-pt">◆${esc(f.l)}</div>`:''}</div>`;
  return d;
}
function setPreviewAttrs(el,o){el.dataset.cid=o.c;if(o.v)el.dataset.v=o.v;if(o.c==='x'){el.dataset.tn=o.tn||'';el.dataset.pt=o.pt||''}}
function previewHTML(cid,tn,pt,v){
  if(cid==='x')return `<div class="fn"><span>${esc(tn)}</span></div><div class="ft">Pedina creatura</div><div class="fp">${esc(pt)}</div>`;
  const c=BY[cid];if(!c)return '';
  return c.f.map(f=>`<div><div class="fn"><span>${esc(f.n)}</span><span>${mana(f.m||'')}</span></div><div class="ft">${esc(f.t)}</div><div class="fo">${mana(f.o||'')}</div>${f.p!=null?`<div class="fp">${esc(f.p)}/${esc(f.d)}</div>`:''}${f.l!=null?`<div class="fp">Fedeltà ${esc(f.l)}</div>`:''}</div>`).join('')+(c.f.length>1&&BY[cid].t.includes('//')&&/prepared/i.test(c.f[0].o)?'<div class="ft">Carta «prepare»: quando è preparata puoi lanciare una copia della sua magia.</div>':'')+(v&&BY[v]?.tr?`<div class="ft">Versione ${esc(TR_NAME[BY[v].tr])}</div>`:'')+(c.sg?'<div class="ft">Special Guest</div>':'');
}
// Carta sotto il puntatore, per la scorciatoia T del Tavolo. L'hover non mostra più nulla.
let hoverU=null;
document.addEventListener('mouseover',e=>{hoverU=e.target.closest('[data-u]')?.dataset.u||null});
// Carta ingrandita accanto a quella cliccata con il tasto destro; un altro clic, destro o sinistro, la chiude.
let zoomSrc=null;
const zoomKey=el=>el&&(el.dataset.u||el);
// acts: bottoni sotto la carta, come [etichetta, funzione]. width: larghezza fissa, per l'anteprima della lista del Pool.
// «Nel Mazzo nel N% dei Pool» dal sealed di 17Lands (issue #44, ADR 0008): solo nella carta ingrandita e nel title, mai sulla
// carta. Sotto INCL_MIN Pool che contengono la carta non si mostra. I dati li include build.py in INCL (assente nei test).
const INCL_=typeof INCL==='undefined'?null:INCL,INCL_MIN=100;
const inclText=cid=>{const v=INCL_?.w[cid];return v&&v[1]>=INCL_MIN?`Nel Mazzo nel ${Math.round(v[0])}% dei Pool del sealed`:''};
function showZoom(o,anchor,{text=false,acts=[],width=0}={}){
  const l=$('#lens');l.innerHTML='';l.appendChild(faceEl(o));
  const it=inclText(o.c);if(it)l.insertAdjacentHTML('beforeend',`<div class="pvincl" title="17Lands, sealed Bo1: ${INCL_.w[o.c][1].toLocaleString('it-IT')} Pool con questa carta">${it}</div>`);
  if(text){const t=document.createElement('div');t.className='pvtext';t.innerHTML=previewHTML(o.c,o.tn,o.pt,o.v);l.appendChild(t)}
  if(acts.length){const r=document.createElement('div');r.className='lensact';acts.forEach(([lbl,fn])=>{const b=document.createElement('button');b.className='btn pri';b.textContent=lbl;b.onclick=fn;r.appendChild(b)});l.appendChild(r)}
  l.hidden=false;zoomSrc=zoomKey(anchor)||null;
  const r=anchor?anchor.getBoundingClientRect():{left:innerWidth/2,right:innerWidth/2,top:80,width:0};
  const w=Math.round(Math.min(width||Math.max(300,r.width*1.6),innerWidth-32,(innerHeight-32)/CARD_H));l.style.width=w+'px';
  const room=innerWidth-r.right-12,x=room>=w+8?r.right+12:r.left-12-w>=8?r.left-12-w:(innerWidth-w)/2;
  const h=l.getBoundingClientRect().height;l.style.left=Math.round(x)+'px';l.style.top=Math.round(Math.max(8,Math.min(r.top,innerHeight-h-8)))+'px';
}
function closeZoom(){$('#lens').hidden=true;zoomSrc=null}
const zoomOpen=()=>!$('#lens').hidden;
const zoomedOn=el=>zoomOpen()&&!!el&&zoomSrc===zoomKey(el);
// Sul window, dopo i gestori del documento: se uno ha già usato il tasto destro (menu del Tavolo,
// pressione lunga nel Mazzo) non si ingrandisce.
window.addEventListener('contextmenu',e=>{
  if(e.target.closest('#lens')){e.preventDefault();closeZoom();return}
  // Nel Mazzo di squadra le proprie carte si possono dare al Compagno dal dettaglio.
  const el=e.target.closest('[data-cid]');
  if(e.defaultPrevented||!el||!el.dataset.cid||el.dataset.cid==='?'){closeZoom();return}
  e.preventDefault();if(zoomedOn(el)){closeZoom();return}
  const u=el.dataset.u,give=VIEW==='deck'&&S.team&&u&&myPool().some(x=>x.u===u);
  showZoom({c:el.dataset.cid,v:el.dataset.v,tn:el.dataset.tn,pt:el.dataset.pt},el,{text:VIEW==='table',acts:give?[['Dai al Compagno',()=>giveToMate(u)]]:[]});
});
document.addEventListener('pointerdown',e=>{if(e.button===0&&zoomOpen()&&!e.target.closest('.lensact'))closeZoom()},true);
window.addEventListener('scroll',()=>zoomOpen()&&closeZoom());
window.addEventListener('resize',()=>zoomOpen()&&closeZoom());
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeZoom()});
// Grandezza delle carte scelta con lo slider, ricordata nel browser: moltiplica le misure del CSS (--cs)
// e, nel Tavolo, quelle calcolate da sizeCards.
const CS_MIN=.6,CS_MAX=1.8;
let CS=Math.min(CS_MAX,Math.max(CS_MIN,+LS.get('mtg-lab:card-scale',1)||1));
const cardScale=()=>CS;
function setCardScale(v,final){CS=v;document.documentElement.style.setProperty('--cs',v);closeZoom();
  if(VIEW==='table'){renderTable();if(final)publish()}
  if(final)LS.set('mtg-lab:card-scale',v)}
document.documentElement.style.setProperty('--cs',CS);
{const i=$('#cs');i.value=CS;i.oninput=()=>setCardScale(+i.value);i.onchange=()=>setCardScale(+i.value,true);i.ondblclick=()=>{i.value=1;setCardScale(1,true)}}

/* src/js/40-state.js */
// v2: pool con varianti (v) e slot (s). I salvataggi v1 vengono ignorati.
// Chiavi con il prefisso del progetto; la vecchia chiave senza prefisso viene ancora letta una volta.
// deck: uid delle carte nel Mazzo. Il Sideboard è tutto il resto delle proprie carte del Pool (sideboard(), ADR 0007).
// lay: la disposizione in Pile delle due zone (vedi sotto). saveId: il Mazzo salvato da cui viene lo stato attuale.
let S=LS.get(setKey('sealed-v2'),SET.code==='FRA'?LS.get('fra-sealed-v2',null):null);
function saveS(){LS.set(setKey('sealed-v2'),S)}
// Criteri con cui si dispongono le colonne e le righe delle Pile, come in Arena. keys è l'ordine delle colonne (o delle righe).
const GROUPS={
  cmc:{l:'Costo',keys:['1','2','3','4','5','6','L'],t:{'1':'1','6':'6+',L:'Terre'}},
  col:{l:'Colore',keys:['W','U','B','R','G','M','C','L'],t:{W:'Bianco',U:'Blu',B:'Nero',R:'Rosso',G:'Verde',M:'Multicolore',C:'Incolore',L:'Terre'}},
  type:{l:'Tipo',keys:['cre','pw','ins','sor','enc','art','bat','x','L'],t:{cre:'Creature',pw:'Planeswalker',ins:'Istantanei',sor:'Stregonerie',enc:'Incantesimi',art:'Artefatti',bat:'Battaglie',x:'Altro',L:'Terre'}},
  rar:{l:'Rarità',keys:['m','r','u','c'],t:{m:'Mitiche',r:'Rare',u:'Non comuni',c:'Comuni'}},
  cre:{l:'Creature',keys:['cre','non','L'],t:{cre:'Creature',non:'Non creature',L:'Terre'}},
  rr:{l:'Rarità',keys:['cu','rm'],t:{cu:'Comuni e non comuni',rm:'Rare e mitiche'}},
  rc:{l:'Creature',keys:['cre','non'],t:{cre:'Creature',non:'Non creature'}},
  none:{l:'Nessuna',keys:['-'],t:{'-':'Tutte'}}};
const isGrp=g=>typeof g==='string'&&Object.hasOwn(GROUPS,g);
function groupKey(grp,cid){const c=BY[cid];const t=c.f[0].t||c.t||'';if(GROUPS[grp].keys.includes('L')&&isLand(cid))return 'L';
  if(grp==='none')return '-';
  if(grp==='cmc')return String(Math.min(6,Math.max(1,Math.floor(cmc(cid)))));
  if(grp==='col'){const k=c.c||'';return k.length>1?'M':k||'C'}
  if(grp==='rar')return 'mru'.includes(c.r)?c.r:'c';
  if(grp==='rr')return 'mr'.includes(c.r)?'rm':'cu';
  if(isCreatureCid(cid))return 'cre';
  if(grp==='cre'||grp==='rc')return 'non';
  return [['pw',/Planeswalker/],['ins',/Instant/],['sor',/Sorcery/],['bat',/Battle/],['enc',/Enchantment/],['art',/Artifact/]].find(([,re])=>re.test(t))?.[0]||'x'}
const colTitle=(grp,k)=>k==null?'':GROUPS[grp]?.t[k]??k;
const byCost=(a,b)=>cmc(a.c)-cmc(b.c)||BY[a.c].n.localeCompare(BY[b.c].n);
// Ordine delle carte nella Pila. Il GIH WR (issue #20) resta nascosto finché WR non ha i dati: id della carta → percentuale.
// I dati li include build.py in GIH (null senza dati, assente nei test); WRN: id della carta → Partite in mano.
const GIH_=typeof GIH==='undefined'?null:GIH;
let WR=GIH_&&Object.fromEntries(Object.entries(GIH_.w).map(([k,v])=>[k,v[0]]));
const WRN=GIH_&&Object.fromEntries(Object.entries(GIH_.w).map(([k,v])=>[k,v[1]]));
const ORDERS={cmc:{l:'Costo',cmp:byCost},wr:{l:'GIH WR',ok:()=>!!WR,cmp:(a,b)=>(WR?.[b.c]??-1)-(WR?.[a.c]??-1)||byCost(a,b)}};
const okOrder=o=>typeof o==='string'&&Object.hasOwn(ORDERS,o)&&(ORDERS[o].ok?.()??true);
const ordCmp=o=>okOrder(o)?ORDERS[o].cmp:byCost;
// La scheda Mazzo ha due zone, il Mazzo e il Sideboard, e ognuna si stende in una griglia di Pile: lay[zona] = {c, r, o, ck, rk, p}.
// c e r sono i criteri di colonne e righe, o l'ordine nella Pila; ck e rk le chiavi delle colonne (da sinistra) e delle righe
// (dall'alto), null per quelle fatte a mano; p[col][row] gli uid della Pila, dall'alto in basso. Le carte che entrano in una
// zona vanno nella Pila delle loro chiavi, al loro posto nell'ordine; quelle spostate a mano restano dove sono.
// cm e rm: le colonne (o le righe) sono «Personalizzate», perché il giocatore ha messo una carta in una Pila che per quel
// criterio non è la sua (issue #28). Scegliere di nuovo un criterio ridispone la zona da capo e le toglie.
// Predefiniti: il Mazzo per costo, con le creature sopra e le altre carte sotto come in Arena; il Sideboard per colore, come lo si
// stende al tavolo, su una riga sola come nella colonna.
const ZONE_DEF={deck:{c:'cmc',r:'rc',o:'cmc'},side:{c:'col',r:'none',o:'cmc'}};
const ZONES=['deck','side'];
// Gli uid di una zona, tra le proprie carte: il Mazzo o il Sideboard.
function zoneUids(s,z){if(z!=='deck')return sideboard(s);const mine=new Set(myPool(s).map(x=>x.u));return s.deck.filter(u=>mine.has(u))}
// Il Sideboard (CR 100.4b): tutte le proprie carte del Pool fuori dal Mazzo.
function sideboard(s=S){const d=new Set(s.deck);return myPool(s).filter(x=>!d.has(x.u)).map(x=>x.u)}
// Gli uid di una zona nell'ordine delle Pile: colonna per colonna, dall'alto in basso.
const pileOrder=(z,s=S)=>(s.lay?.[z]?.p||[]).flatMap(col=>col.flat());
// Disposizione automatica: una colonna e una riga per ogni chiave presente, nell'ordine del criterio, e le carte nell'ordine scelto.
function arrangeZone(z,cards){const cmp=ordCmp(z.o),has=(g,k)=>cards.some(x=>groupKey(g,x.c)===k);
  z.ck=GROUPS[z.c].keys.filter(k=>has(z.c,k));z.rk=GROUPS[z.r].keys.filter(k=>has(z.r,k));
  z.p=z.ck.map(a=>z.rk.map(b=>cards.filter(x=>groupKey(z.c,x.c)===a&&groupKey(z.r,x.c)===b).sort(cmp).map(x=>x.u)));return z}
const okZone=z=>!!z&&isGrp(z.c)&&isGrp(z.r)&&Array.isArray(z.ck)&&Array.isArray(z.rk)&&Array.isArray(z.p)&&z.p.length===z.ck.length&&
  z.p.every(col=>Array.isArray(col)&&col.length===z.rk.length&&col.every(Array.isArray));
// Indice della colonna (o riga) con chiave k. Se manca la crea al suo posto nell'ordine del criterio, e add(i) ne aggiunge le Pile.
function keyAt(ks,k,order,add){let i=ks.indexOf(k);if(i>=0)return i;i=ks.findIndex(c=>c!=null&&order.indexOf(c)>order.indexOf(k));
  if(i<0)i=ks.length;ks.splice(i,0,k);add(i);return i}
// Toglie le colonne e le righe rimaste senza carte.
function pruneZone(z){for(let i=z.ck.length-1;i>=0;i--)if(z.p[i].every(p=>!p.length)){z.ck.splice(i,1);z.p.splice(i,1)}
  for(let j=z.rk.length-1;j>=0;j--)if(z.p.every(col=>!col[j].length)){z.rk.splice(j,1);z.p.forEach(col=>col.splice(j,1))}}
// Allinea le Pile di una zona alle sue carte: toglie quelle uscite e mette le nuove nella Pila delle loro chiavi.
function syncZone(s,name){const byU=byUid(s.pool),want=zoneUids(s,name),z=s.lay[name];
  if(!okZone(z)){const set=z&&isGrp(z.c)&&isGrp(z.r)?{c:z.c,r:z.r,o:z.o}:{...ZONE_DEF[name]};return s.lay[name]=arrangeZone(set,want.map(u=>byU[u]))}
  const has=new Set(want),seen=new Set(),cmp=ordCmp(z.o);
  z.p.forEach(col=>col.forEach((p,j)=>col[j]=p.filter(u=>has.has(u)&&!seen.has(u)&&seen.add(u))));
  want.filter(u=>!seen.has(u)).forEach(u=>{const x=byU[u];
    const i=keyAt(z.ck,groupKey(z.c,x.c),GROUPS[z.c].keys,i=>z.p.splice(i,0,z.rk.map(()=>[])));
    const j=keyAt(z.rk,groupKey(z.r,x.c),GROUPS[z.r].keys,j=>z.p.forEach(col=>col.splice(j,0,[])));
    const p=z.p[i][j],at=p.findIndex(v=>cmp(x,byU[v])<0);p.splice(at<0?p.length:at,0,u)});
  pruneZone(z);return z}
function syncLay(s=S){if(!s.lay||typeof s.lay!=='object')s.lay={};ZONES.forEach(n=>syncZone(s,n));return s.lay}
// Ridispone una zona da capo, con le sue impostazioni.
function resetZone(name,s=S){if(!s.lay)s.lay={};const z=s.lay[name];s.lay[name]=z?{c:z.c,r:z.r,o:z.o}:null;syncZone(s,name)}
// Sposta una carta nella zona 'deck' o 'side'. Senza col va nella Pila delle sue chiavi; con col e row nella Pila indicata, alla
// posizione pos (contata senza la carta spostata). Una colonna o una riga oltre l'ultima ne crea una nuova.
function placeCard(u,zone,col,row,pos){syncLay();
  if(zone==='deck'&&!S.deck.includes(u))S.deck.push(u);if(zone!=='deck')S.deck=S.deck.filter(x=>x!==u);
  if(col!=null){ZONES.forEach(n=>S.lay[n].p.forEach(c=>c.forEach((p,j)=>c[j]=p.filter(x=>x!==u))));const z=S.lay[zone];row=row??0;
    if(col>=z.ck.length){col=z.ck.length;z.ck.push(null);z.p.push(z.rk.map(()=>[]))}
    if(row>=z.rk.length){row=z.rk.length;z.rk.push(null);z.p.forEach(c=>c.push([]))}
    const p=z.p[col][row];p.splice(pos??p.length,0,u);
    const c=byUid(S.pool)[u].c;if(z.ck[col]!==groupKey(z.c,c))z.cm=true;if(z.rk[row]!==groupKey(z.r,c))z.rm=true}
  syncLay()}
// Stati di prima delle due zone (issue #24): side era il Sideboard scelto a mano, cols e grp le colonne del Mazzo.
// Le colonne diventano Pile su una riga sola; le carte del vecchio Sideboard una Pila a parte, la prima a sinistra.
function migrateLay(o){if(!o||o.lay)return o;const lay={},deck=new Set(o.deck||[]);
  if(Array.isArray(o.cols)&&isGrp(o.grp)){const cols=o.cols.filter(c=>c&&Array.isArray(c.u));
    lay.deck={c:o.grp,r:'none',o:'cmc',ck:cols.map(c=>GROUPS[o.grp].keys.includes(c.k)?c.k:null),rk:['-'],p:cols.map(c=>[c.u.filter(u=>deck.has(u))])}}
  const side=(Array.isArray(o.side)?o.side:[]).filter(u=>!deck.has(u));
  if(side.length){const d=ZONE_DEF.side;lay.side={...d,ck:[null],rk:[GROUPS[d.r].keys[0]],p:[[side]]}}
  delete o.side;delete o.cols;delete o.grp;o.lay=lay;return o}
// Stati dell'ADR 0006, con sb: le carte messe nelle Pile del Sideboard. Ora nelle Pile c'è tutto il Sideboard (ADR 0007): quelle
// carte restano dove sono e le altre entrano nella Pila delle loro chiavi.
function dropSb(o){if(o&&'sb' in o){delete o.sb;if(o.lay)syncLay(o)}return o}
// Disposizione letta da un testo non fidato: criteri esistenti, chiavi dei criteri e uid del Pool (us).
function cleanLay(lay,us){const out={};if(!lay||typeof lay!=='object')return out;
  for(const n of ZONES){const z=lay[n];if(!z||!isGrp(z.c)||!isGrp(z.r)||!Array.isArray(z.ck)||!Array.isArray(z.rk)||!Array.isArray(z.p))continue;
    const key=(g,k)=>GROUPS[g].keys.includes(k)?k:null,ck=z.ck.slice(0,80).map(k=>key(z.c,k)),rk=z.rk.slice(0,20).map(k=>key(z.r,k));
    const pile=(i,j)=>Array.isArray(z.p[i])&&Array.isArray(z.p[i][j])?z.p[i][j].filter(u=>us.has(u)):[];
    out[n]={c:z.c,r:z.r,o:Object.hasOwn(ORDERS,z.o)?z.o:'cmc',ck,rk,p:ck.map((_,i)=>rk.map((_,j)=>pile(i,j)))};
    if(z.cm===true)out[n].cm=true;if(z.rm===true)out[n].rm=true}
  return out}
// Two-Headed Giant: team = 8 o 12 Buste (0 per il Kit individuale), seat = il posto scelto, 0 per il Compagno A e 1 per il B.
// opened conta le Buste aperte tra le proprie; viewB è l'indice della Busta guardata, tra tutte quelle del Kit.
// at: quando è stato aperto il Kit, per capire chi dei due Compagni ha il Kit più recente; matePeer: l'ultimo Compagno trovato.
// opt.role: 'A' (chi invita) o 'B' (chi entra) per un draft con l'amico (issue #47).
function freshKit(seed,opt={}){if(isDraftCode(seed)){freshDraft(seed,opt.role);return}const k=kitFromCode(seed);S={seed,team:k.team||0,seat:k.team?S?.seat||0:0,boosters:k.boosters,promo:k.promo||null,pool:k.pool,opened:1,viewB:0,deck:[],lay:null,tc:{},basics:{W:0,U:0,B:0,R:0,G:0},nick:S?.nick||'',at:Date.now(),matePeer:S?.matePeer||null};S.viewB=firstOwn();
  // Un Pool da lista non ha Buste da aprire: la Sessione parte dalla costruzione.
  if(!S.boosters.length)S.opened=ownCount();saveS()}
// Draft a 8 (issue #46): la Sessione parte dal draft invece che dall'Apertura delle Buste. Il Pool resta vuoto finché il draft
// non finisce, e poi sono le mie scelte (draftPool). Lo stato del draft sta in S.draft, così sopravvive a un ricaricamento.
function freshDraft(seed,role){S={seed,team:0,seat:0,boosters:[],promo:null,pool:[],opened:0,viewB:0,deck:[],lay:null,tc:{},basics:{W:0,U:0,B:0,R:0,G:0},
  nick:S?.nick||'',at:Date.now(),matePeer:S?.matePeer||null,draft:role?draftOnline(seed,role):{...draftNew(seed),me:0,humans:[0]}};saveS()}
// Il draft con l'amico, ricostruito dalle mie scelte (mine) e dalle sue (theirs), uid in ordine. me è il mio posto, humans i due
// posti umani. wait: ho già scelto e aspetto l'altro. Una mia scelta che non torna più (dopo un ricaricamento) si scarta.
function draftOnline(code,role,mine=[],theirs=[]){const seats=draftSeats(code),me=seats[role==='A'?0:1],them=seats[role==='A'?1:0];
  const {d,n}=draftReplay(code,me,mine,them,theirs);mine=mine.slice(0,n+(d.done||!d.packs[me]?.some(x=>x.u===mine[n])?0:1));
  return{...d,me,humans:[me,them],online:{role,mine,theirs},wait:!d.done&&mine.length>n}}
function draftRebuild(mine,theirs){const o=S.draft.online;S.draft=draftOnline(S.draft.code,o.role,mine,theirs);
  if(S.draft.done&&!S.pool.length){S.pool=draftPool(S.draft);S.opened=ownCount()}saveS()}
// Prendo la carta u, se tocca a me: false se aspetto ancora l'altro o la carta non è nella mia Busta.
function draftOnlinePick(u){const d=S.draft;if(!d?.online||d.done||d.wait||!d.packs[d.me].some(x=>x.u===u))return false;
  draftRebuild([...d.online.mine,u],d.online.theirs);return true}
// Il draft dell'avversario (opp: la sua presence, dr = [codice, ruolo, scelte]). 'changed' se le sue scelte sono nuove, 'invite'
// se mi invita a un draft in cui non sono ancora entrato, null altrimenti.
function draftSync(opp){const a=opp&&Array.isArray(opp.dr)?opp.dr:null;if(!a||!isDraftCode(a[0]))return null;const d=S.draft;
  if(!d?.online||d.code!==a[0])return a[1]==='A'?'invite':null;if(a[1]===d.online.role)return null;
  const theirs=String(a[2]||'').split(' ').filter(w=>/^d\d{1,4}$/.test(w));if(theirs.join(' ')===d.online.theirs.join(' '))return null;
  draftRebuild(d.online.mine,theirs);return 'changed'}
// Prendo la carta u; a draft finito il Pool sono le mie scelte e si passa alla costruzione.
function draftStep(u){const d=S.draft;if(!d||d.done)return;if(d.online){draftOnlinePick(u);return}draftPick(d,u);if(d.done){S.pool=draftPool(d);S.opened=ownCount()}saveS()}
// I Mazzi dei sette Bot a draft finito, costruiti con Auto-costruisci: {seat, pair, list} con le carte {c, v} e le terre base.
function draftBots(){const d=S.draft;if(!d?.done)return[];const humans=d.humans||[0];
  return d.picks.map((ps,seat)=>({ps,seat})).filter(({seat})=>!humans.includes(seat)).map(({ps,seat})=>{const pool=ps.filter(x=>!/Basic Land/.test(BY[x.c].t||''));
  const b=autoBuild(pool,GIH_?.w),byU=byUid(pool),list=b.uids.map(u=>byU[u].v?{c:byU[u].c,v:byU[u].v}:{c:byU[u].c});
  COLORS.forEach(c=>{for(let k=0;k<b.basics[c];k++)list.push({c:BASIC_ID[c]})});return{seat,pair:b.pair,list}})}
// Importa lista (issue #30): una Sessione nuova con il Pool della lista, e con il suo Mazzo e le sue terre base se la lista li ha.
function freshList(r){freshKit(r.code);S.deck=[...r.deck];S.basics={...r.basics};saveS()}
// Le Buste di chi guarda: tutte nel Kit individuale, metà nel Kit di squadra.
const ownCount=(s=S)=>s.team?s.team/2:6;
const firstOwn=(s=S)=>s.team&&s.seat?s.team/2:0;
const isOwnBooster=(i,s=S)=>i>=firstOwn(s)&&i<firstOwn(s)+ownCount(s);
// La Sessione va in un solo verso: Apertura, poi Mazzo, poi Partite. Si è nell'Apertura finché restano Buste proprie chiuse;
// passando al Mazzo si aprono tutte e da lì non se ne aprono altre (per un Pool diverso serve un Kit nuovo).
const inOpening=(s=S)=>s.draft?!s.draft.done:s.opened<ownCount(s);
// Pool di squadra (ADR 0002): tc[i] conta i passaggi della carta di indice i nel Pool (0 se manca). Il proprietario è
// quello iniziale (x.o) se tc[i] è pari, il Compagno se è dispari. Solo il proprietario attuale incrementa tc[i], quindi ogni
// carta ha un solo scrittore: unendo due stati carta per carta con il massimo, le due pagine convergono.
const ownerAt=(s,i)=>s.pool[i].o^((s.tc||{})[i]&1);
function mergeTc(a,b){const m={...a};for(const i in b)if(b[i]>(m[i]||0))m[i]=b[i];return m}
// Il Pool di chi guarda: nel Kit di squadra solo le carte di cui è proprietario adesso.
const myPool=(s=S)=>s.team?s.pool.filter((x,i)=>ownerAt(s,i)===s.seat):s.pool;
// Le carte delle proprie Buste, cioè quelle di cui si era proprietari all'apertura.
const openedPool=(s=S)=>s.team?s.pool.filter(x=>x.o===s.seat):s.pool;
// Dai al Compagno: può farlo solo il proprietario, e la carta esce dal suo Mazzo e dal suo Sideboard. false se non è sua.
function giveCard(u,s=S){const i=s.pool.findIndex(x=>x.u===u);if(!s.team||i<0||ownerAt(s,i)!==s.seat)return false;
  s.tc={...s.tc,[i]:((s.tc||{})[i]||0)+1};s.deck=s.deck.filter(x=>x!==u);return true}
// Unisce i contatori del Compagno. Le carte appena ricevute vanno nel Sideboard, quelle non più proprie escono dal Mazzo
// (succede dopo un ricaricamento con uno stato vecchio). got: gli uid ricevuti.
function mergeTeam(tc,s=S){if(!s.team)return{changed:false,got:[]};const own=()=>new Set(myPool(s).map(x=>x.u));
  const before=own(),was=JSON.stringify(s.tc||{});s.tc=mergeTc(s.tc||{},tc);if(JSON.stringify(s.tc)===was)return{changed:false,got:[]};
  const after=own();s.deck=s.deck.filter(u=>after.has(u));return{changed:true,got:[...after].filter(u=>!before.has(u))}}
// Contatori letti da un testo non fidato: solo indici del Pool e interi positivi.
function cleanTc(tc,n){const out={};if(tc&&typeof tc==='object')for(const i in tc){const k=+i,t=Math.floor(+tc[i]);if(Number.isInteger(k)&&k>=0&&k<n&&t>0&&t<1e6)out[k]=t}return out}
// Cambia posto, solo durante l'Apertura: le Buste aperte ripartono da una, e dal Mazzo escono le carte del Compagno.
function setSeat(seat){if(!S.team||S.seat===seat||!inOpening())return;S.seat=seat;S.opened=1;S.viewB=firstOwn();const mine=new Set(myPool().map(x=>x.u));
  S.deck=S.deck.filter(u=>mine.has(u));S.lay=null;S.saveId=null;saveS()}
if(!S||!S.pool)freshKit(newSeed());
migrateLay(S);dropSb(S);
let VIEW='open';

// Mazzi salvati: ognuno porta con sé il suo Pool, così resta giocabile anche dopo aver aperto altri kit.
// Stanno nel localStorage di chi guarda la pagina; con «Esporta» si copiano come testo.
let SAVES=LS.get(setKey('mazzi-v1'),[]);
const persistSaves=()=>LS.set(setKey('mazzi-v1'),SAVES);
if(SAVES.some(s=>!s.lay||'sb' in s)){SAVES.forEach(s=>dropSb(migrateLay(s)));persistSaves()}
// La parte di un salvataggio che è il Mazzo: carte, terre base, disposizione delle Pile e, nel Kit di squadra, i passaggi delle
// carte tra i Compagni. Il Sideboard è il resto del Pool.
const deckPart=o=>({seat:o.seat||0,deck:[...o.deck],basics:{...o.basics},lay:JSON.parse(JSON.stringify(o.lay||{})),tc:{...o.tc}});
const findSave=id=>SAVES.find(s=>s.id===id);
// Senza nome sovrascrive il Mazzo salvato da cui si è partiti; con un nome ne crea uno nuovo.
function saveDeck(name){syncLay();let s=!name&&findSave(S.saveId);
  if(!s){s={id:'m'+Date.now().toString(36)+Math.random().toString(36).slice(2,5),name:name||'Mazzo '+kitName(S.seed),st:{mw:0,ml:0,gw:0,gl:0}};SAVES.unshift(s)}
  Object.assign(s,{ts:Date.now(),seed:S.seed,team:S.team||0,boosters:S.boosters,promo:S.promo,pool:S.pool},deckPart(S));
  S.saveId=s.id;saveS();persistSaves();return s.id}
function loadDeck(id){const s=findSave(id);if(!s)return;
  // Un Mazzo di un altro Kit apre una Sessione nuova, come un Kit nuovo: cambia anche at.
  S={seed:s.seed,team:s.team||0,boosters:s.boosters,promo:s.promo,pool:s.pool,...deckPart(s),nick:S.nick||'',saveId:s.id,at:s.seed===S.seed?S.at:Date.now(),matePeer:S.matePeer||null};S.opened=ownCount();S.viewB=firstOwn();
  // Salvataggi con le Pile incomplete (di prima delle colonne, o migrati): prendono la disposizione calcolata,
  // così non risultano subito modificati.
  syncLay();const lay=deckPart(S).lay;if(JSON.stringify(lay)!==JSON.stringify(s.lay)){s.lay=lay;persistSaves()}saveS()}
function deleteDeck(id){SAVES=SAVES.filter(s=>s.id!==id);if(S.saveId===id)S.saveId=null;saveS();persistSaves()}
// Il Mazzo attuale è diverso dalla sua versione salvata?
function deckDirty(){syncLay();const s=findSave(S.saveId);return !s||JSON.stringify(deckPart(S))!==JSON.stringify(deckPart(s))}
// Carte del Mazzo che un nuovo kit cancellerebbe: 0 se il Mazzo è vuoto o salvato così com'è (si ritrova in «Mazzi salvati»).
function kitLoss(){const n=S.deck.length+Object.values(S.basics||{}).reduce((a,b)=>a+b,0);return n&&deckDirty()?n:0}
// s: punteggio di un Match finito (matchScore); sign -1 quando si annulla.
function deckStat(id,s,sign){const d=findSave(id);if(!d)return;const t=d.st,k=s.won?'mw':s.drawn?'md':'ml';t[k]=(t[k]||0)+sign;t.gw+=sign*s.w;t.gl+=sign*s.l;persistSaves()}
// Storico dei Match (issue #42): ogni Match finito contro il Bot o l'amico, e quelli giocati altrove aggiunti a mano.
// Una riga è {id, ts, mode ('bot', 'online' o 'altrove'), opp, fmt, deck (id del Mazzo salvato), seed, games: [{r, first}], res, where}:
// r è W, L o D, first chi ha iniziato la Partita ('me' o 'opp'), res il risultato del Match. Sta in questo browser, come i Mazzi.
let HIST=LS.get(setKey('match-v1'),[]);
const persistHist=()=>LS.set(setKey('match-v1'),HIST);
const histId=()=>'h'+Date.now().toString(36)+Math.random().toString(36).slice(2,5);
function histAdd(e){HIST.unshift(e);persistHist();return e.id}
function histDel(id){HIST=HIST.filter(e=>e.id!==id);persistHist()}
const histOf=deckId=>HIST.filter(e=>e.deck===deckId);
// Partite vinte, perse e pareggiate andando per primi e per secondi.
function firstStats(list){const out={first:{w:0,l:0,d:0},second:{w:0,l:0,d:0}};
  list.forEach(e=>e.games.forEach(g=>{const s=out[g.first==='me'?'first':'second'];s[g.r==='W'?'w':g.r==='L'?'l':'d']++}));return out}
// Il punteggio di un Match giocato altrove: se nessuno è arrivato alle vittorie che servono, è chiuso con quello che ha.
const manualScore=e=>{const res=e.games.map(g=>g.r).join(''),bo=e.fmt==='Bo3'?3:1,s=matchScore(res,bo);return s.over?s:matchScore(res+'C',bo)};
// Un Match giocato fuori da mtg-lab (phase.rs, il prerelease vero): conta nelle statistiche del suo Mazzo come gli altri.
function addManualMatch({deck,opp,fmt,games,where}){const e={id:histId(),ts:Date.now(),mode:'altrove',opp:String(opp||'').slice(0,40)||'Avversario',
  fmt:fmt==='Bo3'?'Bo3':fmt==='2HG'?'2HG':'Bo1',deck:deck||null,seed:findSave(deck)?.seed||'',games:games.filter(g=>/^[WLD]$/.test(g.r)).map(g=>({r:g.r,first:g.first==='opp'?'opp':'me'})),where:String(where||'').slice(0,40)};
  const s=manualScore(e);e.res=s.won?'W':s.drawn?'D':'L';deckStat(e.deck,s,1);return histAdd(e)}
function deleteManualMatch(id){const e=HIST.find(x=>x.id===id);if(!e||e.mode!=='altrove')return;deckStat(e.deck,manualScore(e),-1);histDel(id)}
// Lo storico come testo, una riga per Match.
function histText(list){const R={W:'vinto',L:'perso',D:'pareggiato'};
  return list.map(e=>`${new Date(e.ts).toLocaleDateString('it-IT')} · ${e.fmt} contro ${e.opp}${e.where?' · '+e.where:''} · Match ${R[e.res]} · ${e.games.map(g=>g.r+(g.first==='me'?' (primo)':' (secondo)')).join(', ')}${findSave(e.deck)?' · Mazzo '+findSave(e.deck).name:''}`).join('\n')}
function exportDeck(id){const s=findSave(id);const {st,...rest}=s;const bytes=new TextEncoder().encode(JSON.stringify(rest));
  let bin='';bytes.forEach(b=>bin+=String.fromCharCode(b));return 'MTGLAB1:'+btoa(bin)}
// Il Mazzo come file .dck di Forge: una riga «N Nome|SET» per carta, con il nome della prima faccia come nel set di Forge.
// Le varianti sono la stessa carta del set (c è la carta base); le Special Guests Forge le ha nel set SPG.
function forgeDck(name,main,side){const lines=cs=>{const m=new Map();cs.forEach(({c})=>{const k=BY[c].n.split(' // ')[0]+'|'+(BY[c].sg?'SPG':SET.code);m.set(k,(m.get(k)||0)+1)});return [...m].map(([k,n])=>n+' '+k+'\n').join('')};
  return `[metadata]\nName=${String(name).replace(/[\r\n]+/g,' ').trim()}\n[Main]\n${lines(main)}[Sideboard]\n${lines(side)}`}
// Carte del mazzo come {c, v}: c per le regole, v per l'immagine della variante.
function deckList(){const byU=byUid(S.pool);const out=S.deck.map(u=>byU[u]).filter(Boolean).map(x=>x.v?{c:x.c,v:x.v}:{c:x.c});COLORS.forEach(k=>{for(let i=0;i<S.basics[k];i++)out.push({c:BASIC_ID[k]})});return out}
function deckText(){const lines=cs=>{const m={};cs.forEach(({c,v})=>{const n=BY[c].n.split(' // ')[0];const key=BY[c].sg?`${n} (SPG) ${c.slice(1)}`:`${n} (${SET.code}) ${v||c}`;m[key]=(m[key]||0)+1});return Object.entries(m).map(([k,v])=>v+' '+k).join('\n')};
  const side=sideList();return 'Deck\n'+lines(deckList())+(side.length?'\n\nSideboard\n'+lines(side):'')}
// Il Sideboard per le liste, nell'ordine delle sue Pile: senza spostamenti a mano è quello della colonna.
function sideList(){syncLay();const byU=byUid(S.pool);return pileOrder('side').map(u=>byU[u]).filter(Boolean)}
const okBoosters=b=>Array.isArray(b)&&b.every(p=>Array.isArray(p)&&p.every(x=>x&&BY[x.c]&&(!x.v||BY[x.v])))?b:[];
// Il testo importato non è fidato: si tengono solo carte che esistono e uid che stanno nel Pool.
function importDeck(code){const m=/^MTGLAB1:([A-Za-z0-9+/=]+)$/.exec(String(code).trim());if(!m)throw new Error('Codice non valido');
  const o=JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(m[1]),ch=>ch.charCodeAt(0))));
  if(!o||!Array.isArray(o.pool)||!o.pool.length||!o.pool.every(x=>x&&BY[x.c]&&(!x.v||BY[x.v])&&typeof x.u==='string'))throw new Error('Pool non valido');
  const us=new Set(o.pool.map(x=>x.u));const only=a=>(Array.isArray(a)?a:[]).filter(u=>us.has(u));
  const basics={};COLORS.forEach(k=>basics[k]=Math.max(0,Math.min(60,Math.floor(+o.basics?.[k]||0))));
  const s={id:'m'+Date.now().toString(36)+Math.random().toString(36).slice(2,5),name:String(o.name||'Mazzo importato').slice(0,40),ts:Date.now(),
    seed:String(o.seed||'').slice(0,600),team:[8,12].includes(o.team)?o.team:0,seat:o.seat===1?1:0,boosters:okBoosters(o.boosters),promo:o.promo&&BY[o.promo.c]?o.promo:null,pool:o.pool,deck:only(o.deck),tc:cleanTc(o.tc,o.pool.length),basics,st:{mw:0,ml:0,gw:0,gl:0}};
  // Codici di prima delle due zone: il Sideboard scelto e le colonne del Mazzo passano da migrateLay, che controlla i criteri.
  if(o.lay)s.lay=cleanLay(o.lay,us);
  else migrateLay(Object.assign(s,{side:only(o.side),grp:o.grp,cols:Array.isArray(o.cols)?o.cols.map(c=>({k:c?.k??null,u:only(c?.u)})):null}));
  SAVES.unshift(s);persistSaves();return s.id}

// Importa lista (issue #30): il Pool da una lista di carte come la esportano Arena, Moxfield o MTGO («2x Last Gasp»,
// «1 Loot, the Anomaly (FRA) 232»). Il nome può essere quello intero o della prima faccia. Una carta con varianti è la versione
// base, salvo una riga con il numero di una variante. Con una sezione del Mazzo (Deck, Mainboard, o le righe prima di tutto)
// e una Sideboard, le carte della prima vanno nel Mazzo; altrimenti tutte nel Sideboard. Le terre base del Mazzo vanno nei
// contatori delle terre base, le altre si ignorano. Restituisce {code, pool, deck (uid), basics, unknown (righe), warn}.
const normName=s=>String(s).toLowerCase().replace(/[’‘`´]/g,"'").replace(/\s+/g,' ').trim();
let NAME_IX=null;
function nameIx(){if(NAME_IX)return NAME_IX;NAME_IX=new Map();
  DATA.filter(c=>c.r!=='t'&&!c.b).forEach(c=>[c.n,c.n.split(' // ')[0],(c.f||[]).map(f=>f.n).join(' // ')].forEach(n=>{const k=normName(n);if(k&&!NAME_IX.has(k))NAME_IX.set(k,c.id)}));
  return NAME_IX}
const LIST_SEC={deck:'d',mainboard:'d',main:'d',commander:'d',companion:'d',sideboard:'s',side:'s',about:'x',maybeboard:'x',considering:'x'};
function listPool(text){const ix=nameIx(),rows=[],unknown=[];let sec='d',hasSide=false,hasDeck=false;
  for(const raw of String(text).split(/\r?\n/)){const line=raw.trim();if(!line||line.startsWith('//'))continue;
    const h=/^([a-z]+)\s*:?\s*(\(\d+\))?$/i.exec(line);if(h&&LIST_SEC[h[1].toLowerCase()]){sec=LIST_SEC[h[1].toLowerCase()];continue}
    if(sec==='x')continue;
    const m=/^(?:(\d+)x?\s+)?(.+?)(?:\s+\(([a-z0-9]+)\)(?:\s+(\S+))?)?(?:\s+\*[a-z]+\*)*$/i.exec(line);
    const id=m&&ix.get(normName(m[2]));if(!id){unknown.push(line);continue}
    rows.push({id,n:m[1]?+m[1]:1,set:(m[3]||'').toUpperCase(),num:m[4]||'',sec});if(sec==='s')hasSide=true;else hasDeck=true}
  const toDeck=hasDeck&&hasSide,items=[],basics={W:0,U:0,B:0,R:0,G:0};
  rows.forEach(r=>{const basic=COLORS.find(k=>BY[BASIC_ID[k]].n===BY[r.id].n);
    if(basic){if(toDeck&&r.sec==='d')basics[basic]+=r.n;return}
    const v=r.set===SET.code&&BY[r.num]?.b===r.id?r.num:null;for(let i=0;i<r.n;i++)items.push({c:r.id,...(v?{v}:{}),d:toDeck&&r.sec==='d'})});
  const code=listCode(items),pool=makeListKit(code).pool,free=new Map();
  pool.forEach(x=>{const t=listTok(x);if(!free.has(t))free.set(t,[]);free.get(t).push(x.u)});
  const deck=items.filter(x=>x.d).map(x=>free.get(listTok(x)).shift());
  return {code,pool,deck,basics,unknown,warn:listWarn(pool)}}
// Un Pool che un Kit non dà quasi mai: si avvisa ma si importa lo stesso. Un Kit ha al massimo 85 carte (6 Buste da 14 più la
// promo, senza terre base); su 20.000 Kit del simulatore le rare e mitiche vanno da 7 a 18, più di 15 in meno di 1 Kit su 300.
function listWarn(pool){const w=[],rm=pool.filter(x=>'rm'.includes(BY[x.c].r)).length;
  if(pool.length>85)w.push(`${pool.length} carte: un Kit ne ha al massimo 85, terre base escluse`);
  if(rm>15)w.push(`${rm} rare e mitiche: in un Kit più di 15 capita meno di una volta su 300`);
  return w}

/* src/js/41-views.js */
document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>goStep(b.dataset.view));
function go(v){VIEW=v;markTabs();['open','deck','table'].forEach(x=>$('#v-'+x).hidden=x!==v);closeZoom();renderAll();scrollTo(0,0)}
// Le schede seguono la Sessione: durante una Partita l'Apertura e il Mazzo sono bloccati, e al Mazzo si passa dall'Apertura
// solo aprendo le Buste rimaste. Il Tavolo si guarda sempre (c'è il Registro con la chat).
function markTabs(){const lock=typeof gameOpen==='function'&&gameOpen();document.querySelectorAll('.tabs button').forEach(b=>{const v=b.dataset.view,l=lock&&v!=='table';
  b.setAttribute('aria-selected',v===VIEW);b.classList.toggle('locked',l);b.title=l?'Bloccato durante la Partita':''})}
function goStep(v){if(v===VIEW)return;if(v!=='table'&&gameOpen()){lockedModal(v);return}
  if(v==='deck'&&inOpening()){if(S.draft){toast('Prima finisci il draft: poi costruisci il Mazzo con le tue scelte');return}toDeckModal();return}go(v)}
// Dall'Apertura al Mazzo: le Buste ancora chiuse si aprono tutte, e poi non se ne aprono altre.
function toDeckModal(){const n=ownCount()-S.opened;
  openModal('Passi alla costruzione del Mazzo',m=>{
    m.innerHTML=`<p style="margin-top:0">${n===1?'La Busta ancora chiusa si apre':`Le ${n} Buste ancora chiuse si aprono tutte`} adesso, e da qui non si torna ad aprire Buste: potrai solo rivederle. Per un Pool diverso serve un Kit nuovo, che annulla il Mazzo${S.team?' tuo e del tuo Compagno':''}.</p>
      <div class="row" style="justify-content:flex-end;gap:8px"><button class="btn" id="td-no">Resta all'Apertura</button><button class="btn pri" id="td-go">Apri tutte e costruisci</button></div>`;
    $('#td-no').onclick=closeModal;$('#td-go').onclick=()=>{S.opened=ownCount();FLIP={b:-1,n:0};saveS();closeModal();go('deck')}})}
// Apertura o Mazzo durante una Partita: prima la si finisce o la si abbandona.
function lockedModal(v){const solo=G.mode==='solo',bo3=G.match.bo===3&&!G.match.hg;
  openModal('Partita in corso',m=>{
    m.innerHTML=`<p style="margin-top:0">Durante la Partita ${v==='deck'?'il Mazzo non si cambia':"non si torna all'Apertura"}. Finiscila e segna il risultato con «Fine Partita», oppure ${solo?'chiudila':'abbandonala: conta come persa'}.${bo3?" Nel Bo3, tra una Partita e l'altra, puoi tornare al Mazzo e cambiarlo con le carte del Sideboard.":''}</p>
      <div class="row" style="justify-content:flex-end;gap:8px"><button class="btn pri" id="lk-no">Torna al Tavolo</button><button class="btn warm" id="lk-go">${solo?'Chiudi la Partita':'Abbandona la Partita'}</button></div>`;
    $('#lk-no').onclick=closeModal;$('#lk-go').onclick=()=>{concede();closeModal();goStep(v)}})}
function renderAll(){markTabs();if(VIEW==='open')renderOpen();else if(VIEW==='deck')renderDeck();else renderTable()}

const SLOT_LBL={c:'Comune',sg:'Special Guest',u:'Non comune',cu:'Com./Non com.',e:'Eco',w:'Jolly',r:'Rara/Mitica',f:'Foil',l:'Terra',k:'Pedina',p:'Promo'};
const RAR_NAME={m:'Mitica',r:'Rara',u:'Non comune',c:'Comune'};
const slotLabel=x=>SLOT_LBL[x.s]+(x.v&&BY[x.v].tr?' · '+TR_NAME[BY[x.v].tr]:'')+(x.f&&x.s!=='f'?' · foil':'');
const KIT_KIND={0:['Kit individuale','Kit prerelease · 6 Play Booster + promo foil'],8:['Two-Headed Giant · 8 Buste','Two-Headed Giant · Kit di squadra · 1 prerelease kit + 2 Play Booster'],12:['Two-Headed Giant · 12 Buste','Two-Headed Giant · Kit di squadra · 2 prerelease kit']};
const seatName=o=>'Compagno '+'AB'[o];
// Sfoglio della Busta appena aperta: come dal vero, le carte si girano una alla volta dal davanti, con la rara verso la fine.
// FLIP.b è la Busta, FLIP.n quante carte sono già girate; non si salva, e ricaricando la Busta si vede tutta.
let FLIP={b:-1,n:0};
const flipping=()=>FLIP.b>=0&&S.boosters[FLIP.b]&&FLIP.n<S.boosters[FLIP.b].length;
function flipNext(all){if(!flipping())return;FLIP.n=all?S.boosters[FLIP.b].length:FLIP.n+1;S.viewB=FLIP.b;S._anim=all?-1:FLIP.b;renderOpen()}
document.addEventListener('keydown',e=>{if(VIEW!=='open'||!flipping()||e.target.closest('input,textarea,select,button')||e.ctrlKey||e.metaKey||e.altKey)return;
  if([' ','Enter','ArrowRight'].includes(e.key)){e.preventDefault();flipNext()}});
function renderOpen(){
  const el=$('#v-open');const team=S.team||0,n=S.boosters.length,own0=firstOwn(),nOwn=ownCount(),opened=S.opened,allOpen=opened>=nOwn;
  // Le Buste del Compagno si rivedono dopo aver aperto tutte le proprie.
  const canSee=i=>isOwnBooster(i)?i-own0<opened:allOpen;
  const vb=Math.min(S.viewB,n-1);const b=canSee(vb)?S.boosters[vb]:null;const mate=team&&!isOwnBooster(vb);
  const fl=flipping()&&FLIP.b===vb,shown=i=>!fl||i<FLIP.n;
  const range=o=>`Buste ${o*team/2+1}-${(o+1)*team/2}`+(S.pool.some(x=>x.p&&x.o===o)?' e promo':'');
  // Un Pool da una lista (issue #30) non ha Buste: l'Apertura mostra tutte le sue carte, e si va al Mazzo.
  // Un draft (issue #46) non ha Buste da aprire: al loro posto c'è la vista del draft (46-draft.js).
  const dr=S.draft,list=!n&&!dr;
  el.innerHTML=`<div class="intro"><div><div class="eyebrow">${dr?(dr.online?`Draft a 8 · tu, ${esc(oppName())} e sei Bot`:'Draft a 8 · tu e sette Bot'):list?'Pool da una lista · senza Buste e senza promo':KIT_KIND[team][1]}</div><h2>${dr?(dr.done?'Draft finito':`Il draft di ${SET.name}`):list?'Il tuo Pool importato':team?'Apri le tue Buste del Kit di squadra':`Apri il tuo Pool di ${SET.name}`}</h2>${dr?`<p>Tre Buste a testa: la prima e la terza passano a sinistra, la seconda a destra. Ogni Bot prende la carta che le persone prendono prima, secondo i dati del draft di 17Lands, e poi resta nei suoi colori. Lo stesso codice dà lo stesso draft. Alla fine le tue scelte sono il Pool.</p>`:list?`<p>${S.pool.length} carte da una lista incollata. Non ci sono Buste da aprire: passa al Mazzo. Il codice qui sotto contiene tutto il Pool: chi lo carica con «Carica codice» ottiene le stesse carte.</p>`:team?`<p>Un solo codice per tutta la squadra: dallo al tuo Compagno e scegliete posti diversi. Ognuno apre le sue Buste (${range(0)} al ${seatName(0)}, ${range(1)} al ${seatName(1)}) e poi può rivedere quelle dell'altro. Nel Mazzo usi le carte di cui sei proprietario, e nella scheda Mazzo puoi darne al Compagno. Le Buste seguono la stessa collation del Kit individuale.</p>`:`<p>Ogni kit nasce da un codice: condividilo e il tuo amico otterrà lo stesso identico Pool. ${SET.packs}</p>`}</div>
  <div class="kitctl"><div class="seg" role="group" aria-label="Tipo di Kit">${[0,8,12].map(k=>`<button data-kind="${k}" aria-pressed="${!list&&!dr&&team===k}">${KIT_KIND[k][0]}</button>`).join('')}<button id="newdraft" aria-pressed="${!!dr&&!dr.online}" title="Draft a 8 con sette Bot">Draft a 8</button>${G.mode==='online'&&OPP?`<button id="newdraft2" aria-pressed="${!!dr?.online}" title="Draft a 8 con l'amico e sei Bot">Draft con ${esc(oppName())}</button>`:''}</div>
  ${team?`<div class="seg" role="group" aria-label="Il tuo posto">${[0,1].map(o=>`<button data-seat="${o}" aria-pressed="${S.seat===o}"${inOpening()?'':` disabled title="Il posto si sceglie durante l'Apertura: per cambiarlo ricarica il codice del Kit"`}>${seatName(o)} · ${range(o)}</button>`).join('')}</div>`:''}
  <div class="row"><input type="text" id="seed" value="${esc(S.seed)}" aria-label="Codice kit" size="13" class="mono"><button class="btn" id="regen">Carica codice</button><button class="btn" id="implist" title="Il Pool da una lista di carte di Arena, Moxfield o MTGO">Importa lista…</button><button class="btn pri" id="newkit">Nuovo kit</button></div></div></div>
  ${draftInvite()?`<div class="dupbox row"><span><b>Draft con l'amico</b> · ${esc(oppName())} ti invita a un draft a 8, voi due e sei Bot.</span><button class="btn sm pri" id="drjoin">Entra nel draft</button></div>`:''}
  ${dr?'<div id="draftbox"></div>':`<div class="packs" id="packs"></div>
  <div class="row" style="justify-content:space-between;margin-bottom:12px"><h3 style="font-size:16px">${list?`Il Pool · ${S.pool.length} carte`:b?`Busta ${vb+1}${mate?` · del ${seatName(1-S.seat)}`:''}`:'Busta ancora chiusa'}</h3>
  <div class="row">${fl?`<button class="btn" id="flipall">Scopri tutte</button>`:''}${!allOpen?`<button class="btn${fl?'':' pri'}" id="next">Apri busta ${own0+opened+1}</button><button class="btn" id="all">Apri tutte</button>`:''}<button class="btn warm" id="todeck">Costruisci il Mazzo →</button></div></div>
  <div class="pack-grid" id="pgrid"></div>
  <div class="pool-sum" id="psum"></div>`}`;
  if(!dr){const pk=$('#packs');
  const promoTile=o=>{if(!S.pool.some(x=>x.p&&(!team||x.o===o)))return;const pr=document.createElement('div');pr.className='pk promo'+(allOpen?' done':'')+(team&&o!==S.seat?' mate':'');pr.textContent='Promo';pk.appendChild(pr)};
  for(let i=0;i<n;i++){
    if(team&&i%(n/2)===0){const o=i?1:0;const l=document.createElement('span');l.className='pklbl';l.textContent=o===S.seat?seatName(o)+' · tu':seatName(o);pk.appendChild(l)}
    const d=document.createElement('button');d.className='pk'+(canSee(i)?' done':'')+(i===vb?' cur':'')+(team&&!isOwnBooster(i)?' mate':'');d.textContent=i+1;
    d.title=canSee(i)?'Rivedi busta '+(i+1):isOwnBooster(i)?'Chiusa':'Busta del Compagno: la rivedi dopo aver aperto le tue';d.onclick=()=>{if(canSee(i)){S.viewB=i;saveS();renderOpen()}};pk.appendChild(d);
    if(team&&(i+1)%(n/2)===0)promoTile(i<n/2?0:1)}
  if(!team)promoTile(0);
  const g=$('#pgrid');
  // Il Pool da lista si stende per colore e costo, come il Sideboard.
  if(list){const ord=GROUPS.col.keys;[...S.pool].sort((a,c)=>ord.indexOf(groupKey('col',a.c))-ord.indexOf(groupKey('col',c.c))||byCost(a,c)).forEach(x=>{const s=document.createElement('div');s.className='slot';const r=BY[x.c].r;
    s.innerHTML=`<div class="lbl"><i class="rar ${r}"></i>${BY[x.c].sg?'Special Guest':RAR_NAME[r]}${x.v&&BY[x.v].tr?' · '+TR_NAME[BY[x.v].tr]:''}</div>`;const f=faceEl(x);setPreviewAttrs(f,x);s.appendChild(f);g.appendChild(s)})}
  else if(b){b.forEach((x,i)=>{const s=document.createElement('div');
    // Durante lo sfoglio si anima solo la carta appena girata; senza sfoglio tutte, una dopo l'altra.
    const just=fl||FLIP.b===vb?S._anim===vb&&i===FLIP.n-1:S._anim===vb;
    s.className='slot'+(just?' reveal':'')+(just&&FLIP.b===vb&&'rm'.includes(BY[x.c].r)?' hit-'+BY[x.c].r:'');s.style.setProperty('--i',FLIP.b===vb?0:i);
    if(!shown(i)){s.classList.add('down');s.innerHTML='<div class="lbl">&nbsp;</div>';const f=faceEl({c:'?'},{back:true});
      if(i===FLIP.n){f.classList.add('nextc');f.title='Gira la carta (Spazio)';f.onclick=()=>flipNext()}s.appendChild(f);g.appendChild(s);return}
    const r=BY[x.c].r;s.innerHTML=`<div class="lbl"><i class="rar ${r}"></i>${slotLabel(x)}</div>`;const f=faceEl(x,{foil:!!x.f});setPreviewAttrs(f,x);s.appendChild(f);g.appendChild(s)})
    if(fl)g.insertAdjacentHTML('afterbegin',`<p class="fliphint muted">Sfogli la busta dal davanti, come dal vero: clicca la carta coperta o premi Spazio. La rara è verso la fine. ${FLIP.n}/${b.length}</p>`)}
  else{g.innerHTML='<div class="nog">Premi «Apri busta» per scoprire le carte.</div>'}
  S._anim=-1;
  // Riepilogo delle proprie carte aperte; con tutte aperte, anche le rare del Compagno.
  const down=new Set(flipping()?S.boosters[FLIP.b].slice(FLIP.n).map(x=>x.u):[]);
  const mine=openedPool();const seen=mine.filter(x=>list||(x.p?allOpen:x.b-own0<opened)&&!down.has(x.u));
  const rank=(a,b)=>'mr'.indexOf(BY[a.c].r)-'mr'.indexOf(BY[b.c].r);const isHit=x=>'rm'.includes(BY[x.c].r);
  const hits=seen.filter(isHit).sort(rank);const mateHits=team&&allOpen?S.pool.filter(x=>x.o!==S.seat&&isHit(x)).sort(rank):[];
  const hit=(x,note)=>`<div class="hit" data-cid="${x.c}"${x.v?` data-v="${x.v}"`:''}><i class="rar ${BY[x.c].r}"></i><span class="n">${esc(BY[x.c].n)}${x.p?' <span class="muted">(promo)</span>':''}${note?` <span class="muted">(${note})</span>`:''}</span><span>${mana(BY[x.c].f[0].m||'')}</span></div>`;
  const cnt={W:0,U:0,B:0,R:0,G:0};seen.forEach(x=>[...BY[x.c].c].forEach(k=>cnt[k]++));const mx=Math.max(1,...Object.values(cnt));
  $('#psum').innerHTML=`<div class="sumbox"><h3>${team?'Le tue rare e mitiche':'Rare e mitiche'} (${hits.length})</h3><div class="hits">${hits.map(x=>hit(x)).join('')||'<span class="muted">Nessuna ancora.</span>'}${mateHits.map(x=>hit(x,seatName(x.o))).join('')}</div></div>
  <div class="sumbox"><h3>Profondità per colore</h3><div class="bars">${COLORS.map(k=>`<div class="bar"><span class="ms ${k}"></span><i style="width:${cnt[k]/mx*100}%;background:var(--m${k})"></i><span class="mono muted">${cnt[k]}</span></div>`).join('')}</div><p class="muted" style="margin:10px 0 0;font-size:12px">${seen.length} carte aperte su ${mine.length}${team?`, le tue; il Pool di squadra ne ha ${S.pool.length}`:''}. Le scuole di Hexhaven: Fatehold (WU), Theorix (UB), Stingerquill (BR), Konstrari (RG), Vigorbloom (GW).</p></div>`;
  $('#next')&&($('#next').onclick=()=>{S.opened++;S.viewB=own0+S.opened-1;FLIP={b:S.viewB,n:0};S._anim=-1;saveS();renderOpen()});
  $('#all')&&($('#all').onclick=()=>{S.opened=nOwn;S.viewB=own0+nOwn-1;FLIP={b:-1,n:0};S._anim=S.viewB;saveS();renderOpen()});
  $('#flipall')&&($('#flipall').onclick=()=>flipNext(true));
  $('#todeck').onclick=()=>goStep('deck')}
  // r: la lista letta da listPool, per un Pool importato, che va dritto al Mazzo.
  // opt: per un draft con l'amico (issue #47), il ruolo.
  const open_=(code,msg,r,opt)=>{if(r)freshList(r);else freshKit(code,opt);resetGame();commit();FLIP={b:S.viewB,n:0};S._anim=-1;const tm=timerNewKit();if(r)go('deck');else renderOpen();toast(msg+kitName(S.seed)+(tm?' · timer avviato':''))};
  // Un Kit nuovo apre una Sessione nuova: Pool, Mazzo e Match ripartono da zero, e nel Two-Headed Giant anche il Compagno.
  // Prima si avvisa, e se il Mazzo non è salvato si propone di salvarlo (con una finestra dell'app, non con confirm()).
  const load=(code,msg,r,opt)=>{const n=kitLoss(),match=!!G.me||!!G.match.res,started=S.draft?S.draft.round+S.draft.pick>0:S.opened>1;if(!n&&!match&&!started&&!(S.team&&MATE)){open_(code,msg,r,opt);return}
    const toTeam=!!kitTeam(code);
    openModal('Kit nuovo: si riparte da zero',m=>{
      m.innerHTML=`<p style="margin-top:0">Con un altro Kit si perdono ${S.draft?'il draft':'le Buste aperte'}${n?` e il Mazzo di ${n} carte, che non è salvato`:S.deck.length?' e il Mazzo attuale (lo ritrovi in «Mazzi salvati»)':''}${match?', e il Match sul Tavolo si chiude':''}.${S.team?` ${toTeam?'Anche il tuo Compagno riparte: la sua pagina passa al Kit nuovo e il suo Mazzo si annulla.':'La squadra si scioglie: il tuo Compagno resta sul Kit di adesso, senza di te.'}`:''}</p>
        <div class="row" style="justify-content:flex-end;gap:8px"><button class="btn" id="kl-no">Annulla</button><button class="btn warm" id="kl-go">${n?'Apri senza salvare':'Apri il Kit nuovo'}</button>${n?'<button class="btn pri" id="kl-save">Salva e apri il Kit</button>':''}</div>`;
      $('#kl-no').onclick=closeModal;
      $('#kl-go').onclick=()=>{closeModal();open_(code,msg,r,opt)};
      $('#kl-save')&&($('#kl-save').onclick=()=>{saveDeck();closeModal();open_(code,msg,r,opt)})})};
  publish();
  $('#newkit').onclick=()=>load(newSeed(team),'Nuovo kit: ');
  el.querySelectorAll('[data-kind]').forEach(b=>b.onclick=()=>{if(+b.dataset.kind!==team)load(newSeed(+b.dataset.kind),'Nuovo kit: ')});
  el.querySelectorAll('[data-seat]').forEach(b=>b.onclick=()=>{setSeat(+b.dataset.seat);FLIP={b:S.viewB,n:0};S._anim=-1;renderOpen()});
  $('#regen').onclick=()=>{const v=$('#seed').value.trim();if(v)load(v,'Kit caricato: ')};
  $('#implist').onclick=()=>listModal(r=>load(r.code,'Pool importato: ',r));
  $('#newdraft').onclick=()=>load(newDraftCode(),'Nuovo draft: ');
  $('#newdraft2')&&($('#newdraft2').onclick=()=>load(newDraftCode(),'Draft con l’amico: ',null,{role:'A'}));
  $('#drjoin')&&($('#drjoin').onclick=()=>load(OPP.dr[0],'Draft con l’amico: ',null,{role:'B'}));
  if(dr)paintDraft();
}
// Importa lista (issue #30): la lista incollata si legge mentre si scrive, con le carte riconosciute, le righe che restano fuori
// e gli avvisi. Importare apre una Sessione nuova, con le stesse avvertenze di un Kit nuovo (done).
function listModal(done){openModal('Importa una lista di carte',m=>{
  // Gli esempi sono carte del set aperto: una comune, una rara e un'altra comune.
  const [c1,r1,c2]=[SHEET.c[0],SHEET.r[0],SHEET.c[1]].map(c=>esc(c.n.split(' // ')[0])),[n1,nr,n2]=[SHEET.c[0],SHEET.r[0],SHEET.c[1]].map(c=>c.id);
  m.innerHTML=`<p style="margin-top:0">Incolla il Pool come lo esportano Arena, Moxfield o MTGO, una carta per riga: «2x ${c1}», «1 ${r1} (${SET.code}) ${nr}». Se la lista ha le sezioni Deck e Sideboard, le carte del Deck e le sue terre base vanno nel Mazzo; altrimenti tutto va nel Sideboard. Il Pool non ha Buste né promo.</p>
    <textarea id="lsin" rows="12" style="width:100%" spellcheck="false" placeholder="Deck&#10;2 ${c1} (${SET.code}) ${n1}&#10;1 ${r1} (${SET.code}) ${nr}&#10;&#10;Sideboard&#10;1 ${c2} (${SET.code}) ${n2}"></textarea>
    <div id="lsout" style="margin:10px 0"></div><div class="row" style="justify-content:flex-end;gap:8px"><button class="btn" id="ls-no">Annulla</button><button class="btn pri" id="ls-go" disabled>Importa</button></div>`;
  let r=null;const upd=()=>{const t=$('#lsin').value;r=t.trim()?listPool(t):null;const ok=!!r?.pool.length;$('#ls-go').disabled=!ok;
    if(!r){$('#lsout').innerHTML='';return}const nb=Object.values(r.basics).reduce((a,c)=>a+c,0);
    $('#lsout').innerHTML=`<p style="margin:0">${ok?`${r.pool.length} carte riconosciute${r.deck.length?`: ${r.deck.length} nel Mazzo${nb?` con ${nb} terre base`:''} e ${r.pool.length-r.deck.length} nel Sideboard`:', tutte nel Sideboard'}.`:`Nessuna carta di ${SET.name} riconosciuta.`}</p>`+
      r.warn.map(w=>`<p class="chip warn" style="margin:6px 0 0">${esc(w)}</p>`).join('')+
      (r.unknown.length?`<p class="muted" style="margin:6px 0 0">Non riconosciute, restano fuori (${r.unknown.length}): ${r.unknown.slice(0,12).map(esc).join(' · ')}${r.unknown.length>12?' …':''}</p>`:'')};
  $('#lsin').oninput=upd;$('#ls-no').onclick=closeModal;$('#ls-go').onclick=()=>{if(!r?.pool.length)return;closeModal();done(r)};$('#lsin').focus()})}

/* deck builder */
const poolByU=()=>byUid(S.pool);
function deckStats(){const byU=poolByU();const cards=S.deck.map(u=>byU[u]).filter(Boolean);const basics=COLORS.reduce((a,k)=>a+S.basics[k],0);
  const lands=cards.filter(x=>isLand(x.c)).length+basics;const cre=cards.filter(x=>isCreatureCid(x.c)).length;return{cards,basics,lands,cre,total:cards.length+basics}}
function cardEl(x,cls,onclick){const w=document.createElement('div');w.className='card '+cls;w.dataset.u=x.u;setPreviewAttrs(w,x);const it=inclText(x.c);if(it)w.title=it;w.appendChild(faceEl(x,{foil:!!x.f}));addWR(w,x.c);if(onclick)w.onclick=onclick;return w}
// GIH WR sulla carta (issue #20), con un decimale; in grigio sotto WR_MIN Partite in mano (20-autobuild.js), nessun numero se la carta non è nei dati.
const fmtWR=v=>v.toLocaleString('it-IT',{minimumFractionDigits:1,maximumFractionDigits:1});
function addWR(w,cid){if(!WR||WR[cid]==null)return;const t=document.createElement('span'),n=WRN[cid];
  t.className='wr'+(n<WR_MIN?' low':'');t.textContent=fmtWR(WR[cid]);t.title=`GIH WR ${fmtWR(WR[cid])}% su ${n.toLocaleString('it-IT')} Partite in mano${n<WR_MIN?': poche, numero poco affidabile':''}`;w.appendChild(t)}
// Attribuzione in vista, come chiedono la licenza CC BY 4.0 e le linee guida di 17Lands.
const gihSource=()=>GIH_?`<p class="gihsrc muted">GIH WR sulle carte: <a href="https://www.17lands.com/public_datasets" target="_blank" rel="noopener">Dati 17Lands (CC BY 4.0), aggiornati al ${new Date(GIH_.date+'T12:00:00').toLocaleDateString('it-IT',{day:'numeric',month:'long',year:'numeric'})}</a>. Premier Draft, ${GIH_.games.toLocaleString('it-IT')} Partite; in grigio i numeri con meno di ${WR_MIN} Partite in mano.${INCL_?` Nella carta ingrandita, quanto spesso finisce nel Mazzo: sealed Bo1, ${INCL_.pools.toLocaleString('it-IT')} Pool.`:''}</p>`:'';
// Criteri delle scorciatoie: ognuno ridispone da capo la sua zona.
const COL_GROUPS=['col','cmc','type','rar','cre','none'],ROW_GROUPS=['none','rr','rc','cmc'];
const ZONE_NAME={deck:'Mazzo',side:'Sideboard',mate:'Pool del Compagno'};
// perso: le carte messe a mano fuori dalla loro Pila (cm, rm). Nessun criterio è più quello vero e «Personalizzato» lo dice;
// scegliendo un criterio, anche quello di prima, la zona si ridispone da capo.
const zoneSeg=(name,lbl,attr,opts,val,perso)=>`<span class="zset"><span class="muted">${lbl}</span><span class="seg" role="group" aria-label="${lbl}: ${ZONE_NAME[name]}">${opts.map(([k,l])=>`<button data-zone="${name}" ${attr}="${k}" aria-pressed="${!perso&&val===k}">${l}</button>`).join('')}${perso?'<button aria-pressed="true" aria-disabled="true" title="Hai messo a mano delle carte fuori dalla loro Pila: scegli un criterio per ridisporle">Personalizzato</button>':''}</span></span>`;
// L'ordine si sceglie solo quando ce n'è più d'uno: il GIH WR compare quando arrivano i dati (issue #20).
// tail: in fondo alla testata (le terre base del Mazzo, la vista del Sideboard).
function zoneHead(name,title,z=S.lay[name],{tail=''}={}){const ords=Object.keys(ORDERS).filter(okOrder);
  return `<div class="zhead"><span class="eyebrow">${title}</span>${zoneSeg(name,'Colonne','data-zc',COL_GROUPS.map(k=>[k,GROUPS[k].l]),z.c,z.cm)+zoneSeg(name,'Righe','data-zr',ROW_GROUPS.map(k=>[k,GROUPS[k].l]),z.r,z.rm)+(ords.length>1?zoneSeg(name,'Ordine','data-zo',ords.map(k=>[k,ORDERS[k].l]),okOrder(z.o)?z.o:'cmc'):'')}${tail}</div>`}
// Una zona stesa in Pile: le colonne in orizzontale e le righe una sotto l'altra. Se edit, le Pile accettano le carte trascinate
// e in fondo ci sono una colonna vuota a destra e una riga vuota sotto dove crearne di nuove. el(u): la carta da mostrare.
function gridEl(name,z,el,edit){const nc=z.ck.length,nr=z.rk.length;
  const g=document.createElement('div');g.className='zgrid';g.style.setProperty('--nc',nc+(edit?1:0));
  const add=(cls,html)=>{const d=document.createElement('div');d.className=cls;if(html)d.innerHTML=html;g.appendChild(d);return d};
  const pile=(i,j,cls='')=>{const d=add('zpile'+cls);if(edit)Object.assign(d.dataset,{zpile:'',zone:name,col:i,row:j});return d};
  z.ck.forEach((k,i)=>add('ph',`<span>${esc(colTitle(z.c,k)||'Colonna')}</span><span class="n">${z.p[i].reduce((a,p)=>a+p.length,0)}</span>`));if(edit)add('ph');
  const rowLbl=nr>1||z.r!=='none';
  z.rk.forEach((k,j)=>{if(rowLbl)add('rowlbl',`${esc(colTitle(z.r,k)||'Riga')} <span class="n">${z.p.reduce((a,col)=>a+col[j].length,0)}</span>`);
    z.p.forEach((col,i)=>{const st=document.createElement('div');st.className='stack';col[j].forEach(u=>{const c=el(u);c&&st.appendChild(c)});pile(i,j).appendChild(st)});
    if(edit)pile(nc,j,' new').innerHTML=j?'':'<span>Trascina qui per una colonna nuova</span>'});
  if(!edit)return g;
  if(nr){for(let i=0;i<=nc;i++)pile(i,nr,' new nr').innerHTML=i?'':'<span>Trascina qui per una riga nuova</span>'}
  else pile(0,0,' new').innerHTML='<span>Vuoto: trascina qui le carte</span>';
  return g}
// Le Pile di una zona del Mazzo. click(x): il clic su una carta.
function pilesEl(name,click){const byU=poolByU();return gridEl(name,syncLay()[name],u=>byU[u]&&cardEl(byU[u],'',()=>click(byU[u])),true)}
// Il clic su una carta la manda nell'altra zona, nella Pila delle sue chiavi.
const pileClick=(name,redraw)=>x=>{placeCard(x.u,name==='deck'?'side':'deck');saveS();redraw()};
// I contatori delle terre base. Sotto ognuno i simboli di quel colore nei costi delle carte del Mazzo (un ibrido conta per ognuno dei suoi
// colori); nel title la carta più difficile da lanciare al suo turno e con che probabilità (castOdds), poi le fonti che ha e quelle che
// chiede la tabella di Karsten (sourcesNeeded). È un dato, non un consiglio. zoom: un clic sul contatore mostra la terra.
function basicsEl(redraw,zoom){const bs=document.createElement('div');bs.className='basics';const need=sourcesNeeded(S.deck,S.pool),have=landSources(S.deck,S.pool,S.basics),odds=castOdds(S.deck,S.pool,S.basics);
  const byU=poolByU(),costs=S.deck.map(u=>byU[u]).filter(x=>x&&!isLand(x.c)).flatMap(x=>(BY[x.c].f[0].m||'').match(/\{[^}]+\}/g)||[]);
  COLORS.forEach(k=>{const sym=costs.filter(s=>s.slice(1,-1).split('/').includes(k)).length;const r=document.createElement('div');r.className='bstep';if(zoom)r.dataset.cid=BASIC_ID[k];const n=need[k];
    const o=odds[k],cn=c=>`${BY[c].n} (${BY[c].f[0].m})`;
    // Prima la carta più difficile da lanciare, poi quella che fissa la soglia di Karsten: spesso sono due carte diverse.
    const why=o&&`${cn(o.card)}: ${Math.round(o.odds*100)}% di avere le fonti al turno ${o.turn}; è la carta di questo colore più difficile da lanciare in tempo.`+
      (n?` Hai ${have[k]} fonti di questo colore, terre non base comprese; `+(n.card===o.card?'':cn(n.card)+' ')+`ne chiede ${n.need}`+
        (n.splash?': è uno splash (3 carte o meno con un simbolo), soglia di Drifter.':' secondo la tabella di Karsten per 40 carte.'):'');
    r.innerHTML=`<button aria-label="Meno ${BASIC_NAME[k]}">−</button><span><span class="ms ${k}"></span> <b class="mono">${S.basics[k]}</b></span><button aria-label="Più ${BASIC_NAME[k]}">+</button>`+
      (sym?`<span class="bsrc"${why?` title="${esc(why)}"`:''}><b>${sym}</b> ${sym>1?'simboli':'simbolo'}</span>`:'');
    const [m,,p]=r.children;m.onclick=()=>{S.basics[k]=Math.max(0,S.basics[k]-1);saveS();redraw()};p.onclick=()=>{S.basics[k]++;saveS();redraw()};bs.appendChild(r)});
  return bs}
// Chi ridisegna dopo un trascinamento tra le Pile: la scheda Mazzo o la finestra tra le Partite.
let ZREDRAW=()=>renderDeck();
// Costruttore del Mazzo (ADR 0007): al centro le Pile del Mazzo, a destra la colonna del Sideboard, in lista o a griglia. Con la
// vista Pile la colonna sparisce e il Sideboard si stende in Pile sotto il Mazzo, come la column view di Arena. Lo usano la scheda
// Mazzo e la finestra tra le Partite. BLD: preferenze di chi guarda, non del Mazzo (la vista del Sideboard). POOL_OPEN: il
// pannello su schermo stretto.
const PV=[['list','Lista'],['grid','Griglia'],['piles','Pile']];
let BLD=(o=>({view:PV.some(([k])=>k===o?.view)?o.view:'list'}))(LS.get('mtg-lab:costruttore-v1',null));
const saveBld=()=>LS.set('mtg-lab:costruttore-v1',BLD);
let POOL_OPEN=false,BROOT=document;
// La colonna del Sideboard si ferma sotto la testata, che va a capo quando la finestra si stringe: --toph ne segue l'altezza.
new ResizeObserver(()=>document.documentElement.style.setProperty('--toph',$('.top').offsetHeight+'px')).observe($('.top'));
const viewSeg=()=>`<span class="seg pview" role="group" aria-label="Vista del Sideboard">${PV.map(([k,l])=>`<button data-pv="${k}" aria-pressed="${BLD.view===k}">${l}</button>`).join('')}</span>`;
const sideTitle=()=>`Sideboard · ${sideboard().length} carte${S.team?' tue':''}`;
// extra: sotto le Pile, nella scheda Mazzo il Pool del Compagno.
function builderHTML(extra=''){const st=deckStats(),piles=BLD.view==='piles';
  return `<div class="bld${piles?' spile':''}"><div class="bmain">
  <section class="zsec">${zoneHead('deck',`Mazzo · ${S.deck.length} carte e ${st.basics} terre base · clic → Sideboard`,S.lay.deck,{tail:'<span class="zset zbasics"><span class="muted">Terre base</span></span>'})}${qbarHTML('deck')}<div class="zwrap" data-zw="deck"></div>
  <p class="muted zhint">Trascina le carte tra il Sideboard e le Pile, da una Pila all'altra o in una colonna o una riga nuova; per togliere una carta dal Mazzo trascinala sul Sideboard. Le scorciatoie ridispongono la zona da capo.</p></section>
  ${piles?`<section class="zsec" data-dz="side">${zoneHead('side',sideTitle()+' · clic → Mazzo',S.lay.side,{tail:viewSeg()})}${qbarHTML('side')}${pairsHTML()}<div class="zwrap" data-zw="side"></div></section>`:''}
  ${extra}</div>
  ${piles?'':`<aside class="bpool${POOL_OPEN?' open':''}" data-dz="pool" aria-label="Sideboard">${poolHeadHTML()}<div class="pbody"></div></aside>`}</div>`}
function poolHeadHTML(){
  return `<button class="phandle" aria-expanded="${POOL_OPEN}"><span>Sideboard · ${sideboard().length} carte<span class="pflt"${fq('side')?'':' hidden'}> · filtrato</span></span><span class="mono">Mazzo ${S.deck.length}</span><span>${POOL_OPEN?'▾':'▴'}</span></button>
  <div class="phead"><span class="eyebrow">${sideTitle()}</span>${viewSeg()}</div>
  ${qbarHTML('side')}
  ${pairsHTML()}`}
// Le carte della colonna, cioè il Sideboard, per colore e poi per costo, con il Filtro del Sideboard. Il clic le manda nel Mazzo.
function poolBody(body,redraw){if(!body)return;const keys=GROUPS.col.keys,byU=poolByU(),all=sideboard().map(u=>byU[u]),f=compileQuery(fq('side'),WR);
  const cards=all.filter(x=>f.test(x.c)).sort((a,b)=>keys.indexOf(groupKey('col',a.c))-keys.indexOf(groupKey('col',b.c))||byCost(a,b));
  const groups=keys.map(k=>[k,cards.filter(x=>groupKey('col',x.c)===k)]).filter(([,a])=>a.length);
  const click=x=>()=>{placeCard(x.u,'deck');saveS();redraw()};
  body.replaceChildren();
  if(!cards.length){body.innerHTML=`<p class="muted zhint">${all.length?'Nessuna carta con questi filtri.':myPool().length?'Tutte le tue carte sono nel Mazzo.':'Nessuna carta nel Pool.'}</p>`;return}
  if(BLD.view==='grid'){const g=document.createElement('div');g.className='pgrid';
    groups.forEach(([k,a])=>{const c=document.createElement('div');c.className='col pcol';c.innerHTML=`<h4><span>${esc(GROUPS.col.t[k])}</span><span>${a.length}</span></h4>`;
      const st=document.createElement('div');st.className='stack';a.forEach(x=>st.appendChild(cardEl(x,'',click(x))));c.appendChild(st);g.appendChild(c)});
    body.appendChild(g);return}
  groups.forEach(([k,a])=>{const h=document.createElement('div');h.className='pgh';h.innerHTML=`<span>${esc(GROUPS.col.t[k])}</span><span>${a.length}</span>`;body.appendChild(h);
    a.forEach(x=>{const c=BY[x.c],r=document.createElement('div');r.className='prow';r.dataset.u=x.u;setPreviewAttrs(r,x);
      const wr=WR&&WR[x.c]!=null?`<span class="pwr${WRN[x.c]<WR_MIN?' low':''}">${fmtWR(WR[x.c])}</span>`:'<span></span>';
      r.innerHTML=`<span class="pcost">${mana(c.f[0].m||'')}</span><span class="pn">${esc(c.n)}${x.f?' <span class="pfoil" title="Foil">✦</span>':''}</span>${wr}`;
      r.onclick=click(x);
      // Con il mouse, passandoci sopra si vede la carta, a sinistra della colonna; col dito, o se a sinistra non c'è posto
      // (il pannello del telefono), l'anteprima coprirebbe la riga e resta il tasto destro.
      r.onpointerenter=e=>{if(e.pointerType==='mouse'&&!deckDrag&&r.getBoundingClientRect().left>=270)showZoom(x,r,{width:250})};r.onpointerleave=()=>{if(zoomedOn(r))closeZoom()};
      body.appendChild(r)})})}
// Monta il costruttore scritto da builderHTML dentro root. redraw: ridisegna chi lo ospita.
function mountBuilder(root,redraw){const q=s=>root.querySelector(s);BROOT=root;
  const zd=q('[data-zw=deck]');zd.appendChild(pilesEl('deck',pileClick('deck',redraw)));
  q('.zbasics').appendChild(basicsEl(redraw,true));
  q('[data-zw=side]')?.appendChild(pilesEl('side',pileClick('side',redraw)));
  [['zc','c'],['zr','r'],['zo','o']].forEach(([a,f])=>root.querySelectorAll(`.bmain [data-${a}]`).forEach(b=>b.onclick=()=>{const n=b.dataset.zone;(n==='mate'?mateSet():S.lay[n])[f]=b.dataset[a];if(n!=='mate')resetZone(n);saveS();redraw()}));
  root.querySelectorAll('[data-pv]').forEach(b=>b.onclick=()=>{BLD.view=b.dataset.pv;saveBld();redraw()});
  poolBody(q('.pbody'),redraw);
  const ph=q('.phandle');if(ph)ph.onclick=()=>{POOL_OPEN=!POOL_OPEN;redraw()};
  const pd=q('.pairs');pd.ontoggle=()=>PAIRS_OPEN=pd.open;
  bindQbar(root,redraw)}
function renderDeck(){
  syncMate();syncLay();ZREDRAW=renderDeck;const el=$('#v-deck');const st=deckStats();const cur=findSave(S.saveId);
  const curve=[0,0,0,0,0,0,0];st.cards.filter(x=>!isLand(x.c)).forEach(x=>curve[Math.min(6,Math.max(0,Math.floor(cmc(x.c))))]++);const cm=Math.max(1,...curve);
  el.innerHTML=`<div class="dtool"><div><div class="eyebrow">Mazzo</div><div class="count ${st.total>=40?'ok':''}">${st.total}<small> / 40</small></div></div>
  <div class="stats"><span>Creature <b class="mono">${st.cre}</b></span><span>Altre magie <b class="mono">${st.cards.length-st.cre-st.cards.filter(x=>isLand(x.c)).length}</b></span><span>Terre <b class="mono">${st.lands}</b></span></div>
  <div class="curve" title="Curva di mana">${curve.map((n,i)=>`<div style="height:${n/cm*100}%"><span>${i===6?'6+':i}</span></div>`).join('')}</div>
  <div class="row" style="margin-left:auto"><span class="savedas" title="Il Mazzo salvato da cui stai lavorando">${cur?`${esc(cur.name)}${deckDirty()?' · <b>modificato</b>':' · salvato'}`:'Non salvato'}</span><button class="btn" id="save">${cur?'Salva':'Salva…'}</button><button class="btn" id="saves">Mazzi salvati${SAVES.length?` (${SAVES.length})`:''}</button><button class="btn" id="auto">Auto-costruisci</button><button class="btn" id="lands">Suggerisci terre</button><button class="btn" id="copy">Copia lista (Arena)</button><button class="btn" id="phase" title="Gioca con le regole su phase-rs.dev, contro l’IA o con l’amico">Gioca su phase.rs</button><button class="btn" id="forge">Esporta per Forge</button><button class="btn" id="clear" title="Rimette le carte del Mazzo nel Sideboard e azzera le terre base">Svuota</button><button class="btn pri" id="play">Gioca →</button></div>${gihSource()}</div>
  <div class="dupbox row" id="dupbox" hidden></div>
  ${builderHTML(S.team?mateHead():'')}`;
  mountBuilder(el,renderDeck);paintDup();
  $('#save').onclick=()=>{if(!cur){savesModal();return}saveDeck();renderDeck();toast('Salvato: '+cur.name)};
  $('#saves').onclick=savesModal;
  $('#auto').onclick=()=>{const r=autoBuild(myPool(),GIH_?.w);S.deck=r.uids;resetZone('deck');S.basics=r.basics;saveS();renderDeck();toast('Mazzo '+r.pair+' costruito: rivedilo tu!')};
  $('#lands').onclick=()=>{const nl=S.deck.filter(u=>!isLand(poolByU()[u].c)).length;const ln=S.deck.length-nl;S.basics=suggestBasics(S.deck,myPool(),Math.max(0,40-nl-ln));saveS();renderDeck()};
  $('#clear').onclick=()=>{S.deck=[];resetZone('deck');S.basics={W:0,U:0,B:0,R:0,G:0};saveS();renderDeck()};
  $('#copy').onclick=()=>{const t=deckText();const done=()=>toast('Lista copiata');try{navigator.clipboard.writeText(t).then(done,()=>showText(t))}catch(e){showText(t)}};
  $('#forge').onclick=forgeModal;
  $('#phase').onclick=phaseModal;
  $('#play').onclick=()=>go('table');
  if(S.team)renderMate();
  publish();
}
// Tabella delle coppie in cima alla colonna del Pool (issue #25): solo numeri, sulle proprie carte, nell'ordine fisso di PAIRS.
// Il GIH WR compare quando ci sono i dati (issue #20). Aperta o chiusa non si salva. La coppia evidenziata è il play: della barra.
let PAIRS_OPEN=false;
const pairSum=()=>{const p=PAIRS.find(p=>qColors(p.k)===qState(fq('side')).play);return p?'evidenziata: '+p.n:'giocabili, creature e curva per coppia'};
function pairsHTML(){const wr=!!WR,num=(n,cv)=>`<td class="${cv?'cv':''}${n?'':' z'}">${n}</td>`,pip=k=>[...k].map(c=>`<span class="ms ${c}"></span>`).join('');
  return `<details class="pairs"${PAIRS_OPEN?' open':''}><summary><span class="eyebrow">Coppie di colori</span> <span class="muted psum">${pairSum()}</span></summary>
  <div class="ptwrap"><table class="ptab"><thead><tr><th rowspan="2" scope="col">Coppia</th><th rowspan="2" scope="col">Giocabili</th><th rowspan="2" scope="col">Creature</th><th rowspan="2" scope="col">Multicolori</th><th colspan="6" scope="colgroup" class="cvh">Curva</th>${wr?'<th rowspan="2" scope="col">GIH WR medio<br>23 migliori</th>':''}</tr>
  <tr>${['1','2','3','4','5','6+'].map(c=>`<th scope="col" class="cv">${c}</th>`).join('')}</tr></thead>
  <tbody>${pairTable(myPool(),WR).map(r=>`<tr data-pair="${r.k}"><th scope="row"><button class="pbtn" aria-pressed="false">${pip(r.k)}<span>${esc(r.n)}</span></button></th>${num(r.play)}${num(r.cre)}${num(r.multi)}${r.curve.map(n=>num(n,1)).join('')}${wr?`<td>${r.wr==null?'—':r.wr.toFixed(1).replace('.',',')+'%'}</td>`:''}</tr>`).join('')}</tbody></table></div>
  <p class="muted zhint">Le carte ${S.team?'tue ':''}del Pool, senza terre, che si lanciano con i due colori (un ibrido basta che ne abbia uno). Clic su una riga: scrive <code>play:</code> nella barra del Sideboard, che mostra solo le carte della coppia; un altro clic lo toglie.</p></details>`}
// Pool del Compagno, in sola lettura: le sue carte (secondo i passaggi noti) nelle stesse Pile, segnate «Mazzo» se sono nel Mazzo
// che pubblica nella presence. Le carte non hanno data-u, quindi non si trascinano né si cliccano; ci si trascinano sopra le proprie.
// Le Pile si ridispongono a ogni disegno con le impostazioni di chi guarda (mlay), che non fanno parte del Mazzo salvato.
const mateCards=()=>S.pool.filter((x,i)=>ownerAt(S,i)!==S.seat);
const mateSet=()=>{const m=S.mlay;return m&&isGrp(m.c)&&isGrp(m.r)?m:(S.mlay={c:'col',r:'rr',o:'cmc'})};
function mateHead(){const n=mateCards().length,inDeck=MATE?mateDeckSet().size:0;
  return `<section class="zsec">${zoneHead('mate',`Pool del ${seatName(1-S.seat)}${MATE?.nm?' · '+esc(MATE.nm):''} · ${n} carte${MATE?`, ${inDeck} nel suo Mazzo`:''} · sola lettura`,mateSet())}
  <div class="zwrap mate" id="mgrid" data-dz="mate"></div><p class="muted zhint">Trascina qui una tua carta per darla al Compagno.${MATE&&WR?' M e S: nel suo Mazzo e nel suo Sideboard.':''}</p></section>`}
// Indici del Mazzo del Compagno, solo tra le carte che risultano sue.
function mateDeckSet(){return new Set((MATE?.d||[]).filter(i=>S.pool[i]&&ownerAt(S,i)!==S.seat).map(i=>S.pool[i].u))}
function renderMate(){const g=$('#mgrid'),inDeck=mateDeckSet(),byU=poolByU();
  if(!MATE){const n=document.createElement('div');n.className='nog';n.style.margin='0';n.textContent=`Il ${seatName(1-S.seat)} non è collegato: apra il codice ${S.seed} e scelga il suo posto. Intanto vedi le sue carte, senza sapere quali ha nel Mazzo; quelle che gli dai le riceverà appena si collega.`;g.appendChild(n)}
  g.appendChild(gridEl('mate',arrangeZone({...mateSet()},mateCards()),u=>{const x=byU[u],d=inDeck.has(u);const w=document.createElement('div');w.className='card'+(MATE&&!d?' out':'');
    setPreviewAttrs(w,x);w.appendChild(faceEl(x,{foil:!!x.f}));addWR(w,x.c);
    // Accanto al GIH WR l'etichetta si accorcia in M o S, per lasciare leggere il nome.
    if(MATE){const t=document.createElement('span'),wr=w.querySelector('.wr');t.className='mtag'+(d?'':' sb');
      t.textContent=wr?(d?'M':'S'):(d?'Mazzo':'Side');if(wr)w.title=d?'Nel Mazzo del Compagno':'Nel Sideboard del Compagno';
      if(wr){const g=document.createElement('span');g.className='ctags';g.append(wr,t);w.appendChild(g)}else w.appendChild(t)}return w},false));markFilter(BROOT)}
// Dai al Compagno: dal trascinamento sul suo Pool o dal bottone della carta ingrandita.
function giveToMate(u){const x=poolByU()[u];if(!x||!giveCard(u)){toast('Non è una tua carta: può dartela solo il Compagno');return}
  syncLay();saveS();closeZoom();renderDeck();toast(`Data al Compagno: ${BY[x.c].n}`+(MATE?'':'. La riceverà appena si collega'))}
// Trascinamento delle carte tra le Pile, nella scheda Mazzo e nella finestra tra le Partite: in un'altra Pila, in una colonna
// nuova, nell'altra zona, dalla colonna del Sideboard, sulla colonna o sul Sideboard in Pile (torna nel Sideboard, nella Pila
// delle sue chiavi) o, nel Kit di squadra, sul Pool del Compagno. Senza movimento resta un clic e valgono i clic delle carte.
// Col dito si trascina dopo una pressione lunga (HOLD_MS): un movimento prima è uno scorrimento della pagina.
const HOLD_MS=300;
let deckDrag=null,deckDropped=false;
const deckDrop=(e,root)=>{for(const x of document.elementsFromPoint(e.clientX,e.clientY)){const d=x.closest('[data-zpile],[data-dz]');if(d&&root.contains(d))return d}return null};
document.addEventListener('pointerdown',e=>{if(e.button!==0)return;const el=e.target.closest('.zgrid .card[data-u],.bpool [data-u]');if(!el)return;
  const d=deckDrag={el,u:el.dataset.u,root:el.closest('#v-deck,#modal')||document.body,pool:!!el.closest('.bpool'),sx:e.clientX,sy:e.clientY,moved:false,armed:e.pointerType!=='touch'};
  if(!d.armed)d.hold=setTimeout(()=>{if(deckDrag===d&&!d.moved){d.armed=true;el.classList.add('held')}},HOLD_MS)});
document.addEventListener('pointermove',e=>{if(!deckDrag)return;const d=deckDrag;
  if(!d.moved&&Math.hypot(e.clientX-d.sx,e.clientY-d.sy)>6){if(!d.armed){clearTimeout(d.hold);deckDrag=null;return}
    // Una riga della lista non ha la faccia della carta: il fantasma la disegna.
    const f=d.el.querySelector('.face');d.moved=true;d.width=f?d.el.getBoundingClientRect().width:90*cardScale();
    d.ghost=f?f.cloneNode(true):faceEl(poolByU()[d.u]);d.ghost.className+=' ghost';d.ghost.style.width=d.width+'px';document.body.appendChild(d.ghost);
    d.el.classList.add('drag-src');d.root.classList.add('zdrag');closeZoom()}
  if(!d.moved)return;d.ghost.style.left=(e.clientX-d.width/2)+'px';d.ghost.style.top=(e.clientY-20)+'px';
  const t=deckDrop(e,d.root);d.root.querySelectorAll('.drop-hot').forEach(x=>x!==t&&x.classList.remove('drop-hot'));t&&t.classList.add('drop-hot')});
// Con la pressione lunga armata il dito non deve far scorrere la pagina né aprire il menu del browser.
document.addEventListener('touchmove',e=>{if(deckDrag?.armed)e.preventDefault()},{passive:false});
document.addEventListener('contextmenu',e=>{if(deckDrag?.armed)e.preventDefault()});
document.addEventListener('pointerup',e=>{if(!deckDrag)return;const d=deckDrag;deckDrag=null;clearTimeout(d.hold);d.el.classList.remove('held');if(!d.moved)return;
  d.ghost.remove();d.root.classList.remove('zdrag');deckDropped=true;setTimeout(()=>deckDropped=false);const t=deckDrop(e,d.root);
  // In una zona vuota la carta va nella Pila delle sue chiavi, invece che in una colonna fatta a mano.
  if(t?.dataset.zpile!=null&&!S.lay[t.dataset.zone].ck.length)placeCard(d.u,t.dataset.zone);
  else if(t?.dataset.zpile!=null){const others=[...t.querySelectorAll('.card')].filter(c=>c!==d.el);
    placeCard(d.u,t.dataset.zone,+t.dataset.col,+t.dataset.row,others.filter(c=>c.getBoundingClientRect().top+8<e.clientY).length)}
  else if(t?.dataset.dz==='mate'){giveToMate(d.u);return}
  else if(t?.dataset.dz==='pool'&&!d.pool||t?.dataset.dz==='side')placeCard(d.u,'side');
  saveS();ZREDRAW()});
document.addEventListener('pointercancel',()=>{if(deckDrag){const d=deckDrag;deckDrag=null;clearTimeout(d.hold);d.ghost&&d.ghost.remove();d.root.classList.remove('zdrag');ZREDRAW()}});
// Il clic che segue un trascinamento non deve anche spostare la carta.
document.addEventListener('click',e=>{if(deckDropped){deckDropped=false;e.stopPropagation();e.preventDefault()}},true);
// Colori del Mazzo (dalle carte non terra), per riconoscere i salvataggi a colpo d'occhio.
function deckColors(pool,deck){const byU=byUid(pool);const k=new Set();deck.forEach(u=>{const x=byU[u];if(x&&!isLand(x.c))[...BY[x.c].c].forEach(c=>k.add(c))});return COLORS.filter(c=>k.has(c))}
function savesModal(){let armed=null;const openH=new Set();
  openModal('Mazzi salvati',m=>{const draw_=()=>{const cur=findSave(S.saveId);const dirty=S.deck.length&&deckDirty();
    m.innerHTML=`<p class="muted" style="margin:0;font-size:12.5px">Un Mazzo salvato conserva il Pool, il Mazzo, le terre base e come hai disposto le Pile: puoi ricaricarlo quando vuoi e provarne più versioni. Resta in questo browser; per portarlo altrove usa «Esporta».</p>
      <div class="row"><input type="text" id="svname" maxlength="40" placeholder="Nome (es. UG tempo v2)" value="${esc(cur?cur.name+' (copia)':deckColors(S.pool,S.deck).join('')+' '+kitName(S.seed))}"><button class="btn pri" id="svnew">Salva come nuovo</button>${cur?`<button class="btn" id="svover">Sovrascrivi «${esc(cur.name)}»</button>`:''}</div>
      <div class="histhead" id="svhist"></div>
      <div class="saves" id="svlist"></div>
      <details><summary class="muted">Importa un Mazzo da un codice</summary><div class="row" style="margin-top:8px"><textarea id="svcode" rows="3" style="flex:1;min-width:0" placeholder="MTGLAB1:…"></textarea><button class="btn" id="svimp">Importa</button></div></details>`;
    // Storico dei Match (issue #42): i totali per primi e per secondi, l'aggiunta di un Match giocato altrove, l'esportazione.
    const fs=firstStats(HIST),pct=x=>`${x.w}-${x.l}${x.d?'-'+x.d:''}`;
    $('#svhist').innerHTML=`<span class="muted">${HIST.length?`Storico: ${HIST.length} Match · Partite andando per primi ${pct(fs.first)}, per secondi ${pct(fs.second)}`:'Storico dei Match vuoto: ci entrano i Match finiti contro il Bot o l’amico.'}</span>
      <button class="btn sm" id="svadd">Aggiungi un Match giocato altrove</button>${HIST.length?'<button class="btn sm" id="svhx">Esporta lo storico</button>':''}`;
    $('#svadd').onclick=()=>matchFormModal(savesModal);$('#svhx')&&($('#svhx').onclick=()=>showText(histText(HIST),'Storico dei Match'));
    const L=$('#svlist');if(!SAVES.length)L.innerHTML='<div class="nog" style="margin:0">Nessun Mazzo salvato.</div>';
    SAVES.forEach(s=>{const r=document.createElement('div');r.className='saverow'+(s.id===S.saveId?' cur':'');const nb=COLORS.reduce((a,k)=>a+(s.basics[k]||0),0);const st=s.st;
      r.innerHTML=`<div class="sv1"><b>${esc(s.name)}</b> ${deckColors(s.pool,s.deck).map(k=>`<span class="ms ${k}"></span>`).join('')}${s.id===S.saveId?' <span class="chip on">in uso</span>':''}</div>
        <div class="sv2 muted">${s.deck.length+nb} carte · Sideboard ${sideboard(s).length} · kit ${esc(kitName(s.seed))}${s.team?' · '+seatName(s.seat||0):''} · ${new Date(s.ts).toLocaleString('it-IT',{day:'numeric',month:'numeric',hour:'2-digit',minute:'2-digit'})}${st.mw+st.ml+(st.md||0)?` · Match ${st.mw}-${st.ml}${st.md?'-'+st.md:''} (Partite ${st.gw}-${st.gl})`:''}</div>
        <div class="row"></div>`;
      const acts=r.querySelector('.row');const B=(l,f,cls='')=>{const b=document.createElement('button');b.className='btn sm '+cls;b.textContent=l;b.onclick=f;acts.appendChild(b)};
      const loadKey='load'+s.id,delKey='del'+s.id;
      if(s.id!==S.saveId||deckDirty())B(armed===loadKey?'Sostituisci il Mazzo attuale?':'Carica',()=>{if(dirty&&armed!==loadKey){armed=loadKey;draw_();return}const other=s.seed!==S.seed;loadDeck(s.id);if(other){resetGame();commit()}closeModal();renderAll();toast('Caricato: '+s.name+(other?' · il Match riparte da zero':''))},armed===loadKey?'warm':'');
      B('Esporta',()=>{const code=exportDeck(s.id);try{navigator.clipboard.writeText(code).then(()=>toast('Codice copiato'),()=>{})}catch(e){}$('#svcode').value=code;m.querySelector('details').open=true;$('#svcode').select()});
      // Confronto con un'altra versione dello stesso Pool (issue #43).
      const vs=versionsOf(s.id);if(vs.length)B('Confronta…',e=>{const r=e.target.getBoundingClientRect();
        openMenu(r.left,r.bottom+4,vs.map(v=>[`con «${v.name}»`,()=>compareModal(compareSaves(s.id,v.id),s.name,v.name,s.pool,[['Record',saveRecord(s.id),saveRecord(v.id)]])]))});
      const hs=histOf(s.id);if(hs.length)B(`Storico (${hs.length})`,()=>{openH.has(s.id)?openH.delete(s.id):openH.add(s.id);draw_()});
      B(armed===delKey?'Elimina davvero':'Elimina',()=>{if(armed!==delKey){armed=delKey;draw_();return}deleteDeck(s.id);armed=null;draw_()},armed===delKey?'warm':'');
      if(openH.has(s.id))r.appendChild(histList(hs,draw_));
      L.appendChild(r)});
    $('#svnew').onclick=()=>{const n=$('#svname').value.trim()||'Mazzo '+kitName(S.seed);saveDeck(n);toast('Salvato: '+n);draw_()};
    $('#svover')&&($('#svover').onclick=()=>{saveDeck();toast('Salvato: '+findSave(S.saveId).name);draw_()});
    $('#svimp').onclick=()=>{try{importDeck($('#svcode').value);toast('Mazzo importato');draw_()}catch(e){toast('Codice non valido')}}};
  draw_()},()=>{if(VIEW==='deck')renderDeck()})}
// I Match di un Mazzo nello storico, dal più recente; quelli giocati altrove si possono togliere.
function histList(list,redraw){const R={W:'Vinto',L:'Perso',D:'Pareggiato'},el=document.createElement('div');el.className='hlist';
  el.innerHTML=list.map(e=>`<div class="hrow"><span class="mscore ${e.res==='W'?'won':e.res==='L'?'lost':'drawn'}">${R[e.res]}</span>
    <span>${new Date(e.ts).toLocaleDateString('it-IT',{day:'numeric',month:'numeric'})} · ${esc(e.fmt)} contro ${esc(e.opp)}${e.mode==='altrove'?` · ${esc(e.where||'altrove')}`:e.mode==='bot'?'':' · online'}</span>
    <span class="mono muted">${e.games.map(g=>`${g.r}<sub>${g.first==='me'?'1°':'2°'}</sub>`).join(' ')}</span>${e.mode==='altrove'?`<button class="btn sm" data-hdel="${e.id}">Togli</button>`:''}</div>`).join('');
  el.querySelectorAll('[data-hdel]').forEach(b=>b.onclick=()=>{deleteManualMatch(b.dataset.hdel);redraw()});return el}
// Un Match giocato fuori da mtg-lab (issue #42): Mazzo, avversario, dove, formato e, per ogni Partita, risultato e chi ha iniziato.
function matchFormModal(back){let fmt='Bo3';const games=[{r:'W',first:'me'}];
  openModal('Aggiungi un Match giocato altrove',m=>{const draw_=()=>{const seg=(attr,opts,val)=>`<div class="seg">${opts.map(([k,l])=>`<button ${attr}="${k}" aria-pressed="${val===k}">${l}</button>`).join('')}</div>`;
    m.innerHTML=`<p class="muted" style="margin-top:0;font-size:12.5px">Per esempio una Partita su phase-rs.dev o il prerelease al negozio. Il Match conta nelle statistiche del Mazzo come quelli giocati qui.</p>
      <div class="mform"><label>Mazzo <select id="mfdeck">${SAVES.map(s=>`<option value="${s.id}"${s.id===S.saveId?' selected':''}>${esc(s.name)}</option>`).join('')}<option value="">Nessun Mazzo salvato</option></select></label>
      <label>Avversario <input type="text" id="mfopp" maxlength="40" placeholder="Nome"></label><label>Dove <input type="text" id="mfwhere" maxlength="40" value="Prerelease"></label>
      <div class="row"><span class="eyebrow">Formato</span>${seg('data-mf',[['Bo1','Bo1'],['Bo3','Bo3'],['2HG','2HG']],fmt)}</div>
      ${games.map((g,i)=>`<div class="row"><span class="eyebrow">Partita ${i+1}</span>${seg(`data-gr="${i}" data-v`,[['W','Vinta'],['L','Persa'],['D','Pari']],g.r)}${seg(`data-gf="${i}" data-v`,[['me','Ho iniziato io'],['opp','Ha iniziato l’altro']],g.first)}</div>`).join('')}
      <div class="row">${games.length<5?'<button class="btn sm" id="mfplus">+ Partita</button>':''}${games.length>1?'<button class="btn sm" id="mfminus">− Partita</button>':''}</div></div>
      <div class="row mfoot"><button class="btn" id="mfno">Annulla</button><button class="btn pri" id="mfok">Aggiungi</button></div>`;
    const keep=()=>({deck:$('#mfdeck').value,opp:$('#mfopp').value,where:$('#mfwhere').value});let kept=null;
    const redraw=()=>{kept=keep();draw_();$('#mfdeck').value=kept.deck;$('#mfopp').value=kept.opp;$('#mfwhere').value=kept.where};
    m.querySelectorAll('[data-mf]').forEach(b=>b.onclick=()=>{fmt=b.dataset.mf;redraw()});
    m.querySelectorAll('[data-gr]').forEach(b=>b.onclick=()=>{games[+b.dataset.gr].r=b.dataset.v;redraw()});
    m.querySelectorAll('[data-gf]').forEach(b=>b.onclick=()=>{games[+b.dataset.gf].first=b.dataset.v;redraw()});
    $('#mfplus')&&($('#mfplus').onclick=()=>{games.push({r:'W',first:'me'});redraw()});$('#mfminus')&&($('#mfminus').onclick=()=>{games.pop();redraw()});
    $('#mfno').onclick=()=>back();
    $('#mfok').onclick=()=>{const k=keep();addManualMatch({...k,fmt,games});toast('Match aggiunto allo storico');back()}};
  draw_()})}
// Gioca su phase.rs (issue #50; #16 e la prova #49 in docs/research/phase-rs-dev.md): per giocare con le regole, contro l'IA o
// con l'amico, si usa phase-rs.dev com'è. Il suo import legge la lista in formato Arena, non il .dck di Forge, e il Mazzo va
// messo nel formato Limited. Il pulsante copia la lista, apre la pagina dei Mazzi di phase-rs.dev e spiega i passi.
const PHASE_DECKS='https://phase-rs.dev/my-decks';
function phaseModal(){const t=deckText();window.open(PHASE_DECKS,'_blank','noopener');
  openModal('Gioca su phase.rs',m=>{
    m.innerHTML=`<p style="margin-top:0" id="phst">Copio la lista del Mazzo e apro phase-rs.dev in una scheda nuova…</p>
      <ol style="font-size:13.5px;padding-left:20px;margin:0 0 10px">
        <li>Su phase-rs.dev, in <b>Decks</b>, premi <b>Import Deck</b>, incolla la lista e premi <b>Import</b>.</li>
        <li>Apri il Mazzo importato e scegli il formato <b>Limited</b>: il deck builder parte da Standard, che vuole 60 carte.</li>
        <li>Per l'IA: <b>Play vs AI</b>, formato Limited. Con l'amico: <b>Online</b> → <b>Host Game</b> in formato Limited, e gli dai il codice; lui importa il suo Mazzo allo stesso modo.</li></ol>
      <p class="muted" style="font-size:12.5px;margin:0 0 10px">phase.rs è una alpha: le carte che non gestisce sono segnate nel suo deck builder. I Match giocati lì li aggiungi allo storico da «Mazzi salvati» → «Aggiungi un Match giocato altrove».</p>
      <textarea readonly id="phlist" style="width:100%;min-height:180px;font:12px var(--mono)">${esc(t)}</textarea>
      <div class="row mfoot"><button class="btn" id="phcopy">Copia di nuovo</button><a class="btn pri" href="${PHASE_DECKS}" target="_blank" rel="noopener">Apri phase-rs.dev</a></div>`;
    // Senza appunti (permesso negato, pagina non sicura) la lista resta qui, selezionata, da copiare a mano.
    const copy=()=>{const st=$('#phst'),ta=$('#phlist'),manual=()=>{st.textContent='Non riesco a copiare da solo: la lista è qui sotto, già selezionata. Copiala con Ctrl+C.';ta.focus();ta.select()};
      try{navigator.clipboard.writeText(t).then(()=>{st.textContent='La lista del Mazzo è copiata e phase-rs.dev è aperto in una scheda nuova.'},manual)}catch(e){manual()}};
    $('#phcopy').onclick=copy;copy()})}
// Il Mazzo per Forge: file .dck da scaricare, o il testo da copiare.
function forgeModal(){const cur=findSave(S.saveId);
  const name=cur?cur.name:(deckColors(S.pool,S.deck).join('')+' '+kitName(S.seed)).trim();const base=name.replace(/[\\/:*?"<>|]+/g,' ').trim()||'Mazzo';
  const t=forgeDck(name,deckList(),sideList());
  openModal('Esporta per Forge',m=>{m.innerHTML=`<p class="muted" style="margin-top:0;font-size:12.5px">Mazzo e Sideboard nel formato di Forge. Un set appena uscito c'è solo nelle <b>daily snapshot</b> di Forge, non nella versione stabile; le carte che Forge non ha ancora vengono saltate.</p>
    <ol class="muted" style="font-size:12.5px;padding-left:18px"><li>Salva il file in <code>%APPDATA%\\Forge\\decks\\constructed</code> (su Windows).</li><li>In Forge, nelle Preferenze, disattiva <b>Conformità del mazzo</b> (Deck Conformance): altrimenti vuole almeno 60 carte.</li><li>Scegli il Mazzo in una partita Constructed, contro l'IA o in rete.</li></ol>
    <div class="row"><button class="btn pri" id="fgdl">Scarica il file .dck</button><button class="btn" id="fgcp">Copia il testo</button></div>
    <textarea readonly style="width:100%;min-height:220px;margin-top:10px;background:var(--felt2);color:var(--text);border:1px solid var(--line);border-radius:6px;padding:10px;font:12px var(--mono)">${esc(t)}</textarea>`;
    $('#fgdl').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([t],{type:'text/plain'}));
      a.download=base+'.dck';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1000)};
    $('#fgcp').onclick=()=>{const ta=m.querySelector('textarea');try{navigator.clipboard.writeText(t).then(()=>toast('Testo copiato'),()=>ta.select())}catch(e){ta.select()}}})}
function showText(t,title='Lista del Mazzo'){openModal(title,m=>{m.innerHTML=`<textarea readonly style="width:100%;min-height:300px;background:var(--felt2);color:var(--text);border:1px solid var(--line);border-radius:6px;padding:10px;font:12px var(--mono)">${esc(t)}</textarea>`;m.querySelector('textarea').select()})}

/* src/js/42-overlays.js */
// La finestra si allarga (classe wide) quando ospita il costruttore del Mazzo.
function openModal(title,fill,onClose){$('#mtitle').textContent=title;$('#modal .mbox').classList.remove('wide');const b=$('#mbody');b.innerHTML='';fill(b);$('#modal').hidden=false;openModal._c=onClose}
function closeModal(){if($('#modal').hidden)return;$('#modal').hidden=true;const c=openModal._c;openModal._c=null;c&&c()}
$('#mclose').onclick=closeModal;$('#modal').addEventListener('pointerdown',e=>{if(e.target.id==='modal')closeModal()});
function openMenu(x,y,items){const m=$('#ctx');m.innerHTML='';items.forEach(it=>{if(it==='-'){m.appendChild(document.createElement('hr'));return}const b=document.createElement('button');b.innerHTML=`<span>${it[0]}</span>${it[2]?`<kbd>${it[2]}</kbd>`:''}`;b.onclick=()=>{closeMenu();it[1]()};m.appendChild(b)});
  m.hidden=false;const r=m.getBoundingClientRect();m.style.left=Math.max(8,Math.min(x,innerWidth-r.width-8))+'px';m.style.top=Math.max(8,Math.min(y,innerHeight-r.height-8))+'px'}
function closeMenu(){$('#ctx').hidden=true}
document.addEventListener('pointerdown',e=>{if(!e.target.closest('#ctx'))closeMenu()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();closeModal()}});

/* src/js/43-timer.js */
// Timer di costruzione del Mazzo, come al prerelease: 30 minuti di costruzione più 15 (MTR App. B), quindi 45;
// 30 al sealed normale. È di chi guarda la pagina: sta nel localStorage, non nella Stanza.
// Si salva l'ora di partenza e non i secondi rimasti, così il timer continua anche dopo un ricaricamento.
// t: dur (ms), acc (ms trascorsi prima della corsa attuale), at (ora di partenza della corsa attuale, null se fermo),
// warned (soglie già annunciate), auto (riparte da solo quando si apre un Kit nuovo).
const MIN=60000;
const TIMER_KEY=oldKey('mtg-lab:timer-v1','timer-v1');
const TIMER_ALERTS=[5*MIN,0];
const timerNew=(dur=45*MIN)=>({dur,acc:0,at:null,warned:[],auto:true});
const timerElapsed=(t,now)=>t.acc+(t.at!=null?Math.max(0,now-t.at):0);
const timerLeft=(t,now)=>t.dur-timerElapsed(t,now);
const timerStart=(t,now)=>t.at!=null?t:{...t,at:now};
const timerPause=(t,now)=>({...t,acc:timerElapsed(t,now),at:null});
const timerReset=t=>({...t,acc:0,at:null,warned:[]});
// min in minuti, tra 1 e 180. Le soglie non ancora raggiunte con la durata nuova tornano da annunciare.
function timerSetDur(t,min,now){const m=Math.round(+min);const dur=(isNaN(m)?45:Math.max(1,Math.min(180,m)))*MIN;const n={...t,dur};
  return {...n,warned:t.warned.filter(th=>timerLeft(n,now)<=th)}}
// Le soglie appena superate: due ha solo la più grave, così dopo una lunga assenza non arrivano due avvisi insieme.
function timerAlerts(t,now){if(t.at==null)return {t,due:[]};const left=timerLeft(t,now);
  const hit=TIMER_ALERTS.filter(th=>left<=th&&!t.warned.includes(th));if(!hit.length)return {t,due:[]};
  return {t:{...t,warned:[...t.warned,...hit]},due:[Math.min(...hit)]}}
// Il rimasto si arrotonda per eccesso (45:00 per tutto il primo secondo); oltre il tempo si mostra quanto con il +.
function timerFmt(ms){const over=ms<0;const s=over?Math.floor(-ms/1000):Math.ceil(ms/1000);return (over?'+':'')+Math.floor(s/60)+':'+String(s%60).padStart(2,'0')}
function timerLoad(){const o=LS.get(TIMER_KEY,null);const t=timerNew();if(!o||typeof o!=='object')return t;
  const num=(v,ok)=>typeof v==='number'&&isFinite(v)&&ok(v);
  if(num(o.dur,v=>v>=MIN&&v<=180*MIN))t.dur=o.dur;
  if(num(o.acc,v=>v>=0))t.acc=o.acc;
  if(num(o.at,v=>v>0))t.at=o.at;
  if(Array.isArray(o.warned))t.warned=o.warned.filter(th=>TIMER_ALERTS.includes(th));
  if(typeof o.auto==='boolean')t.auto=o.auto;
  return t}
const timerSave=t=>LS.set(TIMER_KEY,t);

/* interfaccia: il chip nell'header e la sua finestra */
let TIMER=timerLoad();
function setTimer(t){TIMER=t;timerSave(t);paintTimer()}
function paintTimer(){const now=Date.now();const a=timerAlerts(TIMER,now);
  if(a.due.length){TIMER=a.t;timerSave(TIMER);toast(a.due[0]?'Mancano 5 minuti: chiudi il Mazzo':'Tempo scaduto: registra il Mazzo')}
  const left=timerLeft(TIMER,now),run=TIMER.at!=null,idle=!run&&!TIMER.acc;
  const state=left<0?'bad':left<=5*MIN&&!idle?'warn':run?'on':'';
  const chip=$('#timerchip');chip.className='chip timer '+state;
  chip.textContent=(run?'':idle?'Timer ':'In pausa ')+timerFmt(left);
  chip.title=idle?'Timer di costruzione: clic per avviarlo':left<0?'Oltre il tempo di costruzione':'Tempo di costruzione rimasto';
  const big=$('#tmbig');if(big){big.textContent=timerFmt(left);big.className='tmbig mono '+state;
    $('#tmstate').textContent=idle?'Fermo':left<0?'Oltre il tempo':run?'In corso':'In pausa'}}
function timerModal(){openModal('Timer di costruzione',m=>{const draw_=()=>{const run=TIMER.at!=null,idle=!run&&!TIMER.acc,min=TIMER.dur/MIN;
    m.innerHTML=`<div class="tmhead"><div class="tmbig mono" id="tmbig"></div><div class="eyebrow" id="tmstate"></div></div>
      <div class="row"><button class="btn pri" id="tmgo">${run?'Pausa':idle?'Avvia':'Riprendi'}</button><button class="btn" id="tmreset"${idle?' disabled':''}>Azzera</button></div>
      <div class="row"><span class="eyebrow">Durata</span><div class="seg" role="group" aria-label="Durata">${[[30,'30 min · sealed'],[45,'45 min · prerelease']].map(([v,l])=>`<button data-min="${v}" aria-pressed="${min===v}">${l}</button>`).join('')}</div>
        <label class="row" style="gap:6px"><input type="number" id="tmmin" min="1" max="180" value="${min}" style="width:64px" aria-label="Durata in minuti"> min</label></div>
      <label class="row" style="gap:8px"><input type="checkbox" id="tmauto"${TIMER.auto?' checked':''}> Riparte da solo quando apri un Kit nuovo</label>
      <p class="muted" style="margin:0;font-size:12.5px">Al prerelease il negozio di solito dà 45 minuti per aprire il Kit e costruire il Mazzo. Avvisa a 5 minuti dalla fine e allo scadere, poi conta il tempo in più; non blocca niente. Resta in questo browser anche se ricarichi la pagina.</p>`;
    $('#tmgo').onclick=()=>{setTimer(TIMER.at!=null?timerPause(TIMER,Date.now()):timerStart(TIMER,Date.now()));draw_()};
    $('#tmreset').onclick=()=>{setTimer(timerReset(TIMER));draw_()};
    m.querySelectorAll('[data-min]').forEach(b=>b.onclick=()=>{setTimer(timerSetDur(TIMER,+b.dataset.min,Date.now()));draw_()});
    $('#tmmin').onchange=e=>{setTimer(timerSetDur(TIMER,e.target.value,Date.now()));draw_()};
    $('#tmauto').onchange=e=>setTimer({...TIMER,auto:e.target.checked});
    paintTimer()};
  draw_()})}
// Kit nuovo: con auto il timer riparte da capo, come quando al prerelease si aprono le buste.
function timerNewKit(){if(!TIMER.auto)return false;setTimer(timerStart(timerReset(TIMER),Date.now()));return true}
function initTimer(){$('#timerchip').onclick=timerModal;paintTimer();setInterval(paintTimer,1000)}

/* src/js/44-querybar.js */
// Barre del Filtro (22-query.js), una per il Mazzo e una per il Sideboard (ADR 0007): ognuna vale solo per la sua zona. Nella
// colonna del Sideboard le carte che non corrispondono spariscono, nelle Pile diventano grigie e si spostano come sempre; il Pool
// del Compagno segue il Filtro del Sideboard. I pulsanti scrivono nella loro barra, la tabella delle coppie in quella del Sideboard.
// I Filtri valgono per il Kit aperto e non si salvano: restano tra la scheda Mazzo e la finestra tra le Partite, si azzerano
// ricaricando la pagina o con un Kit nuovo. QFOCUS: la barra che aveva il cursore quando il costruttore si è ridisegnato, e dove.
let FILTRO={seed:null,deck:'',side:''},QFOCUS=null;
const fq=(z='side')=>{if(FILTRO.seed!==S.seed)FILTRO={seed:S.seed,deck:'',side:''};return FILTRO[z]};
const Q_CL={W:'bianco',U:'blu',B:'nero',R:'rosso',G:'verde'};
function qbarHTML(z){const a=document.activeElement;QFOCUS=a?.classList?.contains('qin')?{z:a.closest('.qbar')?.dataset.qz,sel:[a.selectionStart,a.selectionEnd]}:null;
  const b=(attr,k,label,html)=>`<button ${attr}="${k}" aria-pressed="false" title="${label}" aria-label="${label}">${html}</button>`,deck=z==='deck';
  return `<div class="qbar" data-qz="${z}">
  <div class="qrow"><input type="search" class="qin" value="${esc(fq(z))}" placeholder="${deck?'Mazzo':'Sideboard'}: flying, t:creature, mv<=2…" aria-label="${deck?'Filtra il Mazzo':'Filtra il Sideboard (tasto /)'}" autocomplete="off" spellcheck="false"><button class="btn sm qhelp" title="Come si scrive un filtro" aria-label="Come si scrive un filtro">?</button></div>
  <div class="qbtns"><span class="seg" role="group" aria-label="Si gioca con questi colori">${COLORS.map(k=>b('data-qc',k,`Si gioca col ${Q_CL[k]}`,`<span class="ms ${k}"></span>`)).join('')}</span><span class="seg" role="group" aria-label="Incolore e multicolore">${b('data-qk','colorless','Incolore','◇')}${b('data-qk','multi','Multicolore','Multi')}</span></div>
  <div class="qbtns"><span class="seg" role="group" aria-label="Valore di mana">${Object.keys(Q_MV).map(k=>b('data-qm',k,`Valore di mana ${k==='1'?'1 o meno':k==='6'?'6 o più':k}`,k==='6'?'6+':k)).join('')}</span><span class="seg" role="group" aria-label="Creature o no">${b('data-qt','cre','Solo creature','Creature')}${b('data-qt','noncre','Solo non creature','Non creature')}</span></div>
  <div class="qfoot"><span class="qcount mono"></span></div>
  <div class="qerr" hidden></div></div>`}
// Collega le barre scritte da qbarHTML. Scrivendo si ridisegnano solo la colonna e il grigio delle Pile, così il cursore resta.
function bindQbar(root,redraw){
  const set=(z,q)=>{FILTRO[z]=q;const i=root.querySelector(`.qbar[data-qz=${z}] .qin`);if(i)i.value=q;if(z==='side')poolBody(root.querySelector('.pbody'),redraw);markFilter(root)};
  root.querySelectorAll('.qbar').forEach(qb=>{const z=qb.dataset.qz,inp=qb.querySelector('.qin'),cur=()=>fq(z);
    const toggle=(kind,on,src)=>set(z,qSet(cur(),kind,on?'':src));
    inp.oninput=()=>set(z,inp.value);
    inp.onkeydown=e=>{if(e.key!=='Escape')return;e.stopPropagation();if(inp.value)set(z,'');else inp.blur()};
    qb.querySelectorAll('[data-qc]').forEach(b=>b.onclick=()=>{const k=b.dataset.qc,p=qState(cur()).play;set(z,qSet(cur(),'play',qPlaySrc(p.includes(k)?p.replace(k,''):p+k)))});
    qb.querySelectorAll('[data-qk]').forEach(b=>b.onclick=()=>{const k=b.dataset.qk;toggle(k,qState(cur())[k],'is:'+(k==='multi'?'multicolor':'colorless'))});
    qb.querySelectorAll('[data-qm]').forEach(b=>b.onclick=()=>{const m=qState(cur()).mv,k=b.dataset.qm;m.has(k)?m.delete(k):m.add(k);set(z,qSet(cur(),'mv',qMvSrc(m)))});
    qb.querySelectorAll('[data-qt]').forEach(b=>b.onclick=()=>{const k=b.dataset.qt;toggle('cre',qState(cur()).cre===k,k==='cre'?'t:creature':'-t:creature')});
    qb.querySelector('.qhelp').onclick=()=>qHelp(q=>{set(z,q);inp.focus()});
    if(QFOCUS?.z===z){inp.focus();inp.setSelectionRange(...QFOCUS.sel)}});
  QFOCUS=null;
  root.querySelectorAll('.pairs tr[data-pair]').forEach(r=>r.onclick=()=>{const k=qColors(r.dataset.pair),q=fq('side');set('side',qSet(q,'play',qState(q).play===k?'':qPlaySrc(k)))});
  markFilter(root)}
// Grigio nelle Pile, pulsanti accesi secondo la loro barra, riga della coppia, conteggi e avvisi sulle parti ignorate.
function markFilter(root){if(!root?.querySelector)return;const F={deck:compileQuery(fq('deck'),WR),side:compileQuery(fq('side'),WR)};
  const dim=(sel,f)=>root.querySelectorAll(sel).forEach(c=>c.classList.toggle('dim',!f.test(c.dataset.cid)));
  dim('[data-zw=deck] .card[data-cid]',F.deck);dim('[data-zw=side] .card[data-cid],#mgrid .card[data-cid]',F.side);
  const byU=poolByU(),mate=root.querySelector('#mgrid');
  root.querySelectorAll('.qbar').forEach(qb=>{const z=qb.dataset.qz,f=F[z],st=qState(fq(z));
    const on=(sel,fn)=>qb.querySelectorAll(sel).forEach(b=>b.setAttribute('aria-pressed',!!fn(b.dataset)));
    on('[data-qc]',d=>st.play.includes(d.qc));on('[data-qk]',d=>st[d.qk]);on('[data-qm]',d=>st.mv.has(d.qm));on('[data-qt]',d=>st.cre===d.qt);
    const us=zoneUids(S,z),m=z==='side'&&mate,cnt=qb.querySelector('.qcount');
    cnt.textContent=f.empty?'':`${us.filter(u=>byU[u]&&f.test(byU[u].c)).length} su ${us.length}`+(m?` · Compagno ${mateCards().filter(x=>f.test(x.c)).length}`:'');
    cnt.title=f.empty?'':(z==='deck'?'Carte del Mazzo che corrispondono':'Carte del Sideboard che corrispondono')+(m?' · nel Pool del Compagno':'');
    const er=qb.querySelector('.qerr');er.hidden=!f.errs.length;er.textContent=f.errs.length?'Ignorato: '+f.errs.join('; '):''});
  const play=qState(fq('side')).play;
  root.querySelectorAll('.pairs tr[data-pair]').forEach(t=>{const o=qColors(t.dataset.pair)===play;t.classList.toggle('on',o);t.querySelector('.pbtn').setAttribute('aria-pressed',o)});
  const ps=root.querySelector('.psum');if(ps)ps.textContent=pairSum();
  const pf=root.querySelector('.pflt');if(pf)pf.hidden=F.side.empty}

// Legenda: una finestra sopra tutto, anche sopra quella tra le Partite. Un clic su un esempio lo mette nella barra.
const Q_HELP=()=>[
  ['Parole libere','Cercano nel nome, nel tipo e nel testo della carta, in tutte le sue parti. Con più parole devono esserci tutte; le virgolette tengono insieme una frase.',['flying','"draw a card"']],
  ['<code>name:</code> nome','Solo nel nome della carta.',['name:angel']],
  ['<code>t:</code> tipo','Nella riga del tipo: tipi e sottotipi, in inglese.',['t:creature','t:instant','t:wizard']],
  ['<code>o:</code> testo','Nel testo delle regole.',['o:destroy','o:"draw a card"']],
  ['<code>play:</code> si gioca con','Le carte che si pagano con questi colori: un ibrido basta che ne abbia uno, le incolori sempre. È la regola della tabella delle coppie, ed è quello che scrivono i pulsanti colore. Solo di mtg-lab, non di Scryfall.',['play:wu','play:r']],
  ['<code>c:</code> colore','I colori della carta, come su Scryfall: <code>c:r</code> almeno rossa, <code>c=wu</code> esattamente bianco-blu, <code>c&lt;=wu</code> nessun colore oltre a bianco e blu (una ibrida bianco-nera resta fuori: per il sealed usa <code>play:</code>), <code>c:m</code> multicolore, <code>c:c</code> incolore. Lettere: w bianco, u blu, b nero, r rosso, g verde.',['c:r','c=wu','c:m']],
  ['<code>mv</code> valore di mana','Il costo di mana totale. Va anche <code>cmc</code>.',['mv=2','mv<=3','mv>=5']],
  ['<code>pow</code> e <code>tou</code>','Forza e costituzione.',['pow>=3','tou<=2']],
  ['<code>r:</code> rarità','c comune, u non comune, r rara, m mitica.',['r:u','r>=r']],
  ['<code>is:</code>','Multicolore o incolore.',['is:multicolor','is:colorless']],
  ...(WR?[['<code>gih</code> GIH WR','La percentuale di vittorie con la carta in mano, dai dati di 17Lands. Solo di mtg-lab.',['gih>=58']]]:[]),
  ['Confronti','Dopo la chiave: <code>:</code> <code>=</code> <code>!=</code> <code>&lt;</code> <code>&lt;=</code> <code>&gt;</code> <code>&gt;=</code>.',[]],
  ['<code>-</code> escludere','Il meno davanti toglie le carte che corrispondono.',['-t:creature','-t:land']],
  ['<code>or</code> oppure','Basta una delle due.',['t:instant or t:sorcery']],
  ['<code>( )</code> parentesi','Raggruppano, di solito con <code>or</code>.',['(mv=2 or mv=3) t:creature']]];
function qHelp(use){const o=document.createElement('div');o.className='modal qhelpm';
  o.innerHTML=`<div class="mbox" role="dialog" aria-modal="true" aria-labelledby="qht"><div class="mhead"><h3 id="qht">Come si scrive un filtro</h3><button class="btn sm" data-x>Chiudi</button></div>
  <div class="mbody"><p class="muted" style="margin:0">La sintassi è quella di Scryfall. Ogni barra filtra solo la sua zona, il Mazzo o il Sideboard. Nella colonna del Sideboard restano solo le carte che corrispondono; nelle Pile le altre diventano grigie, ma si spostano come sempre. Clicca un esempio per provarlo.</p>
  <div class="qleg">${Q_HELP().map(([k,d,ex])=>`<div class="qk">${k}</div><div class="qd">${d}${ex.length?`<div class="qex">${ex.map(x=>`<button class="btn sm" data-ex="${esc(x)}"><code>${esc(x)}</code></button>`).join('')}</div>`:''}</div>`).join('')}</div>
  <p class="muted" style="margin:0;font-size:12px">Tastiera: <kbd>/</kbd> porta alla barra del Sideboard, <kbd>Esc</kbd> la svuota. Una parte scritta male si ignora, con un avviso sotto la barra, e il resto filtra lo stesso.</p></div></div>`;
  const key=e=>{if(e.key==='Escape'){e.stopPropagation();e.preventDefault();close()}};
  const close=()=>{o.remove();document.removeEventListener('keydown',key,true)};
  document.addEventListener('keydown',key,true);
  o.addEventListener('pointerdown',e=>{if(e.target===o)close()});
  o.querySelector('[data-x]').onclick=close;
  o.querySelectorAll('[data-ex]').forEach(b=>b.onclick=()=>{close();use(b.dataset.ex)});
  document.body.appendChild(o);o.querySelector('[data-x]').focus()}
// «/» porta alla barra del Sideboard del costruttore in vista: la scheda Mazzo, o la finestra tra le Partite se è aperta.
document.addEventListener('keydown',e=>{if(e.key!=='/'||e.ctrlKey||e.metaKey||e.altKey||e.target.closest?.('input,textarea,select,[contenteditable]')||$('.qhelpm'))return;
  const modal=!$('#modal').hidden;if(modal?!$('#modal').contains(BROOT):VIEW!=='deck')return;
  const inp=BROOT.querySelector?.('.qbar[data-qz=side] .qin');if(!inp?.isConnected)return;e.preventDefault();inp.focus();inp.select()});

/* src/js/46-draft.js */
// La vista del draft (issue #46), nell'Apertura al posto delle Buste: la Busta da cui scegliere, il timer della scelta e le
// carte prese, in colonne per colore. A draft finito: il passaggio al Mazzo e i sette Bot, da sfidare sul Tavolo con il loro Mazzo.
// Il timer dà più tempo con più carte nella Busta, come al tavolo (40 secondi alle prime scelte, 5 alle ultime); allo scadere
// sceglie il Bot al posto tuo. Si spegne, e la scelta resta in questo browser. Dopo un ricaricamento riparte da capo.
const PICK_SECS=[0,5,5,5,10,10,15,20,20,25,25,30,35,40,40]; // per carte rimaste nella Busta
let DRAFT_PREF={timer:true,...LS.get('mtg-lab:draft',{})};
const setDraftPref=p=>{DRAFT_PREF={...DRAFT_PREF,...p};LS.set('mtg-lab:draft',DRAFT_PREF)};
let pickEnd=0,pickKey='',DRAFT_BOTS={code:null,bots:[]};
function draftTake(u){if(S.draft.online){if(!draftOnlinePick(u))return;publish()}else draftStep(u);if(S.draft.done)toast('Draft finito: le tue scelte sono il Pool');renderOpen()}
// L'invito a un draft con l'amico (issue #47) in cui non sono ancora entrato: il suo codice, o null.
const draftInvite=()=>G.mode==='online'&&OPP&&Array.isArray(OPP.dr)&&OPP.dr[1]==='A'&&isDraftCode(OPP.dr[0])&&S.draft?.code!==OPP.dr[0]?OPP.dr[0]:null;
// Dalla presence dell'avversario: le sue scelte nuove ridisegnano il draft, un invito nuovo ridisegna l'Apertura.
let lastInvite=null;
function draftReact(r){if(r==='changed'&&VIEW==='open')renderOpen();const inv=draftInvite();if(inv!==lastInvite){lastInvite=inv;if(VIEW==='open')renderOpen()}}
// I Mazzi dei Bot si costruiscono una volta per draft.
const botsOf=()=>{if(DRAFT_BOTS.code!==S.seed)DRAFT_BOTS={code:S.seed,bots:draftBots()};return DRAFT_BOTS.bots};
// Le carte prese, una colonna per colore come il Sideboard, ordinate per costo.
function picksHTML(ps){const keys=GROUPS.col.keys.filter(k=>ps.some(x=>groupKey('col',x.c)===k));
  return `<div class="dpicks">${keys.map(k=>`<div class="dcol"><div class="eyebrow">${GROUPS.col.t[k]} ${ps.filter(x=>groupKey('col',x.c)===k).length}</div>${ps.filter(x=>groupKey('col',x.c)===k).sort(byCost).map(x=>`<div class="hit" data-cid="${x.c}"${x.v?` data-v="${x.v}"`:''}><i class="rar ${BY[x.c].r}"></i><span class="n">${esc(BY[x.c].n)}</span><span>${mana(BY[x.c].f[0].m||'')}</span></div>`).join('')}</div>`).join('')}</div>`}
const ataSource=()=>ATA_?`<p class="gihsrc muted">I Bot scelgono con l'ATA: <a href="https://www.17lands.com/public_datasets" target="_blank" rel="noopener">Dati 17Lands (CC BY 4.0), aggiornati al ${new Date(ATA_.date+'T12:00:00').toLocaleDateString('it-IT',{day:'numeric',month:'long',year:'numeric'})}</a>, Premier Draft, ${ATA_.picks.toLocaleString('it-IT')} scelte.</p>`:'';
function paintDraft(){const box=$('#draftbox'),d=S.draft;if(!box||!d)return;const me=d.me||0,nm=esc(oppName());
  const seats=d.online?`<p class="muted" style="margin:0 0 10px;font-size:12.5px">Sei al posto ${me+1}, ${nm} al posto ${d.humans[1]+1}: la prima e la terza Busta vanno dal posto 1 al 2 e così via, la seconda al contrario.</p>`:'';
  if(d.done){const bots=botsOf();
    box.innerHTML=`${seats}<div class="row" style="justify-content:space-between;margin-bottom:12px"><h3 style="font-size:16px">Le tue ${d.picks[me].length} scelte: ${S.pool.length} carte nel Pool, senza le terre base</h3><button class="btn warm" id="dgo">Costruisci il Mazzo →</button></div>
      ${d.online?`<p style="margin:0 0 10px"><button class="btn pri" id="dfriend">Gioca contro ${nm}</button> <span class="muted">quando avete costruito tutti e due il Mazzo</span></p>`:''}
      <div class="dbots">${bots.map(b=>`<div class="sumbox"><b>Bot del posto ${b.seat+1}</b> ${[...b.pair].map(k=>`<span class="ms ${k}"></span>`).join('')} <span class="muted">${b.list.length} carte</span><button class="btn sm" data-bot="${b.seat}">Sfida</button></div>`).join('')}</div>
      ${picksHTML(d.picks[me])}${ataSource()}`;
    $('#dgo').onclick=()=>goStep('deck');
    $('#dfriend')&&($('#dfriend').onclick=()=>{G.mode='online';commit();go('table');if(!gameOpen())nextGameModal()});
    box.querySelectorAll('[data-bot]').forEach(b=>b.onclick=()=>{if(gameOpen()){toast('Prima finisci la Partita in corso');return}
      newMatch();G.mode='bot';G.match.botSeat=+b.dataset.bot;commit();go('table');nextGameModal()});return}
  const pack=d.packs[me],left=pack.length,key=d.code+d.round+'.'+d.pick;if(key!==pickKey){pickKey=key;pickEnd=Date.now()+PICK_SECS[Math.min(14,left)]*1000}
  box.innerHTML=`${seats}${d.wait?`<div class="dupbox row"><span>Hai scelto: aspetti che ${nm} faccia la sua scelta, poi le Buste passano.</span></div>`:''}<div class="row" style="justify-content:space-between;margin-bottom:12px"><h3 style="font-size:16px">Busta ${d.round+1} di 3 · scelta ${d.pick+1} di ${d.pick+left} · passa a ${passDir(d.round)>0?'sinistra':'destra'}</h3>
      <div class="row"><span class="chip timer" id="pickchip"></span><button class="btn sm" id="picktm">${DRAFT_PREF.timer?'Spegni il timer':'Accendi il timer'}</button></div></div>
    <div class="pack-grid" id="dpack"></div>
    <h3 style="font-size:16px;margin:16px 0 8px">Le tue scelte (${d.picks[me].length})</h3>${picksHTML(d.picks[me])}${ataSource()}`;
  const g=$('#dpack');pack.forEach(x=>{const s=document.createElement('div');s.className='slot'+(d.wait?'':' pickable');const r=BY[x.c].r;
    s.innerHTML=`<div class="lbl"><i class="rar ${r}"></i>${slotLabel(x)}</div>`;const f=faceEl(x,{foil:!!x.f});setPreviewAttrs(f,x);if(!d.wait){f.title='Prendi questa carta';f.onclick=()=>draftTake(x.u)}s.appendChild(f);g.appendChild(s)});
  $('#picktm').onclick=()=>{setDraftPref({timer:!DRAFT_PREF.timer});pickKey='';paintDraft()};paintPick()}
// Ogni mezzo secondo: il tempo rimasto, e allo scadere la scelta del Bot al posto tuo.
function paintPick(){const d=S.draft;if(d?.wait){const c=$('#pickchip');if(c){c.textContent='In attesa';c.className='chip timer'}return}
  if(!d||d.done||!DRAFT_PREF.timer){const c=$('#pickchip');if(c){c.textContent='Timer spento';c.className='chip timer'}return}
  const left=pickEnd-Date.now(),c=$('#pickchip');
  if(c){c.textContent=timerFmt(Math.max(0,left));c.className='chip timer '+(left<=5000?'bad':left<=10000?'warn':'on')}
  if(pickEnd&&left<=0){const x=botChoice(d.packs[d.me||0],d.picks[d.me||0]);toast(`Tempo: il Bot ha preso ${BY[x.c].n} per te`);draftTake(x.u)}}
function initDraft(){setInterval(paintPick,500)}

/* src/js/50-game.js */
let G=LS.get(setKey('game-v1'),SET.code==='FRA'?LS.get('fra-game-v1',null):null)||{mode:'bot',me:null,bot:null,log:[],first:'me'};
// Il Match sopravvive alle Partite: res = risultati dal mio punto di vista (W/L/D), bot = codice del kit del bot.
// hg: Two-Headed Giant allenato 1 contro 1, cioè 30 vite, primo mulligan gratis e una Partita sola (bo 1).
G.match=G.match&&typeof G.match.res==='string'?G.match:{res:''};G.match.hg=G.match.hg?1:0;G.match.bo=G.match.bo===1||G.match.hg?1:3;
G.tally=G.tally||{w:0,l:0}; // Match vinti, persi e pareggiati (d) da quando hai azzerato il bilancio
// gn: numero della Partita in corso nel Match. È aperta finché nessuno ne ha segnato il risultato.
// Salvataggi di prima di gn: il numero si ricava dall'ultima riga «Partita N del Match» del registro.
if(G.gn==null){const m=G.log.map(l=>/^Partita (\d+) del Match/.exec(l.tx)).filter(Boolean).pop();G.gn=m?+m[1]:G.match.res.length+(G.me?1:0)}
const gameOpen=()=>!!G.me&&!matchScore(G.match.res,G.match.bo).over&&G.gn>G.match.res.length;
// Un Kit nuovo apre una Sessione nuova: la Partita e il Match del Kit di prima si chiudono. seed: il Kit con cui si gioca.
function resetGame(){const had=!!G.me||!!G.match.res;G.me=null;G.bot=null;G.match={res:'',bo:G.match.bo,hg:G.match.hg};G.gn=0;G.seed=S.seed;
  if(had)log(null,'Partita e Match chiusi: si riparte con il Kit attuale.')}
// Una Partita rimasta da un altro Kit (salvataggi di prima della Sessione, senza seed) non si riprende.
if(G.me&&G.seed!==S.seed)resetGame();
// Abbandonare: nel goldfish la Partita si chiude e basta, altrimenti conta come persa (e online l'avversario lo legge nel Registro).
function concede(){if(!gameOpen())return;if(G.mode==='solo'){log(G.me,'Chiude la Partita');G.me=null;commit();return}
  log(G.me,'Abbandona la Partita');recordResult('L')}
let UIDN=Date.now()%1e6;const uid=()=>'k'+(UIDN++).toString(36);
const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const fmtName=(m=G.match)=>m.hg?'2HG':'Bo'+m.bo;
function mkPlayer(name,cards){const p={name,life:G.match?.hg?30:20,psn:0,ct:0,lib:shuffle(cards.map(x=>({u:uid(),...x}))),hand:[],bf:[],gy:[],ex:[],turn:0,mull:0};draw(p,7,true);return p}
const who=p=>p===G.me?'me':'bot';
const cname=o=>o.c==='x'?(o.tn||'Pedina'):(o.c==='?'?'una carta coperta':BY[o.c].n.split(' // ')[0]);
const isTok=o=>o.tk||o.c==='x'||String(o.c).startsWith('t');
// Righe del Tavolo: online le scrivo a mio nome, perché le righe «Tavolo» restano locali e l'avversario non le vedrebbe.
const tableLog=tx=>log(G.mode==='online'?G.me:null,tx);
function log(p,tx,k){G.log.push({ts:Date.now(),w:p?who(p):'sys',tx,k});if(G.log.length>250)G.log.splice(0,G.log.length-250)}
function draw(p,n=1,quiet){let d=0;for(let i=0;i<n;i++){const c=p.lib.shift();if(!c){log(p,'Grimorio vuoto!');break}p.hand.push(c);d++}if(!quiet&&d)log(p,d===1?'Pesca una carta':`Pesca ${d} carte`)}
function take(p,u){for(const z of ['hand','bf','gy','ex','lib']){const i=p[z].findIndex(o=>o.u===u);if(i>=0)return{o:p[z].splice(i,1)[0],from:z}}return null}
function find(p,u){for(const z of ['hand','bf','gy','ex','lib']){const o=p[z].find(o=>o.u===u);if(o)return{o,z}}return null}
function face0(o){if(o.c==='x'){const [a,b]=(o.pt||'1/1').split('/');return{p:a,d:b,o:'',t:'Token Creature'}}return BY[o.c].f[0]}
const isCreature=o=>o.c==='x'||/Creature/.test(face0(o).t);
const num=v=>{const n=parseInt(v,10);return isNaN(n)?0:n};
const pow=o=>num(face0(o).p)+(o.p1||0), tou=o=>num(face0(o).d)+(o.p1||0);
const kw=(o,k)=>o.c!=='x'&&new RegExp('(^|\\n|, )'+k+'(?=,|$| \\(|\\n)','im').test(face0(o).o||'');
const ZN={hand:'in mano',gy:'nel cimitero',ex:'in esilio',libTop:'in cima al grimorio',libBot:'in fondo al grimorio',bf:'sul campo'};
function autoPos(p,cid){const land=cid!=='x'&&isLand(cid);const W=myBfW()||900;const step=(cardW()+10)/W;
  const y=land?.8:.34;for(let row=0;row<3;row++){const yy=land?y-row*.12:y+row*.14;for(let x=step*.7;x<1-step/2;x+=step){if(!p.bf.some(o=>Math.abs(o.x-x)<step*.6&&Math.abs(o.y-yy)<.08))return{x,y:yy}}}return{x:.5,y}}
function moveTo(p,u,zone,opt={}){
  // Una carta controllata ma non posseduta, lasciando il campo, va nella zona del proprietario (issue #40).
  if(zone!=='bf'){const c=p.bf.find(o=>o.u===u);if(c&&(c.gid||c.own)){returnControl(p,u,zone);return}}
  const r=take(p,u);if(!r)return;const o=r.o;const nm=r.from==='bf'&&o.fd?'una carta coperta':cname(o);
  if(isTok(o)&&zone!=='bf'){log(p,`<b>${esc(nm)}</b> (pedina) lascia il campo`);return}
  const base={u:o.u,c:o.c};if(o.v)base.v=o.v;if(o.tk)base.tk=1;if(o.c==='x'){base.tn=o.tn;base.pt=o.pt}
  if(zone==='bf'){const pos=opt.pos||(r.from==='bf'?{x:o.x,y:o.y}:autoPos(p,o.c));const lo=o.c!=='x'?num(BY[o.c].f[0].l):0;
    p.bf.push({...base,x:pos.x,y:pos.y,tp:false,fd:!!opt.fd,p1:0,n:lo,prep:false,sick:!kw(o,'Haste'),atk:false});}
  else if(zone==='libTop')p.lib.unshift(base);else if(zone==='libBot')p.lib.push(base);else p[zone].push(base);
  if(!opt.quiet){const hidden=(zone==='libTop'||zone==='libBot')&&r.from==='hand';
    log(p,zone==='bf'&&r.from==='hand'?(opt.fd?'Gioca una carta coperta':`Gioca <b>${esc(nm)}</b>`):`<b>${esc(hidden?'una carta':nm)}</b> ${ZN[zone]}`)}
}
// I segni di attacco e di blocco (issue #38) valgono per un turno: li toglie «Nuovo turno», come «Stappa tutto».
function newTurn(p){p.turn++;p.bf.forEach(o=>{o.tp=false;o.sick=false;o.atk=false;o.blk=false});const skip=p.turn===1&&G.first===who(p);if(!skip)draw(p,1,true);log(p,`Turno ${p.turn}${skip?' (va per primo, non pesca)':': stappa e pesca'}`)}
// Di chi è il turno (issue #38): 'me' o 'opp', dai numeri di turno dei due giocatori e da chi ha iniziato (first, 'me' o 'bot').
// Non dagli orari, perché i due computer possono avere orologi diversi. Chi inizia è di turno quando ha più turni dell'altro,
// o nessuno ha ancora premuto «Nuovo turno»; chi va per secondo quando ne ha quanti l'altro.
function turnHolder(mine,theirs,first){const me1=first==='me';if(!mine&&!theirs)return me1?'me':'opp';
  return me1?(mine>theirs?'me':'opp'):(theirs>mine?'opp':'me')}
// Punteggio del Match in corso, con il suo formato (al meglio di 1 o di 3).
const mScore=(r=G.match.res)=>matchScore(r,G.match.bo);
const scoreText=(r=G.match.res)=>{const s=mScore(r);return `${s.w}-${s.l}${s.d?'-'+s.d:''}`};
// first: 'me' o 'bot' (nel gioco online 'bot' vuol dire l'avversario); senza, decide una moneta.
// fmt: formato del nuovo Match (1, 3 o 'hg'), usato solo quando comincia un Match.
function startGame(first,fmt){
  const list=deckList();if(!list.length){toast('Il Mazzo è vuoto: costruiscilo prima');go('deck');return}
  const match=G.match;if(mScore().over){match.res='';match.bot=null;delete match.tm;delete match.tx}
  if(!match.res&&fmt){match.hg=fmt==='hg'?1:0;match.bo=match.hg?1:fmt}
  const coin=!first;const nick=S.nick||'Tu';G={mode:G.mode||'bot',gid:Date.now().toString(36),log:[],first:first||(Math.random()<.5?'me':'bot'),match,tally:G.tally,me:mkPlayer(nick,list),bot:null,seed:S.seed};
  const gn=G.gn=match.res.length+1;roundStart(match);
  log(null,`Partita ${gn} del Match ${match.hg?'Two-Headed Giant (una Partita, 30 vite, primo mulligan gratis)':'al meglio di '+match.bo}${match.res?' ('+scoreText()+')':''}. Mazzo di ${list.length} carte${list.length<40?' (meno di 40!)':''}.`);
  const who1=G.mode==='bot'?(G.first==='me'?'Inizi tu':'Inizia il bot'):(G.first==='me'?'Vai per primo':'Vai per secondo');
  // Dopo un draft (issue #46) si può sfidare uno dei sette Bot del tavolo, con il Mazzo costruito dalle sue scelte.
  const seatBot=G.mode==='bot'&&match.botSeat&&S.draft?.done?draftBots().find(b=>b.seat===match.botSeat):null;
  // I posti si mostrano contati da 1, come nella vista del draft.
  if(seatBot){G.bot=mkPlayer(`Bot ${seatBot.pair} · posto ${seatBot.seat+1}`,seatBot.list);log(null,`Il Bot del posto ${seatBot.seat+1} del draft gioca <b>${seatBot.pair}</b>. ${who1}${coin?' (lancio della moneta)':''}.`)}
  else if(G.mode==='bot'){match.bot=match.bot||'BOT-'+Math.random().toString(36).slice(2,8);const k=makeKit(match.bot);const b=autoBuild(k.pool,GIH_?.w);const byU=byUid(k.pool);
    const cids=b.uids.map(u=>byU[u].v?{c:byU[u].c,v:byU[u].v}:{c:byU[u].c});COLORS.forEach(c=>{for(let i=0;i<b.basics[c];i++)cids.push({c:BASIC_ID[c]})});G.bot=mkPlayer('Bot '+b.pair,cids);
    log(null,`${gn===1?'Il bot ha aperto il suo kit e gioca':'Il bot gioca di nuovo'} <b>${b.pair}</b>. ${who1}${coin?' (lancio della moneta)':''}.`)}
  else tableLog(G.mode==='online'?`Inizia la Partita ${gn} e va ${G.first==='me'?'per primo':'per secondo'}${coin?' (moneta)':''}`:who1+(coin?' (lancio della moneta)':'')+'.');
  commit();
}
// Match finiti in questa sessione di gioco e, se il Mazzo è salvato, nel suo storico (±1 per annullare).
// Chi ha iniziato ogni Partita del Match (issue #42): gs ha una voce per risultato, 'me' o 'opp'.
const syncGs=m=>{const n=m.res.replace('C','').length;m.gs=(m.gs||[]).slice(0,n);while(m.gs.length<n)m.gs.push(G.first==='me'?'me':'opp')};
function countMatch(res,sign){const s=mScore(res);if(!s.over)return;const t=G.tally,k=s.won?'w':s.drawn?'d':'l';t[k]=(t[k]||0)+sign;deckStat(S.saveId,s,sign);
  // Lo storico: il Match finito entra, e l'annullamento lo toglie. Il Goldfish no, non ha un avversario.
  if(G.mode==='solo')return;const m=G.match;
  if(sign<0){if(m.hid)histDel(m.hid);m.hid=null;return}
  syncGs(m);m.hid=histAdd({id:histId(),ts:Date.now(),mode:G.mode,opp:G.mode==='bot'?G.bot?.name||'Bot':OPP?.nm||'Avversario',fmt:fmtName(),deck:S.saveId||null,seed:S.seed,
    games:[...res.replace('C','')].map((r,i)=>({r,first:m.gs[i]})),res:s.won?'W':s.drawn?'D':'L'})}
// Fine della Partita: r = 'W' vinta, 'L' persa, 'D' pareggio.
function recordResult(r){const m=G.match;if(mScore().over){toast('Il Match è già finito: inizia una nuova Partita per un nuovo Match');return}
  m.res+=r;syncGs(m);const s=mScore();countMatch(m.res,1);
  log(G.me,`${{W:'Vince',L:'Perde',D:'Pareggia'}[r]} la Partita ${m.res.length}. Match ${scoreText()}${s.over?(s.won?': <b>Match vinto!</b>':': Match perso'):''}`);commit()}
function undoResult(){const m=G.match;if(!m.res)return;countMatch(m.res,-1);m.res=m.res.slice(0,-1);syncGs(m);G.gn=Math.min(G.gn,m.res.length+1);log(G.me,`Annulla l'ultimo risultato. Match ${scoreText()}`);commit()}
// Chiudi il Match (issue #35): finisce con il punteggio che ha, per esempio a tempo scaduto. Si annulla come un risultato.
function closeMatch(){const m=G.match;if(mScore().over)return;m.res+='C';const s=mScore();countMatch(m.res,1);
  log(G.me,`Chiude il Match: ${s.won?'vinto':s.drawn?'pareggiato':'perso'} ${scoreText()}`);commit()}
function newMatch(){G.match={res:'',bo:G.match.bo,hg:G.match.hg};G.gn=0;tableLog('Nuovo Match: punteggio azzerato.');commit()}
// Annulla (issue #37): commit() tiene l'istantanea dei giocatori di prima di ogni azione che li cambia, fino a UNDO_MAX, solo per la
// Partita in corso (key: gid e numero della Partita). Contro il Bot ci sono anche le sue carte, che muovi tu. last è lo stato dopo
// l'ultimo commit, mark l'ultima riga del Registro di allora: le righe nuove danno il nome all'azione. merge: il prossimo cambio
// si unisce all'azione di prima, così il turno del Bot con il suo combattimento si annulla in una volta.
// La pila sta in memoria: un ricaricamento la svuota.
const UNDO_MAX=20;let UNDO={key:null,last:null,mark:null,stack:[],merge:false};
const undoSnap=()=>JSON.stringify({me:G.me,bot:G.bot});
const undoKey=()=>G.me?G.gid+'|'+G.gn:null;
const plainTx=t=>String(t).replace(/<[^>]*>/g,'');
function undoName(){const i=G.log.lastIndexOf(UNDO.mark),fresh=G.log.slice(i+1);const l=fresh.find(x=>x.w!=='sys')||fresh[0];return l?plainTx(l.tx):'ultima azione'}
function undoTrack(){const k=undoKey(),now=undoSnap();
  if(k!==UNDO.key){UNDO={key:k,last:now,mark:G.log.at(-1),stack:[],merge:false};return}
  if(now===UNDO.last)return;
  if(UNDO.merge&&UNDO.stack.length)UNDO.merge=false;else{UNDO.stack.push({st:UNDO.last,name:undoName()});if(UNDO.stack.length>UNDO_MAX)UNDO.stack.shift()}
  UNDO.last=now;UNDO.mark=G.log.at(-1)}
const undoCount=()=>undoKey()===UNDO.key?UNDO.stack.length:0;
const undoMerge=on=>{UNDO.merge=!!on};
// Torna allo stato di prima dell'ultima azione; il nome dell'azione, o null se non c'è niente da annullare.
function undo(){if(!undoCount())return null;const a=UNDO.stack.pop(),st=JSON.parse(a.st);G.me=st.me;G.bot=st.bot;
  log(G.me,'Annulla: '+esc(a.name));UNDO.last=undoSnap();UNDO.mark=G.log.at(-1);UNDO.merge=false;commit();return a.name}
let saveT;function commit(){undoTrack();clearTimeout(saveT);saveT=setTimeout(()=>LS.set(setKey('game-v1'),G),250);if(!drag)renderTable();publish()}

/* src/js/52-controllo.js */
// Controllo delle carte (issue #40): «Dai il controllo» passa una mia carta sul campo all'avversario. Torna con «Restituisci»
// (chi la controlla) o «Riprendi il controllo» (il proprietario), e se lascia il campo va nella zona del proprietario.
// Contro il Bot le carte passano tra i due campi locali, con own: il lato del proprietario ('me' o 'bot'), solo finché la
// controlla l'altro. Online ognuno scrive solo il proprio stato, come nell'ADR 0002:
// - il proprietario tiene la carta nel suo campo con gv, l'id del passaggio, e la pubblica in gv invece che nel campo;
// - chi la riceve ne crea una copia sua con gid = quell'id, e quando la ridà scrive in G.rt [gid, zona];
// - syncControl riallinea i due stati a ogni presence dell'avversario. Ripeterla non cambia niente, anche dopo un Annulla.
const ownerSide=p=>p===G.me?'me':'bot';
function giveControl(p,u){const o=p.bf.find(o=>o.u===u);if(!o)return;
  if(G.mode==='online'){o.gv=uid();o.atk=o.blk=false;log(p,`Dà il controllo di <b>${esc(cname(o))}</b> a ${esc(OPP?.nm||'l\'avversario')}`);return}
  const to=p===G.me?G.bot:G.me;if(!to)return;p.bf.splice(p.bf.indexOf(o),1);
  if(o.own===ownerSide(to))delete o.own;else o.own=o.own||ownerSide(p);
  Object.assign(o,autoPos(to,o.c),{atk:false,blk:false});to.bf.push(o);log(p,`Dà il controllo di <b>${esc(cname(o))}</b> a ${esc(to.name)}`)}
// Chi controlla una carta altrui la ridà: sul campo del proprietario (dest 'bf') o in un'altra sua zona.
function returnControl(p,u,dest='bf'){const o=p.bf.find(o=>o.u===u);if(!o||!(o.gid||o.own))return;p.bf.splice(p.bf.indexOf(o),1);
  if(o.gid){G.rt=(G.rt||[]).concat([[o.gid,dest]]);log(p,`<b>${esc(cname(o))}</b> torna a ${esc(OPP?.nm||'l\'avversario')}${dest==='bf'?'':' '+ZN[dest]}`);return}
  const owner=o.own==='me'?G.me:G.bot;delete o.own;Object.assign(o,autoPos(owner,o.c),{atk:false,blk:false});owner.bf.push(o);
  if(dest==='bf')log(p,`<b>${esc(cname(o))}</b> torna a ${esc(owner.name)}`);else moveTo(owner,o.u,dest)}
// Il proprietario riprende online una carta data: gid è l'id del passaggio.
function takeBack(gid){const o=G.me?.bf.find(o=>o.gv===gid);if(!o)return;delete o.gv;log(G.me,`Riprende il controllo di <b>${esc(cname(o))}</b>`)}
// Riallinea il controllo con la presence dell'avversario (opp): le carte che mi ha dato, quelle che ha ripreso, le mie che ha
// ridato. true se è cambiato qualcosa.
function syncControl(opp){if(!G.me||G.mode!=='online'||!opp||opp.idle)return false;const me=G.me;let changed=false;
  const gifts=(Array.isArray(opp.gv)?opp.gv:[]).filter(g=>Array.isArray(g)&&g.length>1),live=new Set(gifts.map(g=>String(g[0])));
  const gone=new Set((G.rt||[]).map(r=>r[0]));
  me.bf=me.bf.filter(o=>{if(!o.gid||live.has(o.gid))return true;changed=true;log(null,`${esc(opp.nm||'L\'avversario')} riprende il controllo di <b>${esc(cname(o))}</b>`);return false});
  gifts.forEach(g=>{const id=String(g[0]);if(gone.has(id)||me.bf.some(o=>o.gid===id))return;
    const r=unpackPerm(g.slice(1));if(r.c==='?')return;const o={...r,u:uid(),gid:id,...autoPos(me,r.c),atk:false,blk:false,sick:true,prep:false};delete o.bor;
    me.bf.push(o);changed=true;log(null,`Ricevi il controllo di <b>${esc(cname(o))}</b>`)});
  (Array.isArray(opp.rt)?opp.rt:[]).forEach(r=>{const o=Array.isArray(r)&&me.bf.find(o=>o.gv===String(r[0]));if(!o)return;
    delete o.gv;changed=true;const dest=Object.hasOwn(ZN,r[1])&&r[1]!=='bf'?r[1]:'bf';
    if(dest==='bf')log(null,`<b>${esc(cname(o))}</b> torna sotto il tuo controllo`);else moveTo(me,o.u,dest)});
  return changed}
// Chi possiede una carta controllata dall'altro, scritto sulla carta: null se la controlla il proprietario.
// bor: una mia carta sul campo remoto dell'avversario.
function ctlLabel(o){if(o.bor)return'tua';if(o.gid)return'di '+(OPP?.nm||'avversario');if(o.own)return o.own==='me'?'tua':'del '+(G.bot?.name||'Bot');return null}

/* src/js/53-tempo.js */
// Timer del turno di gioco (issue #33). Al prerelease ogni turno di gioco dura 50 minuti (consiglio WPN, minimo 40); allo
// scadere il giocatore attivo finisce il turno e poi si giocano 5 turni in tutto, 3 nel Two-Headed Giant (MTR App. B, 2.4).
// Parte con la Partita 1 e copre tutto il Match: sta in G.match.tm = {dur, v, run, left, at}, dove left è il tempo rimasto
// all'ora at (di questo computer) e, se run, scende da lì. Avvisa e basta, come il timer di costruzione.
// Online è lo stesso orologio sui due schermi: ogni azione alza la versione v, che passa nella presence con run, left e dur.
// Chi riceve una versione più alta la prende e conta da quando la riceve, così l'ora dell'altro computer non serve.
// v ha una piccola parte casuale: due azioni nello stesso istante non pareggiano, e vince la stessa sulle due pagine.
const ROUND_KEY=oldKey('mtg-lab:tempo-turno','tempo-turno');
// Preferenze di chi guarda: off spegne il timer contro il Bot e in Goldfish (online c'è sempre), min è la durata.
let ROUND_PREF={off:false,min:50,...LS.get(ROUND_KEY,{})};
const setRoundPref=p=>{ROUND_PREF={...ROUND_PREF,...p};LS.set(ROUND_KEY,ROUND_PREF)};
const tmNextV=v=>Math.floor(v||0)+1+Math.random()/1000;
const tmNew=(dur,now,v=0)=>({dur,v:tmNextV(v),run:true,left:dur,at:now});
const tmLeft=(t,now)=>t.run?t.left-(now-t.at):t.left;
const tmToggle=(t,now)=>({...t,v:tmNextV(t.v),run:!t.run,left:tmLeft(t,now),at:now});
// min in minuti, tra 1 e 180: il tempo già passato resta passato.
function tmSetDur(t,min,now){const m=Math.round(+min),dur=(isNaN(m)?50:Math.max(1,Math.min(180,m)))*MIN;
  return{...t,v:tmNextV(t.v),dur,left:tmLeft(t,now)+dur-t.dur,at:now}}
const tmPack=t=>[t.v,t.run?1:0,Math.round(t.left),t.dur];
// All'inizio del Match (Partita 1): parte, se non è spento. Online parte sempre.
function roundStart(m,now=Date.now()){if(!m.tm&&(G.mode==='online'||!ROUND_PREF.off))m.tm=tmNew(ROUND_PREF.min*MIN,now)}
// Il timer dell'avversario (opp: la sua presence), se ha una versione più nuova: true se l'ho preso.
function roundSync(opp,now=Date.now()){const a=opp&&Array.isArray(opp.tm)?opp.tm:null;if(!a||G.mode!=='online'||!G.match)return false;
  const v=+a[0];if(!(v>(G.match.tm?.v||0)))return false;
  const dur=Math.max(MIN,Math.min(180*MIN,num(a[3])||50*MIN));
  G.match.tm={dur,v,run:!!a[1],left:Math.max(-180*MIN,Math.min(dur,num(a[2]))),at:now};return true}
const oppTurn=()=>G.mode==='bot'?G.bot?.turn||0:G.mode==='online'&&OPP&&!OPP.idle?num(OPP.tn):0;
// Stato del timer: tempo rimasto, scaduto, turni extra. Allo scadere ricorda i turni dei due giocatori (tx), e da lì si contano
// gli extra: il turno in corso è lo 0, poi ogni «Nuovo turno» di uno dei due ne conta uno. over: i turni extra sono finiti.
function roundCheck(now=Date.now()){const m=G.match,t=m?.tm;if(!t)return null;const left=tmLeft(t,now),expired=left<=0;let extra=null;
  if(expired&&G.me){if(!m.tx||m.tx.gid!==G.gid)m.tx={gid:G.gid,me:G.me.turn,opp:oppTurn()};
    const done=G.me.turn-m.tx.me+oppTurn()-m.tx.opp,total=m.hg?3:5;extra={done,total,over:done>total}}
  return{left,run:t.run,expired,extra}}

/* interfaccia: il chip nella barra del Match e il suo menu */
// Avvisi una volta sola per Match (tw): a 5 minuti dalla fine, allo scadere, a turni extra finiti.
function paintRound(){const c=$('#rtchip'),m=G.match;if(!c||!m.tm||mScore().over)return;const s=roundCheck(),x=s.extra;
  c.textContent=!s.expired?(s.run?'':'In pausa ')+timerFmt(s.left):!x?'Tempo':x.over?'Turni extra finiti':x.done?`Tempo · turno extra ${x.done} di ${x.total}`:'Tempo · finisci il turno';
  c.className='chip timer '+(s.expired?'bad':s.left<=5*MIN?'warn':s.run?'on':'');
  c.title=s.expired?`Tempo scaduto: si finisce il turno in corso e poi si giocano ${m.hg?3:5} turni in tutto, contando quelli dei due giocatori. Clic per le opzioni`:'Tempo del turno di gioco rimasto per il Match. Clic per pausa e durata';
  const say=(k,t)=>{if((m.tw||[]).includes(k))return;m.tw=[...(m.tw||[]),k];toast(t)};
  if(s.run&&!s.expired&&s.left<=5*MIN)say('5','Mancano 5 minuti alla fine del turno di gioco');
  if(s.expired)say('0',`Tempo: finite il turno in corso, poi ${m.hg?3:5} turni extra in tutto`);
  if(x?.over&&!mScore().over)say('x','Turni extra finiti: chiudi il Match con il punteggio che ha (menu del timer o Fine Partita)')}
function roundMenu(){const c=$('#rtchip'),r=c.getBoundingClientRect(),m=G.match,t=m.tm,now=Date.now();
  if(!t){openMenu(r.left,r.bottom+4,[[`Accendi il timer (${ROUND_PREF.min} minuti)`,()=>{setRoundPref({off:false});m.tm=tmNew(ROUND_PREF.min*MIN,now);commit()}]]);return}
  const dur=Math.round(t.dur/MIN);
  openMenu(r.left,r.bottom+4,[
    ...(roundCheck(now).expired&&!mScore().over?[['Chiudi il Match con questo punteggio',closeMatch],'-']:[]),
    [t.run?'Pausa':'Riprendi',()=>{m.tm=tmToggle(t,Date.now());commit()}],
    ...[40,50,60].map(n=>[`${n} minuti${n===dur?' ✓':''}`,()=>{m.tm=tmSetDur(m.tm,n,Date.now());setRoundPref({min:n});commit()}]),
    ...(G.mode!=='online'?['-',['Spegni il timer',()=>{delete m.tm;delete m.tx;setRoundPref({off:true});commit()}]]:[])])}
function initRound(){setInterval(paintRound,1000)}

/* src/js/54-tra-partite.js */
// Tra una Partita e l'altra, online (issue #34 e #36).
// Chi inizia: nella prima Partita e dopo un pareggio sceglie chi vince il lancio della moneta, poi chi ha perso la Partita
// prima. La moneta e la scelta passano nella presence (pk) e valgono per tutti e due: G.match.pick = {gn, coin: {r, w}, first},
// dove w (chi ha vinto il lancio) e first (chi inizia) sono dal mio punto di vista, 'me' o 'opp'. Se lanciano tutti e due vale
// il lancio con r più basso, sulle due pagine, senza bisogno degli orologi; la scelta la scrive solo chi deve sceglierla.
// Il lancio e la scelta valgono per la Partita gn: un Match nuovo, o un Kit nuovo, li azzerano con G.match.
const nextGn=()=>gameOpen()?G.gn:mScore().over?1:G.match.res.length+1;
function pickNow(){const gn=nextGn(),p=G.match.pick;return p&&p.gn===gn?p:(G.match.pick={gn})}
// Chi sceglie chi inizia la prossima Partita, 'me' o 'opp'; null finché la moneta non è lanciata.
function chooser(){const last=mScore().over?'':G.match.res.slice(-1);if(last==='L')return'me';if(last==='W')return'opp';return pickNow().coin?.w||null}
function flipCoin(){const p=pickNow();if(!p.coin)p.coin={r:Math.random(),w:Math.random()<.5?'me':'opp'};return p.coin}
// first: 'me' o 'opp'. false se non tocca a me scegliere.
function choose(first){if(chooser()!=='me')return false;pickNow().first=first;return true}
function pickPack(){const p=G.match?.pick;return p?[p.gn,p.coin?p.coin.r:-1,p.coin?(p.coin.w==='me'?1:0):-1,p.first?(p.first==='me'?1:0):-1]:null}
// Moneta e scelta dell'avversario (opp: la sua presence), rovesciate: true se è cambiato qualcosa.
function pickSync(opp){const a=opp&&Array.isArray(opp.pk)?opp.pk:null;if(!a||G.mode!=='online'||!G.match||num(a[0])!==nextGn())return false;
  const p=pickNow(),r=+a[1];let changed=false;
  if(r>=0&&r<1&&(!p.coin||r<p.coin.r)){p.coin={r,w:a[2]===1?'opp':'me'};if(chooser()!=='me')delete p.first;changed=true}
  if(chooser()==='opp'&&(a[3]===0||a[3]===1)){const f=a[3]===1?'opp':'me';if(p.first!==f){p.first=f;changed=true}}
  return changed}

// Stato del Sideboard (issue #36): mentre la finestra tra le Partite è aperta la presence ha sb, cioè quante carte hanno il
// Mazzo e il Sideboard (MTR 3.16: l'avversario può contarle), mai quali. Nessun blocco: ognuno inizia quando vuole.
let SIDEBOARDING=false;
const setSideboarding=on=>{SIDEBOARDING=!!on};
const sbPack=()=>SIDEBOARDING?[deckList().length,sideboard().length]:null;
const oppName=()=>OPP?.nm||'L\'avversario';
// La riga su cosa sta facendo l'avversario tra le Partite; '' se non c'è niente da dire.
function sbStatus(){if(G.mode!=='online'||!OPP||OPP.idle&&!OPP.sb)return'';
  if(Array.isArray(OPP.sb))return `${oppName()} sta facendo Sideboard · Mazzo ${Math.max(0,num(OPP.sb[0]))}, Sideboard ${Math.max(0,num(OPP.sb[1]))}`;
  return num(OPP.gn)===nextGn()&&!gameOpen()?`${oppName()} è pronto: ha iniziato la Partita ${nextGn()}`:''}

/* src/js/55-duplicate.js */
// Duplicate Sealed con l'amico (issue #41): stesso codice (Kit individuale o Pool da lista), due costruzioni separate, poi il
// confronto dei due Mazzi. Lo facevano i giocatori forti ai Grand Prix (Nate Price, 2012; «Theros Sealed Seven Ways», SCG 2013).
// Lo stato sta nella Sessione, S.dup = {id, seed, phase: 'run' | 'done', snap, opp}: snap è il Mazzo fissato con «Ho finito»,
// opp quello che si sa dell'altro ({done, deck}). Un Kit nuovo apre una Sessione nuova e lo azzera.
// Nella presence (dp) viaggiano [codice, id, ho finito] e, solo quando ho finito io e so che ha finito anche l'altro, il mio
// Mazzo: così nessuno lo può vedere prima. Se avviano tutti e due, vale l'id minore, uguale sulle due pagine.

// Il confronto tra due Mazzi dello stesso Pool, a e b = {deck: uid, basics}. Serve anche alle versioni salvate (issue #43).
// both, onlyA, onlyB: uid; per ognuno n (con le terre base), creature, altre magie, terre non base, terre base, curva (1…6+,
// il costo 0 con l'1 come nelle Pile) e colori delle carte non terra.
function compareDecks(pool,a,b){const byU=byUid(pool),ok=d=>[...new Set(d.deck)].filter(u=>byU[u]),A=ok(a),B=ok(b),inA=new Set(A),inB=new Set(B);
  const stats=(us,basics)=>{const r={cre:0,non:0,lands:0,curve:[0,0,0,0,0,0],colors:[],basics:{W:0,U:0,B:0,R:0,G:0}};const col=new Set();
    us.forEach(u=>{const c=byU[u].c;if(isLand(c)){r.lands++;return}isCreatureCid(c)?r.cre++:r.non++;r.curve[Math.min(5,Math.max(0,Math.floor(cmc(c))-1))]++;[...BY[c].c].forEach(k=>col.add(k))});
    COLORS.forEach(k=>r.basics[k]=Math.max(0,Math.floor(+basics?.[k]||0)));r.colors=COLORS.filter(k=>col.has(k));
    r.n=us.length+COLORS.reduce((s,k)=>s+r.basics[k],0);return r};
  return{both:A.filter(u=>inB.has(u)),onlyA:A.filter(u=>!inB.has(u)),onlyB:B.filter(u=>!inA.has(u)),a:stats(A,a.basics),b:stats(B,b.basics)}}

// Confronto tra due versioni salvate del Mazzo (issue #43). Sono versioni le altre salvate dello stesso Pool: stesso codice del
// Kit e, nel Kit di squadra, stesso posto.
const versionsOf=id=>{const s=findSave(id);return s?SAVES.filter(x=>x.id!==id&&x.seed===s.seed&&(x.team||0)===(s.team||0)&&(x.seat||0)===(s.seat||0)):[]};
function compareSaves(ia,ib){const a=findSave(ia),b=findSave(ib);return a&&b&&a.seed===b.seed?compareDecks(a.pool,a,b):null}
// Il record di un Mazzo salvato: dallo storico dei Match (issue #42) o, se non c'è, dal bilancio del salvataggio.
function saveRecord(id){const h=histOf(id),s=findSave(id),wld=(w,l,d)=>`${w}-${l}${d?'-'+d:''}`,cnt=(xs,k)=>xs.filter(x=>x===k).length;
  if(h.length){const ms=h.map(e=>e.res),gs=h.flatMap(e=>e.games.map(g=>g.r));return `Match ${wld(cnt(ms,'W'),cnt(ms,'L'),cnt(ms,'D'))} · Partite ${wld(cnt(gs,'W'),cnt(gs,'L'),cnt(gs,'D'))}`}
  const t=s?.st;return t&&t.mw+t.ml+(t.md||0)?`Match ${wld(t.mw,t.ml,t.md||0)} · Partite ${wld(t.gw,t.gl,0)}`:'Nessun Match'}

function dupStart(){if(S.team||S.dup)return false;S.dup={id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),seed:S.seed,phase:'run',snap:null,opp:{done:false,deck:null}};saveS();return true}
function dupFinish(){const d=S.dup;if(!d||d.phase==='done')return;d.phase='done';d.snap={deck:[...S.deck],basics:{...S.basics}};saveS()}
// Si torna a costruire solo finché l'altro non ha finito: dopo, il confronto è già suo.
function dupResume(){const d=S.dup;if(!d||d.phase!=='done'||d.opp.done)return false;d.phase='run';d.snap=null;saveS();return true}
const dupBoth=(d=S.dup)=>!!d&&d.phase==='done'&&d.opp.done;
function dupPack(){const d=S.dup;if(!d)return null;const out=[d.seed,d.id,d.phase==='done'?1:0];
  if(dupBoth(d)){const at=Object.fromEntries(S.pool.map((x,i)=>[x.u,i]));out.push(d.snap.deck.filter(u=>u in at).map(u=>b36(at[u])).join(' '),COLORS.map(k=>d.snap.basics[k]||0).join('.'))}
  return out}
// Il Duplicate dell'avversario (opp: la sua presence). 'started' se è appena partito anche qui (va avviato il timer),
// 'changed' se è cambiato qualcosa, null se non c'entra.
function dupSync(opp,now=Date.now()){const a=opp&&Array.isArray(opp.dp)?opp.dp:null;if(!a||S.team||a[0]!==S.seed||typeof a[1]!=='string')return null;
  const id=a[1].slice(0,20);let r=null;
  if(!S.dup||id<S.dup.id&&S.dup.id!==id){S.dup={id,seed:S.seed,phase:'run',snap:null,opp:{done:false,deck:null}};r='started'}
  if(S.dup.id!==id){if(r)saveS();return r}
  const n=S.pool.length,done=a[2]===1;let deck=null;
  if(done&&typeof a[3]==='string'){const us=String(a[3]).split(' ').filter(w=>/^[0-9a-z]{1,2}$/.test(w)).map(w=>parseInt(w,36)).filter(i=>i<n).map(i=>S.pool[i].u);
    const bs=String(a[4]||'').split('.'),basics={};COLORS.forEach((k,i)=>basics[k]=Math.max(0,Math.min(60,Math.floor(+bs[i]||0))));deck={deck:us,basics}}
  const was=JSON.stringify(S.dup.opp);S.dup.opp={done,deck};if(JSON.stringify(S.dup.opp)!==was){r=r||'changed';saveS()}
  return r}
// Il confronto, dal mio punto di vista (a: il mio Mazzo, b: il suo); null finché non c'è il suo Mazzo.
const dupResult=()=>dupBoth()&&S.dup.opp.deck?compareDecks(S.pool,S.dup.snap,S.dup.opp.deck):null;

/* interfaccia: il riquadro sotto la testata del Mazzo e la finestra del confronto */
// Il riquadro c'è quando un avversario nella Stanza ha lo stesso codice, o quando un Duplicate è in corso.
function dupBoxHTML(){if(S.team||!(S.dup||OPP&&OPP.sd===S.seed))return'';const nm=esc(oppName()),d=S.dup;
  const B=(id,l,cls='')=>`<button class="btn sm ${cls}" id="${id}">${l}</button>`;
  if(!d)return `<span><b>Duplicate Sealed</b> · ${nm} ha il tuo stesso Pool: costruite ognuno il suo Mazzo, poi li confrontate.</span>${B('dupgo','Duplicate Sealed con '+nm,'pri')}`;
  if(d.phase==='run')return `<span><b>Duplicate Sealed con ${nm}</b> · ${d.opp.done?`${nm} ha finito`:`${nm} sta costruendo`}. Il suo Mazzo lo vedi quando avete finito tutti e due.</span>${B('dupdone','Ho finito','pri')}`;
  if(!d.opp.done)return `<span><b>Duplicate Sealed</b> · Hai finito: aspetti ${nm}.</span>${B('dupres','Riprendi a costruire')}`;
  if(!d.opp.deck)return `<span><b>Duplicate Sealed</b> · Avete finito tutti e due: arriva il Mazzo di ${nm}…</span>`;
  return `<span><b>Duplicate Sealed</b> · Avete finito tutti e due.</span>${B('dupcmp','Confronta i Mazzi','pri')}${B('dupplay','Gioca contro '+nm)}`}
// Si riscrive solo se cambia, per non togliere un pulsante da sotto il mouse.
function paintDup(){const b=$('#dupbox');if(!b)return;const h=dupBoxHTML();b.hidden=!h;if(b.dataset.html===h)return;b.innerHTML=h;b.dataset.html=h;
  const on=(id,f)=>{const e=$('#'+id);if(e)e.onclick=f};
  on('dupgo',()=>{if(!dupStart())return;dupTimer();publish();paintDup();toast(`Duplicate Sealed avviato: il timer di costruzione parte anche per ${oppName()}`)});
  on('dupdone',()=>{dupFinish();publish();paintDup()});
  on('dupres',()=>{dupResume();publish();paintDup()});
  on('dupcmp',()=>compareModal(dupResult(),'Tu',oppName()));
  on('dupplay',()=>{G.mode='online';commit();go('table');if(!gameOpen())nextGameModal()})}
// I due timer di costruzione partono insieme, da 45 minuti.
const dupTimer=()=>{const now=Date.now();setTimer(timerStart(timerReset(timerSetDur(TIMER,45,now)),now))};
function dupReact(r){if(!r)return;if(r==='started'){dupTimer();toast(`${oppName()} ha avviato un Duplicate Sealed: il timer di costruzione parte`)}publish();paintDup()}
// Il confronto di due Mazzi (r: compareDecks), na e nb i loro nomi.
// pool: il Pool dei due Mazzi (quello attuale per il Duplicate); extra: righe in più della tabella, [etichetta, a, b].
function compareModal(r,na,nb,pool=S.pool,extra=[]){if(!r)return;openModal(`Confronto dei Mazzi: ${na} e ${nb}`,m=>{m.parentElement.classList.add('wide');const byU=byUid(pool);
  const list=us=>us.map(u=>byU[u]).sort(byCost).map(x=>`<div class="hit" data-cid="${x.c}"${x.v?` data-v="${x.v}"`:''}><i class="rar ${BY[x.c].r}"></i><span class="n">${esc(BY[x.c].n)}</span><span>${mana(BY[x.c].f[0].m||'')}</span></div>`).join('')||'<span class="muted">Nessuna</span>';
  const col=(t,us)=>`<div class="sumbox"><h3>${esc(t)} (${us.length})</h3><div class="hits">${list(us)}</div></div>`;
  const row=(l,f)=>`<tr><th>${l}</th><td>${f(r.a)}</td><td>${f(r.b)}</td></tr>`;
  const basics=s=>COLORS.filter(k=>s.basics[k]).map(k=>`<span class="ms ${k}"></span>${s.basics[k]}`).join(' ')||'–';
  m.innerHTML=`<div class="cmpcols">${col('Solo '+na,r.onlyA)}${col('In comune',r.both)}${col('Solo '+nb,r.onlyB)}</div>
    <table class="cmptab"><tr><th></th><th>${esc(na)}</th><th>${esc(nb)}</th></tr>
    ${row('Carte',s=>s.n)}${row('Creature',s=>s.cre)}${row('Altre magie',s=>s.non)}${row('Terre non base',s=>s.lands)}${row('Terre base',basics)}
    ${row('Colori',s=>s.colors.map(k=>`<span class="ms ${k}"></span>`).join('')||'–')}${row('Curva 1-2-3-4-5-6+',s=>`<span class="mono">${s.curve.join(' · ')}</span>`)}
    ${extra.map(([l,x,y])=>`<tr><th>${esc(l)}</th><td>${esc(x)}</td><td>${esc(y)}</td></tr>`).join('')}</table>`})}

/* src/js/60-bot.js */
function landsOf(p){return p.bf.filter(o=>o.c!=='x'&&isLand(o.c)&&!o.tp)}
function canPay(p,cid){
  const m=(BY[cid].f[0].m||'').match(/\{[^}]+\}/g)||[];let gen=0;const col=[];
  m.forEach(x=>{const s=x.slice(1,-1);if(/^\d+$/.test(s))gen+=+s;else if(s==='X')gen+=2;else if(/^[WUBRG]$/.test(s))col.push([s]);else if(s.includes('/'))col.push(s.split('/').filter(k=>COLORS.includes(k)));else if(s==='C')gen++});
  const avail=landsOf(p).slice().sort((a,b)=>BY[a.c].pm.length-BY[b.c].pm.length);const used=[];
  for(const opts of col.sort((a,b)=>a.length-b.length)){const i=avail.findIndex(l=>opts.some(k=>BY[l.c].pm.includes(k)));if(i<0)return null;used.push(avail.splice(i,1)[0])}
  if(avail.length<gen)return null;return used.concat(avail.slice(0,gen));
}
function botTurn(){
  const b=G.bot;if(!b)return;newTurn(b);
  const hand=b.hand.filter(o=>!isLand(o.c));const need=new Set();hand.forEach(o=>{const q=pips(o.c);COLORS.forEach(k=>q[k]&&need.add(k))});
  const have=new Set();b.bf.forEach(o=>o.c!=='x'&&isLand(o.c)&&[...BY[o.c].pm].forEach(k=>have.add(k)));
  const lands=b.hand.filter(o=>isLand(o.c));
  if(lands.length){lands.sort((x,y)=>{const s=l=>[...BY[l.c].pm].filter(k=>need.has(k)&&!have.has(k)).length*2+[...BY[l.c].pm].filter(k=>need.has(k)).length;return s(y)-s(x)});moveTo(b,lands[0].u,'bf')}
  let go=true,guard=0;while(go&&guard++<12){go=false;const sp=b.hand.filter(o=>!isLand(o.c)).sort((x,y)=>cmc(y.c)-cmc(x.c));
    for(const o of sp){const pay=canPay(b,o.c);if(!pay)continue;pay.forEach(l=>l.tp=true);const perm=/Creature|Artifact|Enchantment|Planeswalker|Battle/.test(BY[o.c].f[0].t);
      if(perm)moveTo(b,o.u,'bf');else{moveTo(b,o.u,'gy',{quiet:true});log(b,`Lancia <b>${esc(cname(o))}</b>: «${esc((BY[o.c].f[0].o||'').slice(0,160))}» — risolvi tu l'effetto`)}
      go=true;break}}
  const mine=G.me.bf.filter(o=>isCreature(o)&&!o.tp);const maxP=Math.max(0,...mine.map(pow));const flyers=mine.some(o=>kw(o,'Flying')||kw(o,'Reach'));
  const aggro=b.life>=G.me.life+6;
  const atk=b.bf.filter(o=>isCreature(o)&&!o.tp&&!o.sick&&pow(o)>0&&!/Defender/.test(face0(o).o||'')).filter(o=>aggro||!mine.length||tou(o)>maxP||(kw(o,'Flying')&&!flyers)||pow(o)>=G.me.life);
  if(atk.length){atk.forEach(o=>{o.atk=true;if(!kw(o,'Vigilance'))o.tp=true});log(b,`Attacca con ${atk.map(o=>`<b>${esc(cname(o))}</b> (${pow(o)}/${tou(o)})`).join(', ')} — ${atk.reduce((a,o)=>a+pow(o),0)} danni potenziali`);commit();
    // Il combattimento risolto fa parte del turno del Bot: si annulla insieme (issue #37).
    undoMerge(true);blockModal(atk)}
  else{log(b,'Non attacca. Tocca a te: premi «Nuovo turno».');commit()}
}
function canBlock(bl,at){if(kw(at,'Flying')&&!(kw(bl,'Flying')||kw(bl,'Reach')))return false;return true}
function resolveCombat(att,def,pairs){
  // pairs: Map attacker.u -> blocker obj|null
  const dead=[];let dmgToDef=0,gain=0;
  for(const a of pairs.keys()){const bl=pairs.get(a.u)||pairs.get(a);}
  pairs.forEach((bl,au)=>{const a=att.bf.find(o=>o.u===au);if(!a)return;
    if(!bl){dmgToDef+=pow(a);if(kw(a,'Lifelink'))gain+=pow(a);return}
    const fa=kw(a,'First strike')||kw(a,'Double strike'),fb=kw(bl,'First strike')||kw(bl,'Double strike');
    const killsB=pow(a)>=tou(bl)||(kw(a,'Deathtouch')&&pow(a)>0),killsA=pow(bl)>=tou(a)||(kw(bl,'Deathtouch')&&pow(bl)>0);
    let aDies=killsA,bDies=killsB;if(fa&&!fb&&killsB)aDies=false;if(fb&&!fa&&killsA)bDies=false;
    if(kw(a,'Trample')&&bDies)dmgToDef+=Math.max(0,pow(a)-tou(bl));
    if(kw(a,'Lifelink'))gain+=pow(a);
    log(who(def)==='me'?def:def,`<b>${esc(cname(bl))}</b> blocca <b>${esc(cname(a))}</b>${bDies||aDies?' → muore '+[aDies&&cname(a),bDies&&cname(bl)].filter(Boolean).map(esc).join(' e '):''}`);
    if(aDies)dead.push([att,a.u]);if(bDies)dead.push([def,bl.u]);
  });
  dead.forEach(([p,u])=>moveTo(p,u,'gy',{quiet:true}));
  if(dmgToDef){def.life-=dmgToDef;log(def,`Subisce <b>${dmgToDef}</b> danni (vita ${def.life})`)}
  if(gain){att.life+=gain;log(att,`Guadagna ${gain} vita (legame vitale)`)}
  att.bf.forEach(o=>o.atk=false);
  log(null,'Combattimento risolto in modo semplificato: correggi a mano se serve (abilità, trucchi, ecc.).');
  commit();
}
function blockModal(atk){
  const mine=()=>G.me.bf.filter(o=>isCreature(o)&&!o.tp);
  openModal('Il bot attacca: scegli i bloccanti',m=>{
    const c=document.createElement('div');c.className='combat';
    atk.forEach(a=>{const l=document.createElement('div');l.className='cline';l.innerHTML=`<span class="nm" data-cid="${a.c}"><b>${esc(cname(a))}</b> <span class="mono">${pow(a)}/${tou(a)}</span>${kw(a,'Flying')?' · volare':''}</span>`;
      const s=document.createElement('select');s.dataset.a=a.u;s.innerHTML='<option value="">Nessun blocco</option>'+mine().filter(b=>canBlock(b,a)).map(b=>`<option value="${b.u}">${esc(cname(b))} ${pow(b)}/${tou(b)}</option>`).join('');l.appendChild(s);c.appendChild(l)});
    m.appendChild(c);const r=document.createElement('div');r.className='row';r.innerHTML='<button class="btn pri" id="cb-ok">Risolvi combattimento</button><button class="btn" id="cb-man">Risolvo a mano</button>';m.appendChild(r);
    $('#cb-ok').onclick=()=>{const used=new Set();const pairs=new Map();m.querySelectorAll('select').forEach(s=>{const b=s.value&&!used.has(s.value)?G.me.bf.find(o=>o.u===s.value):null;if(b)used.add(b.u);pairs.set(s.dataset.a,b||null)});openModal._c=null;closeModal();resolveCombat(G.bot,G.me,pairs)};
    $('#cb-man').onclick=()=>{undoMerge(false);openModal._c=null;closeModal()};
  },()=>undoMerge(false));
}
function attackModal(){
  const cand=G.me.bf.filter(o=>isCreature(o)&&!o.tp&&!o.sick);
  if(!cand.length){toast('Nessuna creatura può attaccare (stappata e senza debolezza da evocazione)');return}
  openModal('Dichiara gli attaccanti',m=>{
    m.innerHTML=`<div class="combat">${cand.map(o=>`<label class="cline"><input type="checkbox" value="${o.u}" checked> <span class="nm" data-cid="${o.c}"><b>${esc(cname(o))}</b> <span class="mono">${pow(o)}/${tou(o)}</span></span></label>`).join('')}</div><div class="row"><button class="btn pri" id="at-ok">Attacca</button></div><p class="muted" style="margin:0;font-size:12px">Il bot sceglie i blocchi: blocca se sopravvive, scambia se conviene, fa chump solo se rischia di morire.</p>`;
    $('#at-ok').onclick=()=>{const us=[...m.querySelectorAll('input:checked')].map(i=>i.value);openModal._c=null;closeModal();if(!us.length)return;
      const att=us.map(u=>G.me.bf.find(o=>o.u===u));att.forEach(o=>{o.atk=true;if(!kw(o,'Vigilance'))o.tp=true});
      log(G.me,`Attacca con ${att.map(o=>`<b>${esc(cname(o))}</b>`).join(', ')}`);
      const b=G.bot;let pool=b.bf.filter(o=>isCreature(o)&&!o.tp);const incoming=att.reduce((a,o)=>a+pow(o),0);const pairs=new Map();let rem=incoming;
      att.slice().sort((x,y)=>pow(y)-pow(x)).forEach(a=>{const ok=pool.filter(bl=>canBlock(bl,a));
        let pickB=ok.find(bl=>tou(bl)>pow(a)&&pow(bl)>=tou(a))||ok.find(bl=>tou(bl)>pow(a))||ok.filter(bl=>pow(bl)>=tou(a)&&cmc(bl.c)<=cmc(a.c)).sort((x,y)=>cmc(x.c)-cmc(y.c))[0];
        if(!pickB&&rem>=b.life&&ok.length)pickB=ok.slice().sort((x,y)=>cmc(x.c)-cmc(y.c))[0];
        if(pickB){pool=pool.filter(x=>x!==pickB);rem-=pow(a)}pairs.set(a.u,pickB||null)});
      resolveCombat(G.me,b,pairs)};
  });
}

/* src/js/70-online.js */
let ROOM=null,OPP=null,oppPeer=null,roomPeers=[];
// Lo stato pubblico del mio lato del tavolo, in forma compatta (la presence è limitata a 4 KB).
// Informazioni nascoste: della mano e del grimorio si mandano solo i conteggi; le carte coperte partono come '?'.
// Gli id sono quelli dell'immagine (variante se c'è): chi riceve risale alla carta base con fromVis().
// v2: cimitero ed esilio sono stringhe di id separati da spazi, con il conteggio vero in gc/ec;
// nei permanenti si omettono i campi finali a zero. Così un Tavolo pieno sta intero in circa 2 KB.
const vis=o=>o.v||o.c;
const utf8len=s=>encodeURIComponent(s).replace(/%[0-9A-F]{2}/g,'x').length;
const PRESENCE_MAX=3900; // byte dell'intera presence {g:...}; la Stanza rifiuta oltre 4096
// Il draft con l'amico nella presence (issue #47): codice, ruolo e le mie scelte, in ordine.
const drPack=()=>S?.draft?.online?[S.draft.code,S.draft.online.role,S.draft.online.mine.join(' ')]:null;
// Il mio campo come lo vede l'avversario: senza le carte che gli ho dato (gv, issue #40), che stanno sul suo.
const shownBf=p=>p.bf.filter(o=>!o.gv);
// Il bit 32 e gid (in fondo) dicono che la carta è dell'avversario e gli id del passaggio (issue #40).
function packPerm(o){const a=[o.fd?'?':o.c==='x'?'x':vis(o),Math.round(o.x*1000),Math.round(o.y*1000),(o.tp?1:0)|(o.fd?2:0)|(o.prep?4:0)|(o.atk?8:0)|(o.blk?16:0)|(o.gid?32:0),o.p1||0,o.n||0,o.c==='x'?((o.tn||'')+'|'+(o.pt||'')).slice(0,30):0,o.gid||0];
  while(a.length>3&&!a[a.length-1])a.pop();return a}
// Un permanente letto da un testo non fidato (presence dell'avversario). Id sconosciuti diventano '?', le varianti la carta base.
function unpackPerm(a,i=0){const o={u:'r'+i,...(a[0]==='x'?{c:'x'}:fromVis(a[0])),x:num(a[1])/1000,y:num(a[2])/1000,tp:!!(a[3]&1),fd:!!(a[3]&2),prep:!!(a[3]&4),atk:!!(a[3]&8),blk:!!(a[3]&16),p1:num(a[4]),n:num(a[5])};
  if(a[0]==='x'){const[t,pt]=String(a[6]||'').split('|');o.tn=t||'Pedina';o.pt=pt||'1/1'}if(a[3]&32){o.bor=true;if(a[7])o.gid=String(a[7]).slice(0,16)}return o}
// Frecce di bersaglio (issue #39). Una freccia è {id, ts, from, to}: ogni estremo ha side 'me' o 'opp', e u (una carta) oppure
// player. Le carte remote hanno u 'r' + indice nel campo. Nella presence viaggia come [id, da, i, verso, j], con indici del campo
// perché gli uid sono di chi gioca: da 'b' (una mia carta sul campo) o 'h' (altrove, per esempio in mano: parte dal giocatore);
// verso 'm' (una mia carta), 'o' (una sua), 'P' (me) o 'Q' (lui). Dura ARROW_MS, poi esce dalla presence.
const ARROW_MS=6000;
const arrowLive=(a,now=Date.now())=>!!a&&now-a.ts<ARROW_MS;
function packArrow(a,me){const bf=shownBf(me),fi=a.from.side==='me'&&a.from.u?bf.findIndex(o=>o.u===a.from.u):-1,t=a.to;
  const to=t.player?[t.side==='me'?'P':'Q',0]:t.side==='me'?['m',bf.findIndex(o=>o.u===t.u)]:['o',num(String(t.u).slice(1))];
  return[a.id,fi<0?'h':'b',Math.max(0,fi),...to]}
// La freccia dell'avversario dal punto di vista di chi la riceve (me: il suo giocatore); null se non c'è o non si può disegnare.
function readArrow(ar,me){if(!Array.isArray(ar)||ar.length<5)return null;const [id,f,fi,t,ti]=ar,i=num(fi),j=num(ti);
  const from=f==='b'?{side:'opp',u:'r'+i}:{side:'opp',player:true};
  const to=t==='m'?{side:'opp',u:'r'+j}:t==='P'?{side:'opp',player:true}:t==='Q'?{side:'me',player:true}:t==='o'&&me&&shownBf(me)[j]?{side:'me',u:shownBf(me)[j].u}:null;
  return to?{id,from,to}:null}
// hid: la scheda è nascosta. Chi resta nascosto a lungo non conta tra i presenti (vedi awake).
let tabHidden=false;
// Larghezza del mio campo misurata adesso: lastBfW si aggiorna in requestAnimationFrame, che non gira nelle schede in background.
const myBfW=()=>(typeof document!=='undefined'&&document.querySelector('#mez .bf')?.clientWidth)||lastBfW;
// Pool di squadra nella presence, accanto a g: t = {k: codice del Kit, s: posto, x: passaggi delle carte, d: il mio Mazzo,
// a: quando ho aperto il Kit, in base 36}.
// x e d usano gli indici del Pool in base 36, non gli uid: x sono coppie «indice.passaggi» separate da spazi, con «.passaggi»
// omesso quando vale 1; d gli indici delle carte nel Mazzo. Con un Pool da 12 Buste resta di poche centinaia di byte.
const b36=n=>n.toString(36);
function teamPub(s=S){if(!s?.team)return null;const at=Object.fromEntries(s.pool.map((x,i)=>[x.u,i]));
  return{k:s.seed,s:s.seat,x:Object.entries(s.tc||{}).filter(([,t])=>t>0).map(([i,t])=>b36(+i)+(t>1?'.'+b36(t):'')).join(' '),d:s.deck.filter(u=>u in at).map(u=>b36(at[u])).join(' '),a:b36(s.at||0)}}
// La presence di un altro non è fidata: si tengono solo indici del Pool (n carte) e passaggi interi positivi.
function teamRead(t,n){if(!t||typeof t!=='object'||typeof t.k!=='string')return null;const tc={},d=[];
  String(t.x||'').split(' ').forEach(w=>{const m=/^([0-9a-z]{1,2})(?:\.([0-9a-z]{1,4}))?$/.exec(w);if(!m)return;const i=parseInt(m[1],36),c=m[2]?parseInt(m[2],36):1;if(i<n&&c>0)tc[i]=Math.max(tc[i]||0,c)});
  String(t.d||'').split(' ').forEach(w=>{if(/^[0-9a-z]{1,2}$/.test(w)&&parseInt(w,36)<n)d.push(parseInt(w,36))});
  const a=/^[0-9a-z]{1,10}$/.test(t.a)?parseInt(t.a,36):0;
  return{k:t.k.slice(0,24),s:t.s===1?1:0,tc,d,a}}
// Il Compagno è il peer con lo stesso codice di squadra e il posto opposto, non per forza l'avversario del Tavolo.
// Tra più schede così vale quella aggiornata più di recente.
function findMate(peers,s=S){if(!s?.team)return null;
  const c=peers.map(p=>({p,t:teamRead(p.presence?.t,s.pool.length)})).filter(o=>o.t&&o.t.k===s.seed&&o.t.s!==s.seat).sort((a,b)=>b.p.updatedAt-a.p.updatedAt)[0];
  return c?{...c.t,nm:String(c.p.presence.g?.nm||'').slice(0,24),peer:c.p.peer}:null}
// Il Compagno ha aperto un altro Kit di squadra, più recente del mio: il codice da seguire, altrimenti null.
// Vale solo per l'ultimo Compagno trovato (matePeer), non per chiunque entri nella Stanza con un Kit diverso.
function mateMoved(peers,s=S){if(!s?.team||!s.matePeer)return null;const p=peers.find(p=>p.peer===s.matePeer);const t=p&&teamRead(p.presence?.t,0);
  return t&&t.k!==s.seed&&kitTeam(t.k)&&t.a>(s.at||0)?t.k:null}
let MATE=null;
// Ritrova il Compagno tra i peer e ne unisce i passaggi. true se è cambiato qualcosa da mostrare.
// Se il Compagno è passato a un Kit nuovo lo segue, ma non a Partita aperta: prima la si finisce.
function syncMate(){const nk=!gameOpen()&&mateMoved(allPeers);
  if(nk){freshKit(nk);resetGame();FLIP={b:S.viewB,n:0};S._anim=-1;const tm=timerNewKit();commit();renderAll();toast(`Il tuo Compagno ha aperto un Kit nuovo (${nk}): riparti da lì, il tuo Mazzo è annullato`+(tm?' · timer avviato':''))}
  const was=JSON.stringify([MATE,S.tc]);MATE=findMate(allPeers);if(MATE&&S.matePeer!==MATE.peer){S.matePeer=MATE.peer;saveS()}
  if(MATE){const r=mergeTeam(MATE.tc);if(r.changed){syncLay();saveS();publish()}
    if(r.got.length){const byU=byUid(S.pool);toast(`${MATE.nm||'Il Compagno'} ti ha dato ${r.got.length===1?BY[byU[r.got[0]].c].n:r.got.length+' carte'}: ${r.got.length===1?'è':'sono'} nel tuo Sideboard`)}}
  return JSON.stringify([MATE,S.tc])!==was}
function compactMe(){const p=G.me;const base={v:2,nm:(S.nick||'Giocatore').slice(0,24),lg:G.log.filter(l=>l.w==='me').slice(-6).map(l=>[l.ts,l.tx.slice(0,110),l.k||0]),ms:G.match?.res||'',bo:G.match?.bo||3,...(G.match?.hg?{hg:1}:{}),...(tabHidden?{hid:1}:{}),
    // Tra le Partite (issue #34 e #36): moneta e scelta di chi inizia, conteggi del Sideboard mentre lo si cambia.
    ...(pickPack()?{pk:pickPack()}:{}),...(sbPack()?{sb:sbPack()}:{}),
    // Il codice del Kit, per proporre un Duplicate Sealed a chi ha lo stesso, e il Duplicate in corso (issue #41).
    ...(!S.team?{sd:S.seed}:{}),...(dupPack()?{dp:dupPack()}:{}),
    // Il draft con l'amico: codice, ruolo e le mie scelte (issue #47).
    ...(drPack()?{dr:drPack()}:{})};
  if(!p||G.mode!=='online')return{...base,idle:1};
  // fw: larghezza del mio campo e delle mie carte in px, per capire da remoto quali carte si toccavano.
  const o={...base,gn:G.gn,fw:[Math.round(myBfW()),Math.round(cardW())],lf:p.life,ps:p.psn||0,ct:p.ct||0,lb:p.lib.length,hd:p.hand.length,tn:p.turn,rv:p.rv?p.hand.slice(0,12).map(vis):0,
    bf:shownBf(p).map(packPerm),gc:p.gy.length,ec:p.ex.length,
    // Carte date all'avversario e carte sue ridate (issue #40).
    // Il timer del turno (issue #33).
    ...(G.match?.tm?{tm:tmPack(G.match.tm)}:{}),
    ...(p.bf.some(o=>o.gv)?{gv:p.bf.filter(o=>o.gv).map(o=>[o.gv,...packPerm(o)])}:{}),...(G.rt?.length?{rt:G.rt.slice(-40)}:{}),...(arrowLive(G.arrow)?{ar:packArrow(G.arrow,p)}:{})};
  // Se non ci sta: prima si accorcia il log, poi si lasciano fuori le carte più vecchie di cimitero ed esilio (i conteggi restano veri).
  let gy=p.gy.map(vis),ex=p.ex.map(vis);const t=teamPub();const fits=()=>{o.gy=gy.join(' ');o.ex=ex.join(' ');return utf8len(JSON.stringify({g:o,t}))<=PRESENCE_MAX};
  while(!fits()){if(o.lg.length>2)o.lg=o.lg.slice(1);else if(gy.length>8||ex.length>4){gy=gy.slice(-Math.max(8,gy.length-10));ex=ex.slice(-Math.max(4,ex.length-5))}else if(o.lg.length)o.lg=o.lg.slice(1);else if(o.bf.length)o.bf.pop();else break}
  return o}
// Si pubblica solo se la presence è cambiata: publish viene chiamata a ogni disegno del Mazzo.
let pubT;function publish(){if(!ROOM)return;clearTimeout(pubT);pubT=setTimeout(()=>{const pr={g:compactMe(),t:teamPub()},js=JSON.stringify(pr);if(js===publish.last&&!publish.err)return;
  ROOM.presence(pr).then(()=>{publish.last=js;if(publish.err){publish.err=null;roomChip()}},e=>{publish.err=e?.code||'errore';roomChip()})},120)}
// Risultati del Match dal mio punto di vista: W vinta, L persa, D pareggio. Al meglio di 3 vince chi arriva a 2, al meglio di 1 chi vince una Partita.
const mirrorRes=r=>String(r).replace(/[WL]/g,x=>x==='W'?'L':'W');
// Una C in fondo vuol dire Match chiuso a mano con il punteggio che ha (issue #35): vinto, perso o pareggiato (drawn).
function matchScore(r,bo=3){const s=String(r),c=k=>[...s].filter(x=>x===k).length;const w=c('W'),l=c('L'),need=bo===1?1:2,closed=s.endsWith('C');
  return{w,l,d:c('D'),over:w>=need||l>=need||closed,won:closed?w>l:w>=need,drawn:closed&&w===l}}
function initRoom(){
  // La Stanza la prepara lo script caricato prima dell'app: web/mqtt-room.js, o dev/mock-room.js in dev.html.
  const chip=$('#roomchip'),room=window.STANZA||null;
  if(!room){chip.textContent='Online: non disponibile';chip.className='chip';renderTableIfOpen();return}
  ROOM=room;
  room.onConnection(c=>{roomConn=c;roomChip()},e=>{ROOM=null;roomConn=false;publish.err=e?.code||'errore';roomChip()});
  room.onPeers(ch=>{allPeers=ch.peers.filter(p=>!p.sameTab&&p.presence&&p.presence.g&&p.presence.g.v===2);peersChanged()});
  document.addEventListener('visibilitychange',()=>{tabHidden=document.hidden;publish()});tabHidden=document.hidden;
  // updatedAt cambia solo quando cambia la presence: senza un controllo periodico una scheda dimenticata non scadrebbe mai.
  setInterval(()=>peersChanged(true),30000);
  publish();
}
// Schede ferme: una nascosta da più di STALE_MS (un amico che ha chiuso il portatile), o una fuori partita e ferma da
// più di STALE_IDLE_MS (una seconda scheda dimenticata), non conta tra i presenti e non viene scelta come avversario.
// Chi è in partita e visibile resta anche se non tocca niente: magari sta pensando. L'avversario già scelto resta.
const STALE_MS=2*60*1000,STALE_IDLE_MS=10*60*1000;
const awake=(p,now=Date.now())=>{const g=p.presence.g,age=now-p.updatedAt;return p.peer===oppPeer||!(g.hid&&age>STALE_MS||g.idle&&age>STALE_IDLE_MS)};
let allPeers=[],oppPicked=false;
const peerIds=()=>roomPeers.map(p=>p.peer).join();
function peersChanged(timer){const before=peerIds();
  if(syncMate()&&VIEW==='deck'&&!deckDrag)renderDeck();
  if(oppPeer&&!allPeers.some(p=>p.peer===oppPeer))oppPeer=null;
  roomPeers=allPeers.filter(p=>awake(p));if(timer&&peerIds()===before)return;
  // Scelta automatica: meglio un'altra persona che una mia seconda scheda (isMe), che non resta scelta
  // quando arriva l'amico; una scelta fatta a mano (oppPicked) non si tocca.
  const playing=roomPeers.filter(p=>!p.presence.g.idle),others=playing.filter(p=>!p.isMe),mine=roomPeers.find(p=>p.peer===oppPeer)?.isMe;
  if(!oppPicked&&others.length===1&&(!oppPeer||mine))oppPeer=others[0].peer;else if(!oppPeer&&playing.length===1)oppPeer=playing[0].peer;
  // All'inizio del Match nessuno è ancora in Partita: con un solo altro giocatore nella Stanza è lui l'avversario, così moneta e
  // scelta di chi inizia si condividono già nella finestra «Nuovo Match» (issue #34).
  else if(!oppPeer&&roomPeers.length===1)oppPeer=roomPeers[0].peer;
  const cur=roomPeers.find(p=>p.peer===oppPeer);OPP=cur?cur.presence.g:null;
  const ctl=syncControl(OPP),tm=roundSync(OPP),pk=pickSync(OPP);if((ctl||tm||pk)&&!drag)commit();nextGameModal.paint?.();
  dupReact(dupSync(OPP));if(VIEW==='deck')paintDup();draftReact(draftSync(OPP));
  syncMatch();roomChip();
  // La barra della modalità si ridisegna solo se cambia ciò che mostra (avversari, risultati), per non rubare i clic.
  const mbKey=JSON.stringify([oppPeer,OPP?.ms,OPP?.bo,OPP?.hg,roomPeers.map(p=>p.presence.g.nm)]);
  if(VIEW==='table'&&!drag){if(mbKey!==peersChanged.mbKey){peersChanged.mbKey=mbKey;renderModebar()}renderOppOnly()}}
// Chip di stato della Stanza: dice se si è collegati e quanti altri ci sono.
let roomConn=false;
function roomChip(){const chip=$('#roomchip');if(!chip)return;
  if(!ROOM&&!publish.err){chip.textContent='Online: non disponibile';chip.className='chip';return}
  if(publish.err){chip.textContent='Online: presence rifiutata ('+publish.err+')';chip.className='chip warn';return}
  const n=roomPeers.length,away=allPeers.length-n;
  chip.title=away?`${away} schede ferme non contano (nascoste da più di ${STALE_MS/60000} minuti o fuori partita da più di ${STALE_IDLE_MS/60000})`:'';
  chip.textContent=!roomConn?'Online: in attesa':n?`Online: ${n} altr${n===1?'o':'i'} qui`:'Online: connesso, nessun altro';
  chip.className='chip'+(roomConn?' on':'')}
// Se l'avversario registra il risultato di una Partita che io non ho ancora segnato, lo prendo speculare.
// Si guarda solo quando il suo valore cambia, così «Annulla ultimo risultato» non viene subito ricopiato.
let lastOppMs=null;
function syncMatch(){if(!OPP||typeof OPP.ms!=='string'||!/^[WLD]{0,9}C?$/.test(OPP.ms)||OPP.ms===lastOppMs)return;lastOppMs=OPP.ms;
  const theirs=mirrorRes(OPP.ms),mine=G.match.res;
  if(theirs.length>mine.length&&theirs.startsWith(mine)){const was=mScore().over;G.match.res=theirs;syncGs(G.match);if(!was)countMatch(theirs,1);log(null,`${esc(OPP.nm||'L\'avversario')} ha registrato il risultato: Match ${scoreText()}`);commit()}}
function renderTableIfOpen(){if(VIEW==='table')renderTable()}

/* src/js/80-table.js */
let lastBfW=900,revealBot=false;
function renderTable(){
  const el=$('#v-table');
  if(!el.querySelector('.tablewrap')){
    el.innerHTML=`<div class="tablewrap"><div class="board"><div class="modebar" id="modebar"></div><div id="oppz"></div><div id="mez"></div></div>
    <aside class="side"><div class="logbox"><h3>Registro</h3><div class="log" id="log"></div><form class="chatrow" id="chatf"><input type="text" id="chatin" placeholder="Scrivi all'avversario…" autocomplete="off"><button class="btn sm">Invia</button></form></div></aside></div>`;
    const send=()=>{const v=$('#chatin').value.trim();if(!v)return;log(G.me||null,esc(v),'chat');if(!G.me)G.log[G.log.length-1].w='me';$('#chatin').value='';commit()};
    $('#chatf').onsubmit=e=>{e.preventDefault();send()};
    // Invio esplicito: l'invio implicito del form non è arrivato in tutti i browser della prova.
    $('#chatin').onkeydown=e=>{if(e.key==='Enter'&&!e.isComposing){e.preventDefault();send()}};
  }
  sizeCards();renderModebar();markTabs();
  const mez=$('#mez');mez.innerHTML='';
  if(!G.me){mez.innerHTML=`<div class="nog">Nessuna Partita in corso.<br><br><button class="btn pri" id="sg">Nuova Partita con il tuo Mazzo (${deckList().length} carte)</button></div>`;$('#sg').onclick=nextGameModal}
  else mez.appendChild(zoneEl(G.me,{owner:'me',live:true}));
  renderOppOnly();renderLog();drawArrows();
}
// Su schermi larghi le carte del campo crescono con lo spazio; sotto i 1000 px vale la misura del CSS.
// La mano cresce con loro, nella proporzione del CSS (--hw 88px con --bw 72px). Lo slider moltiplica entrambe.
const HAND_PER_BF=88/72;
function sizeCards(){const W=$('.board')?.clientWidth||0;const r=document.documentElement.style;const k=cardScale();
  r.removeProperty('--bw');r.removeProperty('--hw');
  let bw=cardW(),hw=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hw'))||bw*HAND_PER_BF;
  if(W>=1000){bw=Math.max(72,Math.min(112,Math.round(W/13)));hw=bw*HAND_PER_BF}else if(k===1)return;
  r.setProperty('--bw',Math.round(bw*k)+'px');r.setProperty('--hw',Math.round(hw*k)+'px')}
function renderModebar(){
  const mb=$('#modebar');const modes=[['bot','Contro il bot'],['online','Contro un amico'],['solo','Goldfish']];
  mb.innerHTML=`<span class="eyebrow">Avversario</span><div class="seg">${modes.map(([k,l])=>`<button data-m="${k}" aria-pressed="${G.mode===k}">${l}</button>`).join('')}</div>
  ${G.mode==='online'?`<label class="row" style="gap:6px"><span class="muted">Il tuo nome</span><input type="text" id="nick" value="${esc(S.nick||'')}" size="10" maxlength="24" placeholder="Nome"></label>${ROOM?`<button class="btn" id="invite" title="Il link della stanza: chi lo apre gioca con te">Copia il link per l'amico</button>`:''}${roomPeers.length>1?`<select id="opsel" aria-label="Avversario">${oppPeer?'':"<option value='' selected>Scegli l'avversario</option>"}${roomPeers.map(p=>`<option value="${p.peer}" ${p.peer===oppPeer?'selected':''}>${esc(p.presence.g.nm||'Giocatore')}${p.presence.g.idle?' (non in Partita)':''}</option>`).join('')}</select>`:''}`:''}
  <div class="row" style="margin-left:auto">${matchBarHTML()}</div>`;
  mb.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{if(G.mode===b.dataset.m)return;G.mode=b.dataset.m;if(G.mode==='bot'&&G.me&&!G.bot){startGame();return}commit()});
  $('#nick')&&($('#nick').onchange=e=>{S.nick=e.target.value.trim();saveS();if(G.me)G.me.name=S.nick||'Tu';commit()});
  // La Stanza è nel link, che si manda all'amico.
  // Se il browser nega gli appunti, il link si mostra già selezionato.
  $('#invite')&&($('#invite').onclick=()=>navigator.clipboard.writeText(ROOM.link).then(()=>toast('Link copiato: mandalo al tuo amico'),()=>openModal('Link della stanza',m=>{
    m.innerHTML=`<p class="muted" style="margin-top:0">Copialo e mandalo al tuo amico: chi lo apre entra in questa stanza.</p><input type="text" readonly value="${esc(ROOM.link)}" style="width:100%">`;
    const i=m.querySelector('input');setTimeout(()=>{i.focus();i.select()})})));
  $('#opsel')&&($('#opsel').onchange=e=>{oppPeer=e.target.value||null;oppPicked=!!oppPeer;const c=roomPeers.find(p=>p.peer===oppPeer);OPP=c?c.presence.g:null;renderOppOnly()});
  $('#ng')&&($('#ng').onclick=nextGameModal);
  $('#rtchip')&&($('#rtchip').onclick=roundMenu);paintRound();
  $('#endg')&&($('#endg').onclick=()=>{const r=$('#endg').getBoundingClientRect();const done=fn=>()=>{fn();nextGameModal()};
    openMenu(r.left,r.bottom+4,[...(G.me?[['Ho vinto la Partita',done(()=>recordResult('W'))],['Ho perso la Partita',done(()=>recordResult('L'))],['Pareggio',done(()=>recordResult('D'))],'-']:[]),
      ...(!mScore().over&&(G.me||G.match.res)?[['Chiudi il Match con questo punteggio',closeMatch]]:[]),
      ...(G.match.res?[["Annulla l'ultimo risultato",undoResult]]:[]),['Nuovo Match (azzera)',newMatch],...(G.tally.w+G.tally.l+(G.tally.d||0)?[['Azzera il bilancio dei Match',()=>{G.tally={w:0,l:0,d:0};commit()}]]:[])])});
}
// Punteggio del Match, formato e bilancio dei Match finiti; comandi di fine Partita.
function matchBarHTML(){const res=G.match.res,bo=G.match.bo,s=mScore();const gn=res.length+(s.over?0:1);
  const opp=G.mode==='online'&&OPP&&typeof OPP.ms==='string'?mirrorRes(OPP.ms):null;const diff=opp!==null&&opp!==res&&!(opp.length<res.length&&res.startsWith(opp));
  const oppFmt=OPP?fmtName({hg:OPP.hg?1:0,bo:OPP.bo===1?1:3}):'',fmt=fmtName(),boDiff=G.mode==='online'&&OPP&&!OPP.idle&&oppFmt!==fmt;
  const lbl=s.over?`${fmt} · Match ${s.won?'vinto':s.drawn?'pareggiato':'perso'} ${scoreText()}`:`${fmt} · Match ${scoreText()}${gn?` · Partita ${gn}`:''}`;
  const t=G.tally;
  // Il timer del turno (issue #33): il testo lo scrive paintRound ogni secondo.
  const rt=!s.over&&(G.me||res)?(G.match.tm?'<button class="chip timer" id="rtchip"></button>':G.mode!=='online'?'<button class="chip timer" id="rtchip" title="Timer del turno spento: clic per accenderlo">Timer spento</button>':''):'';
  return `${rt}<span class="mscore${s.over?(s.won?' won':s.drawn?' drawn':' lost'):''}" title="${G.match.hg?'Two-Headed Giant: una Partita decide il Match, 30 vite, primo mulligan gratis':bo===1?'Al meglio di 1: una Partita decide il Match':'Al meglio di 3: vince chi arriva a 2 Partite'}">${lbl}</span>${t.w+t.l+(t.d||0)?`<span class="muted mono" style="font-size:12px" title="Match vinti, persi e pareggiati da quando hai azzerato il bilancio">Bilancio ${t.w}-${t.l}${t.d?'-'+t.d:''}</span>`:''}
    ${diff?`<span class="chip warn" title="Il risultato registrato dall'avversario non coincide con il tuo">Avversario: ${esc(scoreText(opp))}</span>`:''}${boDiff?`<span class="chip warn" title="Scegliete lo stesso formato all'inizio del Match">Avversario: ${oppFmt}</span>`:''}
    ${G.me?'<button class="btn" id="endg">Fine Partita ▾</button>':res?'<button class="btn" id="endg" title="Annulla l’ultimo risultato o ricomincia il Match">Match ▾</button>':''}${gameOpen()?`<button class="btn" id="ng" title="Rimescola e ricomincia la Partita ${gn} senza segnare un risultato">Ricomincia</button>`:`<button class="btn${G.me?'':' pri'}" id="ng">${s.over||!res?'Nuova Partita':'Sideboard e prossima Partita'}</button>`}`}
// Tra una Partita e l'altra: scambi tra Mazzo e Sideboard, con lo stesso costruttore della scheda Mazzo (restano nel Mazzo attuale),
// e scelta di chi inizia.
// All'inizio di un Match si sceglie anche il formato.
// Con una Partita aperta (restart) la finestra la ricomincia, ma prima propone di segnarne il risultato.
function nextGameModal(){const s=mScore();const gn=s.over?1:G.match.res.length+1;const restart=gameOpen();
  const last=s.over?'':G.match.res.slice(-1);let first=last==='W'?'bot':last==='L'||G.mode==='online'?'me':'coin';let fmt=G.match.hg?'hg':G.match.bo;
  // Online moneta e scelta valgono per tutti e due (issue #34), e l'avversario vede che stai facendo Sideboard (issue #36).
  const shared=G.mode==='online'&&!!OPP;if(gn>1&&!restart){setSideboarding(true);publish()}
  openModal(restart?`Ricomincia la Partita ${gn}`:gn===1?'Nuovo Match':`Partita ${gn}: Sideboard`,m=>{m.parentElement.classList.add('wide');
    const draw_=()=>{const st=deckStats();syncLay();const oppL=G.mode==='bot'?'il bot':G.mode==='online'?"l'avversario":'';
      const seg=(lbl,opts,val,attr)=>`<div class="seg" role="group" aria-label="${lbl}">${opts.map(([k,l])=>`<button ${attr}="${k}" aria-pressed="${val==k}">${l}</button>`).join('')}</div>`;
      m.innerHTML=`<div class="row" style="justify-content:space-between"><div class="eyebrow">Mazzo ${st.total} carte${st.total<40?' · <span style="color:var(--bad)">meno di 40</span>':''} · clicca o trascina una carta per spostarla</div>
        <div class="row">${gn===1?seg('Formato del Match',[[1,'Bo1'],[3,'Bo3'],['hg','2HG']],fmt,'data-bo'):''}${shared?'<span class="row" id="pickbox"></span>':seg('Chi inizia',[['me','Inizio io'],...(oppL?[['bot','Inizia '+oppL]]:[['bot','Vado per secondo']]),...(G.mode!=='online'?[['coin','Moneta']]:[])],first,'data-f')}</div></div>
        ${shared?'<p class="muted" id="oppst" style="margin:0;font-size:12px"></p>':''}
        ${restart?`<div class="row notice"><span>La Partita ${gn} non ha ancora un risultato. Se è finita, segna il risultato:</span><button class="btn sm" data-r="W">Ho vinto</button><button class="btn sm" data-r="L">Ho perso</button><button class="btn sm" data-r="D">Pareggio</button></div>`:''}
        ${gn>1?`<p class="muted" style="margin:0;font-size:12px">${last==='L'?'Hai perso la Partita precedente: scegli tu chi inizia.':last==='W'?"Hai vinto la Partita precedente: sceglie l'avversario chi inizia.":'Pareggio: chi inizia si decide con la moneta, come per la prima Partita.'}</p>`:shared?'<p class="muted" style="margin:0;font-size:12px">Scegliete lo stesso formato. Chi inizia si decide con la moneta: la lancia uno dei due, e chi vince il lancio sceglie.</p>':''}
        ${builderHTML()}
        ${restart?'':`<p class="muted" style="margin:0;font-size:12px">Durante la Partita l'Apertura e il Mazzo restano bloccati: per tornarci finisci la Partita (Fine Partita) o ${G.mode==='solo'?'chiudila':'abbandonala, che conta come persa'}.${gn===1&&fmt===3?" Nel Bo3 tra una Partita e l'altra si torna al Mazzo.":''}</p>`}
        <div class="row mfoot"><button class="btn pri" id="sbgo">${restart?`Ricomincia la Partita ${gn}`:gn===1?`Inizia il Match (${fmt==='hg'?'2HG':'Bo'+fmt})`:`Inizia la Partita ${gn}`}</button></div>`;
      m.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{recordResult(b.dataset.r);closeModal();nextGameModal()});
      m.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{first=b.dataset.f;draw_()});
      m.querySelectorAll('[data-bo]').forEach(b=>b.onclick=()=>{fmt=b.dataset.bo==='hg'?'hg':+b.dataset.bo;draw_()});
      ZREDRAW=draw_;mountBuilder(m,draw_);
      $('#sbgo').onclick=()=>{const p=shared&&pickNow();closeModal();startGame(p?.first?(p.first==='me'?'me':'bot'):first==='coin'?null:first,fmt)};paint()};
    // Moneta, scelta e stato dell'avversario: si ridisegnano da soli a ogni presence (peersChanged), senza toccare il costruttore.
    const paint=()=>{if(!shared||!$('#pickbox'))return;const c=chooser(),p=pickNow(),nm=esc(oppName()),needCoin=!(last==='L'||last==='W');
      const html=(needCoin?p.coin?`<span class="chip on">Vince il lancio: ${c==='me'?'tu':nm}</span>`:'<button class="btn" id="coin">Lancia la moneta</button>':'')+
        (c==='me'?`<div class="seg" role="group" aria-label="Chi inizia">${[['me','Inizio io'],['opp','Inizia '+nm]].map(([k,l])=>`<button data-pf="${k}" aria-pressed="${p.first===k}">${l}</button>`).join('')}</div>`:
         c==='opp'?`<span class="muted">${p.first?`${nm} ha scelto: ${p.first==='me'?'inizi tu':'inizia lui'}`:`Sceglie ${nm} chi inizia…`}</span>`:'');
      // Si riscrive solo se cambia, per non togliere un pulsante da sotto il mouse.
      const box=$('#pickbox');if(box.dataset.html!==html){box.innerHTML=html;box.dataset.html=html}
      $('#oppst').textContent=sbStatus();
      const go=$('#sbgo');if(go){go.disabled=!p.first;go.title=p.first?'':'Prima decidete chi inizia'}
      $('#coin')&&($('#coin').onclick=()=>{flipCoin();publish();paint()});
      m.querySelectorAll('[data-pf]').forEach(b=>b.onclick=()=>{choose(b.dataset.pf);publish();paint()})};
    nextGameModal.paint=paint;
    draw_()},()=>{nextGameModal.paint=null;if(SIDEBOARDING){setSideboarding(false);publish()}})}
function renderOppOnly(){
  const oz=$('#oppz');if(!oz)return;oz.innerHTML='';
  if(G.mode==='bot'){if(G.bot)oz.appendChild(zoneEl(G.bot,{owner:'bot',live:true,mirror:true}));else oz.innerHTML='<div class="nog">Avvia una nuova Partita: il bot aprirà il suo kit e costruirà un Mazzo.</div>'}
  else if(G.mode==='online'){
    if(!ROOM)oz.innerHTML='<div class="nog">Il gioco online non è disponibile in questa pagina: aprila dal sito web. Poi ognuno apre il proprio kit, costruisce il Mazzo e sceglie «Contro un amico».</div>';
    else if(!OPP)oz.innerHTML=`<div class="nog">In attesa dell'avversario… Quando il tuo amico apre il link della stanza (<b>Copia il link per l'amico</b>) e sceglie «Contro un amico», il suo campo compare qui in tempo reale.</div>`;
    else if(OPP.idle)oz.innerHTML=`<div class="nog"><b>${esc(OPP.nm)}</b> è al tavolo ma non ha ancora iniziato una Partita.</div>`;
    else{const rp=remoteToPlayer(OPP);oz.appendChild(zoneEl(rp,{owner:'opp',live:false,mirror:true}));spreadRemote(oz.querySelector('.bf'),rp.bf,rp.fw)}
    // Tra le Partite: l'avversario sta facendo Sideboard, o ha già iniziato (issue #36).
    const st=sbStatus();if(st&&OPP)oz.insertAdjacentHTML('afterbegin',`<div class="sbnote chip warn">${esc(st)}</div>`);
  } else oz.innerHTML='<div class="nog" style="margin:0">Modalità goldfish: nessun avversario, prova le tue pescate e la tua curva.</div>';
  renderLog();  drawArrows();
}
// Dati remoti: non fidarsi. Id sconosciuti diventano '?', le varianti tornano alla carta base.
const fromVis=id=>BY[id]?(BY[id].b?{c:BY[id].b,v:id}:{c:id}):{c:'?'};
const cnt=(v,max=999)=>Math.max(0,Math.min(max,num(v)));
// Pila remota: gli id nella stringa sono le carte più recenti; se il conteggio vero è più alto, davanti ci sono carte coperte.
function remotePile(s,total,pre){const ids=typeof s==='string'&&s?s.split(' ').slice(-300):[];const n=Math.max(ids.length,cnt(total,300));
  return Array.from({length:n},(_,i)=>{const id=ids[i-(n-ids.length)];return{u:pre+i,...(id?fromVis(id):{c:'?'})}})}
function remoteToPlayer(g){const rv=Array.isArray(g.rv)?g.rv.map(fromVis):null;const hd=cnt(g.hd,99);
  return{name:String(g.nm||'Avversario'),fw:Array.isArray(g.fw)?{W:cnt(g.fw[0],9999),bw:cnt(g.fw[1],400)}:null,life:num(g.lf),psn:cnt(g.ps),ct:cnt(g.ct),lib:Array(cnt(g.lb,300)).fill({c:'?'}),hand:rv&&rv.length===hd?rv:Array(hd).fill({c:'?'}),rv:!!rv,turn:num(g.tn),
  bf:(Array.isArray(g.bf)?g.bf:[]).filter(Array.isArray).map(unpackPerm),
  gy:remotePile(g.gy,g.gc,'g'),ex:remotePile(g.ex,g.ec,'e')}}
// Campo remoto: le coordinate sono in proporzione al campo di chi gioca, che può essere più largo del mio.
// Due carte che da me si toccano in verticale e che da lui non si toccavano in orizzontale (sender = {W,bw} del suo
// campo; senza, si separano sempre) tengono un passo minimo in pixel; se non ci stanno, tutte si stringono in modo
// uniforme dentro il campo. cards: [{x,y,tp}] in proporzione; restituisce il centro x in pixel di ogni carta.
function spreadBf(cards,W,H,bw,sender,gap=4){const bh=bw*CARD_H,n=cards.length;
  const w=cards.map(o=>o.tp?bh:bw),h=cards.map(o=>o.tp?bw:bh);
  const sw=sender&&sender.W>0&&sender.bw>0?cards.map(o=>o.tp?sender.bw*CARD_H:sender.bw):null;
  const near=(i,j)=>Math.abs(cards[i].y-cards[j].y)*H<(h[i]+h[j])/2&&(!sw||Math.abs(cards[i].x-cards[j].x)*sender.W>=(sw[i]+sw[j])/2-1);
  const step=(i,j)=>(w[i]+w[j])/2+gap;
  const ord=cards.map((o,i)=>i).sort((a,b)=>cards[a].x-cards[b].x||a-b),x=cards.map(o=>o.x*W);
  ord.forEach((i,k)=>{x[i]=Math.max(x[i],w[i]/2);for(let q=0;q<k;q++){const j=ord[q];if(near(i,j))x[i]=Math.max(x[i],x[j]+step(i,j))}});
  for(let k=n-1;k>=0;k--){const i=ord[k];x[i]=Math.min(x[i],W-w[i]/2);for(let q=k+1;q<n;q++){const j=ord[q];if(near(i,j))x[i]=Math.min(x[i],x[j]-step(i,j))}}
  if(ord.some(i=>x[i]<w[i]/2-1e-6)){const lo=Math.min(...x),hi=Math.max(...x),m=Math.max(...w)/2;
    ord.forEach(i=>x[i]=hi>lo?m+(x[i]-lo)*(W-2*m)/(hi-lo):W/2)}
  return x}
function spreadRemote(bfEl,cards,sender){const W=bfEl.clientWidth,H=bfEl.clientHeight;if(!W||!cards.length)return;
  const bw=cardW();const xs=spreadBf(cards,W,H,bw,sender);
  bfEl.querySelectorAll('.bc').forEach((el,i)=>el.style.left=(xs[i]-bw/2).toFixed(1)+'px')}
function renderLog(){
  const lg=$('#log');if(!lg)return;let items=G.log.slice(-120);
  if(G.mode==='online'&&OPP&&OPP.lg)items=items.concat(OPP.lg.map(a=>({ts:a[0],w:'opp',tx:a[1],k:a[2]}))).sort((a,b)=>a.ts-b.ts);
  const nm={me:G.me?.name||'Tu',bot:'Bot',opp:OPP?.nm||'Avv.',sys:'Tavolo'};
  lg.innerHTML=items.map(l=>`<div class="le ${l.w} ${l.k==='chat'?'chat':''}"><span class="who">${esc(nm[l.w]||l.w)}</span><span class="tx">${l.w==='opp'?sanitizeRemote(l.tx):l.tx}</span></div>`).join('');
  lg.scrollTop=lg.scrollHeight;
}
function sanitizeRemote(t){return esc(String(t).replace(/<\/?b>/g,'\u0001')).replace(/\u0001/g,'')}

// Il lato di turno, 'me' o 'opp' (turnHolder in 50-game.js); null nel Goldfish o senza avversario.
function activeSide(){if(!G.me||G.mode==='solo')return null;const t=G.mode==='bot'?G.bot?.turn:G.mode==='online'&&OPP&&!OPP.idle?num(OPP.tn):null;
  return t==null?null:turnHolder(G.me.turn,t,G.first)}
function zoneEl(p,{owner,live,mirror}){const on=activeSide()===(owner==='me'?'me':'opp');
  const z=document.createElement('div');z.className='zone'+(mirror?' opp':'')+(on?' turn':'');z.dataset.owner=owner;z.dataset.live=live?'1':'0';
  const bar=document.createElement('div');bar.className='zbar';
  const pc=(k,icon,label,cls='')=>(live||p[k])?`<span class="life pc ${cls}" title="${label}">${live?`<button data-pc="${k}" data-d="-1" aria-label="${label}: meno 1">−</button>`:''}<i aria-hidden="true">${icon}</i><b>${p[k]||0}</b>${live?`<button data-pc="${k}" data-d="1" aria-label="${label}: più 1">+</button>`:''}</span>`:'';
  bar.innerHTML=`<span class="zname">${esc(p.name)}</span>${on?'<span class="chip turnchip" title="Ha premuto «Nuovo turno» per ultimo">Di turno</span>':''}<span class="life ${p.life<=5?'low':''}">${live?'<button data-life="-1" aria-label="Perdi 1 vita">−</button>':''}<b>${p.life}</b>${live?'<button data-life="1" aria-label="Guadagna 1 vita">+</button>':''}</span>
    ${pc('psn','☠','Segnalini veleno',(p.psn||0)>=7?'low':'')}${pc('ct','✦','Contatore generico (energia, esperienza…)')}
    <span class="zmeta"><span>Turno ${p.turn}</span><span>Mano ${p.hand.length}</span><span>Grimorio ${p.lib.length}</span></span><span class="ztools"></span>`;
  const tools=bar.querySelector('.ztools');
  const T=(l,f,cls='')=>{const b=document.createElement('button');b.className='btn sm '+cls;b.textContent=l;b.onclick=f;tools.appendChild(b)};
  if(owner==='me'){
    T('Nuovo turno',()=>{newTurn(p);commit()},'pri');T('Pesca',()=>{draw(p);commit()});T('Stappa tutto',()=>{p.bf.forEach(o=>{o.tp=false;o.atk=false;o.blk=false});log(p,'Stappa tutto');commit()});
    if(G.mode==='bot')T('Attacca il bot',attackModal,'warm');
    T('Pedine',()=>tokenModal(p));T('Dado',()=>diceMenu(p,tools));T('Mulligan',()=>{mulligan(p);commit()});
    {const n=undoCount(),top=n&&UNDO.stack.at(-1).name;T('Annulla',()=>{const a=undo();if(a)toast('Annullato: '+a)});const ub=tools.lastChild;ub.disabled=!n;ub.title=n?`Annulla: ${top} (Ctrl+Z, ancora ${n})`:'Niente da annullare in questa Partita'}
    if(G.mode==='online')T(p.rv?'Nascondi la mano':'Rivela la mano',()=>{p.rv=!p.rv;log(p,p.rv?'Rivela la mano':'Nasconde di nuovo la mano');commit()});
  } else if(owner==='bot'){
    T('Turno del bot',botTurn,'warm');T(revealBot?'Nascondi mano':'Mostra mano',()=>{revealBot=!revealBot;renderOppOnly()});T('Pesca',()=>{draw(p);commit()});T('Pedine',()=>tokenModal(p));
  }
  bar.querySelectorAll('[data-pc]').forEach(b=>b.onclick=()=>{const k=b.dataset.pc;p[k]=Math.max(0,(p[k]||0)+ +b.dataset.d);
    log(p,k==='psn'?`Veleno ${b.dataset.d>0?'+1':'−1'} → ${p.psn}${p.psn>=10?': <b>10 segnalini veleno, perde la Partita</b>':''}`:`Contatore ${b.dataset.d>0?'+1':'−1'} → ${p.ct}`);commit()});
  bar.querySelectorAll('[data-life]').forEach(b=>b.onclick=e=>{const d=+b.dataset.life*(e.shiftKey?5:1);p.life+=d;log(p,`Vita ${d>0?'+':''}${d} → ${p.life}`);commit()});
  const hand=document.createElement('div');hand.className='hand'+(owner!=='me'&&(p.rv||(owner==='bot'&&revealBot))?' shown':'');hand.dataset.drop='hand';
  p.hand.forEach(o=>{const w=document.createElement('div');w.className='hc';const hidden=owner==='opp'?!p.rv:(owner==='bot'&&!revealBot);w.appendChild(faceEl(o,{back:hidden}));
    if(!hidden){setPreviewAttrs(w,o);if(live){w.dataset.u=o.u;w.dataset.z='hand'}}hand.appendChild(w)});
  const body=document.createElement('div');body.className='zbody';
  const bf=document.createElement('div');bf.className='bf';bf.dataset.drop='bf';if(mirror)bf.dataset.mirror='1';
  // Le carte che ho dato all'avversario (issue #40) stanno sul suo campo.
  const cards=shownBf(p);
  if(!cards.length)bf.innerHTML=`<div class="hint">${owner==='me'?'Trascina qui le carte dalla mano, oppure cliccale. Clic su una carta sul campo = tappa. Tasto destro = ingrandisci e altre azioni.':''}</div>`;
  requestAnimationFrame(()=>{if(bf.clientWidth)lastBfW=bf.clientWidth});
  cards.forEach(o=>bf.appendChild(bfCard(o,{mirror,mine:owner!=='opp',live})));
  const piles=document.createElement('div');piles.className='piles';
  piles.appendChild(pileEl('lib','Grimorio',p.lib,true,live));piles.appendChild(pileEl('gy','Cimitero',p.gy,false,live));piles.appendChild(pileEl('ex','Esilio',p.ex,false,live));
  body.append(bf,piles);
  if(mirror)z.append(bar,hand,body);else z.append(bar,body,hand);
  return z;
}
function pileEl(k,label,arr,back,live){const d=document.createElement('div');d.className='pile';d.dataset.pile=k;d.dataset.drop=k==='lib'?'libTop':k;
  const top=arr[arr.length-1];if(arr.length){const f=faceEl(back?{c:'?'}:top,{back});d.appendChild(f);if(!back)setPreviewAttrs(d,top)}else{const e=document.createElement('div');e.className='empty';d.appendChild(e)}
  d.insertAdjacentHTML('beforeend',`<span class="cnt">${arr.length}</span><div class="pl">${label}</div>`);d.title=k==='lib'?(live?'Clic: pesca · destro: altre azioni':''):'Clic: vedi le carte';return d}
function bfCard(o,{mirror,mine,live}){
  const el=document.createElement('div');el.className='bc'+(o.tp?' tapped':'')+(o.atk?' atk':'')+(o.blk?' blk':'')+(o.sick&&isCreature(o)&&mine?' sick':'');
  const showFace=!o.fd||(mine&&live);el.appendChild(faceEl(o,{back:o.fd&&!(mine&&live)}));
  if(showFace&&o.c!=='?')setPreviewAttrs(el,o);if(o.fd&&mine&&live)el.firstChild.style.opacity='.55';
  if(live){el.dataset.u=o.u;el.dataset.z='bf'}else{el.dataset.ru=o.u;if(o.gid)el.dataset.gid=o.gid}
  const bw=cardW(),bh=bw*CARD_H;
  el.style.left=`calc(${(o.x*100).toFixed(2)}% - ${bw/2}px)`;el.style.top=`calc(${((mirror?1-o.y:o.y)*100).toFixed(2)}% - ${bh/2}px)`;
  const bd=document.createElement('div');bd.className='badges';let h='';
  if(o.n)h+=`<span class="bdg ct">◆${o.n}</span>`;
  if(o.c!=='?'&&!o.fd&&isCreature(o))h+=`<span class="bdg pt ${o.p1>0?'up':o.p1<0?'dn':''}">${pow(o)}/${tou(o)}</span>`;
  bd.innerHTML=h;el.appendChild(bd);
  if(o.prep)el.insertAdjacentHTML('beforeend','<span class="tag">PREPARATA</span>');
  const ctl=ctlLabel(o);if(ctl)el.insertAdjacentHTML('beforeend',`<span class="ctltag" title="Il proprietario della carta: la controlla l'altro giocatore">${esc(ctl)}</span>`);
  return el;
}
// Two-Headed Giant: il primo mulligan è gratis (CR 103.5c), quindi si mettono in fondo una carta in meno.
const mullBottom=p=>G.match?.hg?p.mull-1:p.mull;
function mulligan(p){p.lib.push(...p.hand.splice(0));shuffle(p.lib);draw(p,7,true);p.mull++;const n=mullBottom(p);
  log(p,`Mulligan (${p.mull}${G.match?.hg&&p.mull===1?', gratis':''}): pescate 7 carte, ${n?`metti ${n} ${n===1?'carta':'carte'} in fondo al grimorio (tasto destro → In fondo)`:'nessuna carta in fondo'}`)}
function diceMenu(p,anchor){const r=anchor.getBoundingClientRect();openMenu(r.left,r.bottom+4,[['Lancia una moneta',()=>{log(p,'Moneta: <b>'+(Math.random()<.5?'testa':'croce')+'</b>');commit()}],['Tira un d6',()=>{log(p,'d6: <b>'+(1+Math.floor(Math.random()*6))+'</b>');commit()}],['Tira un d20',()=>{log(p,'d20: <b>'+(1+Math.floor(Math.random()*20))+'</b>');commit()}]])}
function tokenModal(p){openModal('Crea una pedina',m=>{
  m.innerHTML=`<div class="mgrid" id="tg"></div><div class="row"><span class="eyebrow">Personalizzata</span><input type="text" id="tkn" placeholder="Nome (es. Spirito)" size="14"><input type="text" id="tkp" placeholder="P/C" size="4" value="1/1"><button class="btn" id="tkc">Crea</button></div>`;
  const g=$('#tg');TOKENS.forEach(t=>{const c=document.createElement('div');c.className='mcell card';c.dataset.cid=t.id;c.appendChild(faceEl({c:t.id}));c.onclick=()=>{mkToken(p,{c:t.id});closeModal()};g.appendChild(c)});
  $('#tkc').onclick=()=>{mkToken(p,{c:'x',tn:$('#tkn').value.trim()||'Pedina',pt:$('#tkp').value.trim()||'1/1'});closeModal()};
})}
function mkToken(p,o){const pos=autoPos(p,o.c);const lo=o.c!=='x'?num(BY[o.c].f[0].l):0;p.bf.push({u:uid(),c:o.c,v:o.v,tk:1,tn:o.tn,pt:o.pt,x:pos.x,y:pos.y,tp:false,fd:false,p1:0,n:lo,prep:false,sick:true,atk:false});log(p,`Crea una pedina <b>${esc(cname(o))}</b>`);commit()}
function zoneModal(p,k,live){const lab={gy:'Cimitero',ex:'Esilio',lib:'Grimorio'}[k];const arr=p[k];
  openModal(`${lab} di ${p.name} (${arr.length})`,m=>{const g=document.createElement('div');g.className='mgrid';
    arr.slice().reverse().forEach(o=>{const c=document.createElement('div');c.className='mcell';const w=document.createElement('div');setPreviewAttrs(w,o);w.appendChild(faceEl(o));c.appendChild(w);
      if(live){const a=document.createElement('div');a.className='acts';[['Mano','hand'],['Campo','bf'],[k==='gy'?'Esilio':'Cimit.',k==='gy'?'ex':'gy'],['Cima','libTop']].forEach(([l,z])=>{const b=document.createElement('button');b.className='btn sm';b.textContent=l;b.onclick=()=>{moveTo(p,o.u,z);commit();closeModal();zoneModal(p,k,live)};a.appendChild(b)});c.appendChild(a)}
      g.appendChild(c)});if(!arr.length)g.innerHTML='<span class="muted">Vuoto.</span>';m.appendChild(g)})}
function scryModal(p,n){let top=p.lib.splice(0,n);const bottom=[],gy=[],hand=[];
  const fin=()=>{p.lib.unshift(...top);p.lib.push(...bottom);gy.forEach(o=>p.gy.push(o));hand.forEach(o=>p.hand.push(o));log(p,`Guarda le prime ${n}: ${top.length} sopra, ${bottom.length} in fondo${gy.length?`, ${gy.length} nel cimitero`:''}${hand.length?`, ${hand.length} in mano`:''}`);commit()};
  openModal(`Prime ${n} carte del grimorio`,m=>{const draw_=()=>{m.innerHTML='<p class="muted" style="margin:0">Ordine da sinistra (cima) a destra. Chiudi per confermare.</p>';const g=document.createElement('div');g.className='mgrid';
    top.forEach((o,i)=>{const c=document.createElement('div');c.className='mcell';const w=document.createElement('div');setPreviewAttrs(w,o);w.appendChild(faceEl(o));c.appendChild(w);const a=document.createElement('div');a.className='acts';
      [['◀',()=>{if(i>0)[top[i-1],top[i]]=[top[i],top[i-1]]}],['Fondo',()=>bottom.push(...top.splice(i,1))],['Cimit.',()=>gy.push(...top.splice(i,1))],['Mano',()=>hand.push(...top.splice(i,1))]].forEach(([l,f])=>{const b=document.createElement('button');b.className='btn sm';b.textContent=l;b.onclick=()=>{f();draw_()};a.appendChild(b)});
      c.appendChild(a);g.appendChild(c)});m.appendChild(g);if(bottom.length||gy.length||hand.length)m.insertAdjacentHTML('beforeend',`<p class="muted" style="margin:0">In fondo: ${bottom.length} · Cimitero: ${gy.length} · Mano: ${hand.length}</p>`)};draw_()},fin)}
function searchModal(p){openModal('Cerca nel grimorio',m=>{m.innerHTML='<input type="text" id="sq" placeholder="Filtra per nome o tipo…" style="width:100%"><div class="mgrid" id="sg2"></div>';
  const rd=()=>{const q=$('#sq').value.toLowerCase();const g=$('#sg2');g.innerHTML='';p.lib.filter(o=>(BY[o.c].n+' '+BY[o.c].t).toLowerCase().includes(q)).sort((a,b)=>BY[a.c].n.localeCompare(BY[b.c].n)).forEach(o=>{const c=document.createElement('div');c.className='mcell';const w=document.createElement('div');setPreviewAttrs(w,o);w.appendChild(faceEl(o));c.appendChild(w);const a=document.createElement('div');a.className='acts';
    [['Mano','hand'],['Campo','bf'],['Cima','libTop']].forEach(([l,z])=>{const b=document.createElement('button');b.className='btn sm';b.textContent=l;b.onclick=()=>{moveTo(p,o.u,z);rd()};a.appendChild(b)});c.appendChild(a);g.appendChild(c)})};
  $('#sq').oninput=rd;rd()},()=>{shuffle(p.lib);log(p,'Chiude la ricerca e mischia il grimorio');commit()})}

// Frecce di bersaglio (issue #39). aimArrow tira la freccia dal mio lato (contro il Bot anche dal suo) e la scrive nel Registro.
// Le carte si leggono come le vede chi gioca: una carta coperta resta coperta anche nel Registro.
const sideP=side=>side==='me'?G.me:G.bot;
function refName(r){if(r.player)return(r.side==='me'?G.me?.name:G.mode==='bot'?G.bot?.name:OPP?.nm)||'Avversario';
  const o=r.side==='me'||G.mode==='bot'?find(sideP(r.side),r.u)?.o:remoteToPlayer(OPP||{}).bf[num(String(r.u).slice(1))];
  return !o?'una carta':o.fd?'una carta coperta':cname(o)}
function aimArrow(from,to){G.arrow={id:(G.arrow?.id||0)+1,ts:Date.now(),from,to};
  log(sideP(from.side),`<b>${esc(refName(from))}</b> ha come bersaglio <b>${esc(refName(to))}</b>`);commit();setTimeout(()=>{drawArrows();publish()},ARROW_MS+50)}
// Le frecce da disegnare: la mia, se è recente, e quella dell'avversario per ARROW_MS da quando la vedo arrivare (gli orologi dei
// due computer possono essere diversi, quindi non si usa la sua ora).
let REMOTE_AR={id:null,seen:0},arrowRAF=0;
function liveArrows(){const out=[];if(arrowLive(G.arrow))out.push(G.arrow);
  if(G.mode==='online'&&OPP&&!OPP.idle&&G.me){const r=readArrow(OPP.ar,G.me);
    if(r){if(r.id!==REMOTE_AR.id)REMOTE_AR={id:r.id,seen:Date.now()};if(Date.now()-REMOTE_AR.seen<ARROW_MS)out.push(r)}}
  return out}
function arrowEnd(r){const z=r.side==='me'?'#mez':'#oppz';if(r.player)return document.querySelector(z+' .zname');
  const k=CSS.escape(r.u);return document.querySelector(`${z} .bf [data-u="${k}"], ${z} .bf [data-ru="${k}"], ${z} [data-u="${k}"]`)}
// Si ridisegna a ogni fotogramma finché ci sono frecce, così seguono lo scorrimento e i ridisegni del Tavolo.
function drawArrows(){cancelAnimationFrame(arrowRAF);let svg=$('#arrows');const list=VIEW==='table'?liveArrows():[];
  if(!list.length){if(svg)svg.remove();return}
  if(!svg){document.body.insertAdjacentHTML('beforeend','<svg id="arrows" aria-hidden="true"></svg>');svg=$('#arrows')}
  const mid=el=>{const r=el.getBoundingClientRect();return[r.left+r.width/2,r.top+r.height/2]};
  svg.innerHTML='<defs><marker id="arhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z"/></marker></defs>'+
    list.map(a=>{const f=arrowEnd(a.from),t=arrowEnd(a.to);if(!f||!t)return'';const[x1,y1]=mid(f),[x2,y2]=mid(t);return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" marker-end="url(#arhead)"/><circle cx="${x1}" cy="${y1}" r="5"/>`}).join('');
  arrowRAF=requestAnimationFrame(drawArrows)}

/* src/js/81-input.js */
let drag=null,lpT=null;
function ownerP(zoneEl_){return zoneEl_.dataset.owner==='me'?G.me:zoneEl_.dataset.owner==='bot'?G.bot:null}
document.addEventListener('pointerdown',e=>{
  if(e.button!==0||VIEW!=='table')return;const el=e.target.closest('[data-u]');const z=e.target.closest('.zone');
  if(!el||!z||z.dataset.live!=='1')return;
  // La carta resta presa nel punto in cui la si afferra: ox/oy è la distanza dal centro, riportata alla misura del campo.
  const r=el.getBoundingClientRect(),k=cardW()/(el.offsetWidth||cardW());
  drag={el,u:el.dataset.u,z,p:ownerP(z),from:el.dataset.z,sx:e.clientX,sy:e.clientY,moved:false,tp:el.classList.contains('tapped'),
    ox:(e.clientX-r.left-r.width/2)*k,oy:(e.clientY-r.top-r.height/2)*k};
  clearTimeout(lpT);lpT=setTimeout(()=>{if(drag&&!drag.moved){const d=drag;drag=null;cardMenu(d.p,d.u,d.sx,d.sy)}},520);
});
document.addEventListener('pointermove',e=>{
  if(!drag)return;const dx=e.clientX-drag.sx,dy=e.clientY-drag.sy;
  if(!drag.moved&&Math.hypot(dx,dy)>6){drag.moved=true;clearTimeout(lpT);const g=drag.el.querySelector('.face').cloneNode(true);g.className+=' ghost'+(drag.tp?' tp':'');g.style.width=cardW()+'px';document.body.appendChild(g);drag.g=g;drag.el.classList.add('drag-src');closeZoom()}
  if(drag.moved){const t=dropTarget(e);document.querySelectorAll('.drop-hot').forEach(x=>x!==t&&x.classList.remove('drop-hot'));if(t)t.classList.add('drop-hot');
    const c=landing(e,t);drag.g.style.left=(c.x-cardW()/2)+'px';drag.g.style.top=(c.y-cardW()*CARD_H/2)+'px';drag.g.classList.toggle('land',c.bf)}
});
function dropTarget(e,dr=drag){const els=document.elementsFromPoint(e.clientX,e.clientY);for(const x of els){const d=x.closest('[data-drop]');if(d&&d.closest('.zone')===dr.z)return d}return null}
// Centro della carta sullo schermo. Sopra il campo è il punto esatto in cui atterra: tutta dentro il campo, tappata o no.
function landing(e,t,d=drag){let x=e.clientX-d.ox,y=e.clientY-d.oy;const bf=!!t&&t.dataset.drop==='bf';
  if(bf){const r=t.getBoundingClientRect(),w=cardW(),h=w*CARD_H,hw=(d.tp?h:w)/2,hh=(d.tp?w:h)/2;
    x=Math.max(r.left+hw,Math.min(r.right-hw,x));y=Math.max(r.top+hh,Math.min(r.bottom-hh,y))}
  return{x,y,bf}}
document.addEventListener('pointerup',e=>{
  clearTimeout(lpT);if(!drag)return;const d=drag;drag=null;
  document.querySelectorAll('.drop-hot').forEach(x=>x.classList.remove('drop-hot'));
  if(!d.moved){clickCard(d.p,d.u,d.from);return}
  d.g&&d.g.remove();const t=dropTarget(e,d);
  if(!t){commit();return}
  const zone=t.dataset.drop;const p=d.p;
  if(zone==='bf'){const r=t.getBoundingClientRect(),c=landing(e,t,d);let x=(c.x-r.left)/r.width,y=(c.y-r.top)/r.height;if(t.dataset.mirror)y=1-y;
    if(d.from==='bf'){const o=p.bf.find(o=>o.u===d.u);if(o){o.x=x;o.y=y;p.bf.splice(p.bf.indexOf(o),1);p.bf.push(o)}}else moveTo(p,d.u,'bf',{pos:{x,y}})}
  else if(zone!==d.from)moveTo(p,d.u,zone);
  commit();
});
document.addEventListener('pointercancel',()=>{clearTimeout(lpT);if(drag){drag.g&&drag.g.remove();drag=null;commit()}});
function clickCard(p,u,from){const f=find(p,u);if(!f)return;
  if(from==='bf'){f.o.tp=!f.o.tp;if(!f.o.tp)f.o.atk=false;commit()}
  else if(from==='hand'){moveTo(p,u,'bf');commit()}}
document.addEventListener('click',e=>{if(VIEW!=='table')return;const pl=e.target.closest('[data-pile]');if(!pl)return;const z=pl.closest('.zone');const live=z.dataset.live==='1';
  const p=live?ownerP(z):remoteToPlayer(OPP||{});const k=pl.dataset.pile;
  if(k==='lib'){if(live){draw(p);commit()}}else zoneModal(p,k,live)});
document.addEventListener('contextmenu',e=>{if(VIEW!=='table')return;const z=e.target.closest('.zone');if(!z)return;
  // Una mia carta sul campo dell'avversario (issue #40): il proprietario la può riprendere.
  if(z.dataset.live!=='1'){const g=e.target.closest('[data-gid]');if(g){e.preventDefault();openMenu(e.clientX,e.clientY,[['Riprendi il controllo',()=>{takeBack(g.dataset.gid);commit()}]])}return}
  const el=e.target.closest('[data-u]');const pl=e.target.closest('[data-pile="lib"]');if(!el&&!pl)return;e.preventDefault();const p=ownerP(z);
  if(zoomedOn(el)){closeZoom();return}
  if(el)cardMenu(p,el.dataset.u,e.clientX,e.clientY);else libMenu(p,e.clientX,e.clientY)});
function cardMenu(p,u,x,y){const f=find(p,u);if(!f)return;const o=f.o;const done=fn=>()=>{fn();commit()};const zoom=['Ingrandisci',()=>showZoom(o,document.querySelector(`.zone[data-live="1"] [data-u="${CSS.escape(u)}"]`),{text:true})];
  const mv=[['In mano',done(()=>moveTo(p,u,'hand'))],['Nel cimitero',done(()=>moveTo(p,u,'gy'))],['In esilio',done(()=>moveTo(p,u,'ex'))],['In cima al grimorio',done(()=>moveTo(p,u,'libTop'))],['In fondo al grimorio',done(()=>moveTo(p,u,'libBot'))]];
  const aim=['Bersaglio…',()=>startTarget(p,u)];
  // Controllo (issue #40): una carta altrui si ridà; una propria si dà all'avversario, se c'è.
  const ctl=o.gid||o.own?['Restituisci',done(()=>returnControl(p,u))]:G.mode==='bot'||G.mode==='online'&&OPP&&!OPP.idle?['Dai il controllo',done(()=>giveControl(p,u))]:null;
  if(f.z==='bf'){openMenu(x,y,[zoom,aim,...(ctl?[ctl]:[]),'-',[o.tp?'Stappa':'Tappa',done(()=>{o.tp=!o.tp}),'T'],[o.atk?'Togli da attacco':'Segna in attacco',done(()=>{o.atk=!o.atk;if(o.atk){o.blk=false;if(!kw(o,'Vigilance'))o.tp=true}})],
    // Chi blocca chi si mostra trascinando il bloccante davanti all'attaccante (issue #38).
    [o.blk?'Togli dal blocco':'Segna in blocco',done(()=>{o.blk=!o.blk;if(o.blk){o.atk=false;log(p,`Blocca con <b>${esc(cname(o))}</b>`)}})],'-',
    ['Segnalino +1/+1',done(()=>o.p1=(o.p1||0)+1)],['Segnalino −1/−1',done(()=>o.p1=(o.p1||0)-1)],['Segnalino / fedeltà +1',done(()=>o.n=(o.n||0)+1)],['Segnalino / fedeltà −1',done(()=>o.n=(o.n||0)-1)],
    [o.prep?'Non più preparata':'Preparata',done(()=>{o.prep=!o.prep;log(p,`<b>${esc(cname(o))}</b> ${o.prep?'è preparata':'non è più preparata'}`)})],[o.fd?'Gira a faccia in su':'Gira a faccia in giù',done(()=>o.fd=!o.fd)],
    ['Crea una copia (pedina)',()=>mkToken(p,{c:o.c,v:o.v,tn:o.tn,pt:o.pt})],'-',...mv.filter(m=>m[0]!=='In campo')])}
  else if(f.z==='hand'){openMenu(x,y,[zoom,aim,'-',['Gioca',done(()=>moveTo(p,u,'bf'))],['Gioca a faccia in giù',done(()=>moveTo(p,u,'bf',{fd:true}))],['Rivela',done(()=>log(p,`Rivela <b>${esc(cname(o))}</b>`))],'-',...mv.filter(m=>m[0]!=='In mano')])}
}
function libMenu(p,x,y){openMenu(x,y,[['Pesca 1',()=>{draw(p);commit()},'D'],['Pesca 7',()=>{draw(p,7);commit()}],['Guarda le prime 1 (scruta 1)',()=>scryModal(p,1)],['Guarda le prime 2',()=>scryModal(p,2)],['Guarda le prime 3',()=>scryModal(p,3)],['Guarda le prime 5',()=>scryModal(p,5)],['Cerca nel grimorio',()=>searchModal(p)],'-',
  ['Macina 1',()=>{const o=p.lib.shift();if(o){p.gy.push(o);log(p,`Macina <b>${esc(cname(o))}</b>`)}commit()}],['Rivela la cima',()=>{const o=p.lib[0];if(o)log(p,`Rivela la cima: <b>${esc(cname(o))}</b>`);commit()}],['Mischia',()=>{shuffle(p.lib);log(p,'Mischia il grimorio');commit()}]])}
// Ctrl+Z (Cmd+Z sul Mac) annulla l'ultima azione sul Tavolo (issue #37).
document.addEventListener('keydown',e=>{if(VIEW!=='table'||!G.me||e.target.closest('input,textarea,select')||!(e.ctrlKey||e.metaKey)||e.altKey||e.shiftKey||e.key.toLowerCase()!=='z')return;
  e.preventDefault();const n=undo();toast(n?'Annullato: '+n:'Niente da annullare')});
document.addEventListener('keydown',e=>{if(VIEW!=='table'||!G.me||e.target.closest('input,textarea,select')||e.ctrlKey||e.metaKey||e.altKey)return;const k=e.key.toLowerCase();
  if(k==='d'){draw(G.me);commit()}else if(k==='u'){G.me.bf.forEach(o=>{o.tp=false;o.atk=false;o.blk=false});log(G.me,'Stappa tutto');commit()}
  else if(k==='t'&&hoverU){for(const p of [G.me,G.bot]){const o=p&&p.bf.find(o=>o.u===hoverU);if(o){o.tp=!o.tp;commit();break}}}});
window.addEventListener('resize',()=>{if(VIEW==='table'&&!drag){renderTable();publish()}});
// Frecce di bersaglio (issue #39): «Bersaglio…» sul menu di una carta, poi un clic su una carta sul campo, mia o
// dell'avversario, o sulla barra di un giocatore. Il clic che sceglie non fa altro: niente presa, tappo o pulsanti.
let TARGET=null,swallowClick=false;
function startTarget(p,u){TARGET={from:{side:p===G.me?'me':'opp',u}};document.body.classList.add('targeting');toast('Scegli il bersaglio: una carta sul campo o un giocatore (Esc annulla)')}
function endTarget(){TARGET=null;document.body.classList.remove('targeting')}
function targetRef(el){const z=el.closest('.zone');if(!z)return null;const side=z.dataset.owner==='me'?'me':'opp';
  const c=el.closest('.bf [data-u], .bf [data-ru]');if(c)return{side,u:c.dataset.u||c.dataset.ru};return el.closest('.zbar')?{side,player:true}:null}
document.addEventListener('pointerdown',e=>{if(!TARGET)return;e.stopPropagation();e.preventDefault();swallowClick=true;
  const from=TARGET.from,to=targetRef(e.target);endTarget();if(to&&VIEW==='table'&&G.me)aimArrow(from,to);else toast('Bersaglio annullato')},true);
document.addEventListener('click',e=>{if(swallowClick){swallowClick=false;e.stopPropagation();e.preventDefault()}},true);
document.addEventListener('keydown',e=>{if(TARGET&&e.key==='Escape'){endTarget();toast('Bersaglio annullato')}},true);

/* src/js/99-boot.js */
// Il menu dei set (issue #48): cambiare set ricarica la pagina con ?set=. Ogni set ha i suoi Mazzi, Partite e Kit.
function initSetMenu(){const el=$('#setsel'),sets=typeof SETS==='undefined'?{[SET.code]:{name:SET.name}}:SETS;
  el.innerHTML=Object.entries(sets).map(([k,v])=>`<option value="${k}"${k===SET.code?' selected':''}>${k} · ${esc(v.name)}</option>`).join('');
  el.onchange=()=>{try{localStorage.setItem('mtg-lab:set',el.value)}catch(e){}const q=new URLSearchParams(location.search);q.set('set',el.value.toLowerCase());location.search=q.toString()}}
// Con una Partita aperta si riparte dal Tavolo: l'Apertura e il Mazzo sono bloccati.
initSetMenu();loadPacks();if(gameOpen())go('table');else renderAll();initRoom();initTimer();initRound();initDraft();
