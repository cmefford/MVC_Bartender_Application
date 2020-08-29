// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/VMS$1.0.0/views/editOpportunity.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html xmlns:th=http://www.thymeleaf.org lang=en><head><title>Edit Volunteers</title><link rel=stylesheet type=text/css href=/js/datatables.min.css><link rel=stylesheet type=text/css href=/js/bootstrap.min.css><script type=text/javascript src=/js/jquery.min.js></script><script type=text/javascript src=/js/datatables.min.js></script><script type=text/javascript src=/js/bootstrap.min.js></script> <script>\n            $(document).ready(function(){\n                \n                var email,pass\n                $ (\"#logOut\").click(function(){\n                    email=\"\";\n                    pass=\"\";\n                  \n                    $.post(\"/login\",{email:email,pass:pass},function(data){\n                        if(data==='done') {\n                            window.location.href=\"/logout\"\n                        }\n                    })\n                })\n\n                $(\"#cancel\").click(function() {\n                    window.location.href=\"/menu\"\n                    alert(\"cancel alert\")\n                })\n\n                $(\"#submit\").click(function() {\n                    window.location.href=\"/menu\"\n                })\n\n            });\n\n            function setOption(selectElement, value) {\n                return [...selectElement.options].some((option, index) => {\n                    if (option.value == value) {\n                        selectElement.selectedIndex = index;\n                        return true;\n                    }\n                });\n            }\n\n            function validateForm() {\n                \n                var inputEmail = document.forms[\"editOpportunity\"][\"email\"].value\n                var emailPat = new RegExp(\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\")\n                if (inputEmail && (!inputEmail.match(emailPat))) {\n                    alert(\"Incorrect Email Format\")\n                    return false\n                }\n                var inputPhoneNumber = document.forms[\"editOpportunity\"][\"phonenumber\"].value\n                var inputemergencyPhoneNumber = document.forms[\"addVolunteer\"][\"emergencyPhoneNumber\"].value\n                var phonePat = new RegExp(\"^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$\")\n                if (inputPhoneNumber && (!inputPhoneNumber.match(phonePat))) {\n                    alert(\"Incorrect Phone number Format\")                    \n                    return false\n                }\n                if (inputemergencyPhoneNumber && (!inputemergencyPhoneNumber.match(phonePat))) {\n                    alert(\"Incorrect Emergency Phone number Format\")                    \n                    return false\n                }\n\n                var inputAddress = document.forms[\"editOpportunity\"][\"address\"].value\n                var addressPat = new RegExp(\"^[0-9]+\\\\s[A-Z||a-z||\\\\s||.]*\\\\s[0-9][0-9][0-9][0-9][0-9]\\\\s[A-Z||a-z]+$\")\n                if (inputAddress && (!inputAddress.match(addressPat))){\n                    alert(\"Incorrect Address, use format: house# street zip state\")\n                    return false\n\n                }\n                else{\n                    window.location.href=\"/menu\"\n                }\n\n            }\n\n            </script></head><body><div class=navbar><h1>" +
    marko_escapeXml(input.greeting) +
    "</h1><input type=button value=\"log out\" id=logOut onclick(\"logOut\")></div><div class=\"row justify-content-center\"><div class=col-6><h2 style=\"padding-left: 0;\">Edit Opportunity</h2><form" +
    marko_attr("action", "/editOpportunity/" + (input.id == null ? "" : input.id)) +
    " method=post name=editOpportunity><div class=form-group><div class=row><label class=form-label for=name>Opportunity:</label><input class=form-control type=text id=name name=name" +
    marko_attr("value", input.opportunity.name) +
    "><br><br></div></div><div class=form-group><div class=row><label class=form-label for=email>Email:</label><input class=form-control type=text id=email name=email" +
    marko_attr("value", input.opportunity.email) +
    "><br><br></div></div><div class=form-group><div class=row><label class=form-label for=address>Address:</label><input class=form-control type=text id=address name=address" +
    marko_attr("value", input.opportunity.address) +
    "><br><br></div></div><div class=form-group><div class=row><label class=form-label for=phonenumber>Phone Number:</label><input class=form-control type=text id=phonenumber name=phonenumber" +
    marko_attr("value", input.opportunity.phonenumber) +
    "><br><br></div></div><div class=form-group><div class=row><div class=col-2 style=\"padding-left: 0;\"><input type=submit id=submit value=Submit></div><div class=col-2 style=\"padding-left: 0;\"><input type=button value=Cancel id=cancel></div></div></div></form></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "43");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/VMS$1.0.0/views/editOpportunity.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
