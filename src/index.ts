import { fibonacci } from "./fibonacci/fibonacci.js"
import { DoubleLinkedList } from "./list/DoubleLinkedList.js";
import { SimpleList } from "./list/SimpleList.js";
import { Queue } from "./queue/queue.js";
import { stack } from "./stacks/stack.js"

console.log(fibonacci(5))

const myStack = stack()
console.log(myStack.getMyStack());
console.log('------');

const myQueue = Queue(1, 2, 3)
myQueue.deleteToQueue()

console.log(myQueue.getQueue())
console.log(myQueue.length())
console.log(myQueue.isEmpty())


console.log('-----------')

const simpleList = SimpleList('hola')
console.log('the size is: ', simpleList.size())
simpleList.add('mundo')
simpleList.add('como')
simpleList.add('estais')
console.log('the size is: ', simpleList.size())
simpleList.add('soy')
simpleList.add('gonzalo')

const wait = simpleList.search('gonzalo')
console.log(wait);

const isInsert = simpleList.insertAfter('Same value', 0)
console.log(isInsert);

const isInsertBefore = simpleList.insertBefore('Other same value', 1)
console.log(isInsertBefore)

simpleList.insertAtBegin('WTFFFF!!!!!')

console.log(simpleList.getList())


const dobubleLinked = DoubleLinkedList('Joooeee')
dobubleLinked.insertNext('WT')
dobubleLinked.insertNext('XD')
console.log('this is the:  ', dobubleLinked.getList())