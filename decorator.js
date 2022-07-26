const Decorator = function(){
    this.stock = []
}

Decorator.prototype.addPaint = function(paint){
    this.stock.push(paint)
}

Decorator.prototype.totalPaint = function(){
    let total = 0
    for (var paint of this.stock){
        total += paint.litres
    }
    return total
}

Decorator.prototype.enoughPaint = function(room){
    let total = this.totalPaint()
    if (total >= room.area){
        return true
    } else {
        return false
    }
}

Decorator.prototype.paintRoom = function(room){
    let canPaint = this.enoughPaint(room)

    if (canPaint) {
        room.painted = true
    }
}

module.exports = Decorator