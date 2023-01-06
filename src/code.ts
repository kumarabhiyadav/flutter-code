import { Splitter } from "./helper/Splitter";

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {
  if (msg.type === "create-code") {
    let selectedFrame = figma.currentPage.selection;
    let splitter = new Splitter(selectedFrame);
    splitter.getChildrens();   
    splitter.sortYaxis();
    log(splitter.array_of_childrens);
  }

  // figma.closePlugin();
};

function log(msg: any) {
  console.log(msg);
}
