const styles = {
    card:
    {
        border: "1px solid #3333f0", borderRadius: "20px", marginBottom: '10px',
        "&:hover": {
            background: "blue",
            color:"red",
            cursor: 'pointer'
        },
    }
}

export const LeftPanel = ({ catogeries, setPage, setActiveCategory,activeCategory, setSelctedItem, selctedItem }) => {
    return (catogeries.map(el => {
        return (
            <div key={el} style={{...styles.card, ...{background:(activeCategory===el && !selctedItem ? "#111160" : null)}}}>
                <h3 onClick={() => { setActiveCategory(el); setPage(0); setSelctedItem(0) }}>{el}</h3>
            </div>
        )
    }))
}