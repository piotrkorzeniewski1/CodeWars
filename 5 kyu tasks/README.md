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

## Task 3 RGB To Hex Conversion

Funkcja rgb jest niekompletna. Uzupełnij ją tak, aby przekazanie wartości dziesiętnych RGB spowodowało zwrócenie reprezentacji heksadecymalnej. Dopuszczalne wartości dziesiętne RGB to 0 - 255. Wszystkie wartości spoza tego zakresu muszą zostać zaokrąglone do najbliższej dopuszczalnej wartości.

Uwaga: Twoja odpowiedź zawsze powinna mieć 6 znaków, forma skrócona z 3 nie zadziała tutaj.

| Input          | Output    |
| --------------- | --------- |
| 255, 255, 255   | "FFFFFF" |
| 255, 255, 300   | "FFFFFF" |
| 0, 0, 0         | "000000" |
| 148, 0, 211     | "9400D3" |
