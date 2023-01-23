const Queue = <T>(...args: T[]) => {
  let queue = args

  return {
    length(): number {
      return queue.length
    },

    getQueue(): T[] {
      return queue
    },

    isEmpty(): boolean {
      return queue.length === 0
    },

    addToQueue(item: T) {
      // queue.push(item)
      queue[queue.length] = item
    },

    deleteToQueue() {
      // let newQueue: T[] = []
      // for (let i = 0; i < this.length(); i++) {
      //   if (i == 0) { }
      //   else
      //     newQueue[i - 1] = queue[i]
      // }
      // queue = [...newQueue]
      queue.shift()
    }
  }
}

export {
  Queue
}