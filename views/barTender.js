// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/VMS$1.0.0/views/barTender.marko",
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

  out.w("<!DOCTYPE html><html xmlns:th=http://www.thymeleaf.org lang=en><head><title>Manage barTenders</title><link rel=stylesheet type=text/css href=/js/datatables.min.css><link rel=stylesheet type=text/css href=/js/bootstrap.min.css><script type=text/javascript src=/js/jquery.min.js></script><script type=text/javascript src=/js/datatables.min.js></script><script type=text/javascript src=/js/bootstrap.min.js></script><script>" +
    marko_escapeScript(("\n            $(document).ready(function(){\n                var barTenders = " + input.barTenders) + "\n                for (var x = 0; x < barTenders.length; x++){\n                    $(\"#tableBody\").append('<tr> <td>' + barTenders[x][0] + '</td> <td>' + barTenders[x][1] + '</td> <td>' + barTenders[x][2] + '</td> <td>' + barTenders[x][3] + '</td> <td>' + '<button class=\"manage\" onclick=\"manage(' + barTenders[x][0] + ', 0)\"> Delete </button>' + '</td> <td>' + '<button class=\"manage\" onclick=\"manage(' + barTenders[x][0] + ', 1)\"> Edit </button>' + '</td> </tr>')\n                \n                }\n                var email,pass\n                $(\"#logOut\").click(function(){\n                  email=\"\";\n                  pass=\"\";\n                  $.post(\"/login\",{email:email,pass:pass},function(data){\n                      if(data==='done') {\n                          window.location.href=\"/logout\"\n                      }\n                  })\n                })\n                $(\"#addbarTender\").click(function() {\n                window.location.href=\"/addbarTender\"\n                })\n                $(\"#manage\").click(function() {\n                window.location.href=\"/admin\"\n                })\n\n                \n                $('#table').DataTable();\n\n            });\n            function manage(id, option) {\n                    if (option == 0){\n                        $.post(\"/deletebarTender\",{id:id},function(data){\n                            if(data==='done') {\n                                window.location.href=\"/barTender\"\n                            }\n                        })\n                    }\n                    if (option == 1){\n                        window.location.href=\"/editbarTender/\" + id\n                    }\n                }\n        ") +
    "</script></head><body><div class=navbar><h1>" +
    marko_escapeXml(input.greeting) +
    "</h1><input type=button value=\"log out\" id=logOut onclick(\"logOut\")></div><div class=\"row justify-content-center\"><div class=col-8><h2 style=\"padding-left: 0;\">barTenders to manage</h2><table id=table><thead><th>id</th><th>first name</th><th>last name</th><th>user name</th><th data-orderable=false>delete</th><th data-orderable=false>edit</th></thead><tbody id=tableBody></tbody></table><div class=row><div class=col-3 style=\"padding-left: 0;\"><input type=button value=\"Add barTender\" id=addbarTender></div><div class=col-3 style=\"padding-left: 0;\"><input type=button value=Manage id=manage></div></div></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "26");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/VMS$1.0.0/views/barTender.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
