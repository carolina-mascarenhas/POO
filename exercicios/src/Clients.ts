/* eslint-disable max-classes-per-file */

// Exercício 3:
// O item do pedido deve conter o nome do pedido (ex. "Batatas fritas"; "Açaí") e o preço;
// O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: "cartão", "dinheiro") e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.

// Exercício 4: A classe que representa o pedido deverá ter dois métodos: um que calcula o total do pedido e outro que calcula o total aplicando o valor de desconto.

abstract class Clients {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  protected get name(): string {
    return this._name;
  }

  protected set name(value: string) {
    this._name = value;
  }
}

class OrderItems {
  private _item: string;
  private _price: number;

  constructor(item: string, price: number) {
    this._item = item;
    this._price = price;
  }

  public get item(): string {
    return this._item;
  }

  public set item(value: string) {
    this._item = value;
  }

  public get price(): number {
    return this._price;
  }

  public set price(value: number) {
    this._price = value;
  }
}

class Orders extends Clients {
  private _items: string;
  private _payment: string;
  private _discount?: number | undefined;

  // eslint-disable-next-line max-len
  constructor(client: string, items: string, payment: string, discount: number) {
    super(client);
    this._items = items;
    this._payment = payment;
    this._discount = discount;
  }

  public get items(): string {
    return this._items;
  }

  public set items(value: string) {
    this._items = value;
  }
  
  public get payment(): string {
    return this._payment;
  }

  public set payment(value: string) {
    this._payment = value;
  }

  public get discount(): number | undefined {
    return this._discount;
  }

  public set discount(value: number | undefined) {
    this._discount = value;
  }
}

// const item1 = new OrderItems('Pastel', 8);
// console.log(item1.item);

const order1 = new Orders('Carol', 'pastel', 'dinheiro', 0.2);
console.log(order1);