import Observer from './Observer.js'
import Complier from './Complier.js'

class Vue {
    constructor(option) {
        this.$option = option;
        this.$el = this.$option.el;
        this._data = this.$option.data;
        new Observer(this._data)
        Object.keys(this._data).forEach(key => {
            this._proxy(this._data, key)
        })
        new Complier(this.$el, this)
    }
    _proxy(data, key) {
        var self = this
        Object.defineProperty(self, key, {
            get() {
                return data[key]
            },
            set(newvalue) {
                data[key] = newvalue
            }
        })
    }
}

export default Vue