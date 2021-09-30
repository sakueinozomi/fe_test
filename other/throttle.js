var throttle = (func, timeout) => {
    let last_execution;
    let count_timer; //to record the timer, that can be clear timeout. 
    return function(){
        let now = new Date().getTime();
        if(!last_execution || now > timeout + last_execution) {
            last_execution = now;
            func.apply(this, arguments); 
        } else {
            clearTimeout(count_timer)
            count_timer = setTimeout(function(){
                last_execution = now;
                func.apply(this, arguments);
            },timeout)
        }
    }
}