/*

String - tekstas
Iniciavimas:
- viengubos kabutes
- dvigubos kabutes
- backtick kabutes  

*/

const username = 'Petras';
console.log(username);

const city = "Miestelis";
console.log(city);

console.log('~~~~~~~~~~~~~~~~');

const kabute1 = "Vienguba (') kabute.";
console.log(kabute1);
const kabute2 = 'Dviguba (") kabute.';
console.log(kabute2);
const kabute3 = 'Vienguba (\') ir Dviguba (\") kabutes.'; // po backslasho galima naudoti simbolius '"` ir jie bus ne komandiniai
console.log(kabute3);

const keliosEilutes = '     <div>\
                                 <p>Labas</p>\
                              </div>';
console.log(keliosEilutes);

console.log('~~~~~~~~~~~~~~~~~~~~~');

const username2 = 'Nabuchodonosar';
const parosMetas = 'vakaras';
// Labas rytas, Maryte!
// Labas vakaras, Maryte!
const pasisveikinimas = 'Labas ' + parosMetas + ', ' + username2 + '!';
console.log(pasisveikinimas);

console.log('-----------');

const hello = `Labas ${parosMetas}, ${username2}!`;
console.log(hello);

console.log('--------------------')
// Siandien yra 23 laipsniai silumos ir nuotaika yra gera.

const temp = 23;
const nuotaika = 'gera';

const orai = `Siandien yra ${temp} laipsniai silumos (jauciasi kaip ${temp + 4}) ir nuotaika yra ${nuotaika}.`;
console.log(orai);