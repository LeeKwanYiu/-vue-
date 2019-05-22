import Dep from './Dep'

class Observer {
    constructor(data) {
        this.data = data
        Object.keys(this.data).forEach(key => {
            this._bind(this.data, key, this.data[key])
        })
    }
    _bind(data, key, value) {
        var myDep = new Dep();
        Object.defineProperty(data, key, {
            get() {
                // console.log(Dep.target)
                if (Dep.target) {
                    //  
                    myDep.listen(Dep.target)
                }
                return value
            },
            set(newVal) {
                if (newVal === value)
                    return
                else {
                    value = newVal
                    myDep.notify()
                }
            }
        })
    }
}

export default Observer