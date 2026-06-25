var deleteDuplicates = function(head) {
    let val = {};
    let k = [];
    let i = 0;
    while(head)
    {
        {
            k[i] = head.val;
            i++;
            val[head.val] = 1;
        }
        head = head.next;
    }
    var current = new ListNode(0);
    var tab = current
    for (let i = 0; i < k.length; i++)
    {
        tab.next = new ListNode(k[i])
        tab = tab.next
    }
    console.log(k);
    return current.next;
};
