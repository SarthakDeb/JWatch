function Pagination(props) {
    const { handlePrevFn, handleNextFn, pageNumber } = props;
    return (
        <div className= "text-neutral-50 text-2xl flex justify-center gap-2 p-4 h-[50px] bg-neutral-800 w-full ">
            <div className="mr-3" role="button" onClick={handlePrevFn}> &lArr;
                <i className=" fa-solid fa-arrow-left" />
            </div>
            {pageNumber}
            <div className="ml-3" role="button" onClick={handleNextFn}> &rArr;
                <i className="fa-solid fa-arrow-right" />
            </div>
        </div>
    )
}

export default Pagination;