class Sorter {
  constructor() {
      this.store = [];
      this.compareFunction = (left, right) => left - right;
  }

  add(element) {
      this.store.push(element);
  }

  at(index) {
      return this.store[index];
  }

  get length() {
      return this.store.length;
  }

  toArray() {
      return this.store.slice(); // ha! 
  }

  sort(indices) {
      var indicesSave = indices.slice().sort();

      var sortedIndices = indices
          .map(value => this.store[value])
          .sort(this.compareFunction);

      this.store.forEach((value, i) => {
          var findIdx = indicesSave.indexOf(i);

          if (findIdx !== -1) {
              this.store[i] = sortedIndices[findIdx]; 
          }
      });
  }

  setComparator(compareFunction) {
      if (typeof compareFunction !== 'function') {
          return;
      }

      this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;