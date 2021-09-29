var getPagination = (offset, limit, total) => {
    if (offset > total) {
        console.log("false number")
        return false;
    }
    const res = {
        currentPage: 1, 
        totalPage: 1, 
        renderPages: []
    }
    let pagesArr = [0, 1, 2, 3, 4];
    res.totalPage = Math.trunc(total/limit) + 1;
    res.currentPage = Math.trunc(offset/limit) + 1;

    let addPage = res.currentPage - 2;
    let overPage = addPage + 4 > res.totalPage? addPage + 4 - res.totalPage: 0;
    res.renderPages = pagesArr.map(page => page + addPage - overPage);
    console.log(res);
    return res;
}