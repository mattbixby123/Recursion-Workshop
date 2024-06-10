class ListNode {
  constructor(value = 0, next = null) {
      this.value = value;
      this.next = next;
  }
}

function swapPairs(head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  
  while (prev.next !== null && prev.next.next !== null) {
      let firstNode = prev.next;
      let secondNode = prev.next.next;
      
      // Swapping the positions of the nodes
      prev.next = secondNode;
      firstNode.next = secondNode.next;
      secondNode.next = firstNode;
      
      // Move prev and current two steps forward
      prev = firstNode;
  }
  
  return dummy.next;
}

// Helper Functions to Test
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
  }
  return head;
}

function linkedListToArray(head) {
  let arr = [];
  let current = head;
  while (current !== null) {
      arr.push(current.value);
      current = current.next;
  }
  return arr;
}


// Given input
const inputArray = [1, 2, 3, 4];

// Create linked list
let head = createLinkedList(inputArray);

// Swap pairs of nodes
let modifiedHead = swapPairs(head);

// Convert the modified linked list back to an array
let outputArray = linkedListToArray(modifiedHead);

console.log(outputArray);  // Expected output: [2, 1, 4, 3]
