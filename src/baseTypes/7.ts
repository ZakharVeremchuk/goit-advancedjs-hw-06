/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
const enum WeekDay {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
}

function isWeekend(dayOfWeek: WeekDay): boolean {

  if(dayOfWeek === WeekDay.SATURDAY || dayOfWeek === WeekDay.SUNDAY) {
    return true;
  }

  return false;
}