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
| 1.A  |       |           |              |               |
| ...  |       |           |              |               |

Total: 

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, auf die sich das Arbeitspaket bezieht, und `m` von `A` an nach oben buchstabiert. Beispiel: Das dritte Arbeitspaket, das die zweite User Story betrifft, hat also die Nummer `2.C`.

✍️ Ein Arbeitspaket sollte etwa 45' für eine Person in Anspruch nehmen. Die totale Anzahl Arbeitspakete sollte etwa Folgendem entsprechen: `Anzahl R-Sitzungen` ╳ `Anzahl Gruppenmitglieder` ╳ `4`. Wenn Sie also zu dritt an einem Projekt arbeiten, für welches zwei R-Sitzungen geplant sind, sollten Sie auf `2` ╳ `3` ╳`4` = `24` Arbeitspakete kommen. Sollten Sie merken, dass Sie hier nicht genügend Arbeitspakte haben, denken Sie sich weitere "Kann"-User Stories für Kapitel 1.2 aus.

## 3 Entscheiden

✍️ Dokumentieren Sie hier Ihre Entscheidungen und Annahmen, die Sie im Bezug auf Ihre User Stories und die Implementierung getroffen haben.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |       |           |               |                   |
| ...  |       |           |               |                   |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.


