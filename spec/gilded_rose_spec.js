describe("Gilded Rose", function() {
  it("should not change its name", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it("reduces sellIn by 1 on each tick", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
  });

  it("reduces item quality on each tick", function() {
    const gildedRose = new Shop([new Item("foo", 2, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(1);
  });

  it("reduces sellIn by n in n days", function() {
    const gildedRose = new Shop([new Item("foo", 3, 3)]);
    const items = gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(items[0].quality).toEqual(1);
  });

  it("reduces quality by double after sellIn < 0", function() {
    const gildedRose = new Shop([new Item("foo", 1, 5)]);
    const items = gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(items[0].quality).toEqual(2);
  });

  it("can have a negative sellIn value", function() {
    const gildedRose = new Shop([new Item("foo", 1, 5)]);
    const items = gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
  });

  it("item degradation cannot exceed 0", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });

  it("item quality cannot exceed 50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("legendary item does not degrade", function() {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 10, 80)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
  });

  it("legendary item does not reduce sellIn value", function() {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 10, 80)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(10);
  });

  it("aged brie gains in quality over time", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
    const items = gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(items[0].quality).toEqual(4);
  });

  it("backstage passes gain in quality over time", function() {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10)
    ]);
    const items = gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(items[0].quality).toEqual(13);
  });

  it("backstage passes double in quality increase after sellIn < 10", function() {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 15)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(17);
  });

  it("backstage passes triple in quality after sellIn < 5", function() {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 15)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(18);
  });

  it("backstage passes quality depreciates to 0 after sellIn reaches 0", function() {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 15)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });
});
