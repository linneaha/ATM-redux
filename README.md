# Inlämningsuppgift 4 - Redux Bankomat (G)

Din uppgift är att skapa en bankomat-applikation med hjälp av Redux.

* Din applikation ska innehålla en ATM-komponent, som kan döljas och visas med ett knapptryck.
* Du ska ha ett globalt state (dvs i Redux) för den summa pengar som finns i kontot. När applikationen startas upp ska det finnas 1000kr i kontot. Skriv ut denna summa i er applikation.

## Funktionalitet

* Uttag - Användaren ska kunna mata in ett värde för att göra ett uttag på den önskade summan pengar. Det ska även finnas knappar för att kunna ta ut specifika summor: 100kr , 200kr, 500kr eller 1000kr. OBS! Användaren bör ej kunna ta ut mer pengar än vad som finns i kontot.
* Insättning - Användaren ska kunna mata in ett värde och klicka på en knapp för att göra en insättning för att fylla på kontot med pengar. Det ska även finnas knappar för att kunna sätta in specifika summor: 100kr , 200kr, 500kr eller 1000kr.
