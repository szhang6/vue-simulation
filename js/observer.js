class Observer {
	constructor(data) {
	    this.walk(data)
	}
	walk(data) {
		//判断data是否是对象
		if (!data || typeof data !== 'object') {
			return
		}
		//遍历data对象所有属性
		Object.keys(data).forEach(key => {
			this.defineReactive(data, key, data[key])
		})
	}
	defineReactive(obj, key, val) {
		Object.defineProperty(obj, key, {
			enumerable: true,
			configurable: true,
			get() {
				return val
			},
			set(newValue) {
				if (newValue === val) {
					return
				}
				val = newValue
			}
		})
	}
}