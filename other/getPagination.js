var getPagination = (offset, limit, total) => {
    if (offset >= total || limit < 1) {
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
    let overPage = addPage + 4 > res.totalPage? addPage + 4 - res.totalPage: 0; // if last page is over than max render page
    let preOverPage = addPage < 0 ? addPage - 1 : 0; // if first page is < 0
    res.renderPages = pagesArr.map(page => page + addPage - overPage - preOverPage);
    console.log(res);
    return res;
}