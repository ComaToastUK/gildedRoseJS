class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  normal_item(item) {
    item.sellIn -= 1;
    if (item.quality <= 0) {
      item.quality = 0;
    }
    if (item.quality <= 0) {
      return;
    }
    item.quality--;
    if (item.sellIn < 0) {
      item.quality--;
    }
  }

  brie(item) {
    item.sellIn -= 1;
    if (item.quality >= 50) {
      return;
    }
    item.quality++;
    if (item.sellIn < 0) {
      item.quality++;
    }
  }

  sulfuras(item) {
    null;
  }

  backstage(item) {
    item.sellIn -= 1;
    if (item.quality >= 50) {
      return;
    }
    if (item.sellIn < 0) {
      item.quality = 0;
      return;
    }
    item.quality++;
    if (item.sellIn < 10) {
      item.quality++;
    }
    if (item.sellIn < 5) {
      item.quality++;
    }
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name === "Aged Brie") {
        this.brie(this.items[i]);
      } else if (this.items[i].name === "Sulfuras, Hand of Ragnaros") {
        this.sulfuras(this.items[i]);
      } else if (
        this.items[i].name === "Backstage passes to a TAFKAL80ETC concert"
      ) {
        this.backstage(this.items[i]);
      } else {
        this.normal_item(this.items[i]);
      }
    }

    return this.items;
  }
}
