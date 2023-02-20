import "./styles/styleBasePage.css";
import "./styles/styleTask.css";

import { createPageLayout } from "./createPage";
import {
  defaultSetup as mainSetup,
  displayInbox,
  displayToday,
  displayThisWeek,
} from "./displayMain.js";

createPageLayout();

mainSetup();
displayInbox();
