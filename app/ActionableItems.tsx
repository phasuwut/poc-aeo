import { actionableItems } from "./data";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";

export function ActionableItems() {
  return (
    <Accordion type="multiple">
      {actionableItems.map((actionableItem, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger>{actionableItem.message}</AccordionTrigger>
          <AccordionContent className="ml-4">
            <Accordion type="multiple">
              {actionableItem.children.map((c, j) => (
                <AccordionItem key={j} value={`item-${i}-${j}`}>
                  <AccordionTrigger>{c.message}</AccordionTrigger>
                  <AccordionContent>
                    <Accordion type="multiple">
                      {c.children.map((c1, k) => (
                        <AccordionItem key={k} value={`item-${i}-${j}-${k}`}>
                          <AccordionTrigger>
                            <div className="w-full flex justify-between">
                              {c1.message}
                              {k % 2 === 1 ? (
                                <span
                                  style={{ color: "green", marginLeft: 8 }}
                                  aria-label="check"
                                  title="Odd"
                                >
                                  ✔️
                                </span>
                              ) : (
                                <span
                                  style={{ color: "red", marginLeft: 8 }}
                                  aria-label="cross"
                                  title="Even"
                                >
                                  ❌
                                </span>
                              )}
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <pre>{c1.example}</pre>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
