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
                          <AccordionTrigger>{c1.message}</AccordionTrigger>
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
