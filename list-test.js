// linked lists
var LinkedData = (function(){

  var payloadData = null;

  var LinkedData = function(data){
    this.payloadData = data;
    this.nextNode = null;
    this.prevNode = null;
  }

  LinkedData.prototype.append = function(data) {
    this.nextNode = data;
  }

  LinkedData.prototype.prepend = function (data) {
    this.prevNode = data;
   }

  LinkedData.prototype.next = function() {
    return this.nextNode;
  }

  LinkedData.prototype.prev = function() {
    return this.prevNode;
  }

  LinkedData.prototype.payload = function() {
    return this.payloadData;
  }

  return LinkedData;

})();

var d1 = new LinkedData({ id: 1, val1 : "first value 1", val2 : "first value 2"});
var d2 = new LinkedData({ id: 2, val1 : "second value 1", val2 : "second value 2"});
var d3 = new LinkedData({ id: 3, val1 : "third value 1", val2 : "third value 2"});

d1.append(d2);
d2.prepend(d1);

d2.append(d3);
d3.prepend(d2);

var p = d1;
while (p != null) {
  console.log(['current ',p]);
  p = p.next();
  console.log(['next ',p]);
}
