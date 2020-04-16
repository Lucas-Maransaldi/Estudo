class DateHelper {
  constructor() {
    throw new Error("DataHelper can't be instanced");
  }

  static textToDate(text) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) {
      throw new Error(
        'invalid format, need to be yyyy-mm-dd, you send ' + text
      );
    }
    return new Date(
      ...text.split('-').map((item, index) => item - (index % 2))
    );
  }
  static dateToText(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
}
