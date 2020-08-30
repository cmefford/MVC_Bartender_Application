// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        handleChange: function() {
          this.emit("email-change", {
              drink: $("#drink")
            });

          $.post("/menu", function(data) {
            if (data === "done") {
              window.location.href = "/admin";
            }
          });
        }
      },
    marko_componentType = "/VMS$1.0.0/views/menu.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html xmlns:th=http://www.thymeleaf.org lang=en><head><title>Manage Opportunities</title><link rel=stylesheet type=text/css href=/js/datatables.min.css><link rel=stylesheet type=text/css href=/js/bootstrap.min.css><script type=text/javascript src=/js/jquery.min.js></script><script type=text/javascript src=/js/datatables.min.js></script><script type=text/javascript src=/js/bootstrap.min.js></script><script>\r\n            $(document).ready(function(){\r\n\r\n            var drink\r\n            $(\"#submit\").click(function(){\r\n                drink=$(\"#drink\").val()\r\n                \r\n                $.post(\"/menu\",{drink:drink},function(data){\r\n                    if(data==='done' && drink !='') {\r\n                        window.location.href=\"/admin\"\r\n                    }\r\n                    else{\r\n                        alert(\"Please Input Drink\")\r\n                    }\r\n                })\r\n            })\r\n\r\n            var email,pass\r\n            $(\"#logOut\").click(function(){\r\n                  email=\"\";\r\n                  pass=\"\";\r\n                  \r\n                  $.post(\"/login\",{email:email,pass:pass},function(data){\r\n                      if(data==='done') {\r\n                          window.location.href=\"/logout\"\r\n                      }\r\n                  })\r\n            })\r\n\r\n            $(\"#manage\").click(function() {\r\n                window.location.href=\"/admin\"\r\n            })\r\n                        \r\n            });\r\n\r\n            </script></head><body><div class=navbar><input type=button value=\"log out\" id=logOut onclick(\"logOut\")></div><div class=\"row justify-content-center\"><div class=col-8><h1 style=\"padding-left: 0;\">Menu</h1><form action=/menu method=post name=menu><input type=checkbox id=vodkaCran name=drink value=vodkaCran><label for=vodkaCran> Vodka Cranbarry</label><br><input type=checkbox id=rumCoke name=drink value=rumCoke><label for=rumCoke> Rum & Coke</label><br><input type=checkbox id=longIslandIceTea name=drink value=longIslandIceTea><label for=longIslandIceTea>longIslandIceTea</label><br><input type=checkbox id=screwDriver name=drink value=screwDriver><label for=screwDriver> Screw Driver</label><br><br><label for=customDrink>Custom Drink:</label><input type=text id=customDrink name=drink><br><br><input type=submit value=Submit id=submit onclick(\"handleChange\")></form><div class=col-3 style=\"padding-left: 0;\"><input type=button value=Manage id=manage></div></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "32");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/VMS$1.0.0/views/menu.marko",
    component: "./menu.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
