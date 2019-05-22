

class Dep {
    constructor() {
        this.list = []
    }
    listen(sub) {
        this.list.push(sub)
    }
    notify() {
        for (const sub of this.list) {
            sub.update()
        }
    }
}

Dep.target = null

export default Dep