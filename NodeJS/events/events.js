//Emiter ->Objeto
//Array de listeners

//Clase emiter
function Emiiter(){
    this.events = {};
};

//Metodo on
Emiiter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
};

//Metodo Emit
Emiiter.prototype.emit = function(type, options){
    if(this.events[type]){
      this.events[type].forEach(listener =>listener(options))
    }
};

module.exports = Emiiter;