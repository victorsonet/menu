import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import MenuItems from "./MenuItems";
import Categories from "./Categories";

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);

  const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

  function filterCategories(category) {
    if (category === "all") {
      setMenuItems(menu);
    } else {
      setMenuItems(menu.filter((item) => item.category === category));
    }
  }

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories
          allCategories={allCategories}
          filterCategories={filterCategories}
        />
        <MenuItems items={menuItems} />
      </section>
    </main>
  );
};
export default App;
