# quiz
Quizar för japanska

## Installation
Kör följande kommando i Git Bash för att installera beroenden lokalt på din maskin:
```
npm install
```

## Köra applikationen lokalt
Kör följande kommando i Git Bash för att starta webbservern och monitorera förändringar i källfilerna:
```
npm run dev
```

Sidan kommer nu att vara tillgänglig på [http://localhost:8080](http://localhost:8080).

När du gör ändringar i källfilerna och sparar kommer webbservern att fånga upp dessa ändringar automatiskt och visa dem.

## Bygga applikationen för produktion
Kör följande skript i Git Bash för att bygga appen:
```
npm run build
```

Byggskriptet kommer att skapa en `index.html`, en CSS-fil och en JS-fil. Dessa kommer att ligga i mappen dist, redo att produktionssättas.

## Inspektera kodstil
Kör följande kommando i Git Bash för att ES-linta JS-filerna:
```
npm test
```