var fibonacci = (position) => {
    if (position <= 1) {
        console.log(position);
        return position;
    } else {
        let start = 0;
        let res = 1;
        for(let i = 2; i <= position; i++) {
            res = start + res;
            start = res - start;
        }
        console.log(res);
        return res;
    }
}