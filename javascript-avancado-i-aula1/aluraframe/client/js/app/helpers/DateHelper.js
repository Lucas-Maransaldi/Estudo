class DateHelper {
  constructor() {
    throw new Error("DataHelper can't be instanced");
  }

  static textToDate(text) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test()) {
      throw new Error('invalid format, need to be yyyy-mm-dd');
    }
    return new Date(
      ...text.split('-').map((item, index) => item + (index % 2))
    );
  }
  static dateToText(date) {
    return `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
}
