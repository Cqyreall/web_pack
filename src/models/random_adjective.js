const RandomAdjective = function () {
    this.adjectives = [
      'fabulous',
      'good',
      'magic',
      'top-notch',
      'wonderful',
    ];
};
  
RandomAdjective.prototype.get = function () {
    const randomIndex = Math.floor(Math.random() * this.adjectives.length);
    return this.adjectives[randomIndex];
};

module.exports = RandomAdjective;