const Port = require('../src/Port.js')

describe('Port', () => {
        let port;

    beforeEach(() => {
         port = new Port('Dover');
    })

    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('port object has a name', () => {
        expect(port.name).toEqual('Dover');
    });

    it('can add a ship', () => {
        let ship = jest.fn();
        port.addShip(ship);
        expect(port.ships).toContain(ship);
    })

    it('can remove a ship', () => {
        ship = jest.fn();
        expect(port.ships).not.toContain([ship]);
    })
});