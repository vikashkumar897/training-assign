const styles ={
    container: { height: "48px", width: "60%", borderBottom: "2px solid white", padding: "10px", margin: "0 auto 56px" },
    pageNumber:{ display: "inline-block", margin: "0 16px" }
}

export const Pagination = ({ setPage, page, productCount }) => {
    return (
      <div style={styles.container}>
        <button onClick={() => setPage(p => p - 1)} disabled={page === 0}>Prev Page</button>
        <h1 style={styles.pageNumber}>{page}</h1>
        <button onClick={() => setPage(p => p + 1)} disabled={page >= productCount / 3 - 1} >Next Page</button>
      </div>
    )
  }