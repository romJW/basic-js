const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date="dateAbsence") {
  if(date === "dateAbsence" ) return 'Unable to determine the time of year!';
  try {
    date.getTime()
  
  } catch (e) {
    throw new Error('Invalid date!');
  }

  
  
  if (date instanceof Date  ){ 
if (Object.prototype.toString.call(date) !== '[object Date]' ) throw new Error('Invalid date!');
else if (date.getMonth()<2 || date.getMonth() == 11 || date =="winter" ) return "winter";
else if (date.getMonth()>=2 & date.getMonth()<5 || date =="spring") return "spring";
else if (date.getMonth()>=5 & date.getMonth()<8  || date =="spring") return "summer";
else if (date.getMonth()>=8 & date.getMonth()<11 || date =="autumn") return "autumn";
  }
   throw new Error('Invalid date!');
}

module.exports = {
  getSeason
};
