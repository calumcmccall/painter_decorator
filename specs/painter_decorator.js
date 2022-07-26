const assert = require('assert');
const Room = require('../room');
const PaintCan = require('../paintCan');
const Decorator = require('../decorator');

describe('Room', function() {
    let room;

    this.beforeEach(function(){
        room = new Room(20);
    });

    it('should have an area', function() {
        const actual = room.area;
        assert.strictEqual(actual, 20);
    });

    describe('Painted', function() {
        it('should start not painted', function() {
            const actual = room.painted;
            assert.strictEqual(actual, false);
        });
    
        it('should be able to be painted', function() {
            room.paint();
            const actual = room.painted;
            assert.strictEqual(actual, true);
        });
    });
});

describe('Paint Can', function() {
    let paintCan;

    this.beforeEach(function(){
        paintCan = new PaintCan(12);
    });

    it('should have a number of litres', function() {
        const actual = paintCan.litres;
        assert.strictEqual(actual, 12);
    });

    it('should be able to check if it is empty', function() {
        const actual = paintCan.isEmpty();
        assert.strictEqual(actual, false)
    });

    it('should be able to empty itself', function() {
        paintCan.empty();
        const actual = paintCan.litres;
        assert.strictEqual(actual, 0);
    });
});

describe('Decorator', function(){
    let decorator;

    this.beforeEach(function(){
        decorator = new Decorator('')
        yellow = new PaintCan(17)
        green = new PaintCan(12)
        room = new Room(20)

    });

    it('should start with and empty paint stock', function(){
        const actual = decorator.stock;
        assert.deepEqual(actual, [])
    })

    it('should be able to add a can of paint to stock', function(){
        decorator.addPaint(yellow)
        const actual = decorator.stock;
        assert.deepEqual(actual.length, 1)
    }) 

    it('should be able to calculate total litres in stock', function(){
        decorator.addPaint(yellow)
        decorator.addPaint(green)
        const actual = decorator.totalPaint();
        assert.strictEqual(actual, 29)
    })

    it('should be able to calculate if it has enough paint for a room', function(){
        decorator.addPaint(yellow)
        decorator.addPaint(green)
        const actual = decorator.enoughPaint(room)
        assert.equal(actual, true)
    });

    it('should be able to paint room if enough paint', function(){
        decorator.addPaint(yellow)
        decorator.addPaint(green)
        decorator.paintRoom(room)
        const actual = room.painted
        assert.equal(actual, true)
    })


});