import Item from "./Item";

function MenuItems({ items }) {
  return (
    <div className="section-center">
      {items.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </div>
  );
}
export default MenuItems;
