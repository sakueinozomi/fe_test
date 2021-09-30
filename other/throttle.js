var throttle = (func, timeout) => {
    let last_execution;
    let count_timer;
    return function(){
        let now = new Date().getTime();
        if(!last_execution || now > timeout + last_execution) {
            console.log("go if", last_execution, now)
            last_execution = now;
            func.apply(this, arguments); 
        } else {
            console.log("go else", last_execution, now)
            clearTimeout(count_timer)
            count_timer = setTimeout(function(){
                last_execution = now;
                func.apply(this, arguments);
            },timeout)
        }
    }
}