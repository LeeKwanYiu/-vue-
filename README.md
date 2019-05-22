# Vue的双向绑定原理demo

### 实现目标
- 当在输入框中输入时，旁边的文本也会随之改变

### 思路
> vue2.x 通过defineproperty进行数据劫持，并利用发布订阅者的设计模式进行双向绑定

- 首先需要定义一个观察者，用来劫持data中的属性，其中通过get()可让watcher进行初始化的订阅，set()可在更新的时候触发相应的事件

- Complier需要对html进行一个重新的编译，input添加监听，文本节点则初始化为一个watcher并订阅到订阅器Dep()上

- 当触发input事件时，data中属性的值发生改变，同时触发属性的set(),进而触发订阅器的notify，进而触发watcher对视图的更新。
