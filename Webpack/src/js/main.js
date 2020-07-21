function myModule() {
    this.hello = function() {
        console.log('hello');
    };

    this.goodbay = function() {
        console.log('bye!');
    };
}

module.exports = myModule;


