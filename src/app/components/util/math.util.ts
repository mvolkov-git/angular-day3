class Singlton {
  private static _instance?: Singlton;
  constructor() {
    if (!Singlton._instance) {
    }
  }

  static getInstance() {
    return Singlton._instance;
  }

  a = Singlton.getInstance();
}
