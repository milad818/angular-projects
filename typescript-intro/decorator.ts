

// outer function responsible for accepting values
// whereas the inner function will be responsible for interacting with the content
function MenuItem(itemID: string) {
  // Decorators can overide values and in this case the class will be overridden
  // So return a class since the decorator will be applied to a classes
  // Here we don't want to modify the whole class, but extend the existing class
  return function (value, context) {
    return class extends value {
      id = itemID;   // value is the target object and the properties will be applied to the class
    };
  };
}

@MenuItem("123")
class Pizza {
  id: string;
}

@MenuItem("456")
class Hamburger {
  id: string;
}

console.log(new Pizza());