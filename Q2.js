class ListNode {
  constructor(value = 0, next = null) {
      this.value = value;
      this.next = next;
  }
}

function reverseList(head) {
  let prev = null;
  let current = head;
  
  while (current !== null) {
      let next_node = current.next;  // Store the next node
      current.next = prev;           // Reverse the current node's pointer
      prev = current;                // Move prev and current one step forward
      current = next_node;
  }
  
  return prev;  // New head of the reversed list
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
const inputArray = [1, 2, 3, 4, 5];

// Create linked list
let head = createLinkedList(inputArray);

// Reverse the linked list
let reversedHead = reverseList(head);

// Convert the reversed linked list back to an array
let outputArray = linkedListToArray(reversedHead);

console.log(outputArray);  // Expected output: [5, 4, 3, 2, 1]
