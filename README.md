# MTG Lab

Il simulatore di prerelease di **Reality Fracture (FRA)** di Magic: The Gathering, da giocare nel browser: apri un kit, costruisci il sealed da 40 carte e gioca contro un bot, contro un amico online o da solo in goldfish.

**Gioca qui: https://teodea.github.io/mtg-lab-gioca/** (nessun login, nessuna installazione)

## Funzioni principali

- **Apertura del kit**: 6 Play Booster più una promo foil, come al prerelease. La collation segue le percentuali pubblicate da Wizards nell'articolo "Collecting Reality Fracture" (varianti, Special Guests, carte "eco").
- **Costruzione del mazzo**: Mazzo e Sideboard con le carte disposte in pile (per costo, colore, creature o in ordine personalizzato, trascinando le carte) e una barra di ricerca con la sintassi di Scryfall.
- **GIH WR**: la percentuale di partite vinte con la carta in mano, dai dati pubblici del Premier Draft di [17Lands](https://www.17lands.com/public_datasets) (CC BY 4.0).
- **Timer di costruzione**: 45 minuti come al prerelease.
- **Tavolo di gioco manuale**: carte, punti vita e segnalini, con le regole gestite dai giocatori come in un playtest (non c'è un motore di regole).
- **Tre modalità**: contro il bot, contro un amico, oppure goldfish per provare pescate e curva del mazzo. Match al meglio delle 3 partite, con Sideboard tra una partita e l'altra.
- **Stanza online senza server**: si condivide un link con un codice (`#stanza=...`) e i due giocatori si trovano tramite broker MQTT pubblici (HiveMQ, EMQX). Mano, grimorio e carte coperte restano nascoste all'avversario.
- **Two-Headed Giant**: kit di squadra, un mazzo per compagno dal pool comune, 30 vite condivise.

## Stack

- Applicazione a pagina singola in HTML, CSS e JavaScript vanilla, senza framework.
- [MQTT.js](https://github.com/mqttjs/MQTT.js) (licenza MIT) per la Stanza online su WebSocket.
- Script di build in Python (Pillow) che scaricano dati e immagini delle carte da [Scryfall](https://scryfall.com/), le ridimensionano e le impacchettano in base64 nei file `pack*.json`.
- Test con il test runner di Node.js (`node --test`), tra cui una verifica statistica della collation delle buste contro le percentuali ufficiali.
- Pubblicato su GitHub Pages.

## Questo repository

Contiene solo la build pubblicata (`index.html` e i pacchetti di immagini `pack*.json`), generata automaticamente. Il codice sorgente è in un repository privato.

## Avvertenza

Progetto amatoriale non ufficiale, non affiliato né approvato da Wizards of the Coast. Magic: The Gathering, Reality Fracture e i relativi nomi, simboli e immagini delle carte sono marchi e proprietà di Wizards of the Coast LLC. Dati e immagini delle carte provengono da Scryfall.
