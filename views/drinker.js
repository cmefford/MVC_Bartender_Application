// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/VMS$1.0.0/views/drinker.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_escapeScript = require("marko/src/runtime/html/helpers/escape-script-placeholder"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html xmlns:th=http://www.thymeleaf.org lang=en><head><title>Manage Opportunities</title><link rel=stylesheet type=text/css href=/js/datatables.min.css><link rel=stylesheet type=text/css href=/js/bootstrap.min.css><script type=text/javascript src=/js/jquery.min.js></script><script type=text/javascript src=/js/datatables.min.js></script><script type=text/javascript src=/js/bootstrap.min.js></script><script>" +
    marko_escapeScript(("\r\n            $(document).ready(function(){\r\n                var opportunities = " + input.opportunities) + "\r\n                var tableData = ''\r\n                for (var x = 0; x < opportunities.length; x++){\r\n                    $(\"#tableBody\").append('<tr> <td>' + opportunities[x][0] + '</td> <td>' + opportunities[x][1] + '</td> <td>' + opportunities[x][2] + '</td> <td>' + opportunities[x][3] + '</td> <td>' + opportunities[x][4] + '</td> <td>' + '<button class=\"manage\" onclick=\"manage(' + opportunities[x][0] + ', 0)\"> Delete </button>' + '</td> <td>' + '<button class=\"manage\" onclick=\"manage(' + opportunities[x][0] + ', 1)\"> Edit </button>' + '</td> </tr>')\r\n                }\r\n            var email,pass\r\n            $(\"#logOut\").click(function(){\r\n                  email=\"\";\r\n                  pass=\"\";\r\n                  \r\n                  $.post(\"/login\",{email:email,pass:pass},function(data){\r\n                      if(data==='done') {\r\n                          window.location.href=\"/logout\"\r\n                      }\r\n                  })\r\n            })\r\n            $(\"#addOpportunity\").click(function() {\r\n                window.location.href=\"/addOpportunity\"\r\n            })\r\n            $(\"#manage\").click(function() {\r\n                window.location.href=\"/admin\"\r\n            })\r\n            \r\n            $(\"#table\").DataTable()\r\n            \r\n            });\r\n\r\n            function manage(id, option) {\r\n                    if (option == 0){\r\n                        $.post(\"/deleteOpportunity\",{id:id},function(data){\r\n                            if(data==='done') {\r\n                                window.location.href=\"/drinker\"\r\n                            }\r\n                        })\r\n                    }\r\n                    if (option == 1){\r\n                        window.location.href=\"/editOpportunity/\" + id\r\n                    }\r\n                }\r\n\r\n            ") +
    "</script></head><body><div class=navbar><h1>" +
    marko_escapeXml(input.greeting) +
    "</h1><input type=button value=\"log out\" id=logOut onclick(\"logOut\")></div><div class=\"row justify-content-center\"><div class=col-8><h2 style=\"padding-left: 0;\">Opportunities to manage</h2><table id=table><thead><th>Id</th><th>Name</th><th>Email</th><th>Address</th><th>Phone Number</th><th data-orderable=false>delete</th><th data-orderable=false>edit</th></thead><tbody id=tableBody></tbody></table><div class=form-group><div class=row><div class=col-3 style=\"padding-left: 0;\"><input type=button value=\"Add Opportunity\" id=addOpportunity></div><div class=col-3 style=\"padding-left: 0;\"><input type=button value=Manage id=manage></div></div></div></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "28");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/VMS$1.0.0/views/drinker.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
