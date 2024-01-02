import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
const Faq = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div className="container w-50 mt-3">
      <div className="py-3">
        <h2 className="text-dark">
          Below are frequently asked questions, you may find the answer for
          yourself
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat
          sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper
          augue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue.
          In eget enim diam. Donec gravida tortor sem, ac fermentum nibh rutrum
          sit amet. Nulla convallis mauris vitae congue consequat. Donec
          interdum nunc purus, vitae vulputate arcu fringilla quis. Vivamus
          iaculis euismod dui.
        </p>
      </div>

      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">
            Donec mattis finibus elit ut tristique
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;