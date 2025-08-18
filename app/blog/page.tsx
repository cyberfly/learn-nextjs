import FruitList from "@/components/fruit-list";
import ConditonalRendering from "@/components/conditional-render";
import BasicEvent from "@/components/basic-event";
import Counter from "@/components/counter";
import ToggleComp from "@/components/toggle";

export default function Blog() {
  const fruits = ["Apple", "Banana", "Orange"];

  const isLoggedIn = true;

  const showMessage = false;

  return (
    <>
      <h1>Blog Page</h1>
      <p>This is blog post:</p>

      <a href="/blog/1">Blog post 1</a>
      <a href="/blog/2">Blog post 2</a>

      <p>This is loop render:</p>

      <FruitList fruits={fruits} />

      <ConditonalRendering isLoggedIn={isLoggedIn} showMessage={showMessage} />

      <BasicEvent />

      <Counter />

      <ToggleComp/>
    </>
  );
}
