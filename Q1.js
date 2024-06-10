// createNode function: Creates a new linked list node with the given value.
function createNode(value) {
  return {
      value: value,
      next: null
  };
}

function mergeTwoLists(l1, l2) {
  let dummy = createNode(0); // Dummy node to help with the merge process
  let current = dummy;

  // Iterates through both linked lists, comparing their current nodes.
  while (l1 !== null && l2 !== null) {
      // Adds the smaller node to the merged list
      if (l1.value < l2.value) {
          current.next = l1;
          l1 = l1.next;
      } else {
          current.next = l2;
          l2 = l2.next;
      }
      // and advances the corresponding pointer.
      current = current.next;
  }

  // If one of the lists is not empty, attach it to the end of the merged list
  current.next = (l1 !== null) ? l1 : l2;

  return dummy.next; // The merged list starts from dummy.next
}

// Helper Functions to Test : arrayToList and listToArray
// arrayToList function: Converts an array to a linked list for testing purposes.
function arrayToList(array) {
  let dummy = createNode(0);
  let current = dummy;
  for (let value of array) {
      current.next = createNode(value);
      current = current.next;
  }
  return dummy.next;
}

// listToArray function: Converts a linked list to an array for easy verification of the result.
function listToArray(list) {
  let array = [];
  while (list !== null) {
      array.push(list.value);
      list = list.next;
  }
  return array;
}

// Creating linked lists from arrays for testing
let linkedList1 = arrayToList([1, 2, 4]);
let linkedList2 = arrayToList([1, 3, 4]);

// Merging the linked lists
let mergedList = mergeTwoLists(linkedList1, linkedList2);

// Converting the merged list to an array for easy verification
console.log("Console log for Q1 - Merged Linked List:", listToArray(mergedList)); // Expected output: [1, 1, 2, 3, 4, 4]
