import { Button } from "@chakra-ui/react";

function Pagination(prop) {
    const {current,page,setPage} = prop
   
    const handlePage = (value) => {
         setPage(page+value)
    }

  const prev = <Button boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} data-testid="prev-page" disabled={page===1} onClick={()=>handlePage(-1)}>PREV</Button>;
  const currentPage = <Button data-testid="current-page">{current}</Button>;
  const next = <Button boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} data-testid="next-page" onClick={()=>handlePage(1)}>NEXT</Button>;


  return (
    <div data-testid="pagination-container" style={{margin:"auto",border:"0px solid black",width:"20%", display:"flex",justifyContent:"space-around",marginTop:"50px"}}>
      {prev}
      {currentPage}
      {next}
    </div>
  );
}

export default Pagination;