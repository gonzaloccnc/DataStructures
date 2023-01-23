interface DoubleLinked<T> {
  init: T
  next: DoubleLinked<T> | null
  prev: DoubleLinked<T> | null
}


const DoubleLinkedList = <T>(init: T) => {
  let size = 1
  let linkedList: DoubleLinked<T> = { init, next: null, prev: null }

  return {
    getList(): DoubleLinked<T> {
      return linkedList
    },

    size(): number {
      return size
    },

    insertNext(item: T): void {
      let newNodo: DoubleLinked<T> = { init: item, next: null, prev: null }
      let nodo: DoubleLinked<T> = linkedList
      size++

      while (nodo.next !== null) {
        nodo = nodo.next
      }

      newNodo.prev = nodo
      nodo.next = newNodo
      return

    }
  }
}

export {
  DoubleLinkedList
}