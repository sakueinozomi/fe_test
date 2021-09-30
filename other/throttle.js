var throttle = (func, timeout) => {
    let last_execution;
    return function(){
        let now = new Date().getTime();
        if(!last_execution || now > timeout + last_execution) {
            last_execution = now;
            func.apply(this, arguments);
        } else {
            setTimeout(function(){
                last_execution = now;
                func.apply(this, arguments);
            },timeout)
        }
    }
}