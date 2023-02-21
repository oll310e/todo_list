import "./styles/styleBasePage.css";
import "./styles/styleTask.css";

import { createPageLayout } from "./createPage";
import {
  defaultSetup as mainSetup,
  displayInbox,
  displayToday,
  displayThisWeek,
  addTaskBtn,
} from "./displayMain.js";

createPageLayout();

mainSetup();
displayInbox();
addTaskBtn();
