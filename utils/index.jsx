import * as TablerIcons from "@ant-design/icons";

export const iconOptions = ["None", ...Object.keys(TablerIcons)];
export const iconTransform =
  "<% if (param !== 'None') { %><TablerIcons.<%= param %> /><% } else { %> '' <% } %>";