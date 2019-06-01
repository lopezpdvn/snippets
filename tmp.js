'use strict'; const log = console.log; (async ()=>{

    static trickleDown(a, root, count) {
        while(2*root + 1 < count) {
            let child = 2*root + 1;
            if(child + 1 < count && a[child] < a[child+1])
                child++;
            if(a[root] < a[child]) {
                [a[root], a[child]] = [a[child], a[root]];
                root = child;
            }
            else
                return;
        }
    }

})();
