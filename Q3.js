class ListNode {
  constructor(value = 0, next = null) {
      this.value = value;
      this.next = next;
  }
}

function removeElements(head, val) {
  let dummy = new ListNode(0);
  dummy.next = head;
  
  let prev = dummy;
  let current = head;
  
  while (current !== null) {
      if (current.value === val) {
          prev.next = current.next;  // Remove current node
      } else {
          prev = current;  // Move prev to current node
      }
      current = current.next;  // Move current to next node
  }
  
  return dummy.next;  // Return the new head
}

//Helper Functions to Test
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
const inputArray = [1, 2, 6, 3, 4, 5, 6];
const valueToRemove = 6;

// Create linked list
let head = createLinkedList(inputArray);

// Remove nodes with the specified value
let modifiedHead = removeElements(head, valueToRemove);

// Convert the modified linked list back to an array
let outputArray = linkedListToArray(modifiedHead);

console.log(outputArray);  // Expected output: [1, 2, 3, 4, 5]
