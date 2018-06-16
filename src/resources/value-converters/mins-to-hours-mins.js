export class MinsToHoursMinsValueConverter {
  toView(value) {
    let h = Math.floor(value / 60);
    if (h > 0) 
    {
        return `${h}h ${value - 60 * h}m`;
    }
    else {
        return `${value}m`;
    }
  }

  fromView(value) {

  }
}
