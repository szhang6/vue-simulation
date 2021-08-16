class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm;
    this.key = key;
    this.cb = cb;
    this.oldValue = vm[key];

    // 把watcher对象记录到Dep类的静态属性target
    Dep.target = this
    // 触发 get 方法，在get方法中会调用 addSub
    this.oldValue = vm[key]
    Dep.target = null
  }
  // 当数据发生变化的时候更新视图
  update() {
    let newValue = this.vm[this.key];
    if (this.oldValue === newValue) {
      return;
    }
    this.cb(newValue);
  }
}
