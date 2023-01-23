interface List<T> {
  init: T
  next: null | List<T>
}

const SimpleList = <T>(init: T) => {
  let size = 1;
  let simpleList: List<T> = {
    init,
    next: null
  }

  return {
    getList(): List<T> {
      return simpleList
    },

    size(): number {
      return size
    },

    add(item: T): void {
      let nodo: List<T> | null = simpleList
      size += 1

      if (nodo.next === null) {
        nodo.next = { init: item, next: null }
        return
      }

      while (nodo?.next !== null) {
        nodo = nodo.next
      }

      nodo.next = { init: item, next: null }
    },

    insertAtBegin(item: T) {
      let newNodo: List<T> = { init: item, next: null }
      let nodo: List<T> | null = simpleList
      newNodo.next = nodo
      simpleList = newNodo
    },

    /** 
     * @param item item is the value of the element
     * @param index the index start in 0 must not be 0, If the index is greater than the size of the list, it returns false.
     */
    insertBefore(item: T, index: number): boolean {
      let start = 0;
      let nodo: List<T> | null = simpleList
      let newNodo: List<T> = { init: item, next: null }

      if (index <= 0 || index > this.size()) return false

      while (nodo !== null) {

        if (start === index - 1) {
          newNodo.next = nodo.next
          nodo.next = newNodo
        }

        start++
        nodo = nodo.next
      }

      return true
    },

    /**
     * 
     * @param item item is the value of the element
     * @param index the index start in 0, If the index is greater than the size of the list, it returns false.
     */
    insertAfter(item: T, index: number): boolean {
      let start = 0;
      let nodo: List<T> | null = simpleList
      let newNodo: List<T> = { init: item, next: null }

      if (index < 0 || index > this.size()) return false

      while (nodo !== null) {

        if (start === index) {
          newNodo.next = nodo.next
          nodo.next = newNodo
        }

        start++
        nodo = nodo.next
      }

      return true
    },

    /**
     * 
     * @throws if the value is a object or array throws
     */
    search(item: T): List<T> | null {
      let nodo: List<T> | null = simpleList

      if (nodo.next === null) {
        return nodo.init === item ? nodo : null
      }

      while (nodo !== null) {
        if (nodo.init === item) return nodo
        nodo = nodo?.next
      }

      return null
    }
  }
}

export {
  SimpleList,
  List
}