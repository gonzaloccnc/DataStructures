const stack = <T>(...args: T[]) => {
  const stack: T[] = args

  return {
    getMyStack(): T[] {
      return stack;
    },

    addToStack(item: T) {
      const size = stack.length
      stack[size] = item
    },

    deleteItemToStack() {
      if (stack.length === 0) return
      stack.length -= 1
    }
  }
}

export {
  stack
}