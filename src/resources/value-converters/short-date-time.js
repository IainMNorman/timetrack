import moment from 'moment';

export class ShortDateTimeValueConverter {
  toView(value) {
    let date = new Date(value);
    return moment(date).format('dddd HH:mm');
  }

  fromView(value) {

  }
}
