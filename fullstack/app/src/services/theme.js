import SimpleStorage from "@schirrel/simple-storage/SimpleStorage";

class Theme {
  constructor() {
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }

    this.constructor.instance = this;

    this.darkmode = false;
    this.load.bind(this);
    this.set.bind(this);
    this.change.bind(this);
  }

  async load() {
    let val = await SimpleStorage.get("darkmode");
    this.darkmode = val;
    document.body.classList.toggle("dark-theme");
    return this.darkmode;
  }
  async set(newValue) {
    await SimpleStorage.set("darkmode", newValue);
    await this.load();
    return this.darkmode;
  }
  async change() {
    console.log("k");
    return await this.set(!this.darkmode);
  }
}

// const ThemeService = new Theme();
// Object.freeze(ThemeService);

export default new Theme();
