// Example:

const Backups = [

  {

    id: 2,

    size: 9000,

    compressed: false,

    created: '2022-09-20T14:00:00'

  },

  {

    id: 1,

    size: 4000,

    compressed: false,

    created: '2022-09-21T05:00:00'

  },

  {

    id: 4,

    size: 1000,

    compressed: true,

    created: '2022-09-23T18:00:00'

  },

  {

    id: 3,

    size: 3000,

    compressed: true,

    created: '2022-09-24T12:30:00'

  }

];

/*

Process the array of "backup" objects:

    1) Filter out backups less than maxSize and with creation date after createdAfter

    2) Convert each backup to a string

    3) Return the list of strings, sorted by ID

Example String:

    "ID: 3, Size: 100 (compressed), Created: 09-23-2022 at 18:00:00"

*/

// loop each index of the array,
// using dot notation, make sure the size property is < 8000 && , the create property falls after specified timestamp,
// concatonate properties together,
// copy each matching index into a new array,
// run sort method over array based on id property,
// return the array

function processBackups(backups, maxSize, createdAfter) {
  const final = [];
  const ret = [];
  for (let i = 0; i < backups.length; i++) {
    if (backups[i].size < maxSize && backups[i].created > createdAfter) {
      final.push(backups[i]);
    }
  }
  final.sort((a, b) => a.id - b.id);
  for (let b = 0; b < final.length; b++) {
    const dT = final[b].created.split('T');
    const d = dT.split('-');
    const str = `Id: ${final[b].id}, Size: ${final[b].size} ${final[b].compressed ? '(compressed)' : ''}, Created: ${d[1] - d[2] - d[0]} at ${dT[1]}`;
    ret.push(str);
  }
  return ret;
}

// Example function call:

processBackups(Backups, 8000, '2022-09-20T18:00:00');
