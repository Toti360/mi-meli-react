export const ItemDetail = ({item}) => {
  return (
    <>
      {item && (
        <>
          <div>{item.title}</div>
          <div>{item.categoryId}</div>
          <div>Stock {item.stock}</div>
          <div>${item.price}</div>
          <img src={item.image} alt={item.title} />
        </>
      )}
    </>
  );
};
