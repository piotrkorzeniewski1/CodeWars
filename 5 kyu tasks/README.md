## Task 1 Moving Zeros To The End

Napisz algorytm, który przyjmuje tablicę i przesuwa wszystkie zera na koniec, zachowując kolejność pozostałych elementów. 

| Input                        | Output                                 |
|---------------------------------|---------------------------------------|
| `[false,1,0,1,2,0,1,3,"a"]` | `[false,1,1,2,1,3,"a",0,0]`         |


## Task 2 Human Readable Time

Napisz funkcję, która przyjmuje nieujemną liczbę całkowitą (sekundy) jako dane wejściowe i zwraca czas w formacie czytelnym dla człowieka (GG:MM:SS).

- **GG** - godziny, uzupełnione do 2 cyfr, zakres: 00 - 99
- **MM** - minuty, uzupełnione do 2 cyfr, zakres: 00 - 59
- **SS** - sekundy, uzupełnione do 2 cyfr, zakres: 00 - 59

Maksymalny czas nie przekracza nigdy 359999 (`99:59:59`).
