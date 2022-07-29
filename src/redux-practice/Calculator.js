import React from "react";
import { Card } from "antd";
import NewItemForm from "./NewItemForm";
import Summary from "./Summary";
import { MenuItemsContainer } from "./containers/MenuItemsContainer";
import { NewItemFormContainer } from "./containers/NewItemFormContainer";

const Calculator = () => {
  return (
    <div>
       <Card>
       <NewItemFormContainer />
       <MenuItemsContainer />
     
      <Summary />
      </Card>
    </div>
    
  );
};

export default Calculator;
