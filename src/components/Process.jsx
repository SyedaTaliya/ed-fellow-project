import React from "react";
import ProcessCard from '../components/ProcessCard';



function Process() {
  return (
    <div className="process">
      <h1>Make Everything As Simple As Possible</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi
        cumque dicta ad eligendi deserunt, unde maiores laboriosam asperiores
        cupiditate eius eaque adipisci quos modi quaerat. Quo neque voluptatum
        consequatur!
      </p>
      <ProcessCard number='01' heading='Stretegy & reasearch' />
      <ProcessCard number='02' heading='Wireframes & UI Designs' />
      <ProcessCard number='01' heading='Front & back-end code' />
      <ProcessCard number='01' heading='Delivery & Assurance' para='jsfdv jsghfds hsgdhfsdhg' />
    </div>
  );
}

export default Process;