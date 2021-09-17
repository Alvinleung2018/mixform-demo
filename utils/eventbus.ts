class Eventbus {
    constructor() {
        this.events = this.events || {}
    }
}

Eventbus.prototype.emit = function (type, ...args) {
    let e;
    e = this.events[type]
    if(Array.isArray(e)) {
        for (let i = 0; i < e.length; i++) {
            e[i].apply(this, args)
        }
    } else {
        e[0].apply(this, args)
    }
}


Eventbus.prototype.addListener = function (type, fn) {
    const e = this.events[type]
    if(!e) {
        this.events[type] = [fn]
    }else {
        e.push(fn)
    }
}

const eventBus = new Eventbus()
export default eventBus