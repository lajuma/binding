export class Area {
  public type: string;
  public values: any;
  public added: boolean;


  constructor(
    type?: string,
    values?: any,
    added?: boolean) {
      this.type = type ? type : '';
      this.values = values ? values : {a: 0, b: 0};
      this.added = added ? added : false;
  }

}
