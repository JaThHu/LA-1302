# Projekt-Dokumentation

Gruppenmitglieder:

Damian Eisenring, Janick Hurschler


| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|   22.11.2023    | 0.1  | das Grundgerüst der Webapplikation ist erstellt. |
|   29.11.2023    | 0.2   |   Raster, bzw. Spielfeld, wurde hinzugefügt.                                                           |
|   06.12.2023    | 0.3   |       Spielfunktion wurde hinzugefügt.                                                       |
|   13.12.2023    | 0.4   |       letztes Überarbeiten und Design.                                                      |

## 1 Informieren

### 1.1 Ihr Projekt

Unser Projekt ist das Spiel "4 gewinnt" als Webapplikation. Dies machen wir mit html, CSS, JavaScript.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |      Muss           |  Funktional    | Als ein User möchte ich das Spiel als eine Webapplikation öffnen, damit ich ein GUI habe. |
| 2  |       Muss          |   Rand   | Als ein Programmierer möchte ich, dass die Webapp mit HTML, CSS und Javascript programmiert ist, damit Sicherheit und Einheit gegeben ist.  |
| 3 |       Muss          |   Funktional   | Als ein User möchte ich das Spiel starten können, um zu spielen.                                 |
| 4  |       Muss          |   Funktional   | Als ein User möchte ich entweder als Spieler X oder O auf ein Feld setzen, um das 4-Gewinnt zu spielen.    |
| 5  |       Muss          |   Qualität   | Als ein User möchte ich wissen, wer Gewonnen hat, damit ich meinen Sieg mit Champagner zu feiern.  |
| 6  |       Kann          |   Qualität   | Als ein User möchte ich ein neues Spiel starten können, um meinem Gegner eine Revanche zu bieten.   |

### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |     Das Spiel ist zum Öffnen bereit.         |   Spiel öffnen.      |       Browser mit Webapplikation öffnet sich.            |
| 2.1  |     Code ist offen.         |    Code wird angeschaut.     |        HTML, CSS und JS wird verwendet.           |
| 3.1  |     1.1         |    auf "neues Spiel" clicken.    |        neues Spiel wird gestartet.         |
| 4.1  |    3.1         |   auf ein Feld clicken.    |      ein X wird beim Feld gesetzt.          |
| 4.2|    3.1       |    auf ein Feld clicken.     |        ein O wird beim Feld gesetzt.          |
| 5.1  |     Spieler X hat gewonnen.     |   -    |      Spieler X hat gewonnen.         |
| 5.2  |     Spieler O hat gewonnen.       |    -     |       Spieler O hat gewonnen.         |
| 6.1  |     5.1/5.2        |   auf "neues Spiel" clicken.    |       neues Spiel wird gestartet.          |

### 1.4 Diagramme
<img width="357" alt="PAP" src="https://github.com/JaThHu/LA-1302/assets/111045598/8d4f707c-6619-4974-8567-f5aa43719c18">


## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |  29.11.     |     Damian, Janick      |      wir informieren und über React und lernen es anzuwenden.        |       5 mal 45min        |
| 1.B  |   06.12.    |     Damian      |       React-Projekt wird gestartet und das Grundgerüst programmiert.       |       3 mal 45min        |
| 3.A  |   06.12.    |     Damian, Janick      |       Spielfeld und Button zum spielen wird erstellt     |       2 mal 45min        |
| 4.A  |   13.12.    |     Damian     |       Spielfunktion wurde programmiert und kann angewendet werden.       |       5 mal 45min        |
| 1.C |   20.12.    |     Damian, Janick      |       Design wurde überarbeitet und schön gemacht. Feinschliff.       |       5 mal 45min        |

## 3 Entscheiden

Wir haben uns entschieden, React für dieses Projekt zu nutzen, weil es bei grösseren Projekten einfacher wird wenn man es beherscht und weil wir es für zukünftige Projekte auch gleich nutzen können.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |   22.11.    |      Damian, Janick     |      5 mal 45min         |         5 mal 45min          |
| 1.B  |   29.11.    |    Damian      |        3 mal 45min       |           2 mal 45min        |
| 3.A  |   29.11.    |    Damian, Janick       |        2 mal 45min       |         2 mal 45min          |
| 4.A  |  06.12.     |     Damian     |       5 mal 45min        |          5 mal 45min         |
| 1.C  |    13.12.   |     Damian, Janick      |         5 mal 45min      |          4 mal 45min         |


## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |   20.12.    |     OK     |   Damian     |
| 2.1  |    20.12.   |      OK    |     Damian  |
| 3.1  |   20.12.    |       OK   |      Damian  |
| 4.1  |   20.12.    |         OK |     Damian   |
| 4.2  |   20.12.    |      OK    |      Janick  |
| 5.1  |   20.12.    |       OK   |      Janick  |
| 5.2  |   20.12.    |       OK   |     Janick   |
| 6.1  |   20.12.    |       OK   |     Janick   |

Fazit: Alles Tests verliefen gut und hat zum gewünschten Ergebniss geführt.


