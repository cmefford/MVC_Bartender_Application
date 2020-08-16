// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/VMS$1.0.0/views/addVolunteer.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html xmlns:th=http://www.thymeleaf.org lang=en><head><title>Add Volunteers</title><script src=/js/jquery.js></script><script>\n            $(document).ready(function(){\n                $.ajax({\n                    url: '/addVolunteer',\n                    complete: function(data) {\n                      console.log(data);\n                    }\n                  })\n                \n                \n                var email,pass\n              $ (\"#logOut\").click(function(){\n                    email=\"\";\n                    pass=\"\";\n                  \n                    $.post(\"/login\",{email:email,pass:pass},function(data){\n                        if(data==='done') {\n                            window.location.href=\"/logout\"\n                        }\n                    })\n                })\n\n                $(\"#cancel\").click(function() {\n                    window.location.href=\"/manageVolunteers\"\n                })\n\n         \n\n            });\n\n            function validateForm() {\n                \n                var inputEmail = document.forms[\"addVolunteer\"][\"email\"].value\n                var emailPat = new RegExp(\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\")\n                if (inputEmail && (!inputEmail.match(emailPat))) {\n                    alert(\"Incorrect Email Format\")\n                    return false\n                }\n                var inputPhoneNumber = document.forms[\"addVolunteer\"][\"phoneNumber\"].value\n                var inputemergencyPhoneNumber = document.forms[\"addVolunteer\"][\"emergencyPhoneNumber\"].value\n                var phonePat = new RegExp(\"^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$\")\n                if (inputPhoneNumber && (!inputPhoneNumber.match(phonePat))) {\n                    alert(\"Incorrect Phone number Format\")                    \n                    return false\n                }\n                if (inputemergencyPhoneNumber && (!inputemergencyPhoneNumber.match(phonePat))) {\n                    alert(\"Incorrect Emergency Phone number Format\")                    \n                    return false\n                }\n\n                var inputAddress = document.forms[\"addVolunteer\"][\"address\"].value\n                var inputEmergencyAddress = document.forms[\"addVolunteer\"][\"emergencyAddress\"].value\n                var addressPat = new RegExp(\"^[0-9]+\\\\s[A-Z||a-z||\\\\s||.]*\\\\s[0-9][0-9][0-9][0-9][0-9]\\\\s[A-Z||a-z]+$\")\n                if (inputAddress && (!inputAddress.match(addressPat))){\n                    alert(\"Incorrect Address, use format: house# street zip state\")\n                }\n\n                if (inputEmergencyAddress && (!inputEmergencyAddress.match(addressPat))){\n                    alert(\"Incorrect Emergency Address, use format: house# street zip state\")\n                }\n\n            }\n\n            </script></head><body><h1>" +
    marko_escapeXml(input.greeting) +
    "</h1><h1>Add Volunteer</h1><form action=/addVolunteer method=post name=addVolunteer><label for=first>First name: </label><input type=text id=first name=firstName><br><br><label for=last>Last name: </label><input type=text id=last name=last><br><br><label for=userName>User name: </label><input type=text id=userName name=userName><br><br><label for=password>Password: </label><input type=password id=password name=password><br><br><label for>Perfered Volunteer centers: </label><textarea rows=3 cols=40 name id></textarea><br><br><label for>Skills/Interests: </label><textarea rows=3 cols=40 name id></textarea><br><br><label for>Availability Times: </label><input type=text id name><br><br><label for>Address: </label><input type=text id=address name=address placeholder=\"house# street zip state\"><br><br><label for>Phone #: </label><input type=text id=phoneNumber name=phoneNumber placeholder=##########><br><br><label for=email>Email: </label><input type=text id=email name=email placeholder=example@exaple.com><br><br><label for=educationalBackground>Edcuational Background: </label><textarea rows=3 cols=40 name=educationalBackground id=educationalBackground></textarea><br><br><label for>Current Licenses: </label><input type=text id name><br><br><label for>Emergency Contact Name: </label><input type=text id name><br><br><label for>Emergency Contact Phone #: </label><input type=text id=emergencyPhoneNumber name=emergencyPhoneNumber placeholder=##########><br><br><label for>Emergency Contact Address: </label><input type=text id=emergencyAddress name=emergencyAddress placeholder=\"house# street zip state\"><br><br><p>Copy of Drivers License on File: </p><input type=radio id name value><label for>Yes</label><br><input type=radio id name value><label for>No</label><br><p>Copy of SSN on file: </p><input type=radio id name value><label for=male>Yes</label><br><input type=radio id name value><label for=female>No</label><br><p>Volunteers Approval Status: </p><input type=radio id name value><label for>Approved</label><br><input type=radio id name value><label for>Denied</label><br><br> <input type=submit id=submit value=Submit></form><input type=button value=Cancel id=cancel><input type=button value=\"log out\" id=logOut onclick(\"logOut\")>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "92");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/VMS$1.0.0/views/addVolunteer.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
