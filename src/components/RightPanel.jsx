const styles={
    container:{ display: "flex", flexWrap: "wrap", gap: "10%", justifyContent: "space-evenly" },
    cards: { border: "1px solid #999", padding: "5px", borderRadius: "20px", marginBottom: '10px', width: "300px" },
    image:{ height: "400px", maxWidth: "300px" },
    desc:{ height: "56px", overflow: "hidden" }
}

export const RightPanel = ({ products, setSelctedItem }) => {
    return (
      <div style={styles.container}>
        {products.map(el => <div key={el.id} onClick={() => setSelctedItem(el.id)} style={styles.cards}>
          <img src={el.image} alt="img" style={styles.image} />
          <h3>{el.title}</h3>
          <p style={styles.desc}>{el.description}</p>
        </div>)}
      </div>
    );
  
  }