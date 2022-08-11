function graduate(credential) {
  return function (fullName) {
    return fullName + ' ' + credential;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq');

console.log(lawSchool('Nolan Reda'));
console.log(medicalSchool('Vanessa Reda'));

console.dir(lawSchool);
console.dir(medicalSchool);
