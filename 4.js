let fs = require('fs');
const data = fs.readFileSync('input', 'UTF-8');
const lines = data.split(/\r?\n/);

let fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

let validCount = 0;
let passports = [];
let passport = '';

lines.forEach((line) => {
    if (line.length) {
        passport += ' ' + line;
    } else {
        passports.push(passport);
        passport = '';
    }
});

for (let i = 0; i < passports.length; i++) {
    passports[i] = passports[i].split(' ').filter(item => item.length !== 0);
    let obj = {};

    passports[i].forEach(item => {
        item = item.split(":");
        obj[item[0]] = item[1];
    });

    passports[i] = obj;
}

passports.forEach(pspt => {
    if (validate(pspt)) {
        validCount++;
    }
});

function validate(pspt) {

    let fieldMissing = false;
    fields.forEach(field => {
        if (!pspt.hasOwnProperty(field)) {
            fieldMissing = true;
        }
    });

    if (fieldMissing) return false;

    // byr
    let byr = Number(pspt.byr);
    if (byr < 1920 || byr > 2002) {
        return false;
    }

    // iyr
    let iyr = Number(pspt.iyr);
    if (iyr < 2010 || iyr > 2020) {
        return false;
    }

    // eyr
    let eyr = Number(pspt.eyr);
    if (eyr < 2020 || eyr > 2030) {
        return false;
    }

    // hgt
    let hgt = pspt.hgt;
    if (hgt.indexOf('cm') !== -1) {
        hgt = Number(hgt.split('cm')[0]);
        if (hgt < 150 || hgt > 193) {
            return false;
        }

    } else if (hgt.indexOf('in') !== -1) {
        hgt = Number(hgt.split('in')[0]);
        if (hgt < 59 || hgt > 76) {
            return false;
        }
    } else {
        return false;
    }

    // hcl
    let hcl = pspt.hcl;
    if (!/^#[0-9A-F]{6}$/i.test(hcl)) {
        return false;
    }


    // ecl
    let ecl = pspt.ecl;
    if (!/(^amb$|^blu$|^brn$|^gry$|^grn$|^hzl$|^oth$)/i.test(ecl)){
        return false;
    }

    // pid
    let pid = pspt.pid;
    if (!/^[0-9]{9}$/i.test(pid)){
        return false;
    }

    console.log(pspt);
    return true;

}


console.log(validCount);
