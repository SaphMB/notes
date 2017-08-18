(function(exports) {
  function MockObject(name, mockFunctions) {
    this.name = name;
    self = this;
    mockFunctions.forEach(function(mockFunction) {
      self[callCount(mockFunction)] = 0;
      self[argumentStore(mockFunction)];
      self[mockFunction] = createFunction(mockFunction);
    });
  }

  function createFunction(mockFunction) {
    return function() {
      this[callCount(mockFunction)]++
      this[argumentStore(mockFunction)] = arguments;
    }
  }

  function callCount(mockFunction) {
    return mockFunction + "CallCount";
  }

  function argumentStore(mockFunction) {
    return mockFunction + "Arguments";
  }
  
  exports.MockObject = MockObject;
})(this);
