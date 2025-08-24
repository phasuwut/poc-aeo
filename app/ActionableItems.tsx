import { actionableItems } from "./data";

export function ActionableItems() {
  return actionableItems.map((actionableItem) => (
    <div>
      <p>{actionableItem.message}</p>
      <div>
        {actionableItem.children.map((c) => (
          <div>
            <p>{c.message}</p>
            <div>
              {c.children.map((c1) => (
                <div>
                  <p>{c1.message}</p>
                  <pre>{c1.example}</pre>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ));
}
