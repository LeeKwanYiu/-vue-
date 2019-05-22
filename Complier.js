import Watcher from './Watcher.js'

const Reg = /\{\{(.*)\}\}/

class Complier {
    constructor(el, vm) {
        this.vm = vm
        this.el = document.querySelector(el)
        this.frag = this._createFragement()
        this.el.appendChild(this.frag)
    }
    _createFragement() {
        var frag = document.createDocumentFragment()
        var child = null
        while (child = this.el.firstChild) {
            this._complie(child)
            frag.appendChild(child)
        }
        return frag
    }
    _complie(node) {
        if (node.nodeType === 1) {
            var attrs = node.attributes
            var self = this
            if (attrs.hasOwnProperty('v-model')) {
                var name = attrs['v-model'].nodeValue
                node.addEventListener('input', function(e) {
                    self.vm[name] = e.target.value
                })
                node.value = this.vm[name]
            }
        }
        if (node.nodeType === 3) {
            if (Reg.test(node.nodeValue)) {
                var name = RegExp.$1
                name = name.trim()
                new Watcher(node, name, this.vm)
            }
        }
    }
}

export default Complier