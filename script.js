const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: 'Day of Reconciliation',
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: 'Workers Day',
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: 'Day of Goodwill',
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: 'New Year Day',
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: 'Womens Day',
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: 'Heritage Day',
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: 'Christmas Day',
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: 'Youth Day',
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: 'Human Rights Day',
    date: new Date(`21 March ${currentYear}`)
  },
};

const christmas = 6;
const futureId = 9;

console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`);

const copied = { ...holidays[christmas] };
copied.name = 'X-mas Day';
const correctDate = new Date(copied.date);
correctDate.setHours(0);
correctDate.setMinutes(0);

const isEarlier = correctDate.getTime() < holidays[christmas].date.getTime();
console.log(`New date is earlier: ${isEarlier}`);

if (isEarlier) {
  console.log(`ID change: false`);
  console.log(`Name change: ${copied.name}`);
  console.log(`Date change: ${correctDate.getDate().toString().padStart(2, '0')}/${(correctDate.getMonth() + 1).toString().padStart(2, '0')}/${correctDate.getFullYear()}`);
}

const firstHoliday = new Date(holidays[0].date);
console.log(`First holiday: ${firstHoliday.getDate().toString().padStart(2, '0')}/${(firstHoliday.getMonth() + 1).toString().padStart(2, '0')}/${firstHoliday.getFullYear()}`);

const lastHoliday = new Date(holidays[2].date);
console.log(`Last holiday: ${lastHoliday.getDate().toString().padStart(2, '0')}/${(lastHoliday.getMonth() + 1).toString().padStart(2, '0')}/${lastHoliday.getFullYear()}`);

const randomHolidayIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHoliday = new Date(holidays[randomHolidayIndex].date);
console.log(`Random holiday: ${randomHoliday.getDate().toString().padStart(2, '0')}/${(randomHoliday.getMonth() + 1).toString().padStart(2, '0')}/${randomHoliday.getFullYear()}`);
