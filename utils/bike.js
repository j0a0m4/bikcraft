function Bike(type, desc) {
  this.type = type;
  this.desc = desc;
}

const bikes = [
  new Bike("passeio", "Bike casual ideal para passeios"),
  new Bike("esporte", "Para quem tem sangue quente"),
  new Bike("retro", "Volte no tempo com essa bike"),
];

export default bikes;
